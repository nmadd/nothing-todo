import $ from 'jquery';

export const getTodos = todos => ({
  type: 'GET_TODOS',
  payload: todos
})

export const getTodosAsync = () => (dispatch) => {
  $.ajax({
      url: '/todos',
      type: 'GET'
    })
    .done((data) => {
      dispatch(getTodos(data))
    })
}
