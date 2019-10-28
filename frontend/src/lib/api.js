import axios from "axios";

export const getTo = (name,skipnum) => {
  return axios.post(`http://54.180.17.111:4000/api/ToeicGet`,{
        name:name,
        skipnum:skipnum
});
};

export const getAllToeicCount = (name) => {
  return axios.get(`http://54.180.17.111:4000/api/queries/Get_Searched_All_Toeic?param=${name}`);
};

export const getGi = (name,skipnum) => {
  return axios.post(`http://54.180.17.111:4000/api/GisaGet`,{
    name:name,
    skipnum:skipnum
});
};

export const getAllGisaCount = (name) => {
  return axios.get(`http://54.180.17.111:4000/api/queries/Get_Searched_All_Gisa?param=${name}`);
};

export const RegGi = (data) => {
  return axios.post(`http://54.180.17.111:4000/api/GisaRegister`,{
    gId:data.gId,
    registName:data.registName,
    passDate:data.passDate,
    email:data.email,
    name:data.name,
  });
};

export const RegToeic = (data) => {

return axios.post(`http://54.180.17.111:4000/api/ToeicRegister`,{
      toeicId : data.toeicId,
      totalScore:data.totalScore,
      passDate:data.passDate,
      email: data.email,
      name: data.name,
});
};


export const RegUser = (data) => {
return axios.post(`http://54.180.17.111:4000/api/SignUp`,{
          email:data.email,
          password:data.password,
          name:data.name,
          birth:data.birth,
});
};

export const LoginUser = (data) => {
  return axios.post(`http://54.180.17.111:4000/api/SignIn`,{
            email:data.email,
            password:data.password,
  });
};


export const GETInfo = (id) => {
  return axios.get(`http://54.180.17.111:4000/api/queries/Get_Searched_User?Param=${id}`);
};

export const GETGisa = (id) => {
  return axios.get(`http://54.180.17.111:4000/api/queries/Get_Searched_All_Gisa_Count?param=resource%3Aorg.example.empty.Employee%23${id}`);
};

export const GETToeic = (id) => {
  return axios.get(`http://54.180.17.111:4000/api/queries/Get_Searched_All_Toeic_Count?param=resource%3Aorg.example.empty.Employee%23${id}`);
};

export const GETReq = (id)=> {
  return axios.post(`http://54.180.17.111:4000/api/RequsetInfo`,{
    email:id,
  });
};

export const Countup = (id,email) => {
  return axios.post(`http://54.180.17.111:4000/api/UpdateCompanyCount`,{
    companyName:id,
    email: email,
  })
};