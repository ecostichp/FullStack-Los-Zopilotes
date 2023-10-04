import { useState, useEffect, useContext } from "react"
import Gretel from "./gretel"


export default function Lic() {

  const [lic, setLic] = useState(1)
  console.log('Lic Func')


  const clickLic = () => {
    setLic(lic + 1)
    console.log('Lic clicklic')
  }


  const efec = () => console.log('Lic Efecto')

  useEffect(
    efec, []
  )


  return (
    <>

      {console.log('Lic Return 1ro')}

      <h1>{lic}</h1>
      <button onClick={clickLic}>lic</button>

      <Gretel />

      {console.log('Lic Return 2do')}
    </>
  )
}
