import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Traer.module.css";
const TraerCanchas = ({ fulvo }) => {
  const [guardarSeleccion, setguardarSeleccion] = useState();
  console.log(guardarSeleccion);
  console.log(fulvo);
  return (
    <div className={styles.TraerCancha}>
      <div className={styles.Selecciona}>
        <h1>Selecciona la cancha</h1>
      </div>
      <div className={styles.Pcolumnas}>
        {fulvo.map((resultado) => (
          <div className={styles.HColumnas} key={resultado.id} >
            <h1
              className={styles.h1}
              onClick={()=>setguardarSeleccion( resultado.id)}
            >
              {" "}
              {resultado.nombreCancha}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TraerCanchas;

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const fulvo = await prisma.cancha.findMany();
  return {
    props: {
      fulvo,
    },
  };
};
