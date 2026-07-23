import portrait from "@/assets/adonay.webp";

export const profile = {
  name: "Adonay Gutiérrez",
  role: "Software Developer",
  introduction: "apasionado.",
  location: "De San Salvador, El Salvador.",
  presentation: "Especializado en crear aplicaciones únicas.",
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
