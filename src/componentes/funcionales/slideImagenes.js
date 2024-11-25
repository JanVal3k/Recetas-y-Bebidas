import React, { forwardRef } from "react";
import useRecetasAleatorias from "../clase/aleatoriaApiMealDB";
import { motion } from "framer-motion";
import Cards from "./cardsAleatorias";
import "../../styles/styles.css";
import { useTranslation } from "react-i18next";

const SlideImagenes = forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();
  const { recetas, cargando, error } = useRecetasAleatorias(3);

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (cargando) {
    return <p className="text-center">{t("cargando")}</p>;
  }

  return (
    <div ref={ref} className="w-full h-full flex flex-col relative p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <motion.p
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-0 md:writing-vertical-lr"
          whileHover={{ scale: 1.1, color: "#e53e3e" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {t("recetas")}
        </motion.p>
        <motion.p
          className="text-3xl md:text-4xl font-extrabold text-gray-800 md:writing-vertical-rl"
          whileHover={{ scale: 1.1, color: "#e53e3e" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {t("diarias")}
        </motion.p>
      </div>

      <div className="flex-1 overflow-y-auto py-6">
        <div className="min-h-[500px] md:h-[850px] flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-40">
          <Cards recetas={recetas} />
        </div>
      </div>
    </div>
  );
});

export default SlideImagenes;
