import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {esLocale} from "date-fns/locale/es";
import "dayjs/locale/es-mx"
import Button from "@mui/material/Button";

const TraerDias = () => {
  const [value, setValue] = useState(new Date());

  console.log(value);
  const [confirmar, setConfirmar] = useState(false);
  return (
    <div className="traerDiasP">
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs} locale="es-mx">
          <DatePicker
            label="Ingrese la fecha"
            inputFormat="dd-MMMM-yyyyy"
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
