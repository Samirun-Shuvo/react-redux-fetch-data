import { GET_TODOS_FAILD, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../Constans/TodosConstans";

const initialState = {
  isLoading: false,
  todos: [],
  error: null
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
        error: null,
      }
    case GET_TODOS_FAILD:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      }

    default:
      return state;
  }
}
export default todosReducer;