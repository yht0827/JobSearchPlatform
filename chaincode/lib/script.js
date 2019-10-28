/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getParticipantRegistry getFactory */

/**
 * @param {org.example.empty.GisaRegister} gisaRegister 
 * @transaction
*/
async function GisaRegister(gisaRegister){
  
	const factory = getFactory();
  	const ns = 'org.example.empty';
  	
  	const gisa = factory.newResource(ns,'Gisa',gisaRegister.gId); 
  	const certificate = factory.newConcept(ns,'Certificate');
  
  	gisa.registName = gisaRegister.registName;
  
    certificate.passDate = gisaRegister.passDate;
    certificate.name= gisaRegister.name;	
    certificate.include=factory.newRelationship(ns, 'PlatForm', "333");
    certificate.owner=factory.newRelationship(ns, 'Employee', gisaRegister.email);
  	
  	const employeeRegi = await getParticipantRegistry(ns + '.Employee');
  	const data = await employeeRegi.exists(gisaRegister.email);
  		
  	if(data){
      certificate.state="APPROVED";	
  	}else{    
      certificate.state="NOTMATCHED";    
    }
  
  	gisa.certificate = certificate;
  
  	try{  
      const gisaRegistry = await getAssetRegistry(ns + '.Gisa');
      await gisaRegistry.add(gisa);
    }catch(err) {
		throw new Error("Gisa Register Error");
	}
}

/**
 * @param {org.example.empty.ToeicRegister} toeicRegister 
 * @transaction
*/
async function ToeicRegister(toeicRegister){
  
  
	const factory = getFactory();
  	const ns = 'org.example.empty';
  	
  	const toeic = factory.newResource(ns,'Toeic',toeicRegister.toeicId); 
  	const certificate = factory.newConcept(ns,'Certificate');
  	const pDate = new Date(toeicRegister.passDate);	  
  	const validDate =new Date(toeicRegister.passDate);
  		 validDate.setDate(validDate.getDate()+730);
  
  	toeic.totalScore = toeicRegister.totalScore;
    certificate.passDate = pDate;  	
  	toeic.validUntil = validDate;
    certificate.name= toeicRegister.name;	
    certificate.include=factory.newRelationship(ns, 'PlatForm', "222");
    certificate.owner=factory.newRelationship(ns, 'Employee', toeicRegister.email);
  	
  	const toeicRegi = await getParticipantRegistry(ns + '.Employee');
  	const data = await toeicRegi.exists(toeicRegister.email);
  		
  	if(data){
      certificate.state="APPROVED";	
  	}else{    
      certificate.state="NOTMATCHED";    
    } 
  	
   	toeic.certificate = certificate;
  
  	try{  
      const toeicRegistry = await getAssetRegistry(ns + '.Toeic');
      await toeicRegistry.add(toeic);
    }catch(err) {
		throw new Error("TOEIC Register Error");
	}  
}

/**
 * @param {org.example.empty.RequsetInfo} requsetInfo 
 * @transaction
 * @returns {string []}
 */

async function requsetInfo(requestInfo){
  
		
  		const ns = 'org.example.empty';
        const getUser = await getParticipantRegistry(ns + '.Employee');
        const Usercheck = await getUser.exists(requestInfo.email);
  		const em = 'resource:org.example.empty.Employee#'+requestInfo.email;
 		
  		if(Usercheck){
         
          const gisa_qr = await query('Get_Searched_All_Gisa_Count',{param:em});
          const toeic_qr = await query('Get_Searched_All_Toeic_Count',{param:em});
          
          const gisaLen =  gisa_qr.length;
          const toeicLen = toeic_qr.length;
      	  const reqInfos=[]; 
          
          if(gisaLen){

            const gisaGet = await getAssetRegistry(ns + '.Gisa');
            
            gisa_qr.forEach(function(gisa) {
              	if(gisa.certificate.state==="APPROVED"){	
                 	reqInfos.push("gisa:"+gisa.registName);
                }
            });
          }
          
         if(toeicLen){   
              const toeicGet = await getAssetRegistry(ns + '.Toeic');    
              toeic_qr.forEach(function(toeic) {
                if(toeic.certificate.state==="APPROVED"){
                 	reqInfos.push("toeic:"+toeic.totalScore);
                }
              });
            }      	
          
          return reqInfos;      
          
        }else{
          throw new Error("Request Error"); 
        }
}

