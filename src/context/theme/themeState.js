import React, {useReducer} from 'react'
import themeContext from './themeContext'
import themeReducer from './themeReducer'
import clienteAxios from '../../config/axios'

import {
CHANGE_THEME,
GET_THEME
  } from '../../types'



 const ThemeState = props => {

   const initialState = {
    theme: null
   }

   const [state, dispath] = useReducer(themeReducer, initialState);

   // UPDATE theme
   const updateTheme = (themeName) => {
     console.log(themeName)
     clienteAxios.put('/theme', themeName)
       .then(function (response) {
         console.log(response)
         dispath({
            type: CHANGE_THEME,
            payload: themeName.name
        })
       })
       .catch(function (error) {
         console.log(error);
       })
   }


   // get theme
   const getTheme = () => {

     clienteAxios.get('/theme')
       .then(function (response) {
         dispath({
            type: GET_THEME,
            payload: response.data[0].name
        })
       })
       .catch(function (error) {
         console.log(error);
       })
   }



   return (
     <themeContext.Provider
         value={{
           theme: state.theme,
           updateTheme,
           getTheme

         }}
       >
       {props.children}
     </themeContext.Provider>
   )

 }


 export default ThemeState;
