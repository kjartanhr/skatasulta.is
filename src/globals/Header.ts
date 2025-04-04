import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
    slug: "header",
    label: "Síðuhaus",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "logoLight",
            label: "Merki á ljósum bakgrunni",
            type: "upload",
            relationTo: "media",
        },
        {
            name: "logoDark",
            label: "Merki á dökkum bakgrunni",
            type: "upload",
            relationTo: "media",
        },
    ],
};
