javascript:void((function() {
    // 1. Definir estilos básicos
    var stl = document.createElement('style');
    stl.textContent = "@keyframes mq-fade{from{opacity:0;transform:translateY(-10px);}to{opacity:1;transform:translateY(0);}}";
    document.head.appendChild(stl);

    var rq = document.querySelectorAll('.que'),
        tot = rq.length;

    /* AVISO SI NO HAY PREGUNTAS */
    if (tot === 0) {
        if (document.getElementById('mq-notice')) return; // Evitar duplicados
        
        var w = document.createElement('div');
        w.id = 'mq-notice';
        w.style = "position:fixed;top:20px;right:20px;z-index:2147483647;background:#1a1b26;color:#cdd6f4;padding:20px;border-radius:12px;border:1px solid #3b82f6;width:300px;font-family:-apple-system,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,0.6);animation:mq-fade 0.3s ease; text-align:left;";
        
        w.innerHTML = "<h3 style='margin:0 0 10px;color:#3b82f6;font-size:16px;font-weight:bold;'>⚠️ Moodle Pro</h3>" +
            "<p style='font-size:13px;line-height:1.5;margin-bottom:15px;opacity:0.9;'>El script se cargó correctamente, pero <b>no detectó un cuestionario</b> en esta página.</p>" +
            "<div style='display:flex;flex-direction:column;gap:8px'>" +
            "<button id='mq-w-ok' style='padding:10px;background:#3b82f6;color:white;border:none;border-radius:6px;cursor:pointer;font-weight:bold;font-size:12px'>ENTENDIDO</button>" +
            "<a href='https://github.com/maxicabrera7/Moodle-Pro' target='_blank' style='padding:10px;background:#24283b;color:#cdd6f4;text-align:center;text-decoration:none;border-radius:6px;font-size:12px;border:1px solid #414868'>VER REPOSITORIO</a>" +
            "</div>";
        
        document.body.appendChild(w);
        document.getElementById('mq-w-ok').onclick = function() { w.remove(); };
        return;
    }


/* STEALTH & BYPASS */
var bK=function(e){e.stopImmediatePropagation();};
window.addEventListener('blur',bK,true);
window.addEventListener('copy',bK,true);
document.addEventListener('visibilitychange',bK,true);
try{
    Object.defineProperty(document,'visibilityState',{get:function(){return'visible';},configurable:true});
    Object.defineProperty(document,'hidden',{get:function(){return false;},configurable:true});
}catch(e){}

/* STORAGE CLEANUP */
(function(){var n=Date.now();for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k&&k.indexOf(PX)===0){try{var j=JSON.parse(localStorage.getItem(k));if(j.ts&&(n-j.ts>EX))localStorage.removeItem(k);}catch(e){}}}})();

var rq=document.querySelectorAll('.que'),tot=rq.length;
/* MODO EXPLORACIÓN / ERROR */
if(tot===0){
    var w=document.createElement('div');
    w.style="position:fixed;top:20px;right:20px;z-index:2147483647;background:#1a1b26;color:#cdd6f4;padding:20px;border-radius:12px;border:1px solid #3b82f6;width:300px;font-family:-apple-system,BlinkMacSystemFont,serif;box-shadow:0 12px 40px rgba(0,0,0,0.6);animation:mq-fade 0.3s ease;";
    
    // Inyectar animación simple
    var stl=document.createElement('style');
    stl.textContent="@keyframes mq-fade{from{opacity:0;transform:translateY(-10px);}to{opacity:1;transform:translateY(0);}}";
    document.head.appendChild(stl);

    w.innerHTML="<h3 style='margin:0 0 10px;color:#3b82f6;font-size:16px;display:flex;align-items:center;gap:8px'>⚠️ Moodle Pro</h3>"
        +"<p style='font-size:13px;line-height:1.5;margin-bottom:15px;opacity:0.9;'>No se detectó ningún cuestionario activo en esta página (faltan elementos <code>.que</code>).</p>"
        +"<div style='display:flex;flex-direction:column;gap:8px'>"
        +"<button id='mq-w-ok' style='padding:10px;background:#3b82f6;color:white;border:none;border-radius:6px;cursor:pointer;font-weight:bold;font-size:12px'>ENTENDIDO</button>"
        +"<a href='https://github.com/maxicabrera7/Moodle-Pro/issues' target='_blank' style='padding:10px;background:#24283b;color:#cdd6f4;text-align:center;text-decoration:none;border-radius:6px;font-size:12px;border:1px solid #414868'>REPORTAR ERROR</a>"
        +"</div>";
    
    document.body.appendChild(w);
    document.getElementById('mq-w-ok').onclick=function(){w.remove();stl.remove();};
    return;
}

var db=function(f,m){var t;return function(){var c=this,a=arguments;clearTimeout(t);t=setTimeout(function(){f.apply(c,a);},m);};};
var sv=JSON.parse(localStorage.getItem(SK))||{};
var st={idx:-1,ans:sv.ans||new Array(tot).fill(false),ais:sv.ais||new Array(tot).fill(''),dk:localStorage.getItem(ST)?localStorage.getItem(ST)==='true':(window.matchMedia('(prefers-color-scheme:dark)').matches),v:false,m:false,pb:false,tmrOn:false,tmrVal:0,tmrInt:null};
var getC=function(d){return{bg:d?'#1a1b26':'#fff',tx:d?'#cdd6f4':'#333',bd:d?'#24283b':'#e2e8f0',cd:d?'#24283b':'#f8fafc',dn:d?'#162f2e':'#f0fdf4',ac:'#3b82f6',ab:d?'#1e293b':'#eff6ff',ib:d?'#16161e':'#fff',sb:d?'#3b82f6':'#ccc'};};
var C=getC(st.dk);

var svGH='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';
var svIG='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>';
var svTR='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>';

var styl=mk('style');document.head.appendChild(styl);
var upS=function(){
    C=getC(st.dk);
    styl.textContent="#mq-p { position:fixed!important; right:15px; top:15px; z-index:2147483647; width:360px; height:85vh; font-family:-apple-system,sans-serif; background:"+C.bg+"!important; color:"+C.tx+"!important; border:1px solid "+C.bd+"!important; border-radius:12px; box-shadow:0 12px 40px rgba(0,0,0,0.4); display:flex; flex-direction:column; overflow:hidden; transition: height 0.25s ease; resize: both!important; min-width:300px; min-height:200px; padding:12px; box-sizing: border-box; }\n"
    +".mq-h { padding:0 0 12px; display:flex; flex-direction:column; gap:8px; border-bottom:1px solid "+C.bd+"; background:transparent; cursor:move; flex-shrink:0; }\n"
    +".mq-h-top { display:flex; justify-content:space-between; align-items:center; width:100%; }\n"
    +".mq-h-btns { display:flex; gap:3px; align-items:center; flex-wrap:wrap; justify-content:flex-start; }\n"
    +".mq-b { flex:1; overflow-y:auto; padding:12px 0 0; transition: opacity 0.2s; }\n"
    +".mq-c { padding:10px; margin-bottom:10px; border-radius:8px; border:1px solid "+C.bd+"; background:"+C.cd+"!important; cursor:pointer; color:inherit!important; transition: all 0.2s ease; position:relative; content-visibility:auto; contain-intrinsic-size: 100px; }\n"
    +".mq-c.done { background:"+C.dn+"!important; border-color:rgba(34,197,94,0.3)!important; }\n"
    +".mq-c.act { border-color:"+C.ac+"!important; background:"+C.ab+"!important; transform: translateX(4px); }\n"
    +".mq-btn { cursor:pointer; border:1px solid "+C.bd+"; background:"+C.bg+"; color:inherit; padding:5px; border-radius:6px; font-size:11px; transition: background 0.2s; display:flex; align-items:center; justify-content:center; }\n"
    +"#mq-p input, #mq-p textarea, #mq-p select { background:"+C.ib+"!important; color:"+C.tx+"!important; border:1px solid "+C.bd+"!important; border-radius:6px; font-family:inherit; outline:none; }\n"
    +".mq-badge { font-size:9px; background:"+C.ac+"; color:#fff!important; padding:2px 5px; border-radius:4px; margin-bottom:6px; display:inline-block; font-weight:bold; text-transform:uppercase; }\n"
    +".mq-ai { width:100%; margin-top:8px; padding:6px; font-size:10px; min-height:45px; resize:vertical; }\n"
    +".mq-hide { display:none!important; }\n"
    +".mq-soc { display:flex; gap:8px; align-items:center; }\n"
    +".mq-soc a { color:inherit; opacity:0.7; transition:0.2s; display:flex; }\n"
    +"#mq-p *::-webkit-scrollbar { width: 6px; }\n"
    +"#mq-p *::-webkit-scrollbar-thumb { background: "+C.sb+"; border-radius: 10px; }\n"
    +"pre { white-space:pre-wrap!important; font-size:11px!important; line-height:1.4; font-family:inherit!important; color:inherit!important; }";
};

var pnl=mk('div');pnl.id='mq-p';
pnl.innerHTML='<div class="mq-h">'
    +'<div class="mq-h-top"><b style="font-size:13px">📋 Moodle Pro</b>'
    +'<div style="display:flex;gap:4px"><button class="mq-btn" id="m-rst" title="Resetear">'+svTR+'</button><button class="mq-btn" id="m-min" title="Minimizar" style="width:24px;font-weight:bold">_</button><button class="mq-btn" id="m-x" title="Cerrar" style="width:24px;font-weight:bold">✕</button></div></div>'
    +'<div class="mq-h-btns">'
    +'<button class="mq-btn" id="m-tmr" title="Temporizador">00:00</button>'
    +'<button class="mq-btn" id="m-pb" title="Prompt Builder">🤖 Prompt</button>'
    +'<button class="mq-btn" id="m-all" title="Copiar Todo">📋</button>'
    +'<button class="mq-btn" id="m-pend" title="Copiar Pendientes">⏳</button>'
    +'<button class="mq-btn" id="m-vis" title="Ocultar Respondidas">👁️</button>'
    +'<button class="mq-btn" id="m-md" title="Exportar MD">⬇️</button>'
    +'<button class="mq-btn" id="m-th" title="Cambiar Tema">🌓</button>'
    +'</div></div>'
    +'<div class="mq-b" id="mq-body">'
    +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">'
    +'<div id="mq-st" style="font-size:10px;font-weight:bold"></div>'
    +'<div class="mq-soc">'
    +'<a href="https://github.com/" target="_blank" title="GitHub">'+svGH+'</a>'
    +'<a href="https://www.instagram.com/maxi.cabrera._/" target="_blank" title="Instagram">'+svIG+'</a>'
    +'</div></div>'
    +'<div style="background:rgba(0,0,0,0.1);height:5px;border-radius:3px;margin-bottom:12px;overflow:hidden"><div id="mq-br" style="height:100%;background:#3b82f6;width:0%;transition:width 0.4s"></div></div>'
    +'<input type="text" style="width:100%;padding:8px;margin-bottom:10px;box-sizing:border-box" placeholder="Filtrar..." id="mq-s">'
    +'<div id="mq-pb-sec" class="mq-hide" style="margin-bottom:10px;padding:8px;border-radius:8px;border:1px solid #3b82f6">'
    +'<select id="pb-mode" style="width:100%;padding:4px;margin-bottom:6px;border-radius:4px;font-size:10px">'
    +'<option value="all">Todas las preguntas</option><option value="pend">Solo pendientes</option><option value="cur">Pregunta actual</option><option value="spec">Pregunta específica</option>'
    +'</select>'
    +'<input type="number" id="pb-num" placeholder="N°" style="width:100%;padding:4px;margin-bottom:6px;border-radius:4px;font-size:10px;display:none">'
    +'<textarea id="pb-out" style="width:100%;height:80px;font-size:9px;padding:4px;border:1px solid #ccc" placeholder="Escribe o genera el prompt..."></textarea>'
    +'<div style="display:flex;gap:4px;margin-top:4px"><button class="mq-btn" id="pb-gen" style="flex:1">⚡ Generar</button><button class="mq-btn" id="pb-cp" style="flex:1">📋 Copiar</button></div></div>'
    +'<div id="mq-ls"></div></div>';

var ls=pnl.querySelector('#mq-ls'),crds=[],dta=[],typs=[];
var upD=db(function(){localStorage.setItem(SK,JSON.stringify({ans:st.ans,ais:st.ais,ts:Date.now()}));},500);

var upT=function(){
    var c=st.ans.filter(Boolean).length,p=Math.round((c/tot)*100);
    pnl.querySelector('#mq-st').textContent='ESTADO: '+c+'/'+tot+' ('+p+'%)';
    pnl.querySelector('#mq-br').style.width=p+'%';
    upD();
    crds.forEach(function(r,i){if(st.v&&st.ans[i])r.classList.add('mq-hide');else r.classList.remove('mq-hide');});
};

var genPrompt=function(){
    var m=pnl.querySelector('#pb-mode').value, n=parseInt(pnl.querySelector('#pb-num').value);
    var indices=[];
    if(m==='all') rq.forEach(function(_,i){indices.push(i)});
    else if(m==='pend') st.ans.forEach(function(a,i){if(!a)indices.push(i)});
    else if(m==='cur') {if(st.idx>=0)indices.push(st.idx)}
    else if(m==='spec'&&n>0&&n<=tot) indices.push(n-1);
    
    var res='Tengo un cuestionario de Moodle. Responde cada pregunta indicando qué opción corresponde a cada campo.\n\n';
    indices.forEach(function(i){ res += '--- PREGUNTA '+(i+1)+' ['+typs[i]+'] ---\n'+dta[i]+'\n\n'; });
    pnl.querySelector('#pb-out').value=res;
};

rq.forEach(function(q,i){
    var qt=q.querySelector('.qtext'),cl=qt?qt.cloneNode(true):null;
    if(cl){cl.querySelectorAll('.MathJax_Preview,.MathJax,.MathJax_Display').forEach(function(m){m.remove();});cl.querySelectorAll('script[type="math/tex"]').forEach(function(s){s.replaceWith(' \\('+s.textContent+'\\) ');});}
    var txt=cl?cl.innerText.trim():'---', ims=qt?Array.from(qt.querySelectorAll('img')).map(function(m){return m.src;}):[];
    var typ='Info';if(q.querySelector('select'))typ='Select';else if(q.querySelector('input[type=radio]'))typ='Radio';else if(q.querySelector('input[type=checkbox]'))typ='Check';
    typs.push(typ);
    var f=txt, sel=Array.from(q.querySelectorAll('select')),inp=Array.from(q.querySelectorAll('input[type=checkbox],input[type=radio]'));
    if(sel.length){
        var o=Array.from(new Set(sel.flatMap(function(s){return Array.from(s.options).filter(function(v){return v.value&&v.text.toLowerCase().indexOf('elegir')===-1;}).map(function(v){return v.text;});})));
        f+='\nOpciones: '+o.join(' | ');
    } else if(inp.length){
        var o=Array.from(new Set(inp.map(function(n){return(n.closest('label,div')||{innerText:n.value}).innerText.trim();})));
        f+='\nOpciones: '+o.join(' | ');
    }
    dta.push(f);
    var c=mk('div');c.className='mq-c'+(st.ans[i]?' done':'');
    var ih=ims.map(function(s){return'<div style="position:relative;margin:8px 0"><img src="'+s+'" style="width:100%;border-radius:4px"></div>';}).join('');
    c.innerHTML='<span class="mq-badge">'+typ+'</span><pre>P'+(i+1)+': '+f+'</pre>'+ih+'<textarea class="mq-ai" placeholder="IA Notas...">'+(st.ais[i]||'')+'</textarea><div style="display:flex;gap:4px;margin-top:8px"><button class="mq-btn b-cp" style="flex:1">Copiar</button><button class="mq-btn b-ok">'+(st.ans[i]?'✅':'⬜')+'</button></div>';
    var ai=c.querySelector('.mq-ai');ai.oninput=function(e){st.ais[i]=e.target.value;upD();};ai.onclick=function(e){e.stopPropagation();};
    c.querySelector('.b-cp').onclick=function(e){e.stopPropagation();navigator.clipboard.writeText('P'+(i+1)+' ['+typ+']: '+f+'\n'+st.ais[i]);var b=e.target;b.textContent='✅';setTimeout(function(){b.textContent='Copiar';},800);};
    c.querySelector('.b-ok').onclick=function(e){e.stopPropagation();st.ans[i]=!st.ans[i];c.classList.toggle('done',st.ans[i]);e.target.textContent=st.ans[i]?'✅':'⬜';upT();};
    c.onclick=function(){st.idx=i; crds.forEach(function(cr,idx){cr.classList.toggle('act',idx===i);}); rq[i].scrollIntoView({behavior:'smooth',block:'center'});};
    ls.appendChild(c);crds.push(c);
});

var det=function(){rq.forEach(function(q,i){var v=q.querySelector('input:checked')||Array.from(q.querySelectorAll('select')).some(function(s){return s.value&&s.value!=='0';})||Array.from(q.querySelectorAll('textarea,input[type=text]')).some(function(t){return t.value.trim().length>0;});if(!!v!==st.ans[i]){st.ans[i]=!!v;crds[i].classList.toggle('done',st.ans[i]);crds[i].querySelector('.b-ok').textContent=st.ans[i]?'✅':'⬜';upT();}});};
document.addEventListener('change',det);document.addEventListener('input',det);

pnl.querySelector('#m-rst').onclick=function(){if(confirm('¿Reiniciar?')){localStorage.removeItem(SK);location.reload();}};
pnl.querySelector('#m-all').onclick=function(e){navigator.clipboard.writeText(dta.join('\n\n'));var b=e.target;b.textContent='✅';setTimeout(function(){b.textContent='📋';},1000);};
pnl.querySelector('#m-pend').onclick=function(e){navigator.clipboard.writeText(dta.filter(function(_,i){return!st.ans[i];}).join('\n\n'));var b=e.target;b.textContent='✅';setTimeout(function(){b.textContent='⏳';},1000);};
pnl.querySelector('#pb-cp').onclick=function(e){navigator.clipboard.writeText(pnl.querySelector('#pb-out').value);var b=e.target;b.textContent='✅';setTimeout(function(){b.textContent='📋';},1000);};
pnl.querySelector('#m-md').onclick=function(){
    var m=dta.map(function(t,i){return'## Pregunta '+(i+1)+'\n'+t+(st.ais[i]?'\n\n### Notas:\n'+st.ais[i]:'');}).join('\n\n---\n\n');
    var b=new Blob([m],{type:'text/markdown'}), u=URL.createObjectURL(b), a=mk('a');
    a.href=u; a.download='quiz.md'; document.body.appendChild(a); a.click(); document.body.removeChild(a);
};
pnl.querySelector('#m-min').onclick=function(){
    st.m=!st.m;
    pnl.querySelector('#mq-body').classList.toggle('mq-hide',st.m);
    pnl.style.height=st.m?'auto':'85vh';
    pnl.style.minHeight=st.m?'0':'200px';
    pnl.style.paddingBottom=st.m?'0':'12px';
    this.textContent=st.m?'+':'_';
};
pnl.querySelector('#m-x').onclick=function(){pnl.remove();styl.remove();};
pnl.querySelector('#m-th').onclick=function(){st.dk=!st.dk;localStorage.setItem(ST,st.dk);upS();};
pnl.querySelector('#m-vis').onclick=function(e){st.v=!st.v;e.target.style.background=st.v?'#3b82f6':'';upT();};
pnl.querySelector('#m-pb').onclick=function(e){st.pb=!st.pb;pnl.querySelector('#mq-pb-sec').classList.toggle('mq-hide',!st.pb);e.target.style.background=st.pb?'#3b82f6':'';};
pnl.querySelector('#pb-gen').onclick=genPrompt;
pnl.querySelector('#pb-mode').onchange=function(){pnl.querySelector('#pb-num').style.display=(this.value==='spec'?'block':'none');};
pnl.querySelector('#mq-s').oninput=db(function(e){var v=e.target.value.toLowerCase();crds.forEach(function(c,i){var m=dta[i].toLowerCase().indexOf(v)>-1||st.ais[i].toLowerCase().indexOf(v)>-1;c.classList.toggle('mq-hide',!(m&&!(st.v&&st.ans[i])));});},300);

var dg=false,dx,dy;pnl.querySelector('.mq-h').onmousedown=pnl.querySelector('.mq-h').ontouchstart=function(e){if(e.target.tagName!=='BUTTON'&&e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA'&&e.target.tagName!=='A'){dg=true;var p=e.touches?e.touches[0]:e;dx=p.clientX-pnl.offsetLeft;dy=p.clientY-pnl.offsetTop;}};
document.onmousemove=document.ontouchmove=function(e){if(dg){var p=e.touches?e.touches[0]:e;if(e.touches)e.preventDefault();pnl.style.left=(p.clientX-dx)+'px';pnl.style.top=(p.clientY-dy)+'px';pnl.style.right='auto';}};
document.onmouseup=document.ontouchend=function(){dg=false;};

var tmrBtn=pnl.querySelector('#m-tmr');tmrBtn.onclick=function(){if(st.tmrOn){clearInterval(st.tmrInt);st.tmrOn=false;}else{st.tmrOn=true;st.tmrInt=setInterval(function(){st.tmrVal++;tmrBtn.textContent=String(Math.floor(st.tmrVal/60)).padStart(2,'0')+':'+String(st.tmrVal%60).padStart(2,'0');},1000);}};

document.body.appendChild(pnl);upS();det();upT();
})());
