import horas from "./Horas";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "../styles/EnviarDias.module.css";

const enviarDia = () => {
  return (
    <>
      <div className={styles.hora}>
      <h3 className={styles.probar} >Seleccione un horario</h3>
        <ButtonGroup sx={{ display: 'flex', flexWrap: 'wrap', }}
          variant="contained"
          aria-label="outlined primary button group"
          className={styles.contenedor}
          color="secondary"
        >
          {horas.map((hs) => (
            <Button key={hs.id} sx={{ display: "flex", flexWrap: 'wrap',
            m: 1, }}>{hs.horario}</Button>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
};
export default enviarDia;
