import React from "react";
import { Grid, Icon, Label, Step } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledStepGroup = styled(Step.Group)`

    .title {
            font-family: "Jua" !important;
        }

    .active {
            background-color: ${props => props.bg} !important;
            &::after{
                background-color: ${props => props.bg} !important;
            }
            i {
                color: white !important;
            }
            .title {
                color: white !important;
            }
    }
`;

const MenuLabel = ({ dir, changeAction, action, labelcolor, iconname, labeltext }) => (
    <>
        {changeAction
            ? <Label 
                size="large" 
                onClick={() => changeAction(action)} 
                basic 
                color={labelcolor} 
                style={{ cursor: "pointer", userSelect: "none" }}
            >
                <Icon name={iconname} /> {labeltext} 
            </Label> 
            : <Label 
                as={Link}
                size="large" 
                to={dir}
                basic 
                color={labelcolor} 
                style={{ cursor: "pointer", userSelect: "none" }}
            >
                <Icon name={iconname} /> {labeltext} 
            </Label>}   
    </>
);

const GridLabel = ({ children }) => (
    <>
        <Grid.Row>
            <Grid.Column textAlign="center">
                { children }
            </Grid.Column>
        </Grid.Row>
    </>
);

const StepLabel = ({ steps, bg }) => <StyledStepGroup attached="top" size="small" items={steps} bg={bg} />;

export { GridLabel, MenuLabel, StepLabel };
