import portrait from "@/assets/adonay.webp";

export const profile = {
  name: "Adonay Gutiérrez",
  role: "Desarrollador Backend Java",
  introduction: "y estudiante de Ingeniería en Sistemas Informáticos.",
  location: "En San Salvador, El Salvador.",
  presentation:
    "Desarrollo soluciones web con enfoque backend y experiencia práctica en frontend, infraestructura y despliegues.",
  portrait,
  portraitAlt: "Retrato de Adonay Gutiérrez",
  availability: {
    available: true,
    label: "Disponible para trabajar",
  },
  email: "adonaygutierrez50@gmail.com",
  urls: {
    site: "https://adogrz.com",
    linkedIn: "https://www.linkedin.com/in/adogrz/",
    github: "https://github.com/adogrz",
    cv: "/assets/CV-Gutierrez-Adonay.pdf",
  },
  cvFileName: "CV-Gutierrez-Adonay.pdf",
} as const;
