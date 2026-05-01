import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import './index_DY4PQEDO.mjs';
import { $ as $$Image } from './_astro_assets_CJQ8NGH-.mjs';
import { $ as $$Mail } from './Mail_DFr4Kdok.mjs';
import 'clsx';
import { $ as $$ } from './Layout_DM6RdcRZ.mjs';

const $$Astro$4 = createAstro("http://localhost:4321");
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "github", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path> <path d="M9 18c-4.51 2-5-2-7-2"></path> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/node_modules/lucide-astro/dist/Github.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "linkedin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect width="4" height="12" x="2" y="9"></rect> <circle cx="4" cy="4" r="2"></circle> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/node_modules/lucide-astro/dist/Linkedin.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$X;
  const { size = 24, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 1200 1227" fill="currentColor"${addAttribute(className, "class")} aria-hidden="true"> <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path> </svg>`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/icons/X.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$MobileProfile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MobileProfile;
  const { entry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="lg:hidden bg-white border border-black p-4 sm:p-6 rounded-md"> <div class="flex gap-6 sm:gap-8 items-center h-48 sm:h-56"> <div class="flex flex-col justify-between min-w-0 flex-1 h-full"> <div> <h2 class="text-h5 font-bold text-body-base mb-1">${entry.data.name}</h2> <p class="text-small text-body-base mb-3">${entry.data.jobTitle}</p> ${entry.data.email && renderTemplate`<a${addAttribute(`mailto:${entry.data.email}`, "href")} class="flex items-center gap-2 text-body-base hover:text-primary transition-colors text-small truncate"> ${renderComponent($$result, "Mail", $$Mail, { "size": 18, "strokeWidth": 1.25 })} <span class="truncate">${entry.data.email}</span> </a>`} </div> <div class="flex flex-col gap-2 mt-3"> ${entry.data.github && renderTemplate`<a${addAttribute(entry.data.github, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-body-base hover:text-primary transition-colors text-small" aria-label="GitHub Profile"> ${renderComponent($$result, "Github", $$Github, { "size": 18, "strokeWidth": 1.25 })} ${entry.data.githubUsername && renderTemplate`<span>${entry.data.githubUsername}</span>`} </a>`} ${entry.data.xSocial && renderTemplate`<a${addAttribute(entry.data.xSocial, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-body-base hover:text-primary transition-colors text-small" aria-label="X (Twitter) Profile"> ${renderComponent($$result, "X", $$X, { "size": 16 })} ${entry.data.xSocialUsername && renderTemplate`<span>@${entry.data.xSocialUsername}</span>`} </a>`} ${entry.data.linkedin && renderTemplate`<a${addAttribute(entry.data.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-body-base hover:text-primary transition-colors text-small" aria-label="LinkedIn Profile"> ${renderComponent($$result, "Linkedin", $$Linkedin, { "size": 18, "strokeWidth": 1.25 })} ${entry.data.linkedinUsername && renderTemplate`<span>${entry.data.linkedinUsername}</span>`} </a>`} </div> </div> <div class="h-full aspect-[3/4] shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full rounded-md object-cover border border-black", "src": entry.data.headshot, "alt": entry.data.name ? `Retrato de ${entry.data.name}` : "", "width": 896, "height": 1280, "quality": 80, "format": "webp" })} </div> </div> </div>`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/team/MobileProfile.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$DesktopProfile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DesktopProfile;
  const { entry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hidden lg:block"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-md object-cover mb-6 border border-black", "src": entry.data.headshot, "alt": entry.data.name ? `Retrato de ${entry.data.name}` : "", "width": 896, "height": 1280, "quality": 80, "format": "webp" })} <div class="flex flex-col items-center"> <h2 class="text-h5 font-bold text-body-base mb-2">${entry.data.name}</h2> <p class="text-small text-body-base mb-4">${entry.data.jobTitle}</p> <div class="flex flex-col items-center gap-4"> ${entry.data.email && renderTemplate`<a${addAttribute(`mailto:${entry.data.email}`, "href")} class="flex items-center gap-2 text-body-base hover:text-primary transition-colors text-small"> ${renderComponent($$result, "Mail", $$Mail, { "size": 18, "strokeWidth": 1.25 })} <span class="break-all">${entry.data.email}</span> </a>`} <div class="flex flex-col items-center gap-3"> ${entry.data.github && renderTemplate`<a${addAttribute(entry.data.github, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-body-base hover:text-primary transition-colors text-small" aria-label="GitHub Profile"> ${renderComponent($$result, "Github", $$Github, { "size": 18, "strokeWidth": 1.25 })} ${entry.data.githubUsername && renderTemplate`<span>${entry.data.githubUsername}</span>`} </a>`} ${entry.data.xSocial && renderTemplate`<a${addAttribute(entry.data.xSocial, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-body-base hover:text-primary transition-colors text-small" aria-label="X (Twitter) Profile"> ${renderComponent($$result, "X", $$X, { "size": 16 })} ${entry.data.xSocialUsername && renderTemplate`<span>@${entry.data.xSocialUsername}</span>`} </a>`} ${entry.data.linkedin && renderTemplate`<a${addAttribute(entry.data.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-body-base hover:text-primary transition-colors text-small" aria-label="LinkedIn Profile"> ${renderComponent($$result, "Linkedin", $$Linkedin, { "size": 18, "strokeWidth": 1.25 })} ${entry.data.linkedinUsername && renderTemplate`<span>${entry.data.linkedinUsername}</span>`} </a>`} </div> </div> </div> </div>`;
}, "/home/jose/Escritorio/jmf/JMF/src/components/team/DesktopProfile.astro", void 0);

export { $$MobileProfile as $, $$DesktopProfile as a };
