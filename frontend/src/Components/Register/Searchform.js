import React from "react";
import { Input, Divider, Grid } from "semantic-ui-react";
import { TableForm } from "Components/common/Form";
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

const Searchform = ({ phColor, borColor, icColor }) => (
    <>
        <Grid centered>
            <Grid.Row>
                <StyledInput 
                    phcolor={phColor}
                    borcolor={borColor}
                    icon={{ name: "search", color: icColor, circular: true, link: true }} 
                    placeholder="Search..." 
                    size="large" 
                />
            </Grid.Row>
            <Divider style={{ backgroundColor: phColor }} />
            <Grid.Row>
                <TableForm color={icColor} pgcolor={phColor} />
            </Grid.Row>
        </Grid>
    </>
);

export default Searchform;
