import { c as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DM6RdcRZ.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_B_0C6Nk_.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$VerifyEmail = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center mt-8 mb-8" data-astro-cid-jtlqjkx5> <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md" data-astro-cid-jtlqjkx5> <!-- Header --> <div class="text-center mb-8" data-astro-cid-jtlqjkx5> <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-jtlqjkx5> <i class="fas fa-envelope text-blue-600 text-2xl" data-astro-cid-jtlqjkx5></i> </div> <h1 class="text-2xl font-bold text-gray-900" data-astro-cid-jtlqjkx5>Verificación de Email</h1> <p class="text-gray-600 mt-2" data-astro-cid-jtlqjkx5>Ingresa el código que enviamos a tu correo</p> </div> <!-- Email display --> <div class="bg-blue-50 rounded-lg p-4 mb-6 text-center" data-astro-cid-jtlqjkx5> <p class="text-sm text-gray-700" data-astro-cid-jtlqjkx5>
Código enviado a:
<span id="userEmail" class="font-semibold text-blue-700" data-astro-cid-jtlqjkx5></span> </p> </div> <!-- Verification form --> <form id="verifyForm" data-astro-cid-jtlqjkx5> <!-- Code inputs --> <div class="flex justify-between gap-2 mb-6 " data-astro-cid-jtlqjkx5> <input type="text" class="code-input w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200" maxlength="1" pattern="[0-9]" inputmode="numeric" data-astro-cid-jtlqjkx5> <input type="text" class="code-input w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200" maxlength="1" pattern="[0-9]" inputmode="numeric" data-astro-cid-jtlqjkx5> <input type="text" class="code-input w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200" maxlength="1" pattern="[0-9]" inputmode="numeric" data-astro-cid-jtlqjkx5> <input type="text" class="code-input w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200" maxlength="1" pattern="[0-9]" inputmode="numeric" data-astro-cid-jtlqjkx5> <input type="text" class="code-input w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200" maxlength="1" pattern="[0-9]" inputmode="numeric" data-astro-cid-jtlqjkx5> <input type="text" class="code-input w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200" maxlength="1" pattern="[0-9]" inputmode="numeric" data-astro-cid-jtlqjkx5> </div> <!-- Submit button --> <button type="submit" id="verifyBtn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center" data-astro-cid-jtlqjkx5> <span data-astro-cid-jtlqjkx5>Verificar Código</span> </button> </form> <!-- Messages container --> <div id="messageContainer" class="mt-4" data-astro-cid-jtlqjkx5></div> <!-- Resend code link --> <div class="text-center mt-6" data-astro-cid-jtlqjkx5> <p class="text-sm text-gray-600" data-astro-cid-jtlqjkx5>
¿No recibiste el código?
<a href="resend-code.html" class="text-blue-600 hover:text-blue-800 font-semibold transition duration-200" data-astro-cid-jtlqjkx5>
Reenviar código
</a> </p> </div> <!-- Back to login --> <div class="text-center mt-4" data-astro-cid-jtlqjkx5> <a href="index.html" class="text-gray-500 hover:text-gray-700 text-sm transition duration-200" data-astro-cid-jtlqjkx5> <i class="fas fa-arrow-left mr-1" data-astro-cid-jtlqjkx5></i>
Volver al inicio de sesión
</a> </div> </div> </div> ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/components/forms/VerifyEmail.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/jose/Escritorio/jmf/JMF/src/components/forms/VerifyEmail.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Login | JMF Ortiz";
  const seoDescription = "Servicios de la administraci\xF3n de fincas en Torrej\xF3n de Ardoz con m\xE1s de 40 a\xF1os de experiencia. Presupuesto gratuito y sin compromiso.";
  const heroContent = {
    title: "Login",
    description: "Comunidades de vecinos"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "VerifyEmail", $$VerifyEmail, {})} ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/verify/index.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/verify/index.astro";
const $$url = "/verify";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
