/* eslint-disable jsx-a11y/alt-text */

import React from "react";

import Image from "next/image";
import styles from "../styles/welcome.module.css";
import logo from "../public/joaquimfont.png";
import hamburger from "../public/hamburger.png";

export default function Welcome({ openMenu }) {
    console.log(openMenu);

    return (
        <>
            <div className={styles.hamburger} onClick={openMenu}>
                <Image src={hamburger} width={50} height={45} />
            </div>
            <div className={styles.logo}>
                <Image src={logo} width={500} height={90} />
            </div>

            <div className={styles.welcome}>
                <p className={styles.text}>
                    In this world there are a lot of good pianists and Joaquim
                    Font is one of them
                </p>
            </div>
        </>
    );
}
