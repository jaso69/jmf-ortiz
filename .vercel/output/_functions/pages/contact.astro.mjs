import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderScript, d as addAttribute } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { $ as $$, s as siteConfig, a as $$Layout } from '../chunks/Layout_DM6RdcRZ.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_B_0C6Nk_.mjs';
import 'clsx';
import { g as getBackgroundColor, a as getPaddingClass, b as getTextColor } from '../chunks/styleUtils_H8kULClC.mjs';
import { $ as $$Mail } from '../chunks/Mail_DFr4Kdok.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("http://localhost:4321");
const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/node_modules/lucide-astro/dist/MapPin.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "phone", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/node_modules/lucide-astro/dist/Phone.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <form id="contact-form" class="space-y-6 bg-white p-6 rounded-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
            label="Nombre"
            id="name"
            name="name"
            required
            background={formBackground}
        />
        <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            required
            background={formBackground}
        />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
            label="Teléfono"
            type="tel"
            id="phone"
            name="phone"
            background={formBackground}
        />
        <Input
            label="Empresa"
            id="company"
            name="company"
            background={formBackground}
        />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Radio
            label="¿Por qué motivo quieres contactar con nosotros?"
            id="hear-about"
            name="hear-about"
            options={hearAboutOptions}
            required
            background={formBackground}
        />
        <Checkbox
            label="Solicitud de Documentación"
            id="interests"
            name="interests"
            options={interestOptions}
            background={formBackground}
        />
    </div>

    <Textarea
        label="Mensaje"
        id="message"
        name="message"
        required
        background={formBackground}
    />

    <Checkbox
        label="Acepto los términos y condiciones"
        id="terms"
        name="terms"
        required
        background={formBackground}
    />

    <div class="mt-6">
        <Button type="submit">Enviar</Button>
    </div>
</form>

<p id="status-message" class="mt-4 text-xl"></p> -->${maybeRenderHead()}<div id="n8n-chat" class="h-[600px] space-y-6 bg-white p-6 rounded-lg"></div> ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/components/forms/Contact.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/components/forms/Contact.astro?astro&type=script&index=1&lang.ts")}`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/forms/Contact.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  const {
    content,
    background = "base",
    padding,
    paddingTop,
    paddingBottom
  } = Astro2.props;
  const bgColor = getBackgroundColor(background);
  const textColor = getTextColor(background);
  const paddingClass = getPaddingClass({ padding, paddingTop, paddingBottom });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([bgColor, paddingClass], "class:list")}> <div class="site-container px-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2${addAttribute([textColor], "class:list")}>Información de Contacto</h2> <p${addAttribute([textColor], "class:list")}>
Estamos aquí para ayudarte con tus preguntas y dudas.
</p> <p${addAttribute([textColor], "class:list")}>
Puedes contactarnos a través de correo electrónico o teléfono.
</p> <div${addAttribute(["flex flex-col gap-2 mt-4", textColor], "class:list")}> <div${addAttribute(["flex items-center gap-2"], "class:list")}>${renderComponent($$result, "Mail", $$Mail, { "aria-hidden": "true" })} <a${addAttribute(`mailto:${siteConfig.Socials.Email}`, "href")}${addAttribute(`Enviar correo electr\xF3nico a ${siteConfig.Socials.Email}`, "aria-label")}>${siteConfig.Socials.Email}</a></div> <div${addAttribute(["flex items-center gap-2"], "class:list")}>${renderComponent($$result, "Phone", $$Phone, { "aria-hidden": "true" })} <a${addAttribute(`tel:${siteConfig.Socials.Phone}`, "href")}${addAttribute(`Llamar al ${siteConfig.Socials.Phone}`, "aria-label")}>${siteConfig.Socials.Phone}</a></div> <div${addAttribute(["flex items-center gap-2"], "class:list")}>${renderComponent($$result, "MapPin", $$MapPin, { "aria-hidden": "true" })} <a${addAttribute(`https://maps.google.com/?q=${siteConfig.Socials.Location}`, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Ver ubicaci\xF3n en Google Maps: ${siteConfig.Socials.Location}`, "aria-label")}>${siteConfig.Socials.Location}</a></div> </div> </div> <div class="h-dvh"> ${renderComponent($$result, "Contact", $$Contact, {})} </div> </div> </div> </section>`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/sections/ContactInfo.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroContent = {
    title: "Contactanos",
    description: "Cont\xE1ctanos para m\xE1s informaci\xF3n"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactanos", "description": "Cont\xE1ctanos para m\xE1s informaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "ContactInfo", $$ContactInfo, { "background": "dark", "padding": "base" })} ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/contact/index.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
