import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/es-mx";
import styles from "../../styles/TraerDias.module.css";

const TraerDias = () => {
  const [value, setValue] = useState(new Date());

  const { $D, $m, $y } = value;

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

export const getStaticProps = async () => {};
