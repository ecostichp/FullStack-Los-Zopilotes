import { Listbox, ListboxItem } from "@nextui-org/react";

const ListboxWrapper = ({ children }) => (
    <div className="w-full max-w-[260px] border-md px-1 py-2 rounded-small border-default-200 dark:border-default-100 divide-y divide-gray-800" >
        {children}
    </div>
);


export default function MenuAvatarUser() {
    const items = [
        {
            key: "perfil",
            label: "Mi perfil",
        },
        {
            key: "comisiones",
            label: "Mis comisiones",
        },
        {
            key: "bonos",
            label: "Mi puntualidad y asistencia",
        },
        {
            key: "sign-out",
            label: "Cerrar sesión",
        }
    ];

    return (
        <ListboxWrapper>
            <div className="flex flex-col gap-0.5 items-start justify-center m-2 ms-3 bottom-1">

                <h4 className="text-small font-semibold leading-none text-default-600">Monsieur Le Zopilote</h4>
                <h5 className="text-small tracking-tight text-default-400">@le_zopilotè</h5>
            </div>
            <Listbox
                items={items}
                aria-label="Dynamic Actions"
                onAction={(key) => alert(key)}
            >
                {(item) => (
                    <ListboxItem
                        key={item.key}
                        color={item.key === "sign-out" ? "danger" : "default"}
                        className={item.key === "sign-out" ? "text-danger" : ""}
                    >
                        {item.label}
                    </ListboxItem>
                )}
            </Listbox>
        </ListboxWrapper>
    );
}