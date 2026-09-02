# Calendarium

Planificador de Producto MVP
Calendario de compromisos con drag & drop
Documento de requisitos · v1.0

Problema
Los usuarios que gestionan compromisos diarios (reuniones, tareas, eventos) encuentran los calendarios convencionales rígidos e incómodos para reorganizar su tiempo de forma ágil. No existe una manera simple y visual de registrar cualquier tipo de compromiso y reordenarlo rápidamente sin fricciones.

Beneficio Principal
Una app de calendario donde el usuario puede crear, etiquetar con color y reprogramar compromisos (reuniones, tareas, eventos) mediante arrastrar y soltar, logrando una gestión de tiempo más rápida y flexible.

Características Principales — exactamente 3
Creación de compromisos Formulario mínimo: título, tipo, fecha/hora y duración. Vistas de día, semana y mes para consulta rápida.

Etiquetas con color Clasificación por tipo (reunión, tarea, evento) con color asignado visible directamente en el calendario.

Drag & drop para reprogramar Arrastrar cualquier compromiso a un nuevo horario o día directamente en la vista del calendario.

Flujo de Usuario
El usuario abre la app y ve el calendario en vista semanal (por defecto).
Hace clic en un slot vacío; completa el formulario mínimo (título, tipo, duración) y guarda.
El compromiso aparece en el calendario con el color de su etiqueta.
Para cambiar horario o día, arrastra el bloque al nuevo slot. El cambio se refleja de inmediato.
Métrica de Éxito
El 70 % de los usuarios activos semanales reprograman al menos un compromiso mediante drag & drop dentro de los primeros 14 días de uso, confirmando que la flexibilidad resuelve el problema principal.

Tecnologías Sugeridas (opcional)
React + FullCalendar.js — drag & drop y vistas nativas, open source
LocalStorage / Supabase — persistencia simple o con backend mínimo
Notas y Supuestos
El producto es una aplicación web (no móvil nativa) en esta fase MVP.
No requiere sincronización multi-dispositivo ni autenticación de usuarios en el alcance inicial.
Funcionalidades como notificaciones, invitaciones a terceros, integración con Google Calendar o búsqueda de compromisos quedan fuera del MVP y pueden incorporarse en v2 una vez validada la métrica de éxito.

## Roadmap técnico (pendiente)

- **CI**: configurar GitHub Actions para correr tests (y build/lint) automáticamente en cada PR y al mergear, evitando romper `main` sin darse cuenta.
