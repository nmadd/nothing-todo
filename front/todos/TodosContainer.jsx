import React from 'react';
import Todos from './Todos.jsx';
import {connect} from 'react-redux';
import {getTodosAsync} from './todos-actions';
import store from '../store/store';

const TodosContainer = (props) => (
  props.todos ?
  <div>
    <h1>{props.headerText}</h1>
    <Todos todos={props.todos} />
  </div>
  : <h1>Loading...</h1>
)


//TO DO: figure out why router sets activePath differently
const mapStateToProps = (state, ownProps) =>  {
  switch (state.activePath) {
    case '/':
      return {todos: state.todos.filter(todo => todo.active === true), headerText: 'Active:'};
    //router will initially return a '/' at the beginning of active path, but then will remove the slash on subsequent visits to the route
    case '/crate':
    case 'crate':
      return {todos: state.todos.filter(todo => todo.active === false && todo.completed === false), headerText: 'Crate Todos:'}
    case '/completed':
    case 'completed':
      return {todos: state.todos.filter(todo => todo.completed === true), headerText: 'Completed:'}
    default:
        return state
  }
}


export default connect(mapStateToProps)(TodosContainer)
