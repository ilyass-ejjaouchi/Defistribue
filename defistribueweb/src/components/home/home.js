import React , {Component} from 'react';
import {Card, Grid, Image} from "semantic-ui-react";
import "./home.css"
import homeImage from '../../media/backgroundHome.png';
import Defi from "../defi/defi";


class Home extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <Grid padded>
                    <Grid.Column width={6} className="defi">
                        <h1>Défistribué</h1>
                        <hr/><h5>Défistribué est une plateforme offrant des défis liés aux systèmes distribués. Cette plateforme permet à une personne de tester sa maîtrise des systèmes distribués en remplissant une succession de tâches.</h5>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Image src={homeImage} />
                    </Grid.Column>
                </Grid>
                <Card.Group itemsPerRow={4} className="defiItems">
                    <Defi></Defi>
                    <Defi></Defi>
                    <Defi></Defi>
                    <Defi></Defi>
                    <Defi></Defi>
                </Card.Group>
            </div>

        );
    }
}
export default Home;

