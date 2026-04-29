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

En móviles no puedes simplemente hacer clic en un marcador. Los navegadores móviles son inservibles por diseño. Sigue estos pasos:

1. **Crea el marcador:** Crea un marcador con cualquier página, ponle el nombre `Moodle Pro` y pega el código `javascript:...` (el de arriba) en la URL.
2. **Cómo ejecutarlo:**
   - Entra al cuestionario de Moodle.
   - Toca la **barra de direcciones** del navegador.
   - Borra lo que haya y escribe `Moodle Pro` (el nombre del marcador).
   - Verás que en las sugerencias aparece el marcador con el icono de una estrella. **Tócalo.**
   - El script se ejecutará sobre la página abierta.

---

## 🛠️ Funcionalidades Detalladas

* **Stealth & Bypass (Evasión):** El script intercepta y detiene la propagación de eventos como `blur`, `copy` y `visibilitychange`. Redefine por software las propiedades `visibilityState` y `hidden` del navegador para que el sitio web crea que la pestaña siempre está activa y visible, incluso si cambias de ventana.
* **Scraping Inteligente:** Extrae automáticamente el texto de las preguntas, opciones de selección (Radio, Checkbox, Select) e imágenes. Incluye un motor de limpieza para **MathJax** que elimina el ruido visual del código LaTeX y lo convierte en texto legible.
* **Prompt Builder Adaptativo:** Permite generar bloques de texto optimizados para ChatGPT, Claude o Gemini. Puedes elegir exportar todo el cuestionario, solo las pendientes, la pregunta actual o una específica por su número.
* **Gestión de Estado (Auto-Save):** Usa el `localStorage` del navegador para persistir tu progreso. Si la página se refresca o se cierra, tus notas e historial de preguntas respondidas se recuperan automáticamente. Incluye una rutina de limpieza que borra datos antiguos (20+ días) para no saturar el almacenamiento del navegador.
* **Interfaz de Alto Rendimiento:** La UI incluye filtrado en tiempo real con **debouncing** (evita lag al escribir) y optimización de renderizado (`content-visibility`) para manejar cuestionarios de gran tamaño sin degradar el rendimiento del navegador.
* **Exportación a Markdown:** Genera y descarga un archivo `.md` estructurado con todas las preguntas y tus notas personales, ideal para documentación o estudio offline.
* **Modo Oscuro Integrado:** Detecta la preferencia del sistema o permite el cambio manual de tema para no quemarte las retinas durante sesiones nocturnas.
  
---

## ❓ Solución de Problemas (FAQ)

**1. Hago clic y no pasa nada:**
- Asegúrate de estar **dentro** de un cuestionario activo de Moodle. El script busca elementos con la clase `.que`. Si estás en el menú principal o en el área de archivos, el script no se ejecutará por seguridad.
- Revisa que la URL del marcador empiece por `javascript:`. Algunos navegadores borran el `javascript:` al pegar por razones de "seguridad".

**2. El panel aparece pero está vacío:**
- Esto sucede si el Moodle de tu institución usa una estructura de HTML personalizada. Abre la consola (`F12`), ve a la pestaña "Elements" y verifica si las preguntas tienen la clase `.que`. Si no es así, el script no las encontrará.

**3. ¿Es indetectable?**
- **No.** Ningún script de cliente es 100% indetectable si el servidor usa proctoring avanzado (como ProctorU o Safe Exam Browser). Este script evade la monitorización básica de Moodle, pero no hace milagros. Úsalo con cerebro.

---

## ⚠️ Descargo de Responsabilidad

Este script se entrega "tal cual", sin garantías de ningún tipo.
- Si el servidor de Moodle tiene una política de seguridad (CSP) estricta, el script no cargará. 
- Si te pillan o repruebas por usar herramientas externas, es tu responsabilidad exclusiva. No me busques para quejarte.

**Licencia:** MIT. Úsalo, modifícalo o rómpelo.
