import React from 'react';
import Todo from './Todo.jsx';
import {connect} from 'react-redux'

const TodoContainer = (props) => (
  props.todo && props.todo._id === props.params.id ?
  <Todo todo={props.todo} /> : <h1>Loading...</h1>
)

const mapStateToProps = (state, ownProps) =>  {
  return ownProps.todo ? {todo: ownProps.todo} : {todo: state.todo};
}

export default connect(mapStateToProps)(TodoContainer);
