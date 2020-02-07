import React from 'react';
import {Grid, Form, Button} from 'semantic-ui-react'
import marginT from "./util/gridMargin"
import {connect} from 'react-redux'
import {addTodo} from "../actions";
import axios from "axios";

class add_Todo extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            subject :'',
            detail :''
        };
    }

    onFormSubmit = (e)=>{
        axios.post(`http://localhost:3001/createTodo`,{
            subject:this.state.subject,
            detail:this.state.detail,
            token:this.props.token,
        }).then(response =>{
            if (response.data ==='UnAuthorized' ||response.data ==='Invalid Token') return this.props.history.push('/login');
            if (response.data === "Not Inserted") return 'error';
            window.location.href ='/noteboard'

        }).catch(err=>{ console.log(err)});
        e.preventDefault();
    };

    onSubjectChanged =(e)=>{
        this.setState({
            subject: e.target.value
        });
    };

    onDetailChanged =(e)=>{
        this.setState({
           detail: e.target.value
        });
    };
    onNoteboard =(e)=>{
        window.location.href ='/noteboard'
    };

    render() {
        return(
            <React.Fragment>

                <Grid style={marginT}>

                    <Grid.Row  centered >
                        <Grid.Column width={10} >
                            <Form onSubmit={this.onFormSubmit}>
                                <Form.Field>
                                    <label>Subject</label>
                                    <input placeholder='subject' required minLength={5}  onChange={this.onSubjectChanged} value={this.state.subject}/>
                                </Form.Field>
                                <Form.Field>
                                    <textarea placeholder='Text...' required minLength={10}   value={this.state.detail} onChange={this.onDetailChanged}> </textarea>
                                </Form.Field>


                                <Grid.Row centered style={marginT}>
                                    <Button animated='fade'>
                                        <Button.Content hidden>ADD TODO</Button.Content>
                                        <Button.Content visible>TODO</Button.Content>
                                    </Button>
                                    <Button positive onClick={this.onNoteboard} style={{textAlign:'center',float:"center", margin:'20px'}}>
                                        Go Back To Board
                                    </Button>
                                </Grid.Row>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        token: state.token
    }
};
const mapDispatchToProps =(dispatch)=>{
    return{
        addTodo: (data)=> dispatch(addTodo(data))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(add_Todo);
