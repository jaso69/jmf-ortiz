export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "¿Qué servicios incluye la administración de fincas?",
                answer: "Nuestros servicios incluyen la contabilidad completa de la comunidad, gestión de cobros y pagos, organización de juntas, mantenimiento de instalaciones, contratación de proveedores, atención a incidencias y asesoramiento legal básico."
            },
            {
                question: "¿Qué nos diferencia de otras administraciones?",
                answer: "Contamos con más de 40 años de experiencia en la gestión de comunidades, ofreciendo un trato cercano, gestión transparente y soluciones efectivas. Nos adelantamos a los problemas y trabajamos con herramientas digitales que facilitan la comunicación con los propietarios."
            },
            {
                question: "¿Qué coste tiene contratar a un administrador de fincas?",
                answer: "El coste depende del tamaño de la comunidad, número de vecinos y servicios contratados. Ofrecemos presupuestos personalizados, gratuitos y sin compromiso. Siempre ajustados a las necesidades reales de cada comunidad."
            },
            {
                question: "¿Cómo se puede contactar con el administrador ante una urgencia?",
                answer: "Disponemos de canales de atención urgentes por teléfono y correo electrónico. Además, algunas comunidades tienen acceso a un área privada online donde pueden reportar incidencias las 24 horas."
            },
            {
                question: "¿Pueden encargarse del mantenimiento técnico del edificio?",
                answer: "Sí, coordinamos y supervisamos el mantenimiento preventivo y correctivo de instalaciones comunes: ascensores, sistemas eléctricos, fontanería, limpieza, etc. Trabajamos con proveedores de confianza y controlamos la calidad del servicio prestado."
            }
        ]
    }
};
