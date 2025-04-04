import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
    slug: "footer",
    label: "Síðufótur",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "copyrightHolder",
            label: "Eigandi höfundarrétts",
            type: "text",
        },
        {
            name: "email",
            label: "Netfang",
            type: "text",
        },
        {
            name: "phone",
            label: "Símanúmer",
            type: "text",
        },
    ],
};
