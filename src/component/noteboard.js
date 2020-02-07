import React from "react";
import {Grid, Table, Icon, Button,Modal,Form} from "semantic-ui-react"
import Gridmargin from './util/gridMargin'
import Menu from './menu'
import {connect} from 'react-redux'
import {doneTodo, deleteTodo, updateTodo, resetTodo} from "../actions";
import fetchTodo from "../services/fetchTodosService";
import update_Todo from '../services/updateTodoService'
import axios from "axios";

class noteboard extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            modalSubject :'',
            modalDetail:'',
            selectedTableID :'',
            doneFetching: false
        };
    }

   componentDidMount() {
       fetchTodo(this.props,this);
    }

    stateOfTodo = (state) => {
        if (state.trim().toString() === "D") return "checkmark";
        return "pencil";
    };
    componentWillMount() {
    }
    UNSAFE_componentWillMount() {
    }

    btnState  = (status, ID) => {

        if ("D" ===status.trim().toString()) return (
            <Button.Group>
                <Button onClick={this.onResetClick}  color='teal' id={ID}>RESET</Button>
                <Button.Or/>
                <Button negative onClick={this.onDeleteClick} id={ID}>DELETE</Button>
            </Button.Group>
        );

        return (
            <Button.Group>
                <Button onClick={this.onDoneClick} positive id={ID}>DONE</Button>
                <Button.Or/>
                <Modal trigger={<Button color='blue'  onClick={this.onUpdateClick} id={ID}>UPDATE</Button>}>
                    <Modal.Header>UPDATE TODO</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.onUpdateModalBtnClicked} >
                            <Form.Field>
                                <label>Subject</label>
                                <input placeholder='subject' required minLength={3} value={this.state.modalSubject}  onChange={this.onSubjectFieldUpdate}/>
                            </Form.Field>
                            <Form.Field>
                                <Form.TextArea label='Detail' placeholder='Detail...' style={{height:'250px'}}  value={this.state.modalDetail} onChange={this.onDetailFieldUpdate}/>
                            </Form.Field>
                            <Button positive style={{textAlign:'center',float:"center", margin:'20px'}} >
                                UPDATE
                            </Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                {/*<Button color='blue'  onClick={this.onUpdateClick} id={ID}>UPDATE</Button>*/}
            </Button.Group>
        );




    };

    onDoneClick = (e) => {

        let id = e.target.id;
        axios.post(`http://localhost:3001/done/${id}`,{
            token:this.props.token,
        }).then(response =>{
            if (response.data ==='UnAuthorized' ||response.data ==='Invalid Token') return window.location.href ='/login';
            return  this.props.doneTodo(id);

        }).catch(err=>{ console.log(err)});
    };

    onResetClick = (e) => {
        let id = e.target.id;
        axios.post(`http://localhost:3001/reset/${id}`,{
            token:this.props.token,
        }).then(response =>{
            if (response.data ==='UnAuthorized' ||response.data ==='Invalid Token') return window.location.href ='/login';
            return  this.props.resetTodo(id);

        }).catch(err=>{ console.log(err)});
    };

    onUpdateClick = (e) => {

        let todo =  this.props.todos.filter(el => parseInt(el.id) === parseInt(e.target.id));
        this.setState({
            selectedTableID :e.target.id,
            modalSubject :todo[0].subject,
            modalDetail:todo[0].detail,
        });

    };

    onSubjectFieldUpdate =(e)=>{

        this.setState({
            modalSubject: e.target.value
        })
    };

    onDetailFieldUpdate =(e)=>{
        this.setState({
            modalDetail: e.target.value
        })
    };

    onUpdateModalBtnClicked =(e)=>{

        //updateDb and state
        update_Todo(this.props,this.state);

    };

    onDeleteClick = (e) => {
        let id = e.target.id;
        axios.post(`http://localhost:3001/delete/${id}`,{
            token:this.props.token,
        }).then(response =>{
            if (response.data ==='UnAuthorized' ||response.data ==='Invalid Token') return window.location.href ='/login';
            return  this.props.deleteTodo(id);

        }).catch(err=>{ console.log(err)});
    };

    onAddTodoBtnClicked =(e)=>{
        return window.location.href ='/todo'
    };

    fetchTodoToTable(){
        if (this.state.doneFetching === true){
            return(
                <Table.Body>
                    {
                        this.props.todos.map(value => {
                            return (
                                <Table.Row key={value.id}>
                                    <Table.Cell>{value.subject}</Table.Cell>
                                    <Table.Cell>{value.detail}</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Icon color='green' name={this.stateOfTodo(value.status)}
                                              size='large'/>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {this.btnState(value.status, value.id)}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            );
        }
    };

    render() {

        return (
            <React.Fragment>
                <Menu/>
                <Grid>
                    <Grid.Row style={Gridmargin}>
                        <Button positive onClick={this.onAddTodoBtnClicked}>
                            <Icon name='add circle'> </Icon>
                            Add Todo</Button>
                        <Table celled structured>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell rowSpan='2'>SUBJECT</Table.HeaderCell>
                                    <Table.HeaderCell rowSpan='3'>DETAILS</Table.HeaderCell>
                                    <Table.HeaderCell rowSpan='2'>STATE</Table.HeaderCell>
                                    <Table.HeaderCell rowSpan='2'>--</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                                {
                                    this.fetchTodoToTable()
                                }

                        </Table>
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

const mapDispatchToProps = (dispatch) => {
    return {
        doneTodo : (todo) =>dispatch(doneTodo(todo)),
        deleteTodo : (todo) =>dispatch(deleteTodo(todo)),
        updateTodo : (todo) =>dispatch(updateTodo(todo)),
        resetTodo : (todo) =>dispatch(resetTodo(todo)),
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(noteboard);