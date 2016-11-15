import React from 'react';
import store from '../store/store.js';
import {Link} from 'react-router';
import {deleteTodoAsync} from './todo-actions';

const Todo = (props) => (
   <div>
     <Link to={`/todo/${props.todo._id}`}><h2>{props.todo.text}</h2></Link>
     <p>{props.todo.text}</p>
     <button onClick={store.dispatch.bind(this, deletePostAsync(props.todo._id))}>Delete this todo</button>
   </div>
)

Todo.propTypes = {
  todo: React.PropTypes.object
}


export default Todo;
