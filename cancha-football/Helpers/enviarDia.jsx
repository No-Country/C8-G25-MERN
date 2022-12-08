import horas from "./Horas";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import styles from "../styles/Enviar.module.css";

const enviarDia = ({ datos }) => {
  const [btnvalue, setBtnvalue] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [generar, setGenerar] = useState("");

  const funcionRevisar = (hs) => {
    setBtnvalue(hs);
    setMostrar(true);
  };
  const datosF = datos + " a las " + btnvalue + " hs ";

  const enviar = (datosF) => {
    const msjP = "Buenos dias queria alquilar la cancha el dia ";
    const url = `https://api.whatsapp.com/send?phone=542213148680&text=${escape(
      msjP
    )}+${escape(datosF)}`;
    setGenerar(url);
  };
  return (
    <div className={styles.padreP}>
      <div>Seleccione una hora </div>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {horas.map((hs) => (
          <Button onClick={() => funcionRevisar(hs.horario)} key={hs.id}>
            {hs.horario}
          </Button>
        ))}
      </ButtonGroup>

      {mostrar ? (
        <div className={styles.confirmarP}>
          <p>Usted a selecionado</p>
          <p>{btnvalue ? datosF : ""}</p>
          <ButtonGroup>
            <Button
              variant="contained"
              aria-label="outlined primary button group"
            >
              Cancelar
            </Button>
            <Button
              onClick={() => enviar(datosF)}
              variant="contained"
              aria-label="outlined primary button group"
            >
              <a target="_blank" href={generar}>

              Enviar
              </a>
            </Button>
          </ButtonGroup>
        </div>
      ) : null}
    </div>
  );
};
export default enviarDia;