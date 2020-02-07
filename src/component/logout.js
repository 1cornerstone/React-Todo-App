import React from 'react'
import axios from "axios";
import {connect} from "react-redux";
import {delToken} from "../actions";

class Logout extends React.Component{

    constructor(props){
        super(props);

        axios.post('http://localhost:3001/logout',{
            token:this.props.token
        }).then(response =>{
            if (response.data === "UnAuthorized" || response.data === "Invalid Token") return this.props.history.push('/noteboard');
                this.props.delToken();
            return this.props.history.push('/login');
        }).catch(err=>{ console.log(err)});
    }

    render() {
        return(
            <>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       delToken: () =>dispatch(delToken()),
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(Logout);