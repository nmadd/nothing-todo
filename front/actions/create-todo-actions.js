import $ from 'jquery';

export const createTodo = newTodo => ({
  type: 'CREATE_TODO',
  payload: newTodo
})

export const createTodoAsync = (newTodo) => dispatch => {
  $.ajax({
    url: '/todos',
    type: 'POST',
    data: newTodo
  })
  .done(data => {
    dispatch(createTodo(data));
  })
}
