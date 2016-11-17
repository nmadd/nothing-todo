import React from 'react';
import store from '../store/store.js';
import {Link} from 'react-router';
import {deleteTodoAsync, sendTodoToCrateAsync, completeTodoAsync, makeTodoActiveAsync} from './todo-actions';
import ButtonContainer from '../button/ButtonContainer.jsx';


const Todo = (props) => (
   <div>
     <p>{props.todo.text}</p>
     <button onClick={store.dispatch.bind(this, deleteTodoAsync(props.todo._id))}>Delete this todo</button>
     <ButtonContainer buttonType='make-todo-active' text='Make todo active' hideOn='/' clickHandler={store.dispatch.bind(this, makeTodoActiveAsync(props.todo._id))} />
     <ButtonContainer buttonType='move-to-crate' text='Move to crate' hideOn='crate' clickHandler={store.dispatch.bind(this, sendTodoToCrateAsync(props.todo._id))} />
     <ButtonContainer buttonType='complete-todo' text='Complete todo' hideOn='completed' clickHandler={store.dispatch.bind(this, completeTodoAsync(props.todo._id))} />
   </div>
)

Todo.propTypes = {
  todo: React.PropTypes.object
}


export default Todo;
