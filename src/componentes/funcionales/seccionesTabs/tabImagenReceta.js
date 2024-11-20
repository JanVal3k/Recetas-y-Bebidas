import React from "react";
import useDetallesReceta from "../../clase/DetallesReceta";

const ImagenesReceta = ({ idReceta }) => {
  const { detallesReceta, cargando, error } = useDetallesReceta(idReceta);

  if (cargando) {
    return <div className="text-center">Cargando imagen de la receta...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!detallesReceta) {
    return (
      <div className="text-center">No se ha seleccionado ninguna receta</div>
    );
  }

  return (
    <div className="w-full sm:w-[55vh] sm:h-[35vh] md:w-1/2 lg:w-[64vh] lg:h-[54vh] flex flex-col items-center">
      {detallesReceta.map((receta, index) => (
        <img
          key={index}
          src={receta.strMealThumb}
          alt={receta.strMeal}
          className="sm:w-full sm:h-full lg:w-full lg:h-full rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200  object-cover"
        />
      ))}
    </div>
  );
};

export default ImagenesReceta;
