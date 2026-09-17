# Voca9 — Explora lo que puedes llegar a ser

Sistema de orientación vocacional interactivo para estudiantes de grado 9, basado en tres dimensiones: **capacidades**, **intereses** y **posibilidades**.

## Objetivo

Diseñar una herramienta digital que permita a estudiantes de grado noveno recibir orientación vocacional u ocupacional mediante un test interactivo, ayudándoles a reconocer áreas vocacionales que podrían conectar con su perfil.

## Público objetivo

Estudiantes de grado 9 (aproximadamente 14-15 años) que están explorando opciones para su futuro educativo y profesional.

## Tecnologías utilizadas

- **HTML5** — Estructura semántica del sitio
- **CSS3** — Diseño visual, animaciones y responsive
- **JavaScript vanilla** — Lógica del test, sistema de puntuación y resultados
- **Canvas API** — Animación de constelación de nodos en el hero
- **localStorage** — Persistencia temporal de respuestas
- **Google Fonts** — Tipografías Space Grotesk e Inter (vía CDN)
- **Vite** — Herramienta de build para generar la versión optimizada

Sin backend, sin base de datos, sin autenticación. Todo funciona en el navegador.

## Cómo ejecutar localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/voca9.git
   cd voca9
   ```

2. Instala las dependencias (solo para desarrollo):
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre la URL que aparece en la terminal (normalmente `http://localhost:5173`).

> **Alternativa sin instalar nada:** Abre el archivo `index.html` directamente en tu navegador. La página funciona sin servidor.

## Cómo subirlo a GitHub

1. Crea un repositorio nuevo en [GitHub](https://github.com/new) con el nombre `voca9`.

2. En la terminal, dentro de la carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "Voca9 — Sistema de orientación vocacional"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/voca9.git
   git push -u origin main
   ```

3. Reemplaza `tu-usuario` por tu nombre de usuario de GitHub.

## Cómo activar GitHub Pages

1. Entra a tu repositorio en GitHub.
2. Ve a **Settings** (Configuración) → **Pages** (en el menú lateral izquierdo).
3. En la sección **Build and deployment**, selecciona:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / carpeta `/root`
4. Haz clic en **Save**.
5. Espera unos minutos. GitHub te mostrará una URL como:
   ```
   https://tu-usuario.github.io/voca9/
   ```

> Si usas Vite para generar la versión optimizada, ejecuta `npm run build` y sube el contenido de la carpeta `dist/` a una rama llamada `gh-pages`, o configura GitHub Pages para que sirva desde esa rama.

## Estructura del proyecto

```
voca9/
├── index.html        → Página principal (estructura HTML)
├── style.css         → Estilos, animaciones y responsive
├── script.js         → Lógica del test, puntuación y resultados
├── README.md         → Este archivo
├── assets/           → Carpeta para recursos (vacía por defecto)
├── package.json      → Configuración del proyecto (Vite)
└── vite.config.ts    → Configuración de build
```

## Cómo funciona el test

1. El estudiante responde 18 preguntas divididas en tres dimensiones:
   - **Capacidades** (preguntas 1-6)
   - **Intereses** (preguntas 7-12)
   - **Posibilidades** (preguntas 13-18)

2. Cada respuesta aporta puntos a una o varias de las 6 áreas vocacionales:
   - Tecnología e informática
   - Ingeniería y áreas técnicas
   - Ciencias y salud
   - Arte, diseño y comunicación
   - Humanidades, educación y ciencias sociales
   - Administración, negocios y emprendimiento

3. Al terminar, el sistema calcula porcentajes y muestra:
   - El área de mayor conexión
   - Un gráfico radar de las tres dimensiones
   - Explicación basada en las respuestas
   - Ocupaciones y caminos de aprendizaje sugeridos

## Características

- Test interactivo con 18 preguntas
- Barra de progreso visual
- Sistema de puntuación real (no aleatorio)
- Gráfico radar de perfil
- Animaciones de resultados
- Persistencia con localStorage (continuar al recargar)
- Descargar resultados como PDF (ventana de impresión)
- Diseño responsive (computador, tablet, celular)
- Accesibilidad: HTML semántico, navegación con teclado, contraste adecuado
- Animación de constelación en el hero (Canvas API)
- Menú móvil
- Botón volver arriba

## Integrantes del equipo

1. **[Nombre del Integrante 1]** — Diseño, contenido y experiencia del usuario
2. **[Nombre del Integrante 2]** — Lógica del test, sistema de puntuación y resultados
3. **[Nombre del Integrante 3]** — Investigación vocacional, áreas y presentación visual

> Reemplaza los nombres entre corchetes con los nombres reales del equipo.

---

Voca9 — Explora. Conócete. Proyéctate.  
Proyecto escolar · 2026
