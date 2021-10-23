import React, {Component} from 'react';
import "./defi.css"


class Defi extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const {onclick,image, header, meta, description,errorMsg, disabledDefi,onchangeKeyDefi} = this.props;
        return (
            <div className="green card">
                <div className="image">
                    <img src={image}/>
                </div>
                <div className="content">
                    <div className="header">{header}</div>
                    <div className="meta">
                        <span className="date">{meta}</span>
                    </div>
                    <div className="ui mini form">
                        <b className="errorMsg">{errorMsg}</b>
                        <div>
                            <div className="field">
                                <label className="labelDefi">Defi Key</label>
                                <input className="inputKey"
                                       placeholder="Defi Key"
                                       readOnly="" type="text"
                                       onChange={onchangeKeyDefi}
                                       disabled={disabledDefi}/>
                            </div>
                            <button className="ui mini button buttonKey"
                                    type="submit"
                                    onClick={onclick}
                                    disabled={disabledDefi}>Voir le Defi</button>
                        </div>
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>
        );
    }
}

export default Defi;

