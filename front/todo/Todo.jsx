import React from 'react';
import store from '../store/store.js';
import {Link} from 'react-router';
import {deleteTodoAsync, sendTodoToCrateAsync, completeTodoAsync} from './todo-actions';

//<Link to={`/todo/${props.todo._id}`}><h2>{props.todo.text}</h2></Link>

const Todo = (props) => (
   <div>
     <p>{props.todo.text}</p>
     <button onClick={store.dispatch.bind(this, deleteTodoAsync(props.todo._id))}>Delete this todo</button>
     {console.log('todo props', props)}
     {props.container === 'crate' ? null: <button onClick={store.dispatch.bind(this, sendTodoToCrateAsync(props.todo._id))}>Send to crate</button>}
     {props.container === 'completed' ? null : <button onClick={store.dispatch.bind(this, completeTodoAsync(props.todo._id))}>Complete todo</button>}
   </div>
)

Todo.propTypes = {
  todo: React.PropTypes.object
}


export default Todo;
