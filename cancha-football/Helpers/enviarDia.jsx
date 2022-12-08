import horas from "./Horas";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import styles from '../styles/Enviar.module.css'

const enviarDia = ({ datos }) => {
  const [btnvalue, setBtnvalue] = useState(null);

  const datosF = datos + " a las " + btnvalue + " hs ";
  console.log(datosF);
  console.log(datos);
  return (
    <div className={styles.padreP}>
      <div>Seleccione un dia </div>

      {}
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {horas.map((hs) => (
          <Button onClick={() => setBtnvalue(hs.horario)} key={hs.id}>
            {hs.horario}
          </Button>
        ))}
      </ButtonGroup>
      
      <div className={styles.confirmarP}>
        <p>Usted a selecionado</p> 
        <p>{btnvalue ? datosF : ""}</p>
        <ButtonGroup>
            <Button variant="contained"
        aria-label="outlined primary button group">Cancelar</Button>
        <Button variant="contained"
        aria-label="outlined primary button group">Enviar</Button>
        </ButtonGroup>
      </div>

      
    </div>
  );
};
export default enviarDia;
