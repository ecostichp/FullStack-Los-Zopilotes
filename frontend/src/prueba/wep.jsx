import { useState, useEffect, useContext } from "react"



export default function Wep() {

  const [wep, setWep] = useState(1)
  console.log('Wep Func')


  const clickWep = () => {
    setWep(wep + 1)
    console.log('Wep clickwep')
  }


  const efec = () => console.log('Wep Efecto')

  useEffect(
    efec, [wep]
  )


  return (
    <>

      {console.log('Wep Return 1ro')}
      <h1>{wep}</h1>
      <button onClick={clickWep}>wep</button>
      {console.log('Wep Return 2do')}

    </>
  )
}
