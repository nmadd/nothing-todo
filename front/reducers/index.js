import activePath from './active-path-reducer';
import todos from './todos-reducer';
import todo from './todo-reducer';

const reducer = combineReducers({
  todos,
  todo,
  activePath
});

export default reducer;
