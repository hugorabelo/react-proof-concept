const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export const addEmployeeForm = (payload) => ({
  type: ADD_EMPLOYEE,
  payload,
});

const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

export const updateEmployeeForm = (payload) => ({
  type: UPDATE_EMPLOYEE,
  payload,
});

const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

export const deleteEmployee = (payload) => ({
  type: DELETE_EMPLOYEE,
  payload,
});

const CHANGE_STATUS = 'CHANGE_STATUS';

export const changeStatus = (payload) => ({
  type: CHANGE_STATUS,
  payload,
});