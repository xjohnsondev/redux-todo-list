const INITIAL_STATE = { list: [], todo: null }

function todoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = action.payload;
            return { 
                ...state, 
                list: [...state.list, newTodo], 
                todo: null
            }
        case "SET_TODO":
            return { ...state, todo: action.payload }
        case "DELETE_TODO":
            return { ...state, 
                list: state.list.filter(todo => todo.id !== action.payload )
            };
        default:
            return state;
    }
}

export default todoReducer;