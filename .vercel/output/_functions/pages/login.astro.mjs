import { c as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DM6RdcRZ.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_B_0C6Nk_.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$LoginForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center bg-background-dark m-14"> <div class="bg-white p-8 rounded-lg shadow-md w-96"> <h2 class="text-2xl font-bold text-center mb-6 text-red-800">Iniciar Sesión</h2> <form class="space-y-4"> <div> <label for="username" class="block text-sm font-medium text-gray-700 mb-1">
Correo electrónico
</label> <input type="email" id="username" name="username" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="tu@email.com"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
Contraseña
</label> <input type="password" id="password" name="password" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="••••••••"> </div> <button id="submit" type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200">
Iniciar Sesión
</button> </form> <div class="mt-6 text-center"> <p class="text-sm text-gray-600">
¿No tienes cuenta?${" "} <a href="/register" class="text-blue-600 hover:text-blue-500 font-medium">
Regístrate
</a> </p> </div> </div> </div> ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/components/forms/LoginForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/forms/LoginForm.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Login | JMF Ortiz";
  const seoDescription = "Servicios de la administraci\xF3n de fincas en Torrej\xF3n de Ardoz con m\xE1s de 40 a\xF1os de experiencia. Presupuesto gratuito y sin compromiso.";
  const heroContent = {
    title: "Login",
    description: "Comunidades de vecinos"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "LoginForm", $$LoginForm, {})} ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/login/index.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/login/index.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
