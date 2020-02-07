import React from 'react'
import {Button, Form, Grid,Message,} from "semantic-ui-react";
import  Gridmargin from './util/gridMargin'
import axios from 'axios'
import {setToken} from "../actions";
import {connect} from "react-redux";


class Register extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            username :'',
            name: '',
            email:'',
            password:'',
            errorMessage :''
        };
    }
    onNameChanged=(e)=>{
        this.setState({
            name: e.target.value
        });
    };

    onEmailChanged =(e)=>{
        this.setState({
            email: e.target.value
        });
    };
    onUsernameChanged =(e)=>{
        this.setState({
            username: e.target.value
        });
    };
    onPasswordChanged =(e)=>{
        this.setState({
            password: e.target.value
        });
    };

    onSubmitHandler=(e)=>{

      axios.post('http://localhost:3001/signUp',{
              name : this.state.name,
              username :this.state.username,
              email: this.state.email,
              password: this.state.password
        }).then(response =>{
            if (response.data.token === undefined || response.data.token === null ) return this.setState({  errorMessage : response.data });
          this.props.setToken(response.data.token);
          return this.props.history.push('/noteboard');
      }).catch(err=>{});

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
        return (
            <Grid>
                <Grid.Row centered >
                    {
                        this.errorMonitor()
                    }
                   <Grid.Column width={10} textAlign ="center" style ={Gridmargin}>
                    <Form onSubmit={this.onSubmitHandler}>
                        <Form.Field >
                            <label centered> Full Name </label>
                             <input type='text' placeholder='Full Name' required value={this.state.name} minLength={6} onChange={this.onNameChanged}/>

                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input type='email' placeholder='email' required value={this.state.email} minLength={6} onChange={this.onEmailChanged} />
                        </Form.Field>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder='Username' required value={this.state.username} minLength={6} onChange={this.onUsernameChanged} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder='Password'  required value={this.state.password} minLength={6} onChange={this.onPasswordChanged} />
                        </Form.Field>
                        <Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form.Field>
                    </Form>
                   </Grid.Column >


                </Grid.Row>
            </Grid>
        )
    }
}

const mapDispatchToProps =(dispatch)=> {
        return{
            setToken :(data)=> dispatch(setToken(data))
        }
    }
;

export default connect(null,mapDispatchToProps) (Register) ;

