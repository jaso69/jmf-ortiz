import { a as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate, s as spreadAttributes, l as renderSlot, e as renderScript, n as renderHead, u as unescapeHTML } from './astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
/* empty css                         */
import './index_DY4PQEDO.mjs';
import { $ as $$Image } from './_astro_assets_CJQ8NGH-.mjs';
import 'clsx';

const headerMenu = [
  { name: "Inicio", link: "/" },
  { name: "Servicios", link: "/services" },
  { name: "Administrador Virtual", link: "/chat" }
];
const footerMenu = [
  { name: "Inicio", link: "/" },
  { name: "Servicios", link: "/services" },
  { name: "Asistente", link: "/chat" },
  { name: "Contacto", link: "/contact" }
];
const legalMenu = [
  { name: "Política de Privacidad", link: "/legal/privacy-policy" },
  { name: "Términos de Servicio", link: "/legal/terms-of-service" }
];

const logo = new Proxy({"src":"/_astro/logo.B03XoTfh.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jose/Escritorio/jmf/JMF/src/assets/images/logos/logo.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro("http://localhost:4321");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Logo;
  const { variant = "header" } = Astro2.props;
  const getLogoClass = () => {
    switch (variant) {
      case "header":
        return "text-header-logo hover:text-primary";
      case "footer":
        return "text-footer-logo hover:text-primary";
      case "dark":
        return "text-body-base hover:text-primary";
      default:
        return "text-body-base hover:text-primary";
    }
  };
  return renderTemplate`${maybeRenderHead()}<a href="/"${addAttribute(["logo uppercase font-logo transition-colors duration-200 font-light", getLogoClass()], "class:list")}>  ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "", "class": "hidden" })} <span class="font-bold">JMF</span> Ortiz
</a>`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/Logo.astro", void 0);

const $$Astro$6 = createAstro("http://localhost:4321");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/home/jose/Escritorio/jmf/JMF/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$5 = createAstro("http://localhost:4321");
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "menu", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<line x1="4" x2="20" y1="12" y2="12"></line> <line x1="4" x2="20" y1="6" y2="6"></line> <line x1="4" x2="20" y1="18" y2="18"></line> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/node_modules/lucide-astro/dist/Menu.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:4321");
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "x", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/node_modules/lucide-astro/dist/X.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    variant = "primary",
    size = "md",
    disabled = false,
    class: className = "",
    type = "button",
    target,
    ...rest
  } = Astro2.props;
  const baseStyles = "group relative inline-flex overflow-hidden items-center justify-center rounded-border-small font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md flex items-center gap-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light focus-visible:ring-primary hover:ring-2 hover:ring-primary hover:ring-offset-2",
    secondary: "bg-secondary text-white hover:bg-secondary-light focus-visible:ring-secondary hover:ring-2 hover:ring-secondary hover:ring-offset-2",
    accent: "bg-accent text-white hover:opacity-90 focus-visible:ring-accent hover:ring-2 hover:ring-accent hover:ring-offset-2",
    ghostLight: "text-white ring-2 ring-white focus-visible:ring-white hover:ring-2 hover:ring-black hover:ring-offset-2",
    ghostDark: "text-body-base ring-2 ring-text focus-visible:ring-text hover:ring-2 hover:ring-black hover:ring-offset-2"
  };
  const sizes = {
    sm: "h-9 px-3 text-xsmall",
    md: "h-10 px-4 py-2 text-small",
    lg: "h-11 px-8 text-base"
  };
  const classes = [
    baseStyles,
    variants[variant],
    sizes[size],
    className
  ].join(" ");
  const Element = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Element", Element, { ...rest, "href": href, "type": !href ? type : void 0, "class": classes, "disabled": disabled, "aria-disabled": disabled, ...target && { target, rel: target === "_blank" ? "noopener noreferrer" : void 0 } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="absolute left-0 -mt-12 h-32 w-1/2 translate-x-[250%] rotate-12 bg-white opacity-20 transition-all duration-250 ease-out group-hover:translate-x-[2%]"></span> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/ui/Button.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const ctaButton = {
    name: "Contacto",
    link: "/contact"
  };
  const currentPath = Astro2.url.pathname;
  const isCurrentPage = (link) => {
    if (link === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(link);
  };
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-50 w-full left-0"> <div class="site-container mx-auto px-4 mt-4"> <div class="flex justify-between items-center bg-white py-4 rounded-lg px-4 border-black border"> ${renderComponent($$result, "Logo", $$Logo, {})} <nav class="relative flex items-center gap-2 lg:gap-8" aria-label="Site Navigation">  <ul class="hidden lg:flex lg:gap-8 items-center"> ${headerMenu.map(
    (item, index) => renderTemplate`<li class="relative group"> <div class="flex items-center gap-1"> <a${addAttribute(item.link, "href")}${addAttribute([
      "text-small font-medium rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-nav-text-active",
      isCurrentPage(item.link) ? "text-nav-text-current font-semibold" : "text-nav-text hover:text-nav-text-hover"
    ], "class:list")}${addAttribute(isCurrentPage(item.link) ? "page" : void 0, "aria-current")}> ${item.name} </a> </div> </li>`
  )} </ul> ${renderComponent($$result, "Button", $$Button, { "href": ctaButton.link, "variant": "primary" }, { "default": ($$result2) => renderTemplate`${ctaButton.name}` })} <div id="dashboardBtn" class="hidden"> <button class="bg-green-200 text-sm text-accent px-4 py-1 border-2 rounded-xl hover:opacity-90 focus-visible:ring-accent hover:ring-2 hover:ring-accent hover:ring-offset-2" aria-label="Ir al panel de actas">
