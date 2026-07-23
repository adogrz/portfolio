# Portfolio de Adonay Gutiérrez

Sitio estático construido con Astro 7, Tailwind CSS 4 y pnpm. El contenido público está en español y el tema sigue la preferencia del sistema.

## Comandos

| Comando                       | Acción                                             |
| ----------------------------- | -------------------------------------------------- |
| `pnpm install`                | Instala las dependencias.                          |
| `pnpm astro dev --background` | Inicia el servidor de desarrollo en segundo plano. |
| `pnpm astro dev stop`         | Detiene el servidor de desarrollo.                 |
| `pnpm check`                  | Comprueba tipos y componentes Astro.               |
| `pnpm build`                  | Genera el sitio estático en `dist/`.               |
| `pnpm preview`                | Sirve localmente la compilación.                   |

## Estructura

```text
src/
├── assets/       # Imágenes locales
├── components/   # Componentes Astro e iconos SVG
├── data/         # Proyectos y tecnologías reutilizables
├── layouts/      # Documento base y metadatos
├── pages/        # Rutas públicas
└── styles/       # Estilos globales y temas
```

## Añadir un proyecto

1. Añade el proyecto en `src/data/projects.ts` y reutiliza las entradas existentes de `technologies`.
2. Para una tarjeta con captura, guarda e importa la imagen y define `image` y `deploymentUrl`; `repositoryUrl` es opcional.
3. Para una tarjeta compacta sin imagen, omite `image` y define `repositoryUrl`.
4. Ejecuta `pnpm check` y `pnpm build`.

## Añadir o reutilizar un logotipo

Para reutilizar una tecnología, referencia su entrada en `technologies` sin volver a importar el componente.

Para añadir una marca:

1. Copia su SVG desde [SVGL](https://svgl.app) a `src/components/icons/technologies/` con extensión `.astro`.
2. Conserva el `viewBox`, elimina `width` y `height`, y añade `{...Astro.props}` al elemento `<svg>`.
3. Importa una sola vez el componente en `src/data/projects.ts` y regístralo en `technologies`.

SVGL es una herramienta puntual de copia y Starwind no es necesario para el tooltip CSS. Ninguno forma parte de las dependencias de ejecución o desarrollo.
