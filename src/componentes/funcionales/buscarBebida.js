import React, { useState, useEffect, forwardRef } from "react";
import useListaTragos from "../clase/listarTragos";
import useBusquedaBebida from "../clase/tragosPorID";
import MientrasSelecciona2 from "./componenteDeCarga2";

const SelectorBebidas = forwardRef((props, ref) => {
  //--------------------------------------------------
  const { bebidas, cargando, error } = useListaTragos();
  const [bebidaSeleccionada, setBebidaSeleccionada] = useState(null);
  const [mientasSeSelecciona2, setMientasSeSelecciona2] = useState(false);
  //--------------------------------------------------
  const {
    bebida: detallesBebida,
    cargando: cargandoDetalles,
    error: errorDetalles,
  } = useBusquedaBebida(bebidaSeleccionada?.idDrink);

  useEffect(() => {
    if (detallesBebida) {
      console.log("Detalles de la bebida:", detallesBebida);
    }
  }, [detallesBebida]);

  if (cargando)
    return (
      <div className="flex justify-center items-center h-[70vh] text-gray-500">
        Cargando lista de bebidas...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-[70vh] text-red-500">
        Error al cargar la lista de bebidas: {error}
      </div>
    );

  const handleSeleccionBebida = (bebida) => {
    setBebidaSeleccionada(bebida);
    console.log("Bebida seleccionada:", bebida);
    setMientasSeSelecciona2(true);
  };

  const bebidasPorTipo = {
    Alcoholic: bebidas.filter((b) => b.strAlcoholic === "Alcoholic"),
    "Non Alcoholic": bebidas.filter((b) => b.strAlcoholic === "Non Alcoholic"),
    "Optional Alcohol": bebidas.filter(
      (b) => b.strAlcoholic === "Optional Alcohol"
    ),
  };

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row min-h-screen bg-gray-200"
    >
      <div className="w-full lg:w-1/3 sm:h-24 p-4 shadow-lg overflow-y-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center p-4">
          Detalles de la bebida
        </h1>
        {bebidaSeleccionada ? (
          <div className="bg-gradient-to-r from-violet-300 to-violet-400 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {detallesBebida?.strDrink || bebidaSeleccionada.strDrink}
            </h2>
            <img
              src={
                detallesBebida?.strDrinkThumb ||
                bebidaSeleccionada.strDrinkThumb
              }
              alt={detallesBebida?.strDrink || bebidaSeleccionada.strDrink}
              className="w-full h-48 sm:h-64 md:h-50 object-cover rounded-lg mb-6"
            />
            <p className="text-black mb-4 text-lg text-center">
              Tipo:{" "}
              {detallesBebida?.strAlcoholic || bebidaSeleccionada.strAlcoholic}
            </p>
            {detallesBebida && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Ingredientes y Medidas:
                </h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {Object.keys(detallesBebida)
                      .filter(
                        (key) =>
                          key.startsWith("strIngredient") && detallesBebida[key]
                      )
                      .map((key, index) => {
                        const measureKey = `strMeasure${index + 1}`;
                        return (
                          <tr key={key}>
                            <td className="py-3 pr-4 text-base">
                              {detallesBebida[key]}
                            </td>
                            <td className="py-3 text-gray-600 text-base">
                              {detallesBebida[measureKey] || "Al gusto"}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          <p className="text-lg text-gray-700 text-center p-6 bg-white rounded-lg">
            Selecciona una bebida para ver sus detalles
          </p>
        )}
        <div className="w-full max-h-full h-[100px] flex justify-center items-center">
          {!mientasSeSelecciona2 && <MientrasSelecciona2 />}
        </div>
      </div>
      <div className="w-full lg:w-2/3 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(bebidasPorTipo).map(([tipo, bebidasDeTipo]) => (
            <div
              key={tipo}
              className="bg-gradient-to-r from-violet-300 to-violet-400 p-6 rounded-lg shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">{tipo}</h2>
              <select
                className="w-full p-3 rounded-lg border border-gray-300 
                     shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200 
                     bg-white cursor-pointer text-base"
                onChange={(e) => {
                  const bebidaSeleccionada = bebidasDeTipo.find(
                    (bebida) => bebida.idDrink === e.target.value
                  );
                  if (bebidaSeleccionada) {
                    handleSeleccionBebida(bebidaSeleccionada);
                  }
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona una bebida
                </option>
                {bebidasDeTipo.map((bebida) => (
                  <option key={bebida.idDrink} value={bebida.idDrink}>
                    {bebida.strDrink}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default SelectorBebidas;
{
  /* <div className="w-full lg:w-2/3 p-4 overflow-y-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {Object.entries(bebidasPorTipo).map(([tipo, bebidasDeTipo]) => (
    <div
      key={tipo}
      className="bg-gradient-to-r from-violet-300 to-violet-400 p-6 rounded-lg shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">{tipo}</h2>
      <ul className="space-y-3">
        {bebidasDeTipo.map((bebida) => (
          <li
            key={bebida.idDrink}
            className="p-3 bg-white bg-opacity-90 rounded-lg cursor-pointer 
                   hover:bg-opacity-100 transition-all duration-200 
                   text-base text-center shadow-md"
            onClick={() => handleSeleccionBebida(bebida)}
          >
            {bebida.strDrink}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
</div> */
}
