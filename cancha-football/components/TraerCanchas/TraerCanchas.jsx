import axios from "axios";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IconContext } from "react-icons";
import { MdSportsSoccer } from "react-icons/md";
import styles from "../../styles/Traer.module.css";

const TraerCanchas = ({ canchas }) => {
  const [guardarSeleccion, setguardarSeleccion] = useState();
  console.log(guardarSeleccion)
  // console.log(guardarSeleccion);
  console.log("Canchas es esto", canchas);
  // console.log("Canchas es esto", canchas);
  console.log(canchas)

  if (!canchas)
    return (
      <div className={styles.cards}>
        <h2 className={styles.titulo}>No hay canchas disponibles</h2>;
      </div>
    );
  // return <h2>Hola</h2>;
  return (
    <div className={styles.cards}>
      <p className={styles.titulo}>Reservá tu cancha</p>
      {canchas.map((c) => (
        <div className={styles.box} key={c.id}>
          <h4 className={styles.titleCard} onClick={()=> setguardarSeleccion(c.id)} >{c.nombre}</h4>
          {/* <p className={styles.paraCard}>{c.info}</p> */}
        </div>
      ))}
    </div>
  );
};

export default TraerCanchas;
