import React from "react";
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'
import { FaBars }  from "react-icons/fa"



const Navbar = () => {
    return (<>
        <nav className={styles.body}>
            <menu className={styles.menu}>
                <Link href="/">
            <FaBars className={styles.menuham}/>
                </Link>
                
                <Link href="/" className={styles.logo}> Logo
                </Link>
            </menu>
        </nav>
    </>
    );
};

export default Navbar;