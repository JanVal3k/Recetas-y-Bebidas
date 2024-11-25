import React from "react";
import { useTranslation } from "react-i18next";

const PopOverCards = ({ receta }) => {
  const { t, i18n } = useTranslation();
  if (!receta) {
    return null;
  }
  return (
    <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-teal-500 p-8 rounded-lg shadow-md">
      <h2 className="text-black font-bold">{t("paso")}:</h2>
      <p
        className="text-black
      00 whitespace-pre-line"
      >
        {receta.strInstructions}
      </p>
    </div>
  );
};
export default PopOverCards;
