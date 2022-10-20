import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
  itemReducer,
  categoryReducer,
  historyReducer,
  globalSearchReducer,
  customModalReducer,
} from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  items: itemReducer,
  category: categoryReducer,
  history: historyReducer,
  globalSearch: globalSearchReducer,
  customModal: customModalReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
