import { GlobalConfig } from "payload";

export const License: GlobalConfig = {
    slug: "license",
    label: "Efnisleyfi",
    access: {
        read: () => true,
    },
    fields: [
        {
            label: "Titill",
            name: "title",
            type: "text",
        },
        {
            label: "Efni",
            name: "content",
            type: "richText",
        },
    ],
};
