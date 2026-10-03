---
description: Fase 6. Desarrolla una tarea del plan
argument-hint: [número de tarea, ej. T-03] (opcional, por defecto la siguiente pendiente)
---
Rol: Frontend, Backend o Full Stack según la tarea.

Tarea: $ARGUMENTS (si está vacío, tomá la siguiente pendiente de `/docs/05-plan.md`).

1. Explicá en 2 o 3 líneas qué vas a hacer y qué archivos vas a tocar. Esperá confirmación.
2. Creá la rama `feat/nombre-corto` (o `fix/` si corresponde).
3. Implementá solo lo que pide la tarea.
4. Escribí o actualizá tests.
5. Corré tests y linter. Si fallan, corregí antes de seguir.
6. Verificá la Definition of Done de CLAUDE.md.
7. Commit con formato convencional (feat:, fix:, refactor:, test:, docs:, chore:).
8. Marcá la tarea como hecha en el plan y actualizá STATUS.md.
9. Resumí en 3 líneas qué se hizo y cuál es la próxima tarea.

Si aparece algo fuera de alcance, anotalo en `/docs/backlog.md` y no lo implementes.
