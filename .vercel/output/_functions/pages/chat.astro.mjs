import { c as createComponent, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DM6RdcRZ.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_B_0C6Nk_.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Administrador virtual | JMF Ortiz";
  const seoDescription = "Administrador virtual de la administraci\xF3n de fincas en Torrej\xF3n de Ardoz con m\xE1s de 40 a\xF1os de experiencia. Presupuesto gratuito y sin compromiso.";
  const heroContent = {
    title: "Administrador Virtual",
    description: "JMF Ortiz"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription, "footerCta": {
    title: "",
    description: "",
    hideCta: true,
    button: { text: "", link: "" }
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<div id="n8n-chat" class="flex-1 min-h-0 flex max-w-4xl w-full mx-auto bg-background-dark rounded-xl shadow-lg overflow-hidden py-6 px-2 mt-10 mb-10"></div> ` })} ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/pages/chat/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/chat/index.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/chat/index.astro";
const $$url = "/chat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
