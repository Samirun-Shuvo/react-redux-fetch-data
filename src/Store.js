import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./Redux/Reducers/TodosReducer";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;