import React from 'react';
import Menu from './menu'
import {Grid,Card,Image} from 'semantic-ui-react'
import axios from "axios";
import {connect} from "react-redux";
import propix from '../asset/propix.jpeg'

class Profile extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            username:''
        };
        axios.post('http://localhost:3001/profile',{
            token:this.props.token
        }).then(response =>{
            if (response.data ==='UnAuthorized' ||response.data ==='Invalid Token') return props.history.push('/login');

            this.setState( {
               name:response.data.name,
               email:response.data.email,
               username:response.data.username
           })
        }).catch(err=>{
            console.log(err)
        });
    }
    render() {
        return (
            <React.Fragment>
                <Menu/>

                <Grid>
                    <Grid.Row centered>
                        <Grid.Column>
                            <Card.Group centered>
                               <Card>
                                   <Image src={propix} wrapped ui={false} />
                                   <Card.Content>
                                       <span>  Name: <h5>{this.state.name}</h5></span>

                                           <span>Email:   <h5>{this.state.email}</h5></span>
                                           <span>Username:  <h5>{this.state.username}</h5> </span>

                                   </Card.Content>
                               </Card>

                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return{
        token : state.token
    }
};

export default  connect(mapStateToProps,null)(Profile);