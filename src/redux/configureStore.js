import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import todo from './modules/todo';

const reducer = combineReducers({
  todo,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
export default store;
