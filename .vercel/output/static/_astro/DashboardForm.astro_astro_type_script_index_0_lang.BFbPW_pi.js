const y=localStorage.getItem("rpg_auth_token");y||(window.location.href="/login");const $="https://auth-service-eight-mocha.vercel.app/api",D=await M(),f=document.getElementById("reunionForm"),N=document.getElementById("successMessage"),l=document.getElementById("comunidad"),P=document.getElementById("saveAsistentes"),C=document.getElementById("loadAsistentes"),z=document.getElementById("addOrdenDia"),k=document.getElementById("ordenDiv"),c=document.querySelector("#audioFile"),b=document.querySelector(".load"),B="https://docs.google.com/document/d/1ZNGGVloCXuRi_1G7wpycV-VVzRNMX4EWTL0z6E_FcQ8/edit?hl=es&tab=t.0";let s={},p="",h=document.querySelectorAll(".puntos-orden"),v=[],m=[],d=[];const x=document.getElementById("formComunidad");z.addEventListener("click",()=>{const e=document.getElementById("ordenDia"),o=e.value.trim();if(o!==""){const n=document.createElement("p");n.textContent=`• ${o}`,n.className="text-gray-800 mb-1 puntos-orden",k.appendChild(n),e.value=""}});D.forEach(e=>{const o=document.createElement("option");o.value=e.comunidad_numero,o.textContent=e.comunidad_direccion,l.appendChild(o)});C.addEventListener("click",()=>{x.classList.remove("hidden")});P.addEventListener("click",()=>{x.classList.add("hidden"),C.classList.remove("hidden"),d.length=0;const e=document.querySelectorAll(".representante-otros"),o=document.querySelectorAll(".representante-select"),n=document.querySelectorAll(".representante-asiste");e.forEach(t=>{let r={};t.value.trim()!==""&&(r={propietario:s.comunidades[0][t.dataset.propietarioIndex].propietario,piso:s.comunidades[0][t.dataset.propietarioIndex].piso,coeficiente:s.comunidades[0][t.dataset.propietarioIndex].coeficiente,representanteVecino:o[t.dataset.propietarioIndex].value,representanteOtros:t.value.trim(),pisoAsiste:n[t.dataset.propietarioIndex].value}),o[t.dataset.propietarioIndex].value.trim()!==""?r={propietario:s.comunidades[0][t.dataset.propietarioIndex].propietario,piso:s.comunidades[0][t.dataset.propietarioIndex].piso,coeficiente:s.comunidades[0][t.dataset.propietarioIndex].coeficiente,representanteVecino:o[t.dataset.propietarioIndex].value,representanteOtros:t.value.trim(),pisoAsiste:n[t.dataset.propietarioIndex].value}:r={propietarioIndex:t.dataset.propietarioIndex,propietario:s.comunidades[0][t.dataset.propietarioIndex].propietario,piso:s.comunidades[0][t.dataset.propietarioIndex].piso,coeficiente:s.comunidades[0][t.dataset.propietarioIndex].coeficiente,representanteVecino:t.value.trim(),representanteOtros:t.value.trim(),pisoAsiste:n[t.dataset.propietarioIndex].value},(r.representanteVecino||r.representanteOtros||r.pisoAsiste==="SI")&&d.push(r)})});l.addEventListener("change",async function(e){const o=e.target.value;p=l.options[l.selectedIndex].text,e.target.options[e.target.selectedIndex].text,s=await j(o),H(s),x.classList.remove("hidden"),R()});const A=document.getElementById("nombrePresidente");function R(){m.length>0&&(A.innerHTML='<option value="">Selecciona</option>',m.forEach(e=>{const o=document.createElement("option");o.value=e.piso+"/"+e.propietario,o.textContent=e.piso+" - "+e.propietario,A.appendChild(o)}))}async function j(e){return await(await fetch(`${$}/comunidades.js?numero=${e}`,{method:"GET",headers:{Authorization:`Bearer ${y}`,"Content-Type":"application/json"}})).json()}function F(e){const o={};for(let[n,t]of e.entries())o[n]=t;return o}f.addEventListener("submit",async e=>{e.preventDefault();const o=new FormData(f);h=document.querySelectorAll(".puntos-orden"),o.append("asistentesJson",JSON.stringify(d)),V(o,d);const n=F(o);h.forEach((t,r)=>{v.push({index:r+1,text:t.textContent})});try{b.classList.remove("hidden");const t=await fetch("https://jmfortiz.jasodev.es/webhook/f1bf71db-5673-4971-b906-5c933e42b849",{method:"POST",headers:{"Content-Type":c.files[0].type,"X-File-Name":encodeURIComponent(c.files[0].name),"X-File-Size":c.files[0].size,"X-Upload-Timestamp":new Date().toISOString()},body:c.files[0]});if(!t.ok)throw new Error(`Error HTTP: ${t.status}`);b.classList.add("hidden"),q()}catch(t){throw console.error("Error subiendo archivo:",t),t}try{n.comunidad=p;const t=await fetch("/api/html-docx",{method:"POST",body:JSON.stringify({formData:n,asistentes:d,ordenDia:v})});if(t.ok){const r=await t.blob(),i=URL.createObjectURL(r),a=document.createElement("a");a.href=i,a.download=`acta-reunion-${o.get("fecha")}.docx`,a.click(),URL.revokeObjectURL(i)}N.classList.remove("hidden"),f.reset(),window.location.reload()}catch(t){console.error("Error al registrar la reunión:",t),alert("Hubo un error al registrar la reunión. Por favor, inténtalo de nuevo.")}});function q(){const e=document.createElement("a");e.href=B,e.target="_blank",e.rel="noopener noreferrer",e.click()}async function M(){try{const e=await fetch(`${$}/comunidades.js`,{method:"GET",headers:{Authorization:`Bearer ${y}`,"Content-Type":"application/json"}}),o=await e.json();if(!e.ok)throw new Error(o.error||"Error al obtener comunidades");if(o.success)return o.comunidades}catch(e){console.error("Error:",e.message),(e.message.includes("401")||e.message.includes("Token"))&&(window.location.href="/login")}}const I=document.getElementById("cuerpo-tabla");function H(e){const o=e.comunidades[0];I.innerHTML="",m=o.map(n=>({piso:n.piso,propietario:n.propietario})),o.forEach((n,t)=>{const r=document.createElement("tr");r.className="hover:bg-gray-50 border-b";const i=(n.coeficiente/1e5*100).toFixed(3)+"%";r.innerHTML=`
        <td class="px-4 py-3 text-sm text-gray-900 font-mono">${t+1}</td>
        <td class="px-4 py-3 text-sm text-gray-900">${n.propietario}</td>
        <td class="px-4 py-3 text-sm text-gray-700 font-mono">${n.piso}</td>
        <td class="px-4 py-3 text-sm text-gray-700 text-right">${i}</td>
        <td class="px-4 py-3 representante-vecino">
          <select
            class="representante-select w-full px-2 py-1 border border-gray-300 rounded text-sm"
            data-propietario-index="${t}"
          >
            <option value="">Seleccionar representante</option>
            ${m.map(a=>`
              <option value="${a.piso} - ${a.propietario}">${a.piso} - ${a.propietario}</option>
            `).join("")}
          </select>
        </td>
        <td class="px-4 py-3 text-sm text-gray-700 font-mono piso-representante-otros" id="piso-representante-otros-${t}">
            <input
            type="text"
            class="representante-otros w-full px-2 py-1 border border-gray-300 rounded text-sm"
            data-propietario-index="${t}"
            placeholder="Indicar si es representante por otros"
          />
        </td>
        <td class="px-4 py-3 text-sm text-gray-700 font-mono piso-asiste" id="piso-asiste-${t}">
            <select
            class="representante-asiste w-full px-2 py-1 border border-gray-300 rounded text-sm"
            data-propietario-index="${t}"
          >
            <option value="NO">NO</option>
            <option value="SI">SI</option>
        </td>
      `,I.appendChild(r)})}function V(e,o){const n=e.get("fecha"),[t,r,i]=n.split("-"),a=J(r),O=U(o);let E="";const S=o.length,L=(o.reduce((u,g)=>u+parseFloat(g.coeficiente),0)/1e3).toFixed(3);h.forEach((u,g)=>{E+=`<p><strong>${g+1}.</strong> ${u.textContent}</p>`});const[T,w]=e.get("nombrePresidente").split("/");return`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
          </style>
        </head>
        <body>
            <p>
                <u>ACTA Nº <strong>${e.get("numActa")}</strong></u> CORRESPONDIENTE A LA JUNTA GENERAL ORDINARIA CELEBRADA POR LA COMUNIDAD DE PROPIETARIOS ${p}, EL DÍA ${i} DE ${a} DE ${t} EN EL ${e.get("placeJunta")}.
            </p>
            <h4>ASISTENTES:</h4>
            <div style="margin-top: 10px; margin-bottom: 20px;">
                ${O}
            </div>
            <p><strong>Número de asistentes:</strong> ${S} propietarios o representantes.</p>
            <p><strong>Número total de coeficientes representados:</strong> ${L} %.</p>
            <p></p>
            <p>
                En Torrejón de Ardoz, a ${i} de ${a} de ${t}, siendo las ${e.get("HoraInicio")} horas y en segunda convocatoria, se reúne la Junta de Propietarios de la ${p} de Torrejón de Ardoz, con la asistencia de los copropietarios que arriba se reseñan, pasándose a continuación a tratar los puntos expuestos en el Orden del Día, de acuerdo a la convocatoria que en el plazo legal se había hecho llegar en tiempo y forma a todos los interesados, como así lo ratifican los asistentes.
            </p>
            <p></p>
            <h4 style="text-align: center;"><strong><u>ORDEN DEL DÍA:</u></strong></h4>
            <div style="margin-top: 10px; margin-bottom: 20px;">
                ${E}
            </div>
            <p></p>
            <p>
                Y sin más comentarios, se levantó la sesión a las ${e.get("HoraFin")} horas, extendiéndose la presente acta, de la que yo, Administrador-Secretario, doy fe (s.e.u.o.).
            </p>
            <p></p>
            <p></p>
            <div>
                <span><strong>El Administrador-Secretario                                                           El Presidente</strong></span>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <span><strong>Fdo.: Por Admon.J.M.F.Ortiz, S.L.</strong></span>
                <span><strong>${e.get("administrador")}                                    ${w}</strong></span>
                <span><strong>${e.get("numColegiado")}                                                                       ${T}</strong></span>
            </div>
            <p></p>
            <p style="font-size: 12px;">
                <strong><u>DILIGENCIA:</u></strong> Para hacer constar que esta acta, cuya original figura en el libro de Actas de la Comunidad, ha sido redactada y cerrada cumpliendo todos los requisitos legales, en cuanto a tiempo y forma, establecidos en la Ley de Propiedad Horizontal, repartiéndose en el buzón de los propietarios residentes y enviándose a la dirección que consta a la Comunidad a los no residentes en la misma.
            </p>
        </body>
      </html>
    `}function J(e){return{"01":"Enero","02":"Febrero","03":"Marzo","04":"Abril","05":"Mayo","06":"Junio","07":"Julio","08":"Agosto","09":"Septiembre",10:"Octubre",11:"Noviembre",12:"Diciembre"}[e]||""}function U(e){let o=`<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
        <thead>
            <tr>
                <th style="font-size: 12px; text-align: left; background-color: #f0f0f0;">Propietario</th>
                <th style="font-size: 12px; text-align: center; background-color: #f0f0f0;">Piso</th>
                <th style="font-size: 12px; text-align: center; background-color: #f0f0f0;">Coef%</th>
                <th style="font-size: 12px; text-align: left; background-color: #f0f0f0;">Representado Por</th>
            </tr>
        </thead>
        <tbody>`;return e.forEach(n=>{o+=`<tr>
            <td style="font-size: 10px; padding: 4px;">${n.propietario}</td>
            <td style="font-size: 10px; padding: 4px; text-align: center;">${n.piso}</td>
            <td style="font-size: 10px; padding: 4px; text-align: center;">${n.coeficiente}</td>
            <td style="font-size: 10px; padding: 4px;">${n.representanteVecino||""}</td>
        </tr>`}),o+="</tbody></table>",o}
