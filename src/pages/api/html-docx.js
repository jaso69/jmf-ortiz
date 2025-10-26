import { Document, Paragraph, TextRun, HeadingLevel, Table, TableCell, TableRow, BorderStyle, WidthType, AlignmentType } from 'docx';
import { Packer } from 'docx';

export const POST = async ({ request }) => {
  try {
    const { html } = await request.json();
    console.log(html)
    // Convertir tu HTML a estructura docx
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          // Aquí procesas tu HTML y lo conviertes a elementos docx
          // Ejemplo básico:
          new Paragraph({
            text: "Título del documento",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            children: [
              new TextRun("Contenido del documento generado desde HTML")
            ]
          }),
          // Para tablas sin bordes:
          new Table({
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            borders: {
              top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
              bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
              left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
              right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
              insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
              insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph("Celda 1")] }),
                  new TableCell({ children: [new Paragraph("Celda 2")] }),
                ],
              }),
            ],
          }),
        ],
      }],
    });

    const docxBuffer = await Packer.toBuffer(doc);

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