/**
* @param {org.example.empty.SignUp} signUp
* @transaction
*/
async function signUp(signUp){
 
  	const factory = getFactory();
  	const ns = 'org.example.empty';
  	const em = 'resource:org.example.empty.Employee#'+signUp.email;
    
  	const employee = factory.newResource(ns,'Employee',signUp.email);
  	employee.password = signUp.password;	
  	employee.name = signUp.name;	
    employee.birth = signUp.birth;	
    employee.active = "unauth";
  	employee.comReq=[];
  	employee.platform = factory.newRelationship(ns,'PlatForm',"111");

        const employeeRegi = await getParticipantRegistry(ns + '.Employee');
      	const Idexist = await employeeRegi.exists(signUp.email);
        if(Idexist){
            throw new Error("Employee Register Error");
        }else{
        	
        	await employeeRegi.add(employee);
        	// 자격증 상태 업데이트 나중에는 이메일 인증 트랜잭션 따로 만들어서 변경해주기 
      
          const gisa_qr = await query('Get_Searched_All_Gisa_Count',{param:em});
          const toeic_qr = await query('Get_Searched_All_Toeic_Count',{param:em});

          const gisaLen =  gisa_qr.length;
          const toeicLen = toeic_qr.length;
      
          if(gisaLen){

            const gisaUpdate = await getAssetRegistry(ns + '.Gisa');

            gisa_qr.forEach(function(gisa) {
                gisa.certificate.state="APPROVED";
            });
            await gisaUpdate.updateAll(gisa_qr);
          }
            if(toeicLen){   
              const toeicUpdate = await getAssetRegistry(ns + '.Toeic');

              toeic_qr.forEach(function(toeic) {
                  toeic.certificate.state="APPROVED";
              });
              await toeicUpdate.updateAll(toeic_qr);       
            }//toeicLen  
      }	
}

/**
* @param {org.example.empty.SignIn} signIn
* @transaction
* @returns {org.example.empty.Employee}
*/
async function signIn(signIn) {
    			
  		const ns = 'org.example.empty';
           	
          const login = await getParticipantRegistry(ns + '.Employee');
          const logincheck = await login.exists(signIn.email);
                
         if(logincheck){         
           	const id = await login.get(signIn.email);
           if(id.password === signIn.password){
              return id;        
           }else{
             throw new Error("Login Error");    
        }
        }else{
          throw new Error("Login Error");
        }    
}

/**
* @param {org.example.empty.UpdateCompanyCount} tx
* @transaction
*/
async function updateCompanyCount(tx){ // (기업 요청 횟수 업데이트)
  	
  	const ns = 'org.example.empty';
  	 const employeeInfo = await getParticipantRegistry(ns + '.Employee');
     const getEmployee = await employeeInfo.get(tx.email);
  		   	getEmployee.comReq.push(tx.companyName);
  			await employeeInfo.update(getEmployee); 	
}

/**
* @param {org.example.empty.ChangeGisaState} tx
* @transaction
*/
async function changeGisaState(tx){
  
	 	const ns = 'org.example.empty';
  		const em = 'resource:org.example.empty.Employee#'+tx.email;
  
          const gisa_qr = await query('Get_Searched_All_Gisa_Count',{param:em});
          const gisaLen =  gisa_qr.length;
 
          if(gisaLen){
            const gisaUpdate = await getAssetRegistry(ns + '.Gisa');
            gisa_qr.forEach(function(gisa) {
              if(gisa.certificate.state === "APPROVED"){
              	gisa.certificate.state="REJECTED";
               }else if(gisa.certificate.state === "REJECTED"){
                 gisa.certificate.state="APPROVED";
              }  
            });
            
            await gisaUpdate.updateAll(gisa_qr);
      }
};  
  
 
/**
* @param {org.example.empty.ChangeToeicState} tx
* @transaction
*/
async function changeToeicState(tx){
 
 		  const ns = 'org.example.empty';
          const em = 'resource:org.example.empty.Employee#'+tx.email;
          
 		  const toeic_qr = await query('Get_Searched_All_Toeic_Count',{param:em});
 		  const toeicLen = toeic_qr.length;
                      
 			if(toeicLen){
  
                const toeicUpdate = await getAssetRegistry(ns + '.Toeic');
            
                toeic_qr.forEach(function(toeic) {
                  
                if(toeic.certificate.state === "APPROVED"){
                  toeic.certificate.state="REJECTED";
                 }else if(toeic.certificate.state === "REJECTED"){
                   toeic.certificate.state="APPROVED";
                }  
       });        
            await toeicUpdate.updateAll(toeic_qr);
     }
}

