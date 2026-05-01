import { c as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DM6RdcRZ.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_B_0C6Nk_.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$DashboardForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen bg-background-dark py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8"> <h2 class="text-3xl font-bold text-gray-900 mb-6">Registro de Reunión</h2> <form id="reunionForm" class="space-y-6"> <!-- Fecha --> <div class="flex gap-6 justify-around"> <div> <label for="fecha" class="block text-sm font-medium text-gray-700 mb-2">
Fecha
</label> <input type="date" id="fecha" name="fecha" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> </div> <div> <label for="fecha" class="block text-sm font-medium text-gray-700 mb-2">
Hora Inicio
</label> <input type="time" id="HoraInicio" name="HoraInicio" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> </div> <div> <label for="fecha" class="block text-sm font-medium text-gray-700 mb-2">
Hora Fin
</label> <input type="time" id="HoraFin" name="HoraFin" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> </div> </div> <div> <label for="numActa" class="block text-sm font-medium text-gray-700 mb-2">
Numero de Acta
</label> <input type="text" id="numActa" name="numActa" required placeholder="Numero de acta" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> </div> <div> <label for="placeJunta" class="block text-sm font-medium text-gray-700 mb-2">
Lugar de la reunión
</label> <input type="text" id="placeJunta" name="placeJunta" required placeholder="Lugar de la reunión" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> </div> <div class="flex flex-col"> <div class="flex justify-between"> <label for="administrador" class="text-sm font-medium text-gray-700 mb-2">
Administrador
</label> <label for="numColegiado" class="text-sm font-medium text-gray-700 mb-2">
Número de colegiado
</label> </div> <div class="flex gap-4"> <input type="text" id="administrador" name="administrador" required placeholder="Nombre del administrador" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> <input type="text" id="numColegiado" name="numColegiado" required placeholder="Número de colegiado" class="w-36 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> </div> </div> <!-- Orden del día --> <div id="ordenDiv"> <label for="ordenDia" class="block text-sm font-medium text-gray-700 mb-2">
Orden del día
</label> <input id="ordenDia" name="ordenDia" placeholder="Punto a tratar en la reunión" class="orden w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-vertical"> <button class="text-sm border-2 border-green-500 px-4 py-1 rounded-xl mt-2 text-green-700 hover:bg-green-100 hover:border-green-600 transition" type="button" id="addOrdenDia">
Añadir
</button> </div> <!---  Audio   --> <div class="mt-4"> <label for="audioFile" class="block text-sm font-medium text-gray-700 mb-2">
Archivo de audio
</label> <input type="file" id="audioFile" name="audioFile" accept="audio/*" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> </div> <!-- Comunidad --> <div> <label for="comunidad" class="block text-sm font-medium text-gray-700 mb-2">
Comunidad
</label> <select id="comunidad" name="comunidad" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> <option value="">Selecciona una comunidad</option> </select> <button type="button" id="loadAsistentes" class="hidden mt-2 text-sm text-blue-600 hover:underline">
Abrir lista de asistentes
</button> </div> <div class="disabled"> <label for="nombrePresidente" class="block text-sm font-medium text-gray-700 mb-2">
Presidente de la comunidad
</label> <select id="nombrePresidente" name="nombrePresidente" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"> <option value="">Selecciona</option> </select> </div> <!-- Botones --> <div class="flex gap-4 pt-4"> <button type="submit" class="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium">
Guardar Reunión
</button> <button type="reset" class="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition font-medium">
Limpiar
</button> </div> <h1 class="hidden text-2xl text-green-600 animate-pulse load">Generando acta</h1> </form> <!-- Mensaje de éxito (oculto por defecto) --> <div id="successMessage" class="hidden mt-6 p-4 bg-green-50 border border-green-200 rounded-md"> <p class="text-green-800 font-medium">✓ Reunión registrada correctamente</p> </div> </div> </div> <div id="formComunidad" class="flex flex-col absolute top-10 z-40 items-center border-8 border-amber-300 rounded-4xl w-full justify-center p-16 bg-blue-900 hidden"> <div class="flex w-full justify-center mb-10"> <div id="tabla-comunidad" class="mt-8 ml-16 px-4"> <table class="min-w-full bg-white border border-gray-300 rounded-xl shadow-md"> <thead class="bg-gray-500 font-bold"> <tr> <th scope="col" class="w-[50px] px-4 py-3 border-b text-left text-sm font-medium text-gray-50">NUMERO</th> <th scope="col" class="w-[400px] px-4 py-3 border-b text-left text-sm font-medium text-gray-50">NOMBRE DEL PROPIETARIO</th> <th scope="col" class="w-[80px] px-4 py-3 border-b text-left text-sm font-medium text-gray-50">PISO</th> <th scope="col" class="w-[80px] px-4 py-3 border-b text-left text-sm font-medium text-gray-50">COEF.%</th> <th scope="col" class="w-[400px] px-4 py-3 border-b text-left text-sm font-medium text-gray-50">REPRESENTADO POR</th> <th scope="col" class="w-[400px] px-4 py-3 border-b text-left text-sm font-medium text-gray-50">REPRESENTADO POR OTROS</th> <th scope="col" class="w-[180px] px-4 py-3 border-b text-left text-sm font-medium text-gray-50">ASISTE</th> </tr> </thead> <tbody id="cuerpo-tabla"> <!-- Aquí se llenará dinámicamente --> </tbody> </table> </div> </div> <div class="flex justify-center w-full"> <button id="saveAsistentes" class="flex w-4xl justify-center px-6 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium mb-10">
Guardar Asistentes
</button> </div> </div> ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/components/forms/DashboardForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/forms/DashboardForm.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const seoTitle = "Actas | JMF Ortiz";
  const seoDescription = "Servicios de la administraci\xF3n de fincas en Torrej\xF3n de Ardoz con m\xE1s de 40 a\xF1os de experiencia. Presupuesto gratuito y sin compromiso.";
  const heroContent = {
    title: "Actas",
    description: "Comunidades de vecinos"
  };
  return renderTemplate`${maybeRenderHead()}<div id="hidden" class="hidden"> ${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "DashboardForm", $$DashboardForm, {})} ` })} </div> ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/pages/dashboard/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/dashboard/index.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
