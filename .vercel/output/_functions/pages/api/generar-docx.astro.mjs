import HTMLtoDOCX from 'html-to-docx';
export { renderers } from '../../renderers.mjs';

// src/pages/api/generar-docx.ts

const POST = async ({ request }) => {
  try {
    const { html } = await request.json();

    const docxBuffer = await HTMLtoDOCX(html, null, {
      table: {
         row: {
            cantSplit: true
        },
        border:{
            size: 0,
            color: "FFFFFF", 
            style: "none"
        }
        },
      footer: true,
      pageNumber: true,
      font: 'Arial',
      fontSize: 22,
      orientation: 'portrait'
    });

    return new Response(docxBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="documento.docx"'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al generar DOCX' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
