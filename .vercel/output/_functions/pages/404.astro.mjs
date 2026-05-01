import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { a as $$Layout, b as $$Button } from '../chunks/Layout_DM6RdcRZ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Page Not Found";
  const seoDescription = "The page you're looking for doesn't exist or has been moved.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full min-h-[80vh] flex items-center"> <div class="site-container mx-auto px-4 py-base text-center"> <div class="max-w-2xl mx-auto"> <h1 class="mb-4 text-9xl font-bold text-primary" data-aos="fade-up">404</h1> <h2 class="mb-8" data-aos="fade-up" data-aos-delay="100">Page Not Found</h2> <p class="text-body-base mb-12" data-aos="fade-up" data-aos-delay="200">
La página que estás buscando no existe o ha sido movida.
                    Por favor, revisa la URL o vuelve a nuestra página de inicio.
</p> <div data-aos="fade-up" data-aos-delay="300"> ${renderComponent($$result2, "Button", $$Button, { "href": "/", "variant": "primary", "size": "lg" }, { "default": ($$result3) => renderTemplate`
Inicio
` })} </div> </div> </div> </div> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/404.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
