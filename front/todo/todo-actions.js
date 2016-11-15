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
