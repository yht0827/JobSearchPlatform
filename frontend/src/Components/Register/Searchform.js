import React from "react";
import { Input, Divider, Grid } from "semantic-ui-react";
import { TableForm,GisaForm } from "Components/common/Form";
import styled from "styled-components";

const StyledInput = styled(Input)`
        input {
        border-color: ${props => props.borcolor} !important;
        width:450px;
    }
    input::placeholder {
        color: ${props => props.phcolor} !important;
    }
    .icon{
        box-shadow: none !important; 
    }
`;

const Searchform = ({type, phColor, borColor, icColor, Action,searchValue,ClickAction,KeyAction,handlePage}) => (
    <>
        <Grid centered>
            <Grid.Row>
                <StyledInput 
                    phcolor={phColor}
                    borcolor={borColor}
                    value={searchValue}
                    icon={{onClick: () => ClickAction(), name: "search", color: icColor, circular: true, link: true }} 
                    placeholder="Search..."
                    onChange={Action}
                    onKeyPress={event => KeyAction(event)}
                    size="large" 
                />
            </Grid.Row>
            <Divider style={{ backgroundColor: phColor }} />
            <Grid.Row>
              {
                  type === "QNET"?  
                <GisaForm handlePage={handlePage} color={icColor} pgcolor={phColor}/>
              :<TableForm handlePage={handlePage} color={icColor} pgcolor={phColor} />
            }
            </Grid.Row>
        </Grid>
    </>
);

export default Searchform;
