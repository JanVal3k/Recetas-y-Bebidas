import React from "react";
import { useTranslation } from "react-i18next";

const CambioIdioma = () => {
  const { i18n } = useTranslation();

  const cambiarIdioma = () => {
    const nuevoIdioma = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(nuevoIdioma);
  };

  return (
    <div className="z-10">
      <button
        onClick={cambiarIdioma}
        className="fixed top-4 right-4 px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800"
      >
        {i18n.language === "es" ? "EN" : "ES"}
      </button>
    </div>
  );
};

export default CambioIdioma;
