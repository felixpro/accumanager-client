import {
CHANGE_THEME,
GET_THEME
 } from '../../types'



export default (state, action) => {
  switch(action.type) {
    case CHANGE_THEME:
    return {
        ...state,
        theme:  action.payload,
      }

      case GET_THEME:
      // console.log(action.payload)
      return {
          ...state,
          theme:  action.payload,
        }

    default:
      return state;
  }
}
