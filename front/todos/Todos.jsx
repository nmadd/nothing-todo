import React from 'react';
import Todo from '../todo/Todo.jsx';

const Todos = (props) => (
  <div>
    <h1>Todos:</h1>
    {props.todos.map((val, indx) => <Todo key={indx} todo={val} />)}
  </div>
)

Todos.propTypes = {
  todos: React.PropTypes.array
}


export default Todos;
