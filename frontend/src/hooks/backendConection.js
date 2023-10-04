import axios from "axios";



export default async function backendConection(endpoint, stateSetter) {

  const api = import.meta.env.VITE_API

  try {
    const response = await axios.get(api + endpoint)
    const wep = response.data
    stateSetter(wep)
  }
  catch (error) {
    console.log(error.name)
  }
}
