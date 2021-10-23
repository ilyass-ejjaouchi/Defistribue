import React, {Component} from 'react';
import "./navbar.css";
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import logo from "../../media/logo.png";
import {Link} from "react-router-dom";


class Navbar extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="ui text menu">
                    <div className="item">
                        <img src={logo}/>
                    </div>
                    <Link to="/" className="browse item">
                      <b>Acceuil</b>
                    </Link>
                </div>
            </div>

        );
    }
}

const MapStateToProps = (state) => {
    return {};
};
const MapDispatchToProps = (dispatch) => {
    return {}
};
export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Navbar));

