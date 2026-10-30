# Estructura del proyecto

## Capas

| Ruta | Responsabilidad |
| --- | --- |
| `index.html` | Contenido semántico y estructura de la página |
| `assets/css/styles.css` | Diseño visual, componentes y responsive |
| `assets/js/main.js` | Menú, año del footer y formulario WhatsApp |
| `assets/favicon.svg` | Identidad visual de la pestaña |
| `robots.txt` | Indicaciones para rastreadores |
| `sitemap.xml` | URL pública principal |

## Flujo del formulario

1. El navegador valida los campos requeridos.
2. JavaScript construye un mensaje con los datos introducidos.
3. El navegador abre `https://wa.me/18492529296` con el texto codificado.
4. La persona revisa y envía el mensaje desde WhatsApp.

No hay una petición a una API propia y no se guardan los datos en el sitio.

## Decisiones técnicas

- HTML, CSS y JavaScript nativos para mantener el despliegue sencillo.
- Sin framework ni proceso de compilación.
- Sin base de datos ni backend.
- Los enlaces externos usan `rel="noopener noreferrer"` cuando se abren en otra pestaña.
- Se contempla la preferencia del sistema para reducir movimiento.
