import type { ImageMetadata } from "astro";
import type { SvgComponent } from "astro/types";

import creationsImage from "@/assets/projects/creations.png";
import elforaneoImage from "@/assets/projects/elforaneo.png";
import DjangoLogo from "@/components/icons/technologies/Django.astro";
import DockerLogo from "@/components/icons/technologies/Docker.astro";
import DokployLogo from "@/components/icons/technologies/Dokploy.astro";
import LaravelLogo from "@/components/icons/technologies/Laravel.astro";
import NextJsLogo from "@/components/icons/technologies/NextJs.astro";
import PostgreSQLLogo from "@/components/icons/technologies/Postgresql.astro";
import PrismaLogo from "@/components/icons/technologies/Prisma.astro";
import ReactLogo from "@/components/icons/technologies/React.astro";
import RedisLogo from "@/components/icons/technologies/Redis.astro";
import SpringLogo from "@/components/icons/technologies/Spring.astro";
import SqlServerLogo from "@/components/icons/technologies/SqlServer.astro";
import SupabaseLogo from "@/components/icons/technologies/Supabase.astro";
import SwaggerLogo from "@/components/icons/technologies/Swagger.astro";
import TailwindCssLogo from "@/components/icons/technologies/TailwindCss.astro";
import TypeScriptLogo from "@/components/icons/technologies/TypeScript.astro";

export interface Technology {
  name: string;
  logo: SvgComponent;
}

export const technologies = {
  django: { name: "Django", logo: DjangoLogo },
  docker: { name: "Docker", logo: DockerLogo },
  dokploy: { name: "Dokploy", logo: DokployLogo },
  laravel: { name: "Laravel", logo: LaravelLogo },
  nextjs: { name: "Next.js", logo: NextJsLogo },
  postgresql: { name: "PostgreSQL", logo: PostgreSQLLogo },
  prisma: { name: "Prisma", logo: PrismaLogo },
  react: { name: "React", logo: ReactLogo },
  redis: { name: "Redis", logo: RedisLogo },
  springBoot: { name: "Spring Boot", logo: SpringLogo },
  sqlserver: { name: "SQL Server", logo: SqlServerLogo },
  supabase: { name: "Supabase", logo: SupabaseLogo },
  swagger: { name: "Swagger", logo: SwaggerLogo },
  tailwind: { name: "Tailwind CSS", logo: TailwindCssLogo },
  typescript: { name: "TypeScript", logo: TypeScriptLogo },
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
    title: "ElForaneo",
    description:
      "Plataforma web para encontrar alojamientos verificados cerca de universidades en El Salvador.",
    deploymentUrl: "https://elforaneo.com",
    image: elforaneoImage,
    technologies: [
      technologies.nextjs,
      technologies.tailwind,
      technologies.supabase,
      technologies.django,
      technologies.postgresql,
      technologies.redis,
      technologies.docker,
      technologies.dokploy,
    ],
  },
  {
    title: "Creations",
    description:
      "Catálogo web de disfraces personalizados, con diseños a medida y contacto directo para realizar pedidos.",
    deploymentUrl: "https://creations.adogrz.com",
    repositoryUrl: "https://github.com/adogrz/creations-web-app",
    image: creationsImage,
    technologies: [
      technologies.nextjs,
      technologies.tailwind,
      technologies.prisma,
      technologies.postgresql,
      technologies.dokploy,
    ],
  },
  {
    title: "Job Horizon — API REST",
    description:
      "API REST para una bolsa de trabajo que gestiona usuarios, empresas, ofertas laborales y postulaciones.",
    repositoryUrl: "https://github.com/adogrz/job-horizon-backend",
    technologies: [
      technologies.springBoot,
      technologies.sqlserver,
      technologies.docker,
      technologies.swagger,
    ],
  },
  {
    title: "Sistema Atenea",
    description:
      "Sistema de gestión académica para administrar centros educativos, usuarios, roles y procesos académicos desde una plataforma centralizada.",
    repositoryUrl: "https://github.com/adogrz/sistema-atenea",
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.tailwind,
      technologies.postgresql,
      technologies.laravel,
    ],
  },
];
