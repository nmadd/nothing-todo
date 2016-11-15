import _ from 'lodash';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.payload;
    case 'DELETE_TODO':
      return _.remove(state, (todo) => todo._id !== action.payload);
    case 'CREATE_TODO':
      return [...state, action.payload];
    default:
      return state
  }
}

export default todos;
