import { a as createAstro, c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_8aaG9U9U.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_C7HQDfFS.mjs';
import { a as $$Layout } from '../../chunks/Layout_DM6RdcRZ.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_B_0C6Nk_.mjs';
import { $ as $$MobileProfile, a as $$DesktopProfile } from '../../chunks/DesktopProfile_ClQijqM5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  const teamEntries = await getCollection("team");
  return teamEntries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  const heroContent = {
    title: entry.data.name,
    description: entry.data.jobTitle
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.name, "description": `Team member: ${entry.data.name}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<div class="site-container mx-auto px-4"> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 pt-8 lg:pt-0"> <!-- Profile Sidebar --> <div class="lg:col-span-1 relative"> <div class="absolute inset-0 bg-white border-l border-r border-black lg:block hidden"></div> <div class="lg:sticky lg:top-24"> <div class="relative lg:p-6"> <div class="flex flex-col lg:flex-col gap-6 lg:gap-4"> ${renderComponent($$result2, "MobileProfile", $$MobileProfile, { "entry": entry })} ${renderComponent($$result2, "DesktopProfile", $$DesktopProfile, { "entry": entry })} </div> </div> </div> </div> <!-- Main Content --> <div class="lg:col-span-2 py-base"> <article> ${renderComponent($$result2, "Content", Content, {})} </article> </div> </div> </div> ` })}`;
}, "/home/jose/Escritorio/jmf/JMF/src/pages/chat/[...slug].astro", void 0);

const $$file = "/home/jose/Escritorio/jmf/JMF/src/pages/chat/[...slug].astro";
const $$url = "/chat/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
