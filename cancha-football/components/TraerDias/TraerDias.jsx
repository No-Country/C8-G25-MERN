import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "../../styles/TraerDias.module.css";
import EnviarDia from "../../Helpers/EnviarDia";
import { es } from "date-fns/locale/";
import Button from '@mui/material/Button';
import { style } from "@mui/system";



const TraerDias = () => {

  const [value, setValue] = useState(new Date());
  var options = { year: "numeric", month: "long", day: "numeric" };
  const datos = value.$d?.toLocaleDateString("es-ES", options);
  console.log(datos);

  const [confirmar, setConfirmar] = useState(false);

  const EnviarFecha = () => {
    setConfirmar(true);
  };

  return (
    <>
      {!confirmar ? (
        
        <div className={styles.traerDias}>
          <div className={styles.localizerP}>
            <LocalizationProvider  
              dateAdapter={AdapterDayjs}
              locale={es}
              color="secondary"
              className={styles.color}>
              <DatePicker className={styles.date}
                label="Ingrese la fecha" 
                inputFormat="DD/MM/YYYY"
                value={value}
              
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params}  />}
              />
            </LocalizationProvider>
          </div>
          <div>
            <Button variant="contained"
              className="btn-confirmar"
              onClick={() => EnviarFecha(datos)}
            >
              Confirmar
            </Button>
          </div>
        </div>
      
      ) : (
        <EnviarDia/>
      )}
    </>
  );
};
export default TraerDias;
