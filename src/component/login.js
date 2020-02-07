
import React from 'react'
import {Button, Form, Grid, Message} from 'semantic-ui-react'
import  Gridmargin from './util/gridMargin'
import axios from "axios";
import {connect} from "react-redux";
import {setToken} from '../actions/index'


class login extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:'',
            errorMessage:''
        };

    }

    onEmailChanged =(e)=>{
        this.setState({
            email: e.target.value
        });
    };

    onPasswordChanged =(e)=>{
        this.setState({
            password: e.target.value
        });
    };

    onFormSubmit=(e)=>{
        axios.post('http://localhost:3001/login',{
            email: this.state.email,
            password: this.state.password
        }).then(response =>{

            if (response.data === "Invalid details provided" || response.data === "User Password Incorrect") return this.setState({  errorMessage : response.data });
            this.props.setToken(response.data.token);
          return this.props.history.push('/noteboard');
        }).catch(err=>{ console.log(err)});
        e.preventDefault();
    };

    errorMonitor =(e)=>{
        if (this.state.errorMessage !=="") return(
            <Message negative >
                <Message.Header>Error</Message.Header>
                <p>{this.state.errorMessage}</p>
            </Message>
        )
    };

    render() {
        return(

            <Grid >
            <Grid.Row centered >
                {
                    this.errorMonitor()
                }
                 <Grid.Column width={10} textAlign ="center" style ={Gridmargin}>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Field>
                            <label>Email</label>
                            <input type='email' placeholder='Email' required minLength={6}  onChange={this.onEmailChanged} value={this.state.email}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input  placeholder='password' type='password' required  minLength={6} onChange={this.onPasswordChanged} value={this.state.password}/>
                        </Form.Field>
                        <Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form.Field>
                    </Form>
                </Grid.Column>
            </Grid.Row>

            </Grid >

    )

    }

}

const mapDispatchToProps =(dispatch)=> {
      return{
          setToken :(data)=> dispatch(setToken(data))
      }
}
;

export default connect(null,mapDispatchToProps) (login) ;