
import axios from 'axios';



const clienteAxios = axios.create({
  baseURL: "https://accumannager.herokuapp.com/"
})


export default clienteAxios;
