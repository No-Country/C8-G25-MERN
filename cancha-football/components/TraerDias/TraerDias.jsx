import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "../../styles/TraerDias.module.css";
import enviarDia from "../../Helpers/enviarDia";
import {es} from 'date-fns/locale/'


const TraerDias = () => {
  const [value, setValue] = useState(new Date());
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  console.log(
    value.$d?.toLocaleDateString("es-ES", options)
  );
  
  // enviarDia(datos);

  const [confirmar, setConfirmar] = useState(false);
  return (
    <div className={styles.traerDias}>
      <div className={styles.localizerP}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="es-mx"
          className={styles.color}
        >
          <DatePicker
            label="Ingrese la fecha"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div>
        <button className="btn-confirmar" onClick={() => setConfirmar(true)}>
          Confirmar
        </button>
      </div>
    </div>
  );
};
export default TraerDias;
