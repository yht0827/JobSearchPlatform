import React from "react";
import { Link, withRouter } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import { Container, Card, Image, Grid } from "semantic-ui-react";
import { mainPage } from "lib/Data";
import { createGlobalStyle } from "styled-components";

const ChangeBack = createGlobalStyle`
html,body{
        background-color: #252839 !important;
}`;

export default withRouter(() => (
    <>
        <ChangeBack />
        <Container>
            <Grid doubling columns={5} textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
                <Grid.Row>
                    {
                        mainPage.map((pageInfo) => ( 
                            <Grid.Column key={pageInfo.id}>
                                <Card as={Link} to={pageInfo.dir}>
                                    <Image src={"images/" + pageInfo.img} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header textAlign="center">{pageInfo.name}</Card.Header>
                                        <Card.Meta textAlign="center">
                                            <span>{pageInfo.meta}</span>
                                        </Card.Meta>
                                        <Card.Description textAlign="center">
                                            {pageInfo.desc}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        ))
                    } 
                </Grid.Row>  
            </Grid>
        </Container>
    </>
));
