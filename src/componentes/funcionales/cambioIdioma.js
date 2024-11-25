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
        className=" fixed top-4 right-4 px-4 py-2 cursor-pointer transition-all bg-teal-700 text-white rounded-lg border-teal-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        {i18n.language === "es" ? "EN" : "ES"}
      </button>
    </div>
  );
};

export default CambioIdioma;
