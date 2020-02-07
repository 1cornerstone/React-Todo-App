export const initialState = {
    todos: [
    ],
    token: ''
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'addTodo':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    action.data
                ]
            });

        case 'doneTodo':
            let TODOs = [];
            state.todos.find((element) => {
                if (parseInt(element.id) === parseInt(action.id)) {
                    TODOs.push({
                        id: element.id,
                        subject: element.subject,
                        detail: element.detail,
                        status: 'D'
                    })
                } else {
                    TODOs.push(element)
                }
            });
            return Object.assign({}, state, {
                todos: TODOs
            });

        case 'resetTodo':
            let TODO = [];
            state.todos.find((element) => {
                if (parseInt(element.id) === parseInt(action.id)) {
                    TODO.push({
                        id: element.id,
                        subject: element.subject,
                        detail: element.detail,
                        status: 'U'
                    })
                } else {
                    TODO.push(element)
                }
            });
            return Object.assign({}, state, {
                todos: TODO
            });

        case 'deleteTodo':
            let newTodo = state.todos.filter((element) => parseInt(element.id) !== parseInt(action.id));
            return Object.assign({}, state, {todos: newTodo});

        case 'updateTodo':
            let update = [];
            state.todos.find((element) => {
                if (parseInt(element.id) === parseInt(action.payload.id)) {
                    update.push({
                        id: element.id,
                        subject: action.payload.subject,
                        detail: action.payload.detail,
                        status: 'U'
                    })
                } else {
                   update.push(element)
                }
            });
            return Object.assign({}, state, { todos: update });

        case 'apiToken':
            return Object.assign({}, state, {token: action.data});

         case 'delToken':
            return Object.assign({}, state, {token: '',todos:[]});
        default:
            return state;

    }

};


