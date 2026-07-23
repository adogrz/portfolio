export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  link?: string;
  current: boolean;
}

export const experiences = [
  {
    date: "2026",
    title: "Desarrollador Backend Java — Job Horizon",
    company: "Proyecto universitario",
    description:
      "Diseñé e implementé una API REST para una bolsa de trabajo con Java y Spring Boot. Desarrollé el modelo de datos y funcionalidades para usuarios, empresas, ofertas y postulaciones, incorporando Spring Security, JWT, JPA, SQL Server, Flyway, OpenAPI, Resend y Cloudflare R2.",
    current: false,
  },
  {
    date: "2025 – actualidad",
    title: "Líder de proyecto y desarrollador full-stack — ElForaneo",
    company: "Proyecto colaborativo",
    description:
      "Lidero la planificación técnica, distribución de tareas y definición de funcionalidades. He participado en el desarrollo con Next.js y Django, la integración de Supabase Auth, PostgreSQL, Redis, Cloudflare R2 y Resend, y la configuración de CI/CD y entornos de staging y producción con Docker y Dokploy.",
    link: "https://elforaneo.com",
    current: true,
  },
  {
    date: "2025 – actualidad",
    title: "Administración de infraestructura y despliegues",
    company: "Infraestructura personal",
    description:
      "Administro un servidor Linux con aplicaciones desplegadas mediante Docker, Dokploy y Traefik. He configurado servicios con Cloudflare y Tailscale, monitoreo, copias de seguridad y procesos de despliegue continuo.",
    current: true,
  },
] satisfies Experience[];
