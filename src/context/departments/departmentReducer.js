import {
  LIST_DEPARTMENTS,
  CREATE_DEPARTMENTS,
  DELETE_DEPARTMENTS,
  UPDATE_DEPARTMENTS
 } from '../../types'



export default (state, action) => {
  switch(action.type) {

      case LIST_DEPARTMENTS:
      return {
          ...state,
          departmentList: action.payload
        }

      case DELETE_DEPARTMENTS:
      return {
          ...state,
          departmentList: state.departmentList.filter(department => department._id !== action.payload),
        }

      case UPDATE_DEPARTMENTS:
      return {
        ...state,
        departmentList: state.departmentList.map(department => department._id === action.payload._id ? action.payload : department),

        }

        case CREATE_DEPARTMENTS:
        return {
          ...state,
          departmentList: [...state.departmentList, action.payload ]

          }




    default:
      return state;
  }
}
