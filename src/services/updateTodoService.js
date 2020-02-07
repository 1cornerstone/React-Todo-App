import axios from "axios";

const updateTodo =(props,state)=>{

    axios.post(`http://localhost:3001/update/${state.selectedTableID }`,{
        token:props.token,
        subject:state.modalSubject,
        detail:state.modalDetail
    }).then(response =>{
        if (response.data ==='UnAuthorized' ||response.data ==='Invalid Token') return window.location.href ='/login';
        window.location.href = '/noteboard'
    }).catch(err=>{ console.log(err)});


};

export default updateTodo;