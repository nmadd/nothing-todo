import React from 'react';
import Todos from './Todos.jsx';
import {connect} from 'react-redux';
import {getTodosAsync} from './todos-actions';
import store from '../store/store';

const TodosContainer = (props) => (
  props.todos ?
  <div>
    <h1>Todos:</h1>
    <Todos todos={props.todos} />
  </div>
  : <h1>Loading...</h1>
)

const mapStateToProps = (state, ownProps) =>  {
  return {todos: state.todos.filter(todo => todo.active === true)};
}


export default connect(mapStateToProps)(TodosContainer)
