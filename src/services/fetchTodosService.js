import axios from 'axios'
import {store} from '../store/store';
import {addTodo} from "../actions";

const fetchTodo = (props,parent)=>{
    axios.post('http://localhost:3001/Todos',{
        token:props.token,
    }).then(response =>{
       if (response.data ==='UnAuthorized' ||response.data ==='Invalid Token') return window.location.href ='/login';

      response.data.forEach(todo =>{

          store.dispatch(addTodo(
               {
                   id:todo.id,
                   subject : todo.subject,
                   detail:  todo.details,
                   status:todo.state
               }
           ))
       })

        parent.setState({
            doneFetching: true
        })

    }).catch(err=>{ });

};

export default fetchTodo;