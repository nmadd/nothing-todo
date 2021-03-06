import React from 'react';
import Todo from './Todo.jsx';
import {connect} from 'react-redux'

const TodoContainer = (props) => (
  props.todo && (props.todo._id === props.params.id) ?
  <Todo todo={props.todo} container={props.container}/> : <h1>Loading...</h1>
)

const mapStateToProps = (state, ownProps) =>  {
  return ownProps.todo ? {todo: ownProps.todo, container: state.activePath} : {todo: state.todo, container: state.activePath};
  // switch (state.activePath) {
  //   case '/':
  //     return ownProps.todo ? {todo: ownProps.todo, container: state.activePath, headerText: 'Active'} : {todo: state.todo, container: state.activePath, headerText: 'Active'};
  //   case '/crate':
  //     return {todos: state.todos.filter(todo => todo.active === false && todo.completed === false), headerText: 'Crate'};
  //   case '/completed':
  //     return {todos: state.todos.filter(todo => todo.completed === true), headerText: 'Completed'};
  //
  // }
}

export default connect(mapStateToProps)(TodoContainer);
