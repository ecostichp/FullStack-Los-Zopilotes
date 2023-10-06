import { Link } from "react-router-dom"

export default function Sidebar() {


    return (

        <div id='mi_sidebar' className="bg-gray-800 text-white">
            <div className="pt-8 p-2 flex flex-col gap-5 items-center">
                <a className="sidebutton">Boton 1</a>
                <a className="sidebutton">Boton 2</a>
                <a className="sidebutton">Boton 3</a>
                <a className="sidebutton">Boton 4</a>
                <a className="sidebutton">Boton 5</a>
            </div>

        </div>

    )
};