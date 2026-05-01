import { a as createAstro, c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_C7HQDfFS.mjs';
import { a as $$Layout } from '../../chunks/Layout_DM6RdcRZ.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_B_0C6Nk_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  const legalEntries = await getCollection("legal");
  return legalEntries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  const seoTitle = entry.data.seo?.title || entry.data.title;
  const seoDescription = entry.data.seo?.description || "";
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(entry.data.lastUpdated);
  const heroContent = {
    title: "Informaci\xF3n Legal",
    description: "Informaci\xF3n legal de JMF Ortiz",
    overlayOpacity: 0.8
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<article class="site-container--small mx-auto px-8 prose pb-base text-white"> <div class="mt-12 mb-8"> <p class="text-sm text-white">Ultima actualización: ${formattedDate}</p> </div> ${renderComponent($$result2, "Content", Content, {})} </article> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/legal/[slug].astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/legal/[slug].astro";
const $$url = "/legal/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
