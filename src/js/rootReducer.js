import { combineReducers } from 'redux';
import searchEntriesReducer from './components/SearchEntries/searchEntriesReducer';

const rootReducer = combineReducers({
  search: searchEntriesReducer
});

export default rootReducer;
