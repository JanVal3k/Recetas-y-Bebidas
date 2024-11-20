import React, { useState, useEffect } from "react";
import useDetallesReceta from "../../clase/DetallesReceta";
import "../../../styles/styles.css";

const IngredientesYPreparacion = ({ idReceta }) => {
  const { detallesReceta, cargando, error } = useDetallesReceta(idReceta);
  const [mostrarInstrucciones, setMostrarInstrucciones] = useState(false);
  useEffect(() => {
    if (detallesReceta && detallesReceta.length > 0) {
      setMostrarInstrucciones(false); // Reset al cambiar de receta
    }
  }, [detallesReceta]);

  if (cargando) {
    return <div className="text-center">Cargando imagen de la receta...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!detallesReceta || detallesReceta.length === 0) {
    return (
      <div className="text-center">No se ha seleccionado ninguna receta</div>
    );
  }

  const toggleInstrucciones = () => {
    setMostrarInstrucciones(!mostrarInstrucciones);
  };

  return (
    <div className="flex flex-col items-center w-full h-full p-2 sm:p-4">
      <div className="relative  w-full h-full max-w-[800px] sm:mt-40 sm:h-[38vh] lg:mt-6 lg:h-[56vh]  bg-red-500 rounded-2xl overflow-hidden transition-all duration-400">
        <img
          src={detallesReceta[0].strMealThumb}
          alt={detallesReceta[0].strMeal}
          className="absolute inset-0 w-full aspect-[1/2] h-full object-cover"
        />

        <div
          className={`absolute inset-0 border-2 rounded-xl border-gray-300 bg-white/95 transition-opacity duration-400 ${
            mostrarInstrucciones
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <div className="p-3 sm:p-6 h-full overflow-y-auto">
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold mb-4">
              Ingredientes y medidas para: {detallesReceta[0].strMeal}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
              {detallesReceta[0].ingredientesYMedidas.map((item, index) => (
                <div key={index} className="text-sm sm:text-base lg:text-lg">
                  <span className="font-bold">{item.ingrediente}:</span>{" "}
                  {item.medida}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 bg-white/95 border-2 border-gray-300 rounded-xl transition-opacity duration-400 ${
            mostrarInstrucciones
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="p-3 sm:p-6 h-full overflow-y-auto">
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold mb-4">
              {detallesReceta[0].strMeal}
            </h1>
            <p className="text-base sm:text-lg text-center">
              Categoría: {detallesReceta[0].strCategory}
            </p>
            <p className="text-base sm:text-lg text-center mt-2">
              Origen: {detallesReceta[0].strArea}
            </p>
            <p className="text-sm sm:text-base mt-4">
              {detallesReceta[0].strInstructions}
            </p>
          </div>
        </div>

        <button
          className="absolute bottom-4 right-4 px-4 py-2 bg-gray-600 text-white text-sm sm:text-base rounded-lg shadow-lg hover:bg-gray-500 transition-colors duration-200"
          onClick={toggleInstrucciones}
        >
          {mostrarInstrucciones ? "Ver Ingredientes" : "Ver Preparación"}
        </button>
      </div>
    </div>
  );
};

export default IngredientesYPreparacion;
