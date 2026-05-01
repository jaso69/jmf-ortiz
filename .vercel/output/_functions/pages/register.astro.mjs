import { c as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DM6RdcRZ.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_B_0C6Nk_.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$RegisterForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center mt-8 mb-8"> <div class="flex items-center justify-center w-2xl bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl"> <div class="max-w-md w-full space-y-8"> <div> <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
Crear nueva cuenta
</h2> <p class="mt-2 text-center text-sm text-gray-600">
O${" "} <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
inicia sesión en tu cuenta
</a> </p> </div> <form class="mt-8 space-y-6" method="POST"> <div class="space-y-4"> <!-- Campo Nombre Completo --> <div> <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
Nombre completo
</label> <input id="name" name="name" type="text" autocomplete="name" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tu nombre"> </div> <!-- Campo Username (Email) --> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
Correo electrónico
</label> <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="tu@email.com"> </div> <!-- Campo Contraseña --> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
Contraseña
</label> <input id="password" name="password" type="password" autocomplete="new-password" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mínimo 8 caracteres" minlength="8"> <p class="mt-1 text-xs text-gray-500">
La contraseña debe tener al menos 8 caracteres
</p> </div> <!-- Campo Repetir Contraseña --> <div> <label for="confirm-password" class="block text-sm font-medium text-gray-700 mb-1">
Repetir contraseña
</label> <input id="confirm-password" name="confirmPassword" type="password" autocomplete="new-password" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Repite tu contraseña" minlength="8"> </div> </div> <div> <button id="submit" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"> <span class="absolute left-0 inset-y-0 flex items-center pl-3"> <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path> </svg> </span>
Crear cuenta
</button> </div> </form> <!-- Separador --> <div class="mt-6"> <div class="relative"> <div class="absolute inset-0 flex items-center"> <div class="w-full border-t border-gray-300"></div> </div> </div> </div> </div> </div> </div> ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/components/forms/RegisterForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/forms/RegisterForm.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Login | JMF Ortiz";
  const seoDescription = "Servicios de la administraci\xF3n de fincas en Torrej\xF3n de Ardoz con m\xE1s de 40 a\xF1os de experiencia. Presupuesto gratuito y sin compromiso.";
  const heroContent = {
    title: "Login",
    description: "Comunidades de vecinos"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "RegisterForm", $$RegisterForm, {})} ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/register/index.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/register/index.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
