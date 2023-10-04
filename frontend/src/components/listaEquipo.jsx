import { useEffect, useState } from "react";

import backendConection from "../hooks/backendConection"




const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
]

const findMyAvatar = (el) => {

    let path = './avatars/'

    if (el.avatar === 'no-avatar') {
        return `${path}no-avatar.jpg`
    } else {
        return `${path}${el.avatar}.png`
    }
}




export default function ListaEquipo() {

    const [equipo, setEquipo] = useState([])

    useEffect(
        () => {
            backendConection('/usuarios', setEquipo)
        },
        []
    )

    return (

        <div className="container h-1">
            <ul role="list" className="divide-y divide-gray-100">


                {equipo.map((el) => (
                    <li key={el.usuario} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={findMyAvatar(el)} alt="Foto del avatar del usuario" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Usuario: {el.usuario}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{el.nombre_1ro} {el.nombre_2do} {el.apellido_paterno} {el.apellido_materno}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{el.estatus ? 'activo' : 'baja'}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">Almacen: {el.almacen}</p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">Fecha de alta: {el.fecha_alta.slice(0, 10)}</p>
                        </div>
                    </li>
                ))}

            </ul>
        </div>

    )
}
