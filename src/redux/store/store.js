import { createStore } from 'redux';
import employeeReducer from '../reducers/employeeReducer';

export const Store = createStore(employeeReducer);