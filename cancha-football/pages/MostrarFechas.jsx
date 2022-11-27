import { useState } from "react";
import revisarDias from "./Helpers/Dias";

const MostrarFechas = () => {
  const [dias, setDias] = useState([]);

  const calculardias = () => {
    for (let i = 0; i < 6; i++) {
        setDias(revisarDias(i))
    }
  };
  calculardias()

  return (
    <div>
      <h1>Selecciona una Fecha</h1>
    </div>
  );
};
export default MostrarFechas;
