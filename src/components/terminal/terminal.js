import React, {Component} from 'react';
import {Card, Grid, Image} from "semantic-ui-react";
import "./terminal.css"
import homeImage from "../../media/backgroundHome.png";
import Defi from "../defi/defi";


class Terminal extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const {commands} = this.props;
        const commandsList = commands.map((command,i) =>
            <p key={i} className="font" id={command.id}>{command.cmd}</p>
        );
        return (
            <Grid padded>
                <Grid.Column width={3}/>
                <Grid.Column width={10}>
                    <div id="bar">
                        <div id="red">
                        </div>
                        <div id="yellow">
                        </div>
                        <div id="green">
                        </div>
                    </div>
                    <div id="screen">
                        {commandsList}
                    </div>
                </Grid.Column>
                <Grid.Column width={3}/>
            </Grid>
        );
    }
}

export default Terminal;

