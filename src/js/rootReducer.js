import { combineReducers } from 'redux';
import searchEntriesReducer from './components/SearchEntries/SearchEntriesReducer';

const rootReducer = combineReducers({
  search: searchEntriesReducer
});

export default rootReducer;
