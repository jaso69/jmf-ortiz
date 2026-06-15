export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 40,
                label: 'Años de experiencia',
                suffix: '+'
            },
            {
                value: 100,
                label: 'Comunidades gestionadas',
                suffix: '+'
            },
            {
                value: 1,
                label: 'Objetivo: tu tranquilidad'
            }
        ]
    },
    withContent: {
        id: 'withContent',
        stats: [
            {
                value: 40,
                label: 'Más de 40 años de experiencia',
                suffix: '+'
            },
            {
                value: 100,
                label: 'Más de 100 comunidades gestionadas',
                suffix: '+'
            },

        ]
    }
};
