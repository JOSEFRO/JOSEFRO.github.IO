# Benchmark competitivo de proyectos — noviembre de 2026

Fecha de consulta: 18 de noviembre de 2026. Las estrellas son una fotografía del momento, no una medida absoluta de calidad. La selección es representativa y prioriza repositorios públicos comparables por función y tecnología; no pretende enumerar todo GitHub.

## Referentes seleccionados

| Proyecto propio | Referente público | Estrellas observadas | Licencia observada | Qué merece adaptarse |
|---|---|---:|---|---|
| Portafolio JOSEFRO | [adrianhajdin/project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio) | 7,134 | No verificada en esta revisión | Presentación 3D, narrativa visual y componentes de portafolio. El repositorio tiene actividad antigua; usarlo como referencia, no como plantilla actual sin auditoría. |
| BRIFAN TECH | [TryGhost/Ghost](https://github.com/TryGhost/Ghost) | 55,850 | MIT | Flujo editorial, borradores, etiquetas, vista previa, publicación programada y experiencia de lectura. No replicar todo Ghost: BRIFAN es una plataforma propia con React y Supabase. |
| NEXUS PC CONTROL | [windirstat/windirstat](https://github.com/windirstat/windirstat) | 4,567 | GPL-3.0-or-later | Visualización tipo treemap, navegación por uso de disco y explicación del espacio ocupado. La licencia copyleft impide tratar su código como una fuente de copia libre para cualquier proyecto; adaptar conceptos y escribir implementación propia. |
| NETLAB AI | [srl-labs/containerlab](https://github.com/srl-labs/containerlab) | 2,962 | BSD-3-Clause | Topologías declarativas, validación de nodos/enlaces, inventario del laboratorio y evidencia reproducible. Es una herramienta de laboratorios con contenedores; no sustituye Packet Tracer. |
| Siete Raíces — Web | [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) | 33,812 | MIT | Escenas 3D componibles, reutilización de componentes, integración React y herramientas de accesibilidad/rendimiento. El sitio ya usa Three.js, GSAP y Lenis; migrar solo si aporta valor real. |
| Siete Raíces — Juego | [SlashScreen/skelerealms](https://github.com/SlashScreen/skelerealms) | 499 | MIT | Arquitectura de mundo RPG y sistemas desacoplados. Proyecto de referencia con actividad menos reciente: verificar compatibilidad antes de adoptar patrones. |
| Siete Raíces — Juego | [QueenChristina/gd_dialog](https://github.com/QueenChristina/gd_dialog) | 122 | MIT | Diálogos ramificados y decisiones reutilizables para Godot. Es un módulo especializado, no un juego completo. |

## Estado de los seis repositorios propios

| Repositorio | Estrellas observadas | Última validación de Actions observada |
|---|---:|---|
| [JOSEFRO.github.IO](https://github.com/JOSEFRO/JOSEFRO.github.IO) | 1 | Quality checks y GitHub Pages: success |
| [BRIFAN-TECH](https://github.com/JOSEFRO/BRIFAN-TECH) | 1 | CI en rama de rediseño y deploy de main: success |
| [NEXUS-PC-CONTROL](https://github.com/JOSEFRO/NEXUS-PC-CONTROL) | 0 | CI de main: success; PR #10 añade mapa visual y tiene validación en curso |
| [NETLAB-AI](https://github.com/JOSEFRO/NETLAB-AI) | 0 | Python checks de main: success |
| [cultivation-universe-web](https://github.com/JOSEFRO/cultivation-universe-web) | 0 | Web build y deploy de GitHub Pages: success |
| [cultivation-universe-game](https://github.com/JOSEFRO/cultivation-universe-game) | 0 | Validación Godot exitosa en rama de rediseño; no se toma como prueba de que main tenga el mismo estado |

## Plan de adaptación por producto

### 1. Portafolio JOSEFRO
- Mantener HTML/CSS/JS ligero y la identidad actual.
- Mejorar presentación de proyectos con demostraciones visuales verificables, estados reales y capturas actualizadas.
- Evaluar una escena 3D pequeña, con fallback móvil y respeto a `prefers-reduced-motion`; no introducir WebGL pesado solo por tendencia.

### 2. BRIFAN TECH
- Prioridad: flujo editorial claro para autor y administrador.
- Próximos candidatos: borradores y vista previa, etiquetas consistentes, revisión de contenido y estados de publicación.
- Antes de añadir programación de publicaciones, revisiones o newsletters, auditar el esquema y políticas RLS de Supabase y preparar migraciones versionadas. No modificar producción sin respaldo y autorización.

### 3. NEXUS PC CONTROL
- Prioridad: comprensión visual del almacenamiento y decisiones reversibles.
- Primera adaptación funcional: mapa comparativo de archivos grandes, de solo lectura, sin nuevas dependencias y sin ejecutar borrados.
- Próximos candidatos: árbol de carpetas proporcional, filtros por extensión y explicación del espacio potencialmente recuperable. Mantener confirmación explícita y papelera de reciclaje como opción predeterminada.

### 4. NETLAB AI
- Prioridad: pasar del documento a una práctica reproducible.
- Próximos candidatos: modelo declarativo de topología, validación de nodos y enlaces, mapa visual, registro de pasos y evidencias.
- Mantener adaptadores separados para Packet Tracer/MCP y cualquier motor adicional. No ejecutar configuraciones en equipos reales; las acciones deben limitarse a laboratorios propios o autorizados y requerir revisión antes de aplicarse.

### 5. Siete Raíces — Web
- Mantener Three.js + GSAP mientras la arquitectura actual sea suficiente.
- Mejorar carga progresiva, accesibilidad, navegación por capítulos y fallback para dispositivos con menor capacidad gráfica.
- Evaluar React Three Fiber solo para nuevas escenas reutilizables; no migrar todo el proyecto sin una prueba comparativa.

### 6. Siete Raíces — Juego
- Prioridad: convertir la pantalla inicial en un ciclo jugable pequeño y verificable.
- Construir sistemas independientes de personaje, guardado/carga, diálogo ramificado, misiones, inventario y progresión.
- Añadir pruebas automatizadas por sistema antes de ampliar regiones o contenido. Los frameworks externos se usarán como referencia de arquitectura, no como dependencias copiadas sin auditoría.

## Reglas de incorporación

1. Las estrellas sirven para descubrir referentes; no sustituyen la revisión de mantenimiento, licencia, seguridad, compatibilidad y accesibilidad.
2. No copiar código, arte, música ni contenido de repositorios externos sin comprobar licencia y atribución.
3. Preferir implementaciones pequeñas, reversibles y probadas sobre reescrituras completas.
4. No añadir secretos, credenciales ni datos personales a repositorios.
5. Mantener los servicios externos y datos de producción fuera del alcance de las pruebas automatizadas.

## Cambios funcionales iniciados

- NEXUS PC CONTROL: [PR #10 — mapa visual de archivos grandes](https://github.com/JOSEFRO/NEXUS-PC-CONTROL/pull/10). Implementa una vista comparativa de solo lectura basada en resultados existentes. La validación de CI está en curso; no se debe considerar incorporada a main hasta que se revise y fusione el PR.
