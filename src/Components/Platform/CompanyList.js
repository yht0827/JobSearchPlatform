import React from "react";
import { mainPage } from "lib/Data";
import { Link, withRouter } from "react-router-dom";
import { Grid, Card, Image, Label, Icon } from "semantic-ui-react";

const CompanyList = withRouter(() => (
    <Grid columns={2} textAlign="center" verticalAlign="middle">
        <Grid.Row>
            <Label size="huge" basic attached="bottom" style={{ textAlign: "center" }}>
                <Icon name="linkify" color="olive" loading />
                <Label.Detail>채용 진행 회사</Label.Detail>
            </Label>
        </Grid.Row>
        <Grid.Row>
            { mainPage.map((pageInfo) => (
                pageInfo.meta === "구직 기관"   
                    ? <Grid.Column key={pageInfo.id}>
                        <Card as={Link} to={pageInfo.dir}>
                            <Image src={"images/" + pageInfo.img} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header textAlign="center">{pageInfo.name}</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    : null
            )) }
        </Grid.Row>
    </Grid>
));

export default CompanyList;
