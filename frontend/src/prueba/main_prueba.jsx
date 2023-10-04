import { useState, useEffect, useContext } from "react"

import '../App.css'
import './prueba.css'

import Wep from "./wep"
import Lic from "./lic"



export default function Prueba() {

  console.log('APP Func')
  useEffect(
    () => console.log('APP Efecto')
  )

  return (
    <>
      {console.log('APP Return 1ro')}
      <p>Primer párrafo</p>
      <Lic />
      <p>Después del componente Lic</p>
      <Wep />
      <p>Después del componente Wep</p>
      {console.log('APP Return 2do')}
    </>
  )
}
