import React, {Component} from 'react';
import "./defiInfos.css"
import Terminal from "../terminal/terminal";
import {connect} from "react-redux";


class DefiInfos extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const {} = this.props;
        return (
            <div className="defiInfo">
                <div className="ui centered grid">
                    <h1>{this.props?.currentDefi?.header}</h1>
                </div>
                <div className="ui two colum centered grid">
                    <div className="colum">
                        <img src={this.props.currentDefi.image}/>
                    </div>
                    <div className="colum">
                       <h3>{this.props.currentDefi.description}</h3>
                    </div>
                </div>
                <Terminal commands={this.props?.currentDefi?.commands}></Terminal>
            </div>
        );
    }
}
const MapStateToProps = (state) => {
    return {
        currentDefi: state.defiReducer.currentDefi
    };
};
const MapDispatchToProps = (dispatch) => {
    return {
    }
};
export default connect(MapStateToProps, MapDispatchToProps)(DefiInfos);

