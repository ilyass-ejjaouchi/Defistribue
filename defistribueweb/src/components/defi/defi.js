import React , {Component} from 'react';
import {Card, Grid, Image} from "semantic-ui-react";
import "./defi.css"
import git from '../../media/git.jpg';


class Defi extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <Card
                className="card"
                image={git}
                header='Defi Git'
                meta='Git is here'
                description="Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2"
            />
        );
    }
}
export default Defi;

