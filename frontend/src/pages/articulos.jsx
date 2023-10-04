import { useEffect, useState } from "react";

import backendConection from "../hooks/backendConection";


export default function Articulos() {

    const [articulos, setArticulos] = useState([])


    useEffect(
        () => {
            backendConection('/productos', setArticulos)
        },
        []
    )

    return (
        <>
            <div className="mi_contenedor">
                <div className="text-center">
                    <h1>Soy los Artículos</h1>
                    <div>
                        {articulos.map(
                            (el) => {
                                return (
                                    <div className="text-xs flex">
                                        <p>{el.codigo} </p>
                                        <p>{el.descripcion}</p>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
