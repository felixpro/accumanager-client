import {
  CREATE_EMPLOYEES,
  DELETE_EMPLOYEES,
  UPDATE_EMPLOYEES,
  GET_EMPLOYEES
 } from '../../types'



export default (state, action) => {
  switch(action.type) {
    case GET_EMPLOYEES:
    return {
        ...state,
        employees:action.payload
      }
    case CREATE_EMPLOYEES:
    return {
        ...state,
        employees: [...state.employees, action.payload ]
      }

    case UPDATE_EMPLOYEES:
    return {
        ...state,
        employees:  state.employees.map(employee => employee._id === action.payload._id ? action.payload : employee),
      }

    case DELETE_EMPLOYEES:
    return {
        ...state,
        employees:  state.employees.filter(employee => employee._id !== action.payload)
      }



    default:
      return state;
  }
}
