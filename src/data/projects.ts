import type { ImageMetadata } from "astro";
import type { SvgComponent } from "astro/types";

import AstroLogo from "@/components/icons/technologies/Astro.astro";
import CssLogo from "@/components/icons/technologies/Css.astro";
import DjangoLogo from "@/components/icons/technologies/Django.astro";
import ExpressLogo from "@/components/icons/technologies/Express.astro";
import HtmlLogo from "@/components/icons/technologies/Html.astro";
import JavaScriptLogo from "@/components/icons/technologies/JavaScript.astro";
import LaravelLogo from "@/components/icons/technologies/Laravel.astro";
import NextJsLogo from "@/components/icons/technologies/NextJs.astro";
import ReactLogo from "@/components/icons/technologies/React.astro";
import TailwindCssLogo from "@/components/icons/technologies/TailwindCss.astro";
import TypeScriptLogo from "@/components/icons/technologies/TypeScript.astro";
import VercelLogo from "@/components/icons/technologies/Vercel.astro";
import flowbiteImage from "@/assets/projects/flowbite.webp";
import fontsourceImage from "@/assets/projects/fontsource.webp";
import svglImage from "@/assets/projects/svgl.webp";

export interface Technology {
  name: string;
  logo: SvgComponent;
}

export const technologies = {
  astro: { name: "Astro", logo: AstroLogo },
  css: { name: "CSS", logo: CssLogo },
  django: { name: "Django", logo: DjangoLogo },
  express: { name: "Express.js", logo: ExpressLogo },
  html: { name: "HTML", logo: HtmlLogo },
  javascript: { name: "JavaScript", logo: JavaScriptLogo },
  laravel: { name: "Laravel", logo: LaravelLogo },
  nextjs: { name: "Next.js", logo: NextJsLogo },
  react: { name: "React", logo: ReactLogo },
  tailwind: { name: "Tailwind CSS", logo: TailwindCssLogo },
  typescript: { name: "TypeScript", logo: TypeScriptLogo },
  vercel: { name: "Vercel", logo: VercelLogo },
} satisfies Record<string, Technology>;

interface ProjectBase {
  title: string;
  description: string;
  technologies: Technology[];
}

export type ImageProject = ProjectBase & {
  image: ImageMetadata;
  deploymentUrl: string;
  repositoryUrl?: string;
};

export type CompactProject = ProjectBase & {
  image?: never;
  deploymentUrl?: never;
  repositoryUrl: string;
};

export type Project = ImageProject | CompactProject;

export const projects: Project[] = [
  {
    title: "Flowbite",
    description:
      "Componente de botones para formularios, enlaces, acceso social y pagos, con múltiples estilos, colores, tamaños, degradados y sombras.",
    deploymentUrl: "https://flowbite.com/",
    repositoryUrl: "https://github.com/themesberg/flowbite",
    image: flowbiteImage,
    technologies: [
      technologies.nextjs,
      technologies.tailwind,
      technologies.typescript,
      technologies.laravel,
    ],
  },
  {
    title: "svgl",
    description: "Una cuidada biblioteca de logotipos en formato SVG.",
    deploymentUrl: "https://svgl.vercel.app/",
    repositoryUrl: "https://github.com/pheralb/svgl",
    image: svglImage,
    technologies: [
      technologies.html,
      technologies.css,
      technologies.javascript,
      technologies.django,
      technologies.vercel,
    ],
  },
  {
    title: "Fontsource",
    description:
      "Descarga y alojamiento propio de fuentes de código abierto en paquetes npm organizados.",
    deploymentUrl: "https://fontsource.org/",
    image: fontsourceImage,
    technologies: [
      technologies.astro,
      technologies.react,
      technologies.tailwind,
      technologies.express,
    ],
  },
  {
    title: "Plantilla: Creations Web App",
    description:
      "Ejemplo editable de una tarjeta compacta para un proyecto centrado en el código y sin captura de pantalla.",
    repositoryUrl: "https://github.com/adogrz/creations-web-app",
    technologies: [
      technologies.nextjs,
      technologies.tailwind,
      technologies.typescript,
    ],
  },
  {
    title: "CLI Tool Kit",
    description:
      "Herramienta de línea de comandos en TypeScript para automatización de desarrollo.",
    repositoryUrl: "https://github.com/adogrz/cli-tool-kit",
    technologies: [
      technologies.typescript,
      technologies.astro,
      technologies.tailwind,
    ],
  },
];
