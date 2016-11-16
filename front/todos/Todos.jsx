import React from 'react';
import Todo from '../todo/Todo.jsx';
import TodoContainer from '../todo/TodoContainer.jsx';

const Todos = (props) => (
  <div>
    {props.todos.map((val, indx) => <Todo key={indx} todo={val} container={props.container}/>)}
  </div>
)

Todos.propTypes = {
  todos: React.PropTypes.array
}


export default Todos;
