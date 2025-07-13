import { Users, Heart, Coffee, Scale, MessageSquare, Smile, TabletSmartphone, Lightbulb, House, Home, Building, AlertCircle, BarChart3, FileSpreadsheet, ShieldCheck, ShieldQuestion } from 'lucide-astro';

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
                icon: Users,
                title: 'Experiencia y profesionalidad',
                description: 'Nos encargamos de todos los aspectos de la gestión de su comunidad de vecinos'
            },
            {
                icon: House,
                title: 'El valor de la empresa familiar en la administración',
                description: ' Sabemos lo importante que es para ti vivir en un ambiente tranquilo y seguro donde se respetan las normas y las instalaciones se mantienen en perfecto estado en todo momento. '
            },
            {
                icon: TabletSmartphone,
                title: 'No importa el tamaño de tu comunidad',
                description: 'Nos adaptamos a cada necesidad. Nuestro objetivo es brindarle un servicio eficiente y de calidad que le ahorre tiempo y dinero.'
            },
            {
                icon: MessageSquare,
                title: 'Cercanía y Profesionalismo',
                description: 'Nos preocupamos por cada detalle y nos esforzamos por mantener una comunicación fluida y continua con los propietarios.'
            },
            {
                icon: Scale,
                title: 'Honestidad y Control en Cada Decisión',
                description: 'Trabajamos con transparencia y honestidad, mantenemos una impecable gestión financiera y cuidamos los recursos de la comunidad como si fueran propios.'
            },
            {
                icon: Lightbulb,
                title: 'Experiencia que Aporta Soluciones',
                description: 'Nuestra experiencia y conocimiento nos permite anticiparnos a problemas potenciales y entregar soluciones efectivas y eficientes.'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Home,
                title: 'Comprometidos con tu Comunidad',
                description: 'Mejoramos la calidad de vida en su comunidad mediante una administración personalizada y eficaz, adaptada a sus necesidades gracias a nuestra experiencia'
            },
            {
                icon: Users,
                title: 'Gestión Eficaz para una Convivencia Tranquila',
                description: 'Ofrecemos una gestión integral y eficiente que garantiza una convivencia tranquila y segura, atendiendo rápidamente las necesidades de cada propietario gracias a nuestra experiencia en administración de fincas'
            },

        ]
    },
    third: {
        id: 'third',
        features: [
            {
                icon: Building,
                title: 'Conservación del Edificio',
                description: 'Ofrecemos un servicio integral de conservación para mantener y aumentar el valor patrimonial de cada comunidad.'
            },
            {
                icon: AlertCircle,
                title: 'Atención Inmediata en Situaciones Críticas',
                description: 'Estamos preparados para responder con rapidez y eficacia ante cualquier emergencia, minimizando daños y tiempos de respuesta.'
            },

        ]
    },
    fourth: {
        id: 'fourth',
        features: [
            {
                icon: BarChart3,
                title: 'Estabilidad Económica para su Comunidad',
                description: 'Cuidamos la salud financiera de su comunidad para asegurar su estabilidad y crecimiento a largo plazo.'
            },
            {
                icon: FileSpreadsheet,
                title: 'Gestión Financiera Precisa y Transparente',
                description: 'Aplicamos una gestión financiera rigurosa y transparente para garantizar estabilidad, control de gastos y tranquilidad para su comunidad.'
            },

        ]
    },
    fifth: {
        id: 'fifth',
        features: [
            {
                icon: ShieldCheck,
                title: 'Gestión Integral de Seguros Comunitarios',
                description: 'Gestionamos por completo los seguros de tu comunidad, desde la contratación hasta la resolución de siniestros, para que no tengas que preocuparte por nada.'
            },
            {
                icon: ShieldQuestion,
                title: 'Seguridad y Claridad para los Propietarios',
                description: 'Buscamos que cada propietario comprenda claramente sus seguros y confíe plenamente en la gestión de su comunidad, sin confusiones ni preocupaciones.'
            },

        ]
    },
};
