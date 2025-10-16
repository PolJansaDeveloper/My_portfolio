
Pol Jansa Sierra — Final React + Vite + Tailwind Portfolio
=========================================================

Este proyecto está configurado con:
- React 18
- Vite
- TailwindCSS (3.4.13)
- Framer Motion (para animaciones)

Cómo usar (Mac / Windows / Linux)
---------------------------------
1. Descomprime esta carpeta.
2. Abre terminal y sitúate en la carpeta del proyecto.
3. Instala dependencias (recomendado usar --legacy-peer-deps si da errores):
   npm install --legacy-peer-deps
4. Ejecuta en modo desarrollo:
   npm run dev
   -> Abre http://localhost:5173
5. Para producción, genera build:
   npm run build
   -> La carpeta "dist" contendrá la versión estática lista para Netlify.

Notas
-----
- El typing effect se implementó internamente (no usa react-typed para evitar conflictos).
- Si quieres que te entregue también la versión estática lista para arrastrar a Netlify, dímelo y la generaré.
