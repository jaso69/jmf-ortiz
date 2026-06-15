import { Award, HeartHandshake, Building2, Headset, Scale, ClipboardCheck, Home, Building, ShieldCheck, FileSpreadsheet, BarChart3, ShieldQuestion, Wrench, Landmark, Key } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Users;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Award,
                title: 'Experiencia y profesionalidad',
                description: 'Nos encargamos de todos los aspectos de la gestión de su comunidad de vecinos con rigor y conocimiento del sector.'
            },
            {
                icon: HeartHandshake,
                title: 'El valor de la empresa familiar',
                description: 'Sabemos lo importante que es vivir en un ambiente tranquilo y seguro donde se respetan las normas y las instalaciones se mantienen en perfecto estado.'
            },
            {
                icon: Building2,
                title: 'No importa el tamaño de tu comunidad',
                description: 'Nos adaptamos a cada necesidad. Nuestro objetivo es brindarle un servicio eficiente y de calidad que le ahorre tiempo y dinero.'
            },
            {
                icon: Headset,
                title: 'Cercanía y comunicación fluida',
                description: 'Nos preocupamos por cada detalle y mantenemos una comunicación continua con los propietarios para resolver sus dudas con agilidad.'
            },
            {
                icon: Scale,
                title: 'Honestidad y transparencia',
                description: 'Trabajamos con integridad, mantenemos una gestión financiera impecable y cuidamos los recursos de la comunidad como si fueran propios.'
            },
            {
                icon: ClipboardCheck,
                title: 'Experiencia que aporta soluciones',
                description: 'Nuestra trayectoria nos permite anticiparnos a problemas potenciales y ofrecer soluciones efectivas y eficientes.'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Home,
                title: 'Comprometidos con tu comunidad',
                description: 'Mejoramos la calidad de vida en su comunidad mediante una administración personalizada y eficaz, adaptada a sus necesidades gracias a más de 40 años de experiencia.'
            },
            {
                icon: Landmark,
                title: 'Gestión eficaz para una convivencia tranquila',
                description: 'Ofrecemos una gestión integral que garantiza una convivencia tranquila y segura, atendiendo rápidamente las necesidades de cada propietario.'
            },

        ]
    },
    third: {
        id: 'third',
        features: [
            {
                icon: Building,
                title: 'Conservación del edificio',
                description: 'Ofrecemos un servicio integral de conservación para mantener y aumentar el valor patrimonial de cada comunidad.'
            },
            {
                icon: Wrench,
                title: 'Atención inmediata ante incidencias',
                description: 'Estamos preparados para responder con rapidez y eficacia ante cualquier emergencia, minimizando daños y tiempos de respuesta.'
            },

        ]
    },
    fourth: {
        id: 'fourth',
        features: [
            {
                icon: BarChart3,
                title: 'Estabilidad económica para su comunidad',
                description: 'Cuidamos la salud financiera de su comunidad para asegurar su estabilidad y crecimiento a largo plazo.'
            },
            {
                icon: FileSpreadsheet,
                title: 'Gestión financiera precisa y transparente',
                description: 'Aplicamos una gestión financiera rigurosa y transparente para garantizar estabilidad, control de gastos y tranquilidad para su comunidad.'
            },

        ]
    },
    fifth: {
        id: 'fifth',
        features: [
            {
                icon: ShieldCheck,
                title: 'Gestión integral de seguros comunitarios',
                description: 'Gestionamos por completo los seguros de tu comunidad, desde la contratación hasta la resolución de siniestros, para que no tengas que preocuparte por nada.'
            },
            {
                icon: Key,
                title: 'Seguridad y claridad para los propietarios',
                description: 'Buscamos que cada propietario comprenda claramente sus seguros y confíe plenamente en la gestión de su comunidad, sin confusiones ni preocupaciones.'
            },

        ]
    },
};
