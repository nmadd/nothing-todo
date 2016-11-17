import React from 'react';
import Todos from '../todos/Todos.jsx';
import {connect} from 'react-redux';
import {getTodosAsync} from '../todos/todos-actions';
import store from '../store/store';

const CompletedContainer = (props) => (
    props.todos ?
    <div>
      <h1>Completed:</h1>
      <Todos todos={props.todos} />
    </div>
    : <h1>Loading...</h1>
)

const mapStateToProps = (state, ownProps) =>  {
  return {todos: state.todos.filter(todo => todo.completed === true)};
}


export default connect(mapStateToProps)(CompletedContainer)
