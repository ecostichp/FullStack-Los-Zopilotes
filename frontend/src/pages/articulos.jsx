import { useEffect, useState } from "react";
import TablaArticulos from "../components/tablaArticulos";

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
        <TablaArticulos el={articulos} />
    )
}
