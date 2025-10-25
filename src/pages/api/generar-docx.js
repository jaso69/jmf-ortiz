// src/pages/api/generar-docx.ts
import HTMLtoDOCX from 'html-to-docx';

export const POST = async ({ request }) => {
  try {
    const { html } = await request.json();

    const docxBuffer = await HTMLtoDOCX(html, null, {
      table: {
         row: {
            cantSplit: true
        },
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
