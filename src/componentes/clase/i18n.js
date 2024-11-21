// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones
const resources = {
  es: {
    translation: {
      // Textos de Cards.js
      receta: "Receta",
      pais: "País",
      categoria: "Categoría",
      ingredientes: "Ingredientes y Medidas",
      preparacion: "Preparación",
      cerrar: "Cerrar",
      // Textos de errores y carga
      error: "Error al obtener las recetas",
      cargando: "Cargando...",
    },
  },
  en: {
    translation: {
      // Textos de Cards.js
      receta: "Recipe",
      pais: "Country",
      categoria: "Category",
      ingredientes: "Ingredients and Measures",
      preparacion: "Preparation",
      cerrar: "Close",
      // Textos de errores y carga
      error: "Error fetching recipes",
      cargando: "Loading...",
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es", // idioma por defecto
    interpolation: {
      escapeValue: false, // no es necesario para React
    },
    detection: {
      order: ["navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
  });

export default i18n;
