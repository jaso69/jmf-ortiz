import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DM6RdcRZ.mjs';
import { g as getCollection } from '../chunks/_astro_content_C7HQDfFS.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_B_0C6Nk_.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const legalEntries = await getCollection("legal");
  const sortedEntries = legalEntries.sort((a, b) => a.data.title.localeCompare(b.data.title));
  const heroContent = {
    title: "Informaci\xF3n Legal",
    description: "Informaci\xF3n legal de JMF Ortiz",
    overlayOpacity: 0.8
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Informaci\xF3n Legal" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<section class="py-small"> <div class="site-container px-8"> <div class="space-y-6"> ${sortedEntries.map((entry) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(entry.data.lastUpdated);
    return renderTemplate`<div class="border-b border-body-base/10 pb-6"> <a${addAttribute(`/legal/${entry.id}`, "href")} class="group"> <h2 class="text-medium group-hover:text-accent transition-colors"> ${entry.data.title} </h2> <p class="text-sm text-body-base/80 mt-2">Last updated: ${formattedDate}</p> </a> </div>`;
  })} </div> </div> </section> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/legal/index.astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/legal/index.astro";
const $$url = "/legal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
