import { useState, useEffect, useContext } from "react"
import Lety from "./lety"


export default function Gretel() {

  const [gretel, setGretel] = useState(1)
  console.log('gretel Func')


  const clickGretel = () => {
    setGretel(gretel + 1)
    console.log('gretel clickGretel')
  }


  const efec = () => console.log('gretel Efecto')

  useEffect(
    efec, []
  )


  return (
    <>

      {console.log('gretel Return 1ro')}

      <h1>{gretel}</h1>
      <button onClick={clickGretel}>Gretel</button>

      <Lety />

      {console.log('gretel Return 2do')}
    </>
  )
}