Actas
</button> </div> <div id="loginBtn" class="hidden"> <button class="text-accent text-sm px-4 py-1 border-2 rounded-xl hover:opacity-90 focus-visible:ring-accent hover:ring-2 hover:ring-accent hover:ring-offset-2" aria-label="Iniciar sesión">
Login
</button> </div> <div id="logoutBtn" class="hidden"> <button class="text-accent text-sm px-4 py-1 border-2 rounded-xl hover:opacity-90 focus-visible:ring-accent hover:ring-2 hover:ring-accent hover:ring-offset-2" aria-label="Cerrar sesión">
Logout
</button> </div>  <button class="mobile-menu-button relative z-30 p-2 border-none cursor-pointer bg-transparent lg:hidden" aria-label="Toggle Menu" aria-expanded="false"> <span class="menu-icon block"> ${renderComponent($$result, "Menu", $$Menu, { "size": 24, "class": "text-body-base" })} </span> <span class="close-icon hidden"> ${renderComponent($$result, "X", $$X, { "size": 24, "class": "text-white" })} </span> </button>  <div class="mobile-menu fixed inset-0 z-20 px-8 pt-20 bg-primary lg:hidden hidden opacity-0 scale-95 transform transition-all duration-200 ease-out overflow-y-auto"> <ul class="flex flex-col gap-4"> ${headerMenu.map((item) => renderTemplate`<li> <div class="text-white"> <div class="flex items-center justify-between"> <a${addAttribute(item.link, "href")}${addAttribute([
    "py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-nav-mobile-text-active",
    isCurrentPage(item.link) ? "text-nav-mobile-text-current font-semibold" : "text-nav-mobile-text hover:text-nav-mobile-text-hover"
  ], "class:list")}${addAttribute(isCurrentPage(item.link) ? "page" : void 0, "aria-current")}> ${item.name} </a> </div> </div> </li>`)} </ul>  <div class="mt-8 pb-8"> ${renderComponent($$result, "Button", $$Button, { "href": ctaButton.link, "variant": "ghostLight" }, { "default": ($$result2) => renderTemplate`${ctaButton.name}` })} </div> </div> </nav> </div> </div> </header> ${renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/Header.astro", void 0);

const siteConfig = {
  companyName: "Administración de Fincas JMF Ortiz",
  siteUrl: "https://www.jmfortiz.com",
  Socials: {
    Email: "yolanda@jmfortiz.com",
    Phone: "91 656 55 12 ",
    Location: "C/ Hilados, número 20, Esc Izq Bajo B, 28850 Torrejón de Ardoz, Madrid, España"
  }
};
const SEO = {
  Separator: "|",
  SiteName: "JMF Ortiz",
  defaultDescription: "Administración de Fincas JMF Ortiz",
  defaultImage: "https://www.jmfortiz.com/assets/images/home/hero.webp"
};
const themeSetting = {
  theme: "zeus"
};

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { footerCta } = Astro2.props;
  const defaultCta = {
    title: "Contacto con la administraci\xF3n de fincas",
    description: "Ponemos a tu disposici\xF3n un tel\xE9fono con centralita para que ninguna llamada se pierda, un formulario de contacto para atender tus consultas y un asistente virtual disponible las 24 horas.",
    hideCta: false,
    button: {
      text: "Contacto",
      link: "/contact",
      target: "_self"
    }
  };
  const cta = footerCta || defaultCta;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`bg-black text-white pb-small ${cta.hideCta ? "pt-large" : ""}`, "class")}> <div class="site-container mx-auto px-4"> ${!cta.hideCta && renderTemplate`<div class="text-center border-b border-background-light mb-12 py-small"> <span class="text-3xl font-bold mb-4 block" data-aos="fade-up">${cta.title}</span> <p class="text-white mb-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100"> ${cta.description} </p> ${renderComponent($$result, "Button", $$Button, { "href": cta.button.link, "variant": "ghostLight", "size": "lg", "data-aos": "fade-up", "data-aos-delay": "200", ...cta.button.target && { target: cta.button.target } }, { "default": ($$result2) => renderTemplate`${cta.button.text}` })} </div>`} <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-8 border-b border-background-light"> <div class="col-span-2">