/**
* @param {org.example.empty.Setting} tx
* @transaction
*/
async function setting(tx){
 
  	const factory = getFactory();
  	const ns = 'org.example.empty';
	  
  	const toeics = [
      factory.newResource(ns,'Toeic','19-N-001'),
      factory.newResource(ns,'Toeic','19-N-002'),
      factory.newResource(ns,'Toeic','19-N-003'),
      factory.newResource(ns,'Toeic','19-N-004'),
      factory.newResource(ns,'Toeic','19-N-005'),
      factory.newResource(ns,'Toeic','19-N-006'),
      factory.newResource(ns,'Toeic','19-N-007'),
      factory.newResource(ns,'Toeic','19-N-008'),
      factory.newResource(ns,'Toeic','19-N-009'),
      factory.newResource(ns,'Toeic','19-N-010'),
      factory.newResource(ns,'Toeic','19-N-011'),
      factory.newResource(ns,'Toeic','19-N-012'),
      factory.newResource(ns,'Toeic','19-N-013'),
      factory.newResource(ns,'Toeic','19-N-014'),
      factory.newResource(ns,'Toeic','19-N-015'),
      factory.newResource(ns,'Toeic','19-N-016'),
      factory.newResource(ns,'Toeic','19-N-017'),
      factory.newResource(ns,'Toeic','19-N-018'),
      factory.newResource(ns,'Toeic','19-N-019'),
      factory.newResource(ns,'Toeic','19-N-020'),
      factory.newResource(ns,'Toeic','19-N-021'),
      factory.newResource(ns,'Toeic','19-N-022'),
      factory.newResource(ns,'Toeic','19-N-023'),
      factory.newResource(ns,'Toeic','19-N-024'),
      factory.newResource(ns,'Toeic','19-N-025')    
    ];
    
    toeics.forEach(function(toeic, index) {
		toeic.totalScore = 800;
      	const certificate = factory.newConcept(ns,'Certificate');
      	const pDate = new Date("2019-10-26");
     	const vDate = new Date("2021-10-26");
      	certificate.include=factory.newRelationship(ns, 'PlatForm', "222");
    	certificate.owner=factory.newRelationship(ns, 'Employee',"aaa@naver.com");
      	certificate.passDate = pDate;
      	toeic.validUntil = vDate;
      	certificate.name="홍길동";
      	certificate.state="APPROVED";
      	toeic.certificate = certificate;
    });
  
      const toeicRegistry = await getAssetRegistry(ns + '.Toeic');
      await toeicRegistry.addAll(toeics);
}


/**
* @param {org.example.empty.ToeicGet} tx
* @transaction
* @returns {org.example.Toeic[]}
*/
async function toeicGet(tx){
 	const toeic_qr = await query('Get_Searched_All_Toeic',{param:tx.name}); 
  
  	const toeics = [];
	
 	const len = toeic_qr.length;

  	const start_count= (tx.skipnum-1)*10; // 0 10 20
  	const end_count = tx.skipnum*10; // 10 20 30
          
    if(end_count<len){
      for(let i=start_count;i<end_count;i++){
        toeics.push(toeic_qr[i]);
      }
    }else{  	
      for(let i=start_count;i<len;i++){
         toeics.push(toeic_qr[i]);
      }  
    }  
  
  	return toeics;
};

/**
* @param {org.example.empty.GisaGet} tx
* @transaction
* @returns {org.example.Gisa[]}
*/
async function gisaGet(tx){
 	const gisa_qr = await query('Get_Searched_All_Gisa',{param:tx.name}); 
  
  	const gisas = [];
	
 	const len = gisa_qr.length;

  	const start_count= (tx.skipnum-1)*10; // 0 10 20
  	const end_count = tx.skipnum*10; // 10 20 30
          
    if(end_count<len){
      for(let i=start_count;i<end_count;i++){
        gisas.push(gisa_qr[i]);
      }
    }else{  	
      for(let i=start_count;i<len;i++){
         gisas.push(gisa_qr[i]);
      }  
    }  
  
  	return gisas;
};
