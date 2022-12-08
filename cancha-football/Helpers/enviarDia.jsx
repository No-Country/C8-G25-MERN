import horas from "./Horas";

const enviarDia = () => {
  return (
    <>
      <div>enviarDia</div>
      
      {horas.map((hs)=>(
        hs.horario
      ))}
    </>
  );
};
export default enviarDia;
