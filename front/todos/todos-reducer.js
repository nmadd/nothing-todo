import _ from 'lodash';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.payload;
    case 'COMPLETE_TODO':
      return state.map(todo => todo._id === action.payload ? Object.assign(todo, {completed: true, active: false}) : todo);
    case 'CRATE_TODO':
      return state.map(todo => todo._id === action.payload ? Object.assign(todo, {active: false, completed: false}) : todo);
    case 'MAKE_TODO_ACTIVE':
      return state.map(todo => todo._id === action.payload ? Object.assign(todo, {active: true, completed: false}) : todo);
    case 'DELETE_TODO':
      return _.remove(state, (todo) => todo._id !== action.payload);
    case 'CREATE_TODO':
      return [...state, action.payload];
    default:
      return state
  }
}

export default todos;
