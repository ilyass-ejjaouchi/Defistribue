import React, {Component} from 'react';
import {Card, Grid, Image} from "semantic-ui-react";
import "./home.css"
import homeImage from '../../media/backgroundHome.png';
import Defi from "../defi/defi";
import {getCurrentDefi, getDefis, setErrorMsg} from "../../actions/defiActions";
import {connect} from 'react-redux';
import { withRouter } from "react-router";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            DefiKey:null,
            error:null
        };
    }

    componentDidMount() {
        this.props.getDefis();
    }

    onClickDefi=(defi)=>{
        if (this.state.DefiKey == defi.cle){
            this.props.getCurrentDefi(defi);
            this.props.history.push('/defis/'+defi.id)
        }else{
            this.props.setErrorMsg({id:defi.id, errorMsg:"La clé est incorrecte"})
        }
    }
    onChangeKeyDefi=(e)=>{
        this.setState({DefiKey: e.target.value});
    }

    render() {

        const defis = this.props?.defis?.map((defi) =>
            <Defi
                key={defi.id}
                image={defi.image}
                header={defi.header}
                meta={defi.heametader}
                description={defi.description}
                link={'defis/' + defi.id}
                onclick={()=>{this.onClickDefi(defi)}}
                onchangeKeyDefi={(e)=>{this.onChangeKeyDefi(e)}}
                disabledDefi={false}
                errorMsg={defi.errorMsg}
            />
        );
        return (
            <div>
                <Grid padded>
                    <Grid.Column width={6} className="defi">
                        <h1 className="title">Défistribué</h1>
                        <hr/>
                        <h4>Défistribué est une plateforme offrant des défis liés aux systèmes distribués. Cette
                            plateforme permet à une personne de tester sa maîtrise des systèmes distribués en
                            remplissant une succession de tâches.</h4>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Image src={homeImage}/>
                    </Grid.Column>
                </Grid>
                <Card.Group itemsPerRow={4} className="defiItems">
                    {defis}
                </Card.Group>
            </div>

        );
    }
}
const MapStateToProps = (state) => {
    return {
        defis: state.defiReducer.defis
    };
};
const MapDispatchToProps = (dispatch) => {
    return {
        getDefis: ()=> dispatch(getDefis()),
        getCurrentDefi: (defi)=> dispatch(getCurrentDefi(defi)),
        setErrorMsg: (defi)=> dispatch(setErrorMsg(defi)),
    }
};
export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Home));

