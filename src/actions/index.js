

 export const  addTodo = (payload)=>{
    return{
        type:'addTodo',
        data:payload
    }
};
export const  updateTodo =  (todo)=>{
    return{
        type:'updateTodo',
        payload:todo
    }
};
export const  deleteTodo = (todoID)=>{
    return{
        type:'deleteTodo',
        id:todoID
    }
};
 export const  doneTodo = (todoID)=>{
    return{
        type:'doneTodo',
        id: todoID
    }
};
export const  resetTodo = (todoID)=>{
    return{
        type:'resetTodo',
        id: todoID
    }
};

 export const setToken = (payload)=>{
     return{
         type:'apiToken',
         data:payload
     }
 };
 export const delToken = (payload)=>{
     return{
         type:'delToken',
     }
 };



