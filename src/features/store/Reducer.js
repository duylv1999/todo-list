import { SET_JOB_INPUT, ADD_JOB, DELETE_JOB, DELETE_ALL_JOB, UPDATE_JOB } from './Constants'

const initState = {
    todos: ["ăn sáng", "đi làm", "code"],
    todoInput: ''
}

function reducer(state, action) {
    console.log('action: ', action)
    switch (action.type) {

        case SET_JOB_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }

        case ADD_JOB:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case DELETE_JOB:
            const newTodos = [...state.todos]

            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }

        case DELETE_ALL_JOB:

            return {
                ...state,
                todos: [],
            }

        case UPDATE_JOB:

            const newTodoUpdate = [...state.todos]

            newTodoUpdate[action.index] = action.payload
            return {
                ...state,
                todos: newTodoUpdate
            }


        default:
            throw new Error('Invalid Action')
    }
}

export { initState }
export default reducer
