import { useState, useMemo } from "react";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from "@nextui-org/react";



export default function TablaArticulos({ el }) {

    const [page, setPage] = useState(1);
    const rowsPerPage = 18;

    const pages = Math.ceil(el.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return el.slice(start, end);
    }, [page, el]);

    return (
        <Table
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }
            classNames={{
                wrapper: "min-h-[150px]"
            }}
        >
            <TableHeader>
                <TableColumn key="name">Código</TableColumn>
                <TableColumn key="role">Descripción</TableColumn>
                <TableColumn key="status">Existencia</TableColumn>
            </TableHeader>
            <TableBody items={items}>
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.codigo}</TableCell>
                        <TableCell>{item.descripcion}</TableCell>
                        <TableCell>{item.existencia}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table >

    );
}
