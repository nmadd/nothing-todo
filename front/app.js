//npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

//Components
import TodosContainer from './todos/TodosContainer.jsx';
import TodoContainer from './todo/TodoContainer.jsx';
import CreateTodo from './create-todo/CreateTodo.jsx';
import Navbar from './navbar/Navbar.jsx';
import NoRoute from './404/NoRoute';

//Redux
import store from './store/store.js';
import {getTodosAsync} from './todos/todos-actions.js';
import {getSingleTodoAsync} from './todo/todo-actions.js';

//style
import {css} from 'aphrodite'
import styles from './styles'

const App = (props) => (
    <div >
      <Navbar links={[{title: 'Todos', url: '/'}, {title: 'CreateTodo', url: 'create-todo'}]}/>
      {props.children}
    </div>
)

const getTodo = (nextState) => {store.dispatch(getSingleTodoAsync(nextState.params.id))}
const getAllTodos = () => {store.dispatch(getTodosAsync())}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TodosContainer}  onEnter={getAllTodos}/>
        <Route path="/create-todo" component={CreateTodo} />
        <Route path="/todo/:id" component={TodoContainer}  onEnter={getTodo}/>
      </Route>
      <Route path="*" component={NoRoute} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

export default App;
