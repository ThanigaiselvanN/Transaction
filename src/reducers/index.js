import { combineReducers } from 'redux';
import TransactionReducer from './transaction-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  transactionStore: TransactionReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
