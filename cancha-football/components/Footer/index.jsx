import React from "react";
import styles from "../../styles/Footer.module.css"
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { CgPhone } from "react-icons/cg"


const Footer = () => {
    return (
        <div className={styles.body}>
        <h1>Footer</h1>
        <CgPhone/>
        <p> +54 9 11 3458 6585</p>
        <h3>REDES SOCIALES</h3>
        <div className={styles.contenedorIconos}>
        <div className={styles.iconos}>
        <FaInstagram/>
        </div>
        <div className={styles.iconos}>
        <FaFacebookSquare/>
        </div>
        <div className={styles.iconos}>
        <FaTwitterSquare/>
        </div>

        </div>


        </div>

    );
};

export default Footer;