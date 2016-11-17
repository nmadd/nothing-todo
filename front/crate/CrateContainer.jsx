import React from 'react';
import Todos from '../todos/Todos.jsx';
import {connect} from 'react-redux';
import {getTodosAsync} from '../todos/todos-actions';
import store from '../store/store';

const CrateContainer = (props) => (
    props.todos ?
    <div>
      <h1>Crate:</h1>
      <Todos todos={props.todos} />
    </div>
    : <h1>Loading...</h1>
)

const mapStateToProps = (state, ownProps) =>  {
  return {todos: state.todos.filter(todo => todo.active === false && todo.completed === false)};
}


export default connect(mapStateToProps)(CrateContainer)
