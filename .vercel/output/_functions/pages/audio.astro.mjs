import { c as createComponent, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DM6RdcRZ.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_B_0C6Nk_.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const seoTitle = "Audios Actas | JMF Ortiz";
  const seoDescription = "Servicios de la administraci\xF3n de fincas en Torrej\xF3n de Ardoz con m\xE1s de 40 a\xF1os de experiencia. Presupuesto gratuito y sin compromiso.";
  const heroContent = {
    title: "Audios Actas",
    description: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-2/3 px-4 py-2 text-amber-50"> <label for="archivo">Selecciona un archivo:</label> <input type="file" name="archivo" id="archivo" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> <h1 class="hidden text-2xl text-green-600 animate-pulse load">Generando acta</h1> </div> ` })} ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/pages/audio/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/audio/index.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/audio/index.astro";
const $$url = "/audio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
