# Laboratorio de Ecología y Biogeografía — Equipo Arana

Sitio estático del laboratorio (scaffold básico).

## Estructura
- `index.html`, `about.html`, `research.html`, `people.html`, `publications.html`, `contact.html` — páginas principales
- `styles.css` — estilos
- `main.js` — interacciones (menú, formulario demo)
- `images/` — imágenes y placeholders

## Vista local
Abre `index.html` en tu navegador (doble clic o arrastra al navegador). Para una vista más fiel a producción, sirve los archivos con un servidor local, por ejemplo:

Usando Python 3:

```bash
python -m http.server 8000
# luego abre http://localhost:8000
```

## Despliegue (GitHub Pages)
1. Crea un repositorio en GitHub e inicializa localmente:
   ```bash
   git init
   git add .
   git commit -m "Initial lab site"
   git remote add origin <url-del-repo>
   git push -u origin main
   ```
2. Ve a Settings → Pages en GitHub y selecciona la rama `main` y la carpeta `/ (root)`.
3. Guarda; GitHub Pages desplegará el sitio en `https://<tu-usuario>.github.io/<repo>`.

## Notas y siguientes pasos
- Reemplaza contenidos y fotos por los materiales reales del equipo.
- Para recibir mensajes desde el formulario, configura un servicio como Formspree, Netlify Forms o un backend propio.
- Puedo ayudarte a personalizar estilos, añadir perfiles de equipo automatizados o integrar un gestor de publicaciones.
