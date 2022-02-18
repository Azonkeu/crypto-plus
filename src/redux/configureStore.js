import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './data/data';
import marketReducer from './market/market';
import coinReducer from './coin/coin';
import globalReducer from './global/global';

const reducer = combineReducers({
  dataReducer,
  marketReducer,
  coinReducer,
  globalReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
