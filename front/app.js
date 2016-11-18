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
import allActions from './actions';
const {getTodosAsync, setActivePath, getSingleTodoAsync} = allActions;

//style
import {css} from 'aphrodite'
import styles from './styles'

//misc
import _ from 'lodash';

const App = (props) => (
    <div >
      <Navbar links={[{title: 'Todos', url: '/'},  {title: 'Crate', url: 'crate'}, {title: 'Completed', url: 'completed'}, {title: 'CreateTodo', url: 'create-todo'}]}/>
      {props.children}
    </div>
)

const getTodo = (nextState) => {store.dispatch(getSingleTodoAsync(nextState.params.id))}
const getAllTodos = () => {store.dispatch(getTodosAsync())}
const dispatchActivePath = (nextState) => {store.dispatch(setActivePath(nextState.location.pathname))};
const logEnter = (nextState) => {console.log('Next state', nextState);};
const rootPathEnterHandler = _.flow(dispatchActivePath, getAllTodos, logEnter);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={TodosContainer}  onEnter={rootPathEnterHandler}/>
        <Route path="/create-todo" component={CreateTodo} />
        <Route path="/crate" component={TodosContainer} onEnter={rootPathEnterHandler} />
        <Route path="/completed" component={TodosContainer} onEnter={rootPathEnterHandler} />
        <Route path="/todo/:id" component={TodoContainer}  onEnter={getTodo}/>
      </Route>
      <Route path="*" component={NoRoute} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

export default App;
