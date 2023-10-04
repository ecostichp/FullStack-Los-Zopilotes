import { useState, useEffect, useContext } from "react"



export default function Lety() {

  const [lety, setLety] = useState(1)
  console.log('lety Func')


  const clickLety = () => {
    setLety(lety + 1)
    console.log('lety clickLety')
  }


  const efec = () => console.log('lety Efecto')

  useEffect(
    efec, []
  )


  return (
    <>

      {console.log('lety Return 1ro')}

      <h1>{lety}</h1>
      <button onClick={clickLety}>Lety</button>

      {console.log('lety Return 2do')}
    </>
  )
}
