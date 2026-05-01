import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DM6RdcRZ.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_B_0C6Nk_.mjs';
import { $ as $$SplitPanel, s as styleGuideImage, a as $$Features, f as featureLists } from '../chunks/features_OdK7I8pJ.mjs';
export { renderers } from '../renderers.mjs';

const mantenimientoImg = new Proxy({"src":"/_astro/mante.C3MG_4Vr.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jose/Escritorio/jmf/JMF/src/assets/images/home/mante.webp";
							}
							
							return target[name];
						}
					});

const seguroImg = new Proxy({"src":"/_astro/seguro.CNG1IXi4.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jose/Escritorio/jmf/JMF/src/assets/images/home/seguro.webp";
							}
							
							return target[name];
						}
					});

const gestionImg = new Proxy({"src":"/_astro/gestion.D9HcShAv.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jose/Escritorio/jmf/JMF/src/assets/images/home/gestion.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Servicios | JMF Ortiz";
  const seoDescription = "Servicios de la administraci\xF3n de fincas en Torrej\xF3n de Ardoz con m\xE1s de 40 a\xF1os de experiencia. Presupuesto gratuito y sin compromiso.";
  const heroContent = {
    title: "Servicios",
    description: "Comunidades de vecinos"
  };
  const firstSection = {
    eyebrow: "",
    headline: "Gesti\xF3n de todos los aspectos de la comunidad",
    description: "Desde la gesti\xF3n econ\xF3mica hasta el mantenimiento de las instalaciones. Todo esto con un enfoque en la transparencia y la seguridad.",
    image: {
      src: styleGuideImage,
      alt: "Featured image"
    }
  };
  const secondSection = {
    eyebrow: "",
    headline: "Mantenimiento y reparaciones ",
    description: "Nuestra prioridad es crear un plan de mantenimiento integral adaptado a las necesidades de su edificio, que cubre desde tareas menores hasta proyectos mayores, con un enfoque en la transparencia y la seguridad.",
    image: {
      src: mantenimientoImg,
      alt: "Mantenimiento"
    }
  };
  const thirdSection = {
    eyebrow: "",
    headline: "Administraci\xF3n Financiera",
    description: "Gestionamos de forma clara, precisa y responsable todos los aspectos econ\xF3micos de tu comunidad. Nos encargamos de la contabilidad, elaboraci\xF3n de presupuestos, control de ingresos y gastos, gesti\xF3n de morosos y presentaci\xF3n de informes peri\xF3dicos. ",
    image: {
      src: gestionImg,
      alt: "gestion image"
    }
  };
  const fourthSection = {
    eyebrow: "",
    headline: "Seguros para Comunidades",
    description: "Analizamos las necesidades de tu comunidad para ofrecerte el seguro m\xE1s adecuado, combinando la mejor cobertura con precios competitivos gracias a nuestra experiencia en el sector.",
    image: {
      src: seguroImg,
      alt: "seguros image"
    }
  };
  const featuresSection = {
    features: featureLists.secondary.features
  };
  const mantenimientoSection = {
    features: featureLists.third.features
  };
  const adminSection = {
    features: featureLists.fourth.features
  };
  const seguroSection = {
    features: featureLists.fifth.features
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "SplitPanel", $$SplitPanel, { "content": firstSection, "imagePosition": "right", "background": "dark", "padding": "base" })} ${renderComponent($$result2, "Features", $$Features, { "content": featuresSection, "padding": "base", "background": "dark" })} ${renderComponent($$result2, "SplitPanel", $$SplitPanel, { "content": secondSection, "imagePosition": "left", "background": "dark", "padding": "base" })} ${renderComponent($$result2, "Features", $$Features, { "content": mantenimientoSection, "padding": "base", "background": "dark" })} ${renderComponent($$result2, "SplitPanel", $$SplitPanel, { "content": thirdSection, "imagePosition": "right", "background": "dark", "padding": "base" })} ${renderComponent($$result2, "Features", $$Features, { "content": adminSection, "padding": "base", "background": "dark" })} ${renderComponent($$result2, "SplitPanel", $$SplitPanel, { "content": fourthSection, "imagePosition": "left", "background": "dark", "padding": "base" })} ${renderComponent($$result2, "Features", $$Features, { "content": seguroSection, "padding": "base", "background": "dark" })} ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/services/index.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
