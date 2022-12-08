import horas from "./Horas";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const enviarDia = () => {
  return (
    <>
      <div>enviarDia</div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {horas.map((hs) => (
          <Button key={hs.id}>{hs.horario}</Button>
        ))}
      </ButtonGroup>
    </>
  );
};
export default enviarDia;
