# NEXUS — Sitio web

Sitio web estático de NEXUS, publicado mediante GitHub Pages.

## Características

- Diseño adaptable a móviles, tabletas y escritorio.
- Navegación móvil accesible.
- Secciones de presentación, soluciones, metodología y contacto.
- Formulario validado en el navegador que prepara una consulta en WhatsApp.
- Metadatos básicos para compartir y motores de búsqueda.
- Sin base de datos, sin backend y sin dependencias de instalación.

## Contacto

- WhatsApp: **+1 (849) 252-9296**
- Correo: josemanuelfrancobrito11@gmail.com

El formulario no almacena información ni la envía a un servidor. Los datos se incorporan a un mensaje mediante el enlace oficial de WhatsApp; la persona puede revisarlo antes de enviarlo.

## Estructura

```
.
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── favicon.svg
└── docs/
    └── PROJECT-STRUCTURE.md
```

## Desarrollo local

Abre `index.html` directamente en un navegador. No requiere Node.js, compilación ni instalación de paquetes.

## Publicación

El repositorio está preparado para GitHub Pages desde la rama `main` y la raíz del repositorio. Después de cada actualización, GitHub Pages publica los cambios cuando termina su proceso de despliegue.

## Personalización

- Cambia el número de WhatsApp en `assets/js/main.js` (constante `WHATSAPP_NUMBER`).
- Cambia el correo y los textos de contacto en `index.html`.
- Edita colores, tipografía y espaciados en `assets/css/styles.css`.

## Estado del proyecto

La web es una presentación comercial estática. No incluye autenticación, pagos, panel privado, almacenamiento de formularios ni integraciones de servidor.
