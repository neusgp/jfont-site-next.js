/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import Image from "next/image";
import {
    faInstagram,
    faFacebook,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/welcome.module.css";
import logo from "../public/joaquimfont.png";
import hamburger from "../public/hamburger.png";

export default function Welcome({ openMenu }) {
    console.log(openMenu);

    return (
        <>
            <div className={styles.hamburger_container} onClick={openMenu}>
                <div className={styles.hamburger}>
                    <Image src={hamburger} layout="fill" />
                </div>
            </div>
            <div className={styles.logo}>
                <div className={styles.logo_container}>
                    <Image src={logo} layout="fill" />
                </div>
                <div className={styles.social}>
                    <a
                        href="https://www.instagram.com/joaquimfont/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faInstagram}
                        />
                    </a>
                    <a
                        href="https://de-de.facebook.com/joaquim.fontplans"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faFacebook}
                        />
                    </a>
                    <a
                        href="https://www.youtube.com/user/JoaquimFont"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faYoutube}
                        />
                    </a>
                </div>
            </div>

            <div className={styles.welcome}>
                {/* <p className={styles.text}>
                    In this world there are a lot of good pianists and Joaquim
                    Font is one of them
                </p> */}
            </div>
        </>
    );
}
