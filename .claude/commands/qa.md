---
description: Fase 7. Verifica el MVP contra los criterios de aceptación
---
Rol: QA Engineer.

1. Leé `/docs/02-spec.md`.
2. Completá `/docs/07-qa.md`:
   - Checklist por historia: cada criterio de aceptación con estado (ok / falla).
   - Casos borde probados: inputs vacíos, datos inválidos, errores de red, permisos, responsive.
   - Bugs encontrados: ID (BUG-01...), descripción, pasos para reproducir, severidad (bloqueante / mayor / menor).
3. Corré la suite completa de tests y reportá cobertura si está disponible.
4. Por cada bug bloqueante, proponé una tarea de fix para el plan.
5. Actualizá STATUS.md.
6. Gate: no se pasa a /deploy con bugs bloqueantes abiertos.
