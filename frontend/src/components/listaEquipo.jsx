import { useEffect, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

import backendConection from "../hooks/backendConection"
import Mi_Modal from "./miModal";
import { findMyAvatar } from "../hooks/myFuctions"



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


export default function ListaEquipo() {

    const [equipo, setEquipo] = useState([])

    useEffect(
        () => {
            backendConection('/usuarios', setEquipo)
        },
        []
    )

    return (

        <div className="">
            <ul role="list" className="divide-y divide-gray-100">


                {equipo.map((el) => (
                    <>
                        <Mi_Modal el={el} wep={
                            <li key={el.usuario} className="flex justify-between gap-x-6 py-5">
                                <div className="w-screen px-16">
                                    <div className=" flex justify-between rounded-b-md py-1 px-2">

                                        <div className=" flex min-w-0 gap-x-4 items-center">
                                            <img className="h-16 w-16 flex-none rounded-full bg-gray-50" src={findMyAvatar(el)} alt="Foto del avatar del usuario" />
                                            <div className="min-w-0 flex-auto">
                                                <p className="font-semibold text-gray-900">@{el.usuario}</p>
                                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{el.nombre_1ro} {el.nombre_2do} {el.apellido_paterno} {el.apellido_materno}</p>
                                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Puesto</p>
                                            </div>
                                        </div>
                                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                            <p>{el.estatus ? <CheckCircleIcon className="h-4 w-4 text-green-500" /> : <XCircleIcon className="h-4 w-4 text-red-500" />}</p>
                                            <p className="text-sm leading-6 text-gray-900">Almacen: {el.almacen}</p>
                                            <p className="text-xs leading-5 text-gray-500">Fecha de alta: {el.fecha_alta.slice(0, 10)}</p>
                                        </div>

                                    </div>

                                </div>
                            </li>
                        } />
                    </>
                ))}

            </ul>
        </div >

    )
}
