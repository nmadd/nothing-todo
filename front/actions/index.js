import * as todosActions from './todos-actions';
import * as todoActions from './todo-actions';
import * as activePathActions from './active-path-actions';
import * as createTodoActions from './create-todo-actions';

export default Object.assign(todosActions, todoActions, activePathActions, createTodoActions);
