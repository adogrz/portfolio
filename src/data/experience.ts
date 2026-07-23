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
    date: "Octubre de 2023",
    title: "Código de interfaz de aplicaciones con Tailwind CSS",
    company: "Tailwind Labs",
    description:
      "Acceso a más de 20 páginas, incluidos un panel, gráficos, tablero kanban, calendario y páginas de comercio electrónico y marketing para pedidos anticipados.",
    link: "https://tailwindui.com",
    current: true,
  },
  {
    date: "Abril de 2022",
    title: "Código de interfaz de comercio electrónico con Tailwind CSS",
    company: "Tailwind Labs",
    description:
      "Decenas de componentes web y elementos interactivos creados sobre Tailwind CSS.",
    link: "https://tailwindui.com",
    current: false,
  },
  {
    date: "Marzo de 2022",
    title: "Diseño de interfaces de marketing en Figma",
    company: "Tailwind Labs",
    description:
      "Todas las páginas y componentes se diseñan primero en Figma, manteniendo la paridad entre ambas versiones durante las actualizaciones del proyecto.",
    current: false,
  },
] satisfies Experience[];