Adminitración de Fincas JMF Ortiz
<p class="mt-4 text-white">
91 656 55 12
</p> <p class="mt-4 text-white">
comunicaciones@jmfortiz.com
</p> <p class="mt-4 text-white">
C/ Hilados, número 20, Esc Izq Bajo B, 28850 Torrejón de Ardoz. Madrid
</p> </div> <div class="col-span-1"> <h3 class="text-lg font-semibold mb-4">Enlaces Rápidos</h3> <nav> <ul class="space-y-2"> ${footerMenu.map((item) => renderTemplate`<li><a${addAttribute(item.link, "href")} class="text-body-dark hover:text-white transition-colors">${item.name}</a></li>`)} </ul> </nav> </div> </div> <div class="mt-8 flex flex-col md:flex-row justify-between items-center"> <div class="text-body-dark text-sm">
© ${currentYear} ${siteConfig.companyName}. Todos los derechos reservados.
</div> <nav class="mt-4 md:mt-0"> <ul class="flex flex-wrap gap-6"> ${legalMenu.map((item) => renderTemplate`<li> <a${addAttribute(item.link, "href")} class="text-sm text-body-dark hover:text-white transition-colors"> ${item.name} </a> </li>`)} </ul> </nav> </div> </div> </footer>`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { theme } = themeSetting;
  const { SiteName, Separator, defaultDescription, defaultImage } = SEO;
  const { title, description, image, footerCta, canonicalUrl, noindex = false } = Astro2.props;
  const pageTitle = title ? `${title} ${Separator} ${SiteName}` : SiteName;
  const pageDescription = description || defaultDescription;
  const pageImage = image || defaultImage;
  const canonicalPath = canonicalUrl || Astro2.url.pathname;
  const fullCanonicalUrl = new URL(canonicalPath, siteConfig.siteUrl).toString();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.siteUrl}#organization`,
    "name": siteConfig.companyName,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.Socials.Phone.trim(),
    "email": siteConfig.Socials.Email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C/ Hilados, n\xFAmero 20, Esc Izq Bajo B",
      "addressLocality": "Torrej\xF3n de Ardoz",
      "addressRegion": "Madrid",
      "postalCode": "28850",
      "addressCountry": "ES"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "\u20AC"
  };
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="sitemap" href="/sitemap.xml"><link rel="canonical"', '><meta name="generator"', "><title>", '</title><meta name="description"', '><meta name="robots"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:locale" content="es_ES">', '<meta property="og:site_name"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', ">", '<!-- JSON-LD Structured Data --><script type="application/ld+json">', "<\/script>", "</head> <body", ' class="bg-background-dark min-h-screen flex flex-col"> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">\nSaltar al contenido principal\n</a> ', ' <main id="main-content" class="flex-1 flex flex-col"> ', " </main> ", " <!-- <ThemeSwitcher /> --> ", " </body> </html>"])), addAttribute(fullCanonicalUrl, "href"), addAttribute(Astro2.generator, "content"), pageTitle, addAttribute(pageDescription, "content"), addAttribute(robotsContent, "content"), addAttribute(fullCanonicalUrl, "content"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), renderTemplate`<meta property="og:image"${addAttribute(new URL(pageImage, siteConfig.siteUrl).toString(), "content")}>`, addAttribute(SiteName, "content"), addAttribute(fullCanonicalUrl, "content"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), renderTemplate`<meta property="twitter:image"${addAttribute(new URL(pageImage, siteConfig.siteUrl).toString(), "content")}>`, unescapeHTML(JSON.stringify(organizationSchema)), renderHead(), addAttribute(theme, "data-theme"), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "footerCta": footerCta }), renderScript($$result, "/home/jose/Escritorio/jmf/JMF/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/home/jose/Escritorio/jmf/JMF/src/layouts/Layout.astro", void 0);

export { $$ as $, $$Layout as a, $$Button as b, siteConfig as s };
