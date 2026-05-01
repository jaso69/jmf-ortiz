import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CZZ8EEUa.mjs';
import { manifest } from './manifest_CXAMyCx9.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/generar-docx.astro.mjs');
const _page3 = () => import('./pages/api/html-docx.astro.mjs');
const _page4 = () => import('./pages/audio.astro.mjs');
const _page5 = () => import('./pages/chat.astro.mjs');
const _page6 = () => import('./pages/chat/_---slug_.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/dashboard.astro.mjs');
const _page9 = () => import('./pages/legal/_slug_.astro.mjs');
const _page10 = () => import('./pages/legal.astro.mjs');
const _page11 = () => import('./pages/login.astro.mjs');
const _page12 = () => import('./pages/privacy-policy.astro.mjs');
const _page13 = () => import('./pages/register.astro.mjs');
const _page14 = () => import('./pages/services.astro.mjs');
const _page15 = () => import('./pages/services/_---slug_.astro.mjs');
const _page16 = () => import('./pages/style-guide.astro.mjs');
const _page17 = () => import('./pages/theme-info/techspecs.astro.mjs');
const _page18 = () => import('./pages/theme-info.astro.mjs');
const _page19 = () => import('./pages/verify.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/generar-docx.js", _page2],
    ["src/pages/api/html-docx.js", _page3],
    ["src/pages/audio/index.astro", _page4],
    ["src/pages/chat/index.astro", _page5],
    ["src/pages/chat/[...slug].astro", _page6],
    ["src/pages/contact/index.astro", _page7],
    ["src/pages/dashboard/index.astro", _page8],
    ["src/pages/legal/[slug].astro", _page9],
    ["src/pages/legal/index.astro", _page10],
    ["src/pages/login/index.astro", _page11],
    ["src/pages/privacy-policy/index.astro", _page12],
    ["src/pages/register/index.astro", _page13],
    ["src/pages/services/index.astro", _page14],
    ["src/pages/services/[...slug].astro", _page15],
    ["src/pages/style-guide.astro", _page16],
    ["src/pages/theme-info/TechSpecs.astro", _page17],
    ["src/pages/theme-info/index.astro", _page18],
    ["src/pages/verify/index.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1ee4f24d-dede-47c8-925d-06f74d2355b2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
