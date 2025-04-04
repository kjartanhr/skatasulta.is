import { GlobalConfig } from "payload";

export const Homepage: GlobalConfig = {
    slug: "homepage",
    label: "Heimasíða",
    access: {
        read: () => true,
    },
    fields: [
        {
            label: "Forsíðugrein",
            name: "featuredPost",
            type: "relationship",
            relationTo: "posts",
            admin: {
                description: "Ef ekkert er valið verður síðast birta greinin valin.",
            },
        },
        {
            label: 'Titill á "Nýjustu fréttir" lista',
            name: "latestSectionTitle",
            type: "text",
            admin: {
                description: "Birtist sem titill fyrir ofan lista af greinum á heimasíðu.",
            },
        },
    ],
};
