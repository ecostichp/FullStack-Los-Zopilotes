import { useEffect, useState } from "react";

import backendConection from "../hooks/backendConection";




export default function Home() {

    const [wep, setWep] = useState({ 'mensaje': '' })


    useEffect(
        () => {
            backendConection('/', setWep)
        },
        []
    )



    return (
        <>
            <h3 className="text-xs text-slate-400 absolute">{wep.mensaje}</h3>
            <div className="mi_contenedor items-center">
                <div className="text-center">
                    <h1 className="mi_titulo">¡Bienvenido!</h1>
                    <p>Es un placer tenerte de regreso <span className="usuario">Usuario</span></p>
                </div>
            </div>
        </>
    )
}
