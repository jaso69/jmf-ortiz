import { c as createComponent, a as createAstro, r as renderComponent, m as maybeRenderHead, b as renderTemplate, d as addAttribute, e as renderScript, l as renderSlot, u as unescapeHTML } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { $ as $$, b as $$Button, a as $$Layout } from '../chunks/Layout_DM6RdcRZ.mjs';
import '../chunks/index_DY4PQEDO.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CJQ8NGH-.mjs';
import { b as $$Eyebrow, a as $$Features, f as featureLists, $ as $$SplitPanel, s as styleGuideImage } from '../chunks/features_OdK7I8pJ.mjs';
import { a as getPaddingClass, g as getBackgroundColor, b as getTextColor, c as getHeadlineColor } from '../chunks/styleUtils_H8kULClC.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("http://localhost:4321");
const $$Minus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Minus;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "minus", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M5 12h14"></path> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/node_modules/lucide-astro/dist/Minus.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:4321");
const $$Plus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Plus;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "plus", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M5 12h14"></path> <path d="M12 5v14"></path> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/node_modules/lucide-astro/dist/Plus.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const { content } = Astro2.props;
  const opacity = content.overlayOpacity ?? 1;
  return renderTemplate`${maybeRenderHead()}<section class="header-offset relative"> ${content.backgroundImage && renderTemplate`<div class="absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": content.backgroundImage, "alt": "", "width": 1920, "height": 1080, "class": "w-full h-full object-cover brightness-30", "quality": 70, "format": "webp", "loading": "eager", "decoding": "async" })} <div class="hero-background absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"${addAttribute(`opacity: ${opacity};`, "style")}></div> </div>`} <div class="site-container mx-auto px-4 py-large relative z-10 flex flex-col md:items-center md:justify-center md:text-center"> <h1 class="text-white text-balance" data-aos="fade-up">${content.title}</h1> <p class="text-white mt-2 text-balance" data-aos="fade-up" data-aos-delay="100">${content.description}</p> ${content.buttons && content.buttons.length > 0 && renderTemplate`<div class="flex flex-wrap gap-4 mt-8" data-aos="fade-up"> ${content.buttons.map((button) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": button.link, "target": button.target || "_self", "variant": button.variant || "primary" }, { "default": ($$result2) => renderTemplate`${button.text}` })}`)} </div>`} </div> </section>`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/sections/Hero.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$Stats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Stats;
  const {
    content,
    background = "base",
    padding,
    paddingTop,
    paddingBottom
  } = Astro2.props;
  const variant = content.variant || "default";
  const {
    eyebrow,
    title,
    description,
    stats,
    content: contentContent
  } = content;
  const bgColor = getBackgroundColor(background);
  const textColor = getTextColor(background);
  const paddingClass = getPaddingClass({ padding, paddingTop, paddingBottom });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["overflow-hidden", bgColor, paddingClass], "class:list")}> <div class="site-container px-4"> ${variant === "default" && (title || description) && renderTemplate`<div class="text-center mb-16"> ${eyebrow && renderTemplate`${renderComponent($$result, "Eyebrow", $$Eyebrow, { "text": eyebrow, "background": background })}`} ${title && renderTemplate`<h2${addAttribute([textColor], "class:list")} data-aos="fade-up"> ${title} </h2>`} ${description && renderTemplate`<p${addAttribute(["mt-4", textColor, "opacity-90"], "class:list")} data-aos="fade-up" data-aos-delay="100"> ${description} </p>`} </div>`} <div${addAttribute([
    variant === "side-by-side" ? "grid md:grid-cols-2 gap-12 items-center" : ""
  ], "class:list")}> ${variant === "side-by-side" && contentContent && renderTemplate`<div class="content-section" data-aos="fade-right"> ${eyebrow && renderTemplate`${renderComponent($$result, "Eyebrow", $$Eyebrow, { "text": eyebrow, "background": background })}`} <h2${addAttribute([textColor], "class:list")}>${contentContent.title}</h2> <p${addAttribute(["mt-4", textColor, "opacity-90"], "class:list")}>${contentContent.description}</p> ${contentContent.button && renderTemplate`<div class="mt-8"> ${renderComponent($$result, "Button", $$Button, { "href": contentContent.button.link, "variant": contentContent.button.variant || "primary" }, { "default": ($$result2) => renderTemplate`${contentContent.button.text}` })} </div>`} </div>`} <div${addAttribute([
    variant === "default" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" : "grid grid-cols-2 gap-8"
  ], "class:list")}> ${stats.map((stat, index) => renderTemplate`<div class="text-center"${addAttribute(variant === "side-by-side" ? "fade-left" : "fade-up", "data-aos")}${addAttribute(index * 100, "data-aos-delay")}> <div${addAttribute(["text-4xl font-bold mb-2", textColor], "class:list")}> <span class="stat-number"${addAttribute(stat.value, "data-target")}> ${stat.prefix || ""}${0}${stat.suffix || ""} </span> </div> <p${addAttribute(["text-lg", textColor, "opacity-90"], "class:list")}> ${stat.label} </p> </div>`)} </div> </div> </div> </section> ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/components/sections/Stats.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/sections/Stats.astro", void 0);

