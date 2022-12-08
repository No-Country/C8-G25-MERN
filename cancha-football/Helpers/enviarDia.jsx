import horas from "./Horas";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "../styles/EnviarDias.module.css";

const enviarDia = () => {
  return (
    <>
      <div className={styles.hora}>
        <div className={styles.probar} >enviarDia</div>
        <ButtonGroup sx={{ display: 'flex', flexWrap: 'wrap',  p: 1,
          m: 1, }}
          variant="contained"
          aria-label="outlined primary button group"
          className={styles.contenedor}
          color="secondary"
        >
          {horas.map((hs) => (
            <Button key={hs.id} sx={{ flexWrap: 'wrap' }}>{hs.horario}</Button>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
};
export default enviarDia;
