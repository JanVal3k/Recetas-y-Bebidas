import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Inicio from "../funcionales/inicio";

const resources = {
  es: {
    translation: {
      receta: "Receta",
      recetas: "RECETAS",
      diarias: "DIARIAS",
      pais: "País",
      categoria: "Categoría",
      ingredientes: "Ingredientes y Medidas",
      preparacion: "Preparación",
      cerrar: "Cerrar",
      error: "Error al obtener las recetas",
      cargando: "Cargando...",
      paso: "paso a paso",
      inicio: {
        bienvenida: "¡Bienvenido a recetas y bebidas!",
        texto1:
          "Descubre el sabor del mundo con nuestra selección diaria de recetas.",
        texto2:
          "Sumérgete en la cocina de diferentes países y elige la receta que más te inspire.",
        texto3:
          "Déjate cautivar por nuestra exclusiva selección de tragos, perfectos            para cada ocasión.",
        texto4: "¡La gastronomía global al alcance de tus manos!",
      },
      menu: {
        inicio: "INICIO",
        diarias: "DIARIAS",
        paises: "PAISES",
        tragos: "TRAGOS Y BEBIDAS",
      },
      paises: {
        cargando: "Cargando lista de paises",
        cargando2: "Cargando recetas",
        textoAlt1: "Selecciona una receta para ver su imagen",
        textoAlt2:
          "Selecciona una receta para ver su preparacion e ingredientes.",
        selecion: "Selecciona un país",
        De: "Recetas de",
        imagen: "Imagen",
        receta: "Receta",
      },
      imagenYPreparacion: {
        imagenDe: "imagen de la receta",
        noSelec: "No se ha seleccionado ninguna receta",
        cargandoImage: "Cargando imagen de la receta",
        ingredientesPara: "Ingredientes y medidas para",
        ingredientesDe: "Ingredientes de",
        categoria: "Categoría",
        origen: "Origen",
        verIngre: "Ver Ingredientes",
        verPrepa: "Ver Preparación",
      },
      bebidas: {
        cargando: "Cargando lista de bebidas",
        alcohol: "Alcoholica",
        sinAlcohol: "Sin Alcohol",
        opcioAlcohol: "Alcohol Opcional",
        detalle: "Detalles de la bebida",
        Tipo: "Tipo",
        Ingredientes: "Ingredientes y Medidas",
        selecciona: "Selecciona una bebida para ver sus detalles",
        selecciona2: "Selecciona una bebida",
      },
    },
  },
  en: {
    translation: {
      receta: "Recipe",
      recetas: "DAILY",
      diarias: "RECIPES",
      pais: "Country",
      categoria: "Category",
      ingredientes: "Ingredients and Measures",
      preparacion: "Preparation",
      cerrar: "Close",
      error: "Error fetching recipes",
      cargando: "Loading...",
      paso: "step by step",
      inicio: {
        bienvenida: "Welcome to recipes and drinks!",
        texto1:
          "Discover the taste of the world with our daily selection of recipes.",
        texto2:
          "Dive into the cuisine of different countries and choose the recipe that inspires you the most.",
        texto3:
          "Let yourself be captivated by our exclusive selection of drinks, perfect for every occasion.",
        texto4: "Global gastronomy at your fingertips!",
      },
      menu: {
        inicio: "HOME",
        diarias: "DAILY",
        paises: "COUNTRIES",
        tragos: "DRINKS & BEVERAGES",
      },
      paises: {
        cargando: "Loading list of countries",
        cargando2: "Loading recipes",
        textoAlt1: "Select a recipe to view its image",
        textoAlt2: "Select a recipe to view its preparation and ingredients",
        selecion: "Select a country",
        De: "Recipes from",
        imagen: "Image",
        receta: "Recipe",
      },
      imagenYPreparacion: {
        imagenDe: "image of the recipe",
        noSelec: "No recipe has been selected",
        cargandoImage: "Loading recipe image",
        ingredientesPara: "Ingredients and measurements for",
        ingredientesDe: "Ingredients of",
        categoria: "Category",
        origen: "Origin",
        verIngre: "View Ingredients",
        verPrepa: "View Preparation",
      },
      bebidas: {
        cargando: "Loading list of drinks",
        alcohol: "Alcoholic",
        sinAlcohol: "Non Alcoholic",
        opcioAlcohol: "Optional Alcohol",
        detalle: "Drink details",
        Tipo: "Type",
        Ingredientes: "Ingredients and Measurements",
        selecciona: "Select a drink to view its details",
        selecciona2: "Select a drink",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
  });

export default i18n;
