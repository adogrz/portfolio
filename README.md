# Portfolio

Plantilla de portafolio web personal construida con Astro 7, Tailwind CSS 4 y TypeScript.

## 🚀 Guía rápida de edición

Toda la información del portafolio se gestiona desde `src/data/`:

| ¿Qué querés modificar?                                | Archivo a editar                        |
| ----------------------------------------------------- | --------------------------------------- |
| **Perfil personal** (Nombre, rol, bio, correo, redes) | `src/data/profile.ts`                   |
| **Foto de perfil**                                    | `src/assets/adonay.webp`                |
| **Experiencia laboral**                               | `src/data/experience.ts`                |
| **Proyectos** (con o sin imagen)                      | `src/data/projects.ts`                  |
| **Imágenes de proyectos**                             | `src/assets/projects/`                  |
| **Archivo de CV (PDF)**                               | `public/assets/CV-Gutierrez-Adonay.pdf` |

---

## 🛠️ Comandos útiles

```bash
# Desarrollo local
npm run dev

# Validar tipos y componentes
npm run check

# Formatear todo el código
npx prettier --write .

# Generar compilación de producción
npm run build
```

---

## ➕ Agregar un nuevo proyecto (`src/data/projects.ts`)

### Con captura de pantalla:

1. Guardá la imagen en `src/assets/projects/mi-proyecto.webp`.
2. Importá la imagen en `src/data/projects.ts` e incluyo `image` y `deploymentUrl`.

### Proyecto compacto (solo texto y repo):

1. Omite la propiedad `image` y definí `repositoryUrl`.

---

## 🎨 Agregar un nuevo icono de tecnología

1. Descargá el SVG desde [SVGL](https://svgl.app) y guardalo en `src/components/icons/technologies/MiTecnologia.astro`.
2. Agregale `{...Astro.props}` a la etiqueta `<svg>` y remové `width`/`height`.
3. Regístralo en el objeto `technologies` dentro de `src/data/projects.ts`.
