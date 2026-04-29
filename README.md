# Moodle Pro

Herramienta de asistencia técnica para cuestionarios de Moodle. Inyecta un panel lateral con herramientas de filtrado, exportación a Markdown y generador de prompts para IA.

---

## 💻 Instalación en PC (Chrome, Edge, Firefox)

Instalar esto toma 30 segundos. Si tardas más, el problema eres tú.

1. **Crea un marcador cualquiera:** Presiona `Ctrl + D` en cualquier página.
2. **Edita el marcador:** - Haz clic derecho sobre el marcador que acabas de crear en tu barra de marcadores.
   - Selecciona **Editar** (o **Propiedades** en Firefox).
3. **Configura los campos:**
   - **Nombre:** `Moodle Pro`
   - **URL / Dirección:** Copia y pega el siguiente código exacto:

```javascript
javascript:(function(){var s=document.createElement('script');s.src='[https://raw.githubusercontent.com/maxicabrera7/Moodle-Pro/refs/heads/main/moodle-pro.js?v='+Math.random();document.body.appendChild(s)](https://raw.githubusercontent.com/maxicabrera7/Moodle-Pro/refs/heads/main/moodle-pro.js?v='+Math.random();document.body.appendChild(s));})();
```

4. **Uso:** Entra a tu cuestionario de Moodle y haz clic en el marcador. El panel aparecerá a la derecha.

---

## 📱 Instalación en Celular (Android/iOS)

En móviles no puedes simplemente hacer clic en un marcador. Los navegadores móviles son basura por diseño. Sigue estos pasos:

1. **Crea el marcador:** Crea un marcador con cualquier página, ponle el nombre `Moodle Pro` y pega el código `javascript:...` (el de arriba) en la URL.
2. **Cómo ejecutarlo:**
   - Entra al cuestionario de Moodle.
   - Toca la **barra de direcciones** del navegador.
   - Borra lo que haya y escribe `Moodle Pro` (el nombre del marcador).
   - Verás que en las sugerencias aparece el marcador con el icono de una estrella. **Tócalo.**
   - El script se ejecutará sobre la página abierta.

---

## 🛠️ Funcionalidades

* **Prompt Builder:** Genera automáticamente un texto estructurado para pegar en ChatGPT/Claude con todas las preguntas del examen.
* **Stealth Mode:** Intenta bloquear eventos de detección de cambio de pestaña y pérdida de foco (blur/visibilitychange).
* **Auto-Save:** Guarda tus notas e historial en el `localStorage` de tu navegador para que no pierdas nada si se cierra la pestaña.
* **Exportar:** Baja un archivo `.md` con todo el contenido del cuestionario para estudiarlo después.

---

## ⚠️ Descargo de Responsabilidad

Este script se entrega "tal cual", sin garantías de ningún tipo.
- Si el servidor de Moodle tiene una política de seguridad (CSP) estricta, el script no cargará. 
- Si te pillan o repruebas por usar herramientas externas, es tu responsabilidad exclusiva. No me busques para quejarte.

**Licencia:** MIT. Úsalo, modifícalo o rómpelo.
