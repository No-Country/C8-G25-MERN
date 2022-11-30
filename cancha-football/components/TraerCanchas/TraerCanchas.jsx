import { useEffect, useState } from "react";
import styles from "../../styles/Traer.module.css";
import TraerDias from "../TraerDias/TraerDias";

const TraerCanchas = ({ canchas }) => {
  const [guardarSeleccion, setguardarSeleccion] = useState();

  if (!canchas)
    return (
      <div className={styles.cards}>
        <h2 className={styles.titulo}>No hay canchas disponibles</h2>;
      </div>
    );
  // return <h2>Hola</h2>;
  return (
<<<<<<< HEAD
    <div className={styles.cards}>
      <p className={styles.titulo}>Reservá tu cancha</p>
      {canchas.map((c) => (
        <div className={styles.box}>
          <IconContext.Provider value={{ size: "5vh" }}>
            <MdSportsSoccer className={styles.pelota} />
          </IconContext.Provider>
          <p className={styles.pBox}>{c.nombre}</p>
        </div>
      ))}
    </div>
=======

    <>
    {!guardarSeleccion ?  <div className={styles.cards}>
      <p className={styles.titulo}>Reservá tu cancha</p>
      {canchas.map((c) => (
        <div
          className={styles.box}
          key={c.id}
          onClick={() => setguardarSeleccion(c.id)}
        >
          <h4 className={styles.titleCard}>{c.nombre}</h4>
          {/* <p className={styles.paraCard}>{c.info}</p> */}
        </div>
      ))}
    </div> :  <TraerDias/> } 


    
    

   
    </>
>>>>>>> b2f9e99df0322d6b4a8f9814dfdabeb02ffd079f
  );
};

export default TraerCanchas;
