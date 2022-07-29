import React from "react";
import Image from "next/image";
import exit from "../public/exit.png";

import styles from "../styles/navbar.module.css";

export default function Navbar({ isActive, openMenu }) {
    return (
        <>
            <div className={`${styles.navbar} ${isActive && styles.show}`}>
                <div className={styles.title}></div>
                <div className={styles.exit} onClick={openMenu}>
                    <Image src={exit} width={70} height={70} alt="exit sign" />
                </div>
                <div className={styles.menu}>
                    <a href="#bio" className={styles.link} onClick={openMenu}>
                        Bio
                    </a>

                    <a
                        href="#repertoire"
                        className={styles.link}
                        onClick={openMenu}
                    >
                        Repertoire
                    </a>

                    <a
                        href="#agenda"
                        className={styles.link}
                        onClick={openMenu}
                    >
                        Agenda
                    </a>

                    <a
                        href="#contact"
                        className={styles.link}
                        onClick={openMenu}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
}
