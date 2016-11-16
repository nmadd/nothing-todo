import $ from 'jquery';

export const getSingleTodo = (todo) => ({
  type: 'GET_SINGLE_TODO',
  payload: todo
})

export const getSingleTodoAsync = (todo_id) => dispatch => {
  $.ajax({
    url: `/todos/${todo_id}`,
    type: 'GET'
  })
  .done((data) => {
    dispatch(getSinglePost(data));
  })
}

export const deleteTodo = todo_id => ({
  type: 'DELETE_TODO',
  payload: todo_id
})

export const deleteTodoAsync = (todo_id) => dispatch => {
  $.ajax({
    url: `/todos/${todo_id}`,
    type: 'DElETE'
  })
  dispatch(deleteTodo(todo_id));
}

export const sendTodoToCrate = todo_id => ({
  type: 'CRATE_TODO',
  payload: todo_id
})

export const sendTodoToCrateAsync = (todo_id) => dispatch => {
  $.ajax({
    url: `/todos/crate/${todo_id}`,
    type: 'PUT'
  })
  dispatch(sendTodoToCrate(todo_id));
}

export const completeTodo = todo_id => ({
  type: 'COMPLETE_TODO',
  payload: todo_id
})

export const completeTodoAsync = (todo_id) => dispatch => {
  $.ajax({
    url: `/todos/complete/${todo_id}`,
    type: 'PUT'
  })
  dispatch(completeTodo(todo_id));
}
