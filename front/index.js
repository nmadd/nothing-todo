//reducers
import todo from './todo/todo-reducer';
import todos from './todos/todos-reducer';
import {combineReducers} from 'redux';
const reducer = combineReducers({
  todos,
  todo
});

//actions
// import {createTodo, createTodoAsync} from './front/create-todo/create-todo-actions'

//models
// import Todo from './back/todos/todos-model';
// const models = {Todo};

//export an object that contains reducers, actions, and models
export {
  reducer
}