const statsLists = {
  withContent: {
    stats: [
      {
        value: 40,
        label: "Màs de 40 años de experiencia"
      },
      {
        value: 100,
        label: "Màs de 100 comundades"
      }
    ]
  }
};

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Details = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Details;
  const { open } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "titan-details", "titan-details", { "open": open, ...Astro2.props, "data-astro-cid-523o6diq": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<h3 class="w-full text-left" data-astro-cid-523o6diq> <button class="group w-full flex items-center justify-between cursor-pointer"${addAttribute(!!open, "aria-expanded")} data-astro-cid-523o6diq> ${renderSlot($$result, $$slots["heading"])} ${renderComponent($$result, "Plus", $$Plus, { "class": "w-6 h-6 flex-shrink-0 transition-transform duration-200 ease-out group-hover:scale-110", "aria-hidden": "true", "data-astro-cid-523o6diq": true })} ${renderComponent($$result, "Minus", $$Minus, { "class": "w-6 h-6 flex-shrink-0 transition-transform duration-200 ease-out group-hover:scale-110", "aria-hidden": "true", "data-astro-cid-523o6diq": true })} </button> </h3> <div class="content grid grid-rows-[0fr] transition-all duration-200 ease-out"${addAttribute(!open, "aria-hidden")} data-astro-cid-523o6diq> ${renderSlot($$result, $$slots["default"])} </div> ` })}  ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/components/ui/Details.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/ui/Details.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:4321");
const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faqs;
  const {
    content: { eyebrow, title, description, faqs },
    background = "base"
  } = Astro2.props;
  const bgColor = getBackgroundColor(background);
  const paddingClass = getPaddingClass({
    padding: Astro2.props.padding,
    paddingTop: Astro2.props.paddingTop,
    paddingBottom: Astro2.props.paddingBottom
  });
  const headlineColor = getHeadlineColor(background);
  const textColor = getTextColor(background);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  };
  return renderTemplate(_a || (_a = __template(["", "<section", '> <script type="application/ld+json">', '<\/script> <div class="site-container px-4"> ', ' <div class="max-w-3xl mx-auto"> <div class="divide-y divide-gray-200"> ', " </div> </div> </div> </section>"])), maybeRenderHead(), addAttribute(["relative", bgColor, paddingClass], "class:list"), unescapeHTML(JSON.stringify(faqSchema)), (title || description) && renderTemplate`<div class="max-w-3xl mx-auto text-center mb-12"> ${eyebrow && renderTemplate`${renderComponent($$result, "Eyebrow", $$Eyebrow, { "text": eyebrow, "background": background })}`} ${title && renderTemplate`<h2 data-aos="fade-up"${addAttribute(["text-3xl font-bold mb-4", headlineColor], "class:list")}>${title}</h2>`} ${description && renderTemplate`<p data-aos="fade-up"${addAttribute(["text-lg", textColor], "class:list")}>${description}</p>`} </div>`, faqs.map(({ question, answer }, index) => renderTemplate`${renderComponent($$result, "Details", $$Details, { "class": "py-6", "data-aos": "fade-up", "data-aos-delay": index * 100 }, { "default": ($$result2) => renderTemplate`  <div class="overflow-hidden"> <div${addAttribute(["pt-4 pr-8 text-small", textColor], "class:list")}>${answer}</div> </div> `, "heading": ($$result2) => renderTemplate`<span${addAttribute(["pr-8 text-xl font-semibold", [headlineColor]], "class:list")}>${question}</span>` })}`));
}, "/home/jose/Escritorio/jmf/JMF/src/components/sections/Faqs.astro", void 0);

const faqLists = {
  main: {
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

const heroImage = new Proxy({"src":"/_astro/hero.DYWMzM_V.webp","width":1001,"height":753,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jose/Escritorio/jmf/JMF/src/assets/images/home/hero.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Administradores de fincas JMF Ortiz";
  const seoDescription = "Administradores de Fincas en Torrej\xF3n de Ardoz con m\xE1s de 40 a\xF1os de experiencia. Presupuesto gratuito y sin compromiso.";
  const heroContent = {
    title: "Administradores de fincas JMF Ortiz",
    description: "Administradores de Fincas en Torrej\xF3n de Ardoz con m\xE1s de 40 a\xF1os de experiencia. Presupuesto gratuito y sin compromiso.",
    buttons: [
      {
        text: "Contacto",
        link: "/contact",
        target: "_self"
      },
      {
        text: "Habla con nuestro Administrador virtual",
        link: "/chat",
        target: "_self"
      }
    ],
    backgroundImage: heroImage,
    overlayOpacity: 0.2
  };
  const featuresSection = {
    eyebrow: "",
    title: "Gesti\xF3n de fincas en Torrej\xF3n de Ardoz",
    description: "Somos una empresa especializada en la administraci\xF3n y mantenimiento integral de comunidades. Con nuestra experiencia en el sector, nos esforzamos por ofrecer un servicio de alta calidad y un enfoque en la gesti\xF3n de fincas.",
    features: featureLists.main.features,
    button: {
      text: "Resuelve tus dudas con nuestro agente",
      link: "/chat",
      variant: "primary"
    }
  };
  const FooterCta = {
    eyebrow: "",
    title: " Contacto con la administraci\xF3n de fincas",
    description: "Ponemos a tu disposici\xF3n un tel\xE9fono con centralita para que ninguna llamada se pierda, un formulario de contacto para atender tus consultas y un asistente virtual disponible las 24 horas.",
    hideCta: false,
    button: {
      text: "Habla con nosotros",
      link: "/contact",
      target: "_self"
    }
  };
  const styleGuideSection = {
    eyebrow: "",
    headline: "Nos Ocupamos de Todo",
    description: "Nos encargamos de la contabilidad, gesti\xF3n de cobros, contrataci\xF3n de servicios, mantenimiento de instalaciones y cualquier otro tr\xE1mite necesario.",
    image: {
      src: styleGuideImage,
      alt: "Featured image"
    },
    buttons: [
      {
        text: "Servicios que ofrecemos",
        link: "/services",
        variant: "primary"
      }
    ]
  };
  const sideBySideStats = {
    eyebrow: "",
    title: "Experiencia y profesionalidad",
    description: "Desde hace muchos a\xF1os somos especialistas en gesti\xF3n y administraci\xF3n de fincas, aportando confianza y tranquilidad. Somos un equipo, cada uno comprometido con la calidad y la transparencia.",
    variant: "side-by-side",
    stats: statsLists.withContent.stats,
    content: {
      title: "Experiencia y profesionalidad",
      description: "Desde hace muchos a\xF1os somos especialistas en gesti\xF3n y administraci\xF3n de fincas, aportando confianza y tranquilidad. Somos un equipo, cada uno comprometido con la calidad y la transparencia."
    }
  };
  const faqsSection = {
    eyebrow: "FAQs",
    title: "Preguntas Frecuentes",
    description: "Encuentra respuestas a las preguntas m\xE1s comunes sobre nuestra Administraci\xF2n y servicios.",
    faqs: faqLists.main.faqs
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "footerCta": FooterCta, "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "content": heroContent })} ${renderComponent($$result2, "Features", $$Features, { "content": featuresSection, "padding": "base", "background": "dark" })} ${renderComponent($$result2, "SplitPanel", $$SplitPanel, { "content": styleGuideSection, "imagePosition": "right", "background": "dark", "padding": "base" })} ${renderComponent($$result2, "Stats", $$Stats, { "content": sideBySideStats, "background": "dark", "padding": "base" })} ${renderComponent($$result2, "Faqs", $$Faqs, { "content": faqsSection, "background": "dark", "padding": "base" })} ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/index.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
