export type Event = {
    id: number;
    name: string;
    description: string;
    image: string;
};

export const events: Event[] = [
    {
        id: 1,
        name: "Mixer with BU Chess Club",
        description: `we re hosting a mixer with BU chess club! We will 
                      provide free food and drinks...`,
        image: "/2024president.jpg",
    },
    {
        id: 2,
        name: "King of Chess Tournament",
        description: `We are so excited for our upcoming annual King of Chess
                      Tournament. We will divide into teams of two ...`,
        image: "/jonahpflaster.jpg",
    },
    {
        id: 3,
        name: "Dumpling Bonding at Davis Square",
        description: `We are so excited to have our dumpling bonding again. 
                      We will also have a chance to celebrate for Lunar New Year
                       ...`,
        image: "/samyoukleles.jpg",
    },
];