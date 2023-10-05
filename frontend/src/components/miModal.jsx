import { Modal, ModalContent, Image, ModalHeader, ModalBody, Chip, useDisclosure } from "@nextui-org/react";
import { findMyAvatar } from "../hooks/myFuctions"



export default function Mi_Modal({ el, wep }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div onClick={onOpen}>{wep}</div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="">
                <ModalContent>
                    <ModalHeader className="">
                        <div className="">
                            {el.nombre_1ro} {el.nombre_2do} {el.apellido_paterno} {el.apellido_materno}
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="flex mb-2">
                            <div>
                                <Image
                                    isZoomed
                                    alt="Avatar(foto) del usuario"
                                    className="object-cover rounded-xl"
                                    src={findMyAvatar(el)}
                                    width={250}
                                />
                            </div>
                            <div className="flex flex-col p-2 ms-2">
                                <div className="me-1">
                                    {el.estatus ? <Chip color='success' size="sm" variant="dot">Activo</Chip> : <Chip size="sm" variant="dot" color='danger'>Baja</Chip>}
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm leading-6 text-gray-900">Almacen: {el.almacen}</p>
                                    <p className="text-xs leading-5 text-gray-500">Fecha de alta:</p>
                                    <p className="text-xs leading-5 text-gray-500">{el.fecha_alta.slice(0, 10)}</p>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
