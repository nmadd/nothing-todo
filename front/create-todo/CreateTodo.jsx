import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import {createTodoAsync} from './create-todo-actions';
import store from '../store/store.js';

const CreateTodo = React.createClass({
  getInitialState() {
    return {
      text: ''
    }
  },
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },
  submitNewTodo() {
    store.dispatch(createTodoAsync(this.state));
  },
  render(){
    return (
      <div style={styles}>
        <form style={styles}>
          <h1>Submit a todo:</h1>
          <label>Text: </label>
          <input onChange={this.handleChange.bind(this, 'text')} type="text" name="title" />
          <br/>
          <br/>
          <Link to="/"><input onClick={this.submitNewTodo} type="button" value="Submit" /></Link>
        </form>
      </div>
    )
  }
})

const styles = {
  flex: 1,
  height: '100%'
}
export default CreateTodo;
