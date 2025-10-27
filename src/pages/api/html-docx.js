import { Document, Paragraph, TextRun, HeadingLevel, Footer, Table, TableCell, TableRow, BorderStyle, WidthType, AlignmentType, Header } from 'docx';
import { Packer } from 'docx';

export const POST = async ({ request }) => {
    try {
        const { formData, asistentes, ordenDia } = await request.json();
        const [anno, mesNumero, dia] = formData.fecha.split('-');
        const mesNombres = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        const mes = mesNombres[parseInt(mesNumero, 10) - 1];
    console.log(formData);
    //console.log(ordenDia);
    //const asistenteRows = rowAsistentesCreate(asistentes);
    //console.log(asistenteRows)
    const totalAsistentes = asistentes.length;
    const [pisoPresidente, presidente] = formData.nombrePresidente.split('/');
    const CalculonumeroTotalCoeficientes = asistentes.reduce((total, asistente) => total + parseFloat(asistente.coeficiente), 0);
    const numeroTotalCoeficientes = (CalculonumeroTotalCoeficientes/1000).toFixed(3);
    const filasAsistentes = asistentes.map(row =>
    new TableRow({
        children: [
            new TableCell({
                width: { size: 3500, type: WidthType.DXA },
                children: [
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: row.propietario,
                                size: 16,
                            })
                        ]
                    }),
                ]
            }),
            new TableCell({
                width: { size: 1000, type: WidthType.DXA },
                children: [
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: row.piso,
                                size: 16,
                            })
                        ]
                    }),
                ]
            }),
            new TableCell({
                width: { size: 1000, type: WidthType.DXA },
                children: [
                   new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: (row.coeficiente/1000).toString(),
                                size: 16,
                            })
                        ]
                    }),
                ]
            }),

            new TableCell({
                width: { size: 3500, type: WidthType.DXA },
                children: [
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                            new TextRun({
                                text: row.representanteVecino,
                                size: 16,
                            })
                        ]
                    }),
                ]
            })
        ]
    })
    );
    const orden = ordenDia.flatMap(orden => [
        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: `${orden.index.toString()} `,
                    size: 24,
                    bold: true,
                }),
                new TextRun({
                    text: `${orden.text}`,
                    size: 24,
                }),
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: ``,
                    size: 32,
                    bold: true,
                })
            ]
          }),
    ])
    const doc = new Document({
      sections: [{
        properties: {},
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: `Comunidad de Propietarios - ${formData.comunidad || 'Desconocida'}`,
                    size: 16,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
        default: new Footer({
            children: [
            new Paragraph({
                children: [
                new TextRun(`Acta Nº${formData.numActa || 'Desconocida'} - ${dia}/${mesNumero}/${anno}`),
                ],
                alignment: AlignmentType.CENTER,
            })
            ]
        })
        },
        children: [

          new Paragraph({
            text: `Comunidad de Propietarios`,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            text: `${formData.comunidad || 'Desconocida'} - Torrejón de Ardoz`,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            text: "",
            heading: HeadingLevel.HEADING_4,
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `Acta Nº${formData.numActa || 'Desconocida'} - Junta General Ordinaria`,
                    size: 28,
                    bold: true,
                })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${dia}/${mesNumero}/${anno}`,
                    size: 28,
                    bold: true,
                })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: ``,
                    size: 32,
                })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `Celebrada en el ${formData.placeJunta}`,
                    size: 18,
                })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: ``,
                    size: 32,
                })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `Asistentes:`,
                    size: 32,
                    bold: true,
                })
            ]
          }),
          // Para tablas sin bordes:
        new Table({
            columnWidths: [3500, 1000, 1000, 3500],
            rows: [
                new TableRow({
                    tableHeader: true,
                    children: [
                        new TableCell({
                            shading: {
                                fill: "D3D3D3"
                            },
                            width: {
                                size: 3500,  // 40%
                                type: WidthType.DXA
                            },
                            children: [new Paragraph("Propietario")]
                        }),
                        new TableCell({
                            shading: {
                                fill: "D3D3D3"
                            },
                            width: {
                                size: 1000,  // 15%
                                type: WidthType.DXA
                            },
                            children: [new Paragraph("Piso")]
                        }),
                        new TableCell({
                            shading: {
                                fill: "D3D3D3"
                            },
                            width: {
                                size: 1000,  // 15%
                                type: WidthType.DXA
                            },
                            children: [new Paragraph("Coef%")]
                        }),
                        new TableCell({
                            shading: {
                                fill: "D3D3D3"
                            },
                            width: {
                                size: 3500,  // 30%
                                type: WidthType.DXA
                            },
                            children: [new Paragraph("Representado Por")]
                        })
                    ]
                }),
                ...filasAsistentes,
            ],

        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: ``,
                    size: 32,
                    bold: true,
                })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: `Número de asistentes: `,
                    size: 24,
                    bold: true,
                }),
                new TextRun({
                    text: `${totalAsistentes} propietarios o representantes.`,
                    size: 24,
                }),
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: `Número total de coeficientes representados: `,
                    size: 24,
                    bold: true,
                }),
                new TextRun({
                    text: `${numeroTotalCoeficientes}%`,
                    size: 24,
                }),
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: ``,
                    size: 32,
                    bold: true,
                })
            ]
          }),
        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: `En Torrejón de Ardoz, a ${dia} de ${mes} de ${anno}, siendo las ${formData.HoraInicio} horas y en segunda convocatoria, se reúne la Junta de Propietarios de la ${formData.comunidad} de Torrejón de Ardoz, con la asistencia de los copropietarios que arriba se reseñan, pasándose a continuación a tratar los puntos expuestos en el Orden del Día, de acuerdo a la convocatoria que en el plazo legal se había hecho llegar en tiempo y forma a todos los interesados, como así lo ratifican los asistentes.`,
                    size: 24,
                }),
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: ``,
                    size: 32,
                    bold: true,
                })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `ORDEN DEL DÍA:`,
                    size: 24,
                    bold: true,
                })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: ``,
                    size: 32,
                    bold: true,
                })
            ]
          }),
          ...orden,

          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: ``,
                    size: 32,
                    bold: true,
                })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: ``,
                    size: 36,
                    bold: true,
                })
            ]
          }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: ``,
                    size: 36,
                    bold: true,
                })
            ]
          }),

          new Table({
            columnWidths: [5000, 5000],
            borders:{
                top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
            },
            rows: [
                new TableRow({
                    borders:{
                        top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                        bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                        left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                        right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                    },
                    children: [
                        new TableCell({
                            borders:{
                                top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                            },
                            width: { size: 5000, type: WidthType.DXA },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.LEFT,
                                    children: [
                                        new TextRun({
                                            text: `El Administrador-Secretario`,
                                            size: 24,
                                            bold: true,
                                        })
                                    ]
                                }),
                            ],
                        }),
                        new TableCell({
                            borders:{
                                top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                            },
                            width: { size: 5000, type: WidthType.DXA },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.RIGHT,
                                    children: [
                                        new TextRun({
                                            text: `El Presidente`,
                                            size: 24,
                                            bold: true,
                                        })
                                    ]
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: ``,
                    size: 36,
                    bold: true,
                })
            ]
          }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: ``,
                    size: 36,
                    bold: true,
                })
            ]
          }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: ``,
                    size: 36,
                    bold: true,
                })
            ]
          }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: ``,
                    size: 36,
                    bold: true,
                })
            ]
          }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: ``,
                    size: 36,
                    bold: true,
                })
            ]
          }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: ``,
                    size: 36,
                    bold: true,
                })
            ]
          }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: `Fdo.: Por Admon.J.M.F.Ortiz, S.L.`,
                    size: 24,
                    bold: true,
                })
            ]
          }),

          new Table({
            columnWidths: [5000, 5000],
            borders:{
                top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
            },
            rows: [
                new TableRow({
                    borders:{
                        top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                        bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                        left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                        right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                    },
                    children: [
                        new TableCell({
                            borders:{
                                top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                            },
                            width: { size: 5000, type: WidthType.DXA },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.LEFT,
                                    children: [
                                        new TextRun({
                                            text: `${formData.administrador}`,
                                            size: 24,
                                            bold: true,
                                        })
                                    ]
                                }),
                            ],
                        }),
                        new TableCell({
                            borders:{
                                top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                            },
                            width: { size: 5000, type: WidthType.DXA },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.RIGHT,
                                    children: [
                                        new TextRun({
                                            text: `${presidente}`,
                                            size: 24,
                                            bold: true,
                                        })
                                    ]
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    borders:{
                        top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                        bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                        left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                        right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                    },
                    children: [
                        new TableCell({
                            borders:{
                                top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                            },
                            width: { size: 5000, type: WidthType.DXA },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.LEFT,
                                    children: [
                                        new TextRun({
                                            text: `${formData.numColegiado}`,
                                            size: 24,
                                            bold: true,
                                        })
                                    ]
                                }),
                            ],
                        }),
                        new TableCell({
                            borders:{
                                top:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                bottom:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                left:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                                right:{style:BorderStyle.NONE,size:0, color:'#ffffff'},
                            },
                            width: { size: 5000, type: WidthType.DXA },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.RIGHT,
                                    children: [
                                        new TextRun({
                                            text: `${pisoPresidente}`,
                                            size: 24,
                                            bold: true,
                                        })
                                    ]
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: ``,
                    size: 36,
                    bold: true,
                })
            ]
          }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    text: `DILIGENCIA: Para hacer constar que esta acta, cuya original figura en el libro de Actas de la Comunidad, ha sido redactada y cerrada cumpliendo todos los requisitos legales, en cuanto a tiempo y forma, establecidos en la Ley de Propiedad Horizontal, repartiéndose en el buzón de los propietarios residentes y enviándose a la dirección que consta a la Comunidad a los no residentes en la misma.             `,
                    size: 16,
                })
            ]
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

function rowAsistentesCreate(asistentes){
    const rows = [];
    asistentes.map(asistente => {
        rows.push( new TableRow({
            children: [
                new TableCell({
                    children: [new Paragraph(asistente.nombrePropietario || '')]
                }),
                new TableCell({
                    children: [new Paragraph(asistente.piso || '')]
                }),
                new TableCell({
                    children: [new Paragraph(asistente.coeficiente || '')]
                }),
                new TableCell({
                    children: [new Paragraph(asistente.representadoPor || '')]
                })
            ]
        }));

    });
    return rows;
}

/**
size: 24, // 12pt (normal)
size: 28, // 14pt
size: 32, // 16pt (grande)
size: 36, // 18pt (muy grande)
size: 40, // 20pt (extra grande)
size: 48, // 24pt (título)
 */
