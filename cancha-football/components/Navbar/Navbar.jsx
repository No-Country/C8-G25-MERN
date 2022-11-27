import React from "react";
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'
import { FaBars }  from "react-icons/fa"
import { IconContext } from "react-icons";



const Navbar = () => {
    return (<>
        <nav className={styles.body}>
            <menu className={styles.menu}>
                <Link href="/">
            <IconContext.Provider value={{ size: "4vh" }}>
            <FaBars className={styles.menuham}/>
                </IconContext.Provider>
                </Link>
                
                <Link href="/" className={styles.logo}> Logo
                </Link>
            </menu>
        </nav>
    </>
    );
};

export default Navbar;