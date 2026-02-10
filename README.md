## Arquitectura del proyecto

Esta aplicación es un proyecto de ejemplo basado en la API pública de Rick & Morty. Permite consultar, filtrar y paginar personajes, además de mostrar un detalle completo del personaje con información de origen y ubicación. También incluye un carrusel de personajes visitados y manejo avanzado de estados y caché con React Query y Zustand.

La arquitectura está pensada para escalabilidad, mantenibilidad y separación de responsabilidades, usando el patrón Feature Modules.

Tecnologías

- Framework: Next.js 16 (App Router)

- Librerías UI: MUI v7

- State Management: Zustand

- Data Fetching y Cache: React Query

- Testing: Jest + React Testing Library

- Carrusel: react-multi-carousel

- Estilos: SCSS Modules

La aplicación sigue un patrón modular por features, separando las responsabilidades.

```txt
app/
├─ routes/       # Rutas principales de la aplicación
├─ config/       # Configuración de cliente https
├─ context/      # Configuración para estado global de datos
├─ hooks/        # Custom hooks
├─ lib/          # Librerías y utilidades generales
├─ modules/      # Módulos por feature (components, containers)
├─ services/     # Servicios para consumir APIs externas
├─ shared/       # Componentes globales y utilidades UI
└─ types/       # Tipos TypeScript globales
```

## Pasos para ejecutar la aplicación

1. Clonar el repositorio.

2. Entrar a la carpeta del repositorio clonado desde la consola (cmd) o terminal y ejecutar el comando `npm i` para instalar las dependencias.

3. Ejecutar el comando `npm run build` para compilar el proyecto.

4. Ejecutar el comando `npm run test` para ejecutar los tests.

5. Ejecutar el comando `npm run dev` para levantar el proyecto en modo desarrollo o el comando `npm start` para levantar el proyecto en modo producción, por defecto inicia en el puerto 3000.
