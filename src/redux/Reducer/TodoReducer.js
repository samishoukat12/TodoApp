import { ADD_TODO_TASK, DELETE_TODO, FETCH_TODO_TASK, UPDATE_TODO } from "../Types/Types"
const initialState = {
    todoTask: [],
    error: "",
    FetchTime: new Date()


}
export default function TodoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODO_TASK:
            let newState = {
                ...state,
                todoTask: action.payload,
            }
            console.log("Reducer is working", newState);

            return newState;
        case ADD_TODO_TASK:
            let newTodo = state.todoTask
            newTodo.push(action.payload)
            return {
                ...state,
                todoTask: newTodo,

            }
        case DELETE_TODO:
            let filterTodo = state.todoTask.filter((item) => item.DocId !== action.payload)
            return {
                ...state,
                todoTask: filterTodo,
            }
        case UPDATE_TODO:
            let updatedState = {
                ...state,
                todoTask: action.payload
            }
            return updatedState;


        default:
            return state
    }
}
