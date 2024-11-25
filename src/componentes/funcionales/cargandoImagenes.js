import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const CargandoComponente = ({
  onCargandoCompletado,
  pantallaCompleta = true,
}) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const timer = setTimeout(() => {
      onCargandoCompletado();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onCargandoCompletado]);

  return (
    <div
      className={`${
        pantallaCompleta
          ? "fixed top-0 left-0 w-full h-full z-50"
          : "w-full h-full z-10"
      } flex flex-col items-center justify-center `}
    >
      <img
        src="imagen/Cocking-unscreen.gif"
        alt="Cargando..."
        className="sm:w-60 sm:h-60 md:w-96 md:h-96 lg:w-64 lg:h-64  "
      />
      <br />
      <p className="mt-4 text-xl font-bold text-gray-800">
        {t("paises.cargando2")}...
      </p>
    </div>
  );
};

export default CargandoComponente;
