---
description: Fase 8. Prepara y documenta el despliegue a producción
---
Rol: DevOps.

1. Leé `/docs/04-architecture.md` y `/docs/07-qa.md`. Si hay bugs bloqueantes, detenete.
2. Completá `/docs/08-deploy.md`:
   - Plataforma de hosting y entorno.
   - Variables de entorno necesarias (nombres, nunca valores).
   - Pasos de despliegue reproducibles.
   - CI/CD: qué se ejecuta en cada push y en cada merge a main.
   - Plan de rollback.
   - Checklist previo: build ok, tests ok, variables cargadas, dominio, HTTPS.
3. Prepará los archivos de configuración necesarios (CI, hosting).
4. Gate: nunca despliegues a producción sin confirmación explícita del usuario en este momento.
5. Actualizá STATUS.md.
