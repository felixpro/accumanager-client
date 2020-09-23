import {
  LISTA_DEPARTAMENTOS
 } from '../../types'



export default (state, action) => {
  switch(action.type) {
    case LISTA_DEPARTAMENTOS:
      return {
  
      }

    default:
      return state;
  }
}
