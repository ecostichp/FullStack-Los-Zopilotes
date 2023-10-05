import ListaEquipo from "../components/listaEquipo";


export default function Equipo() {

    return (
        <>
            <div className="mi_contenedor">
                <div>
                    <h1 className="mi_titulo text-center">Mi equipo</h1>
                    <ListaEquipo />
                </div>
            </div>
        </>
    )
}
