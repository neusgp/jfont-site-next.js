/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image";
import styles from "../styles/navbar.module.css";
import logo from "../public/joaquimfont.png";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Image
                    className={styles.logo}
                    src={logo}
                    width={520}
                    height={100}
                />
                <div className={styles.social} />
                {/*               <a href="https://www.instagram.com/joaquimfont/">
                    <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="https://ca-es.facebook.com/joaquim.fontplans">
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a href="https://www.youtube.com/user/JoaquimFont">
                    <i className="fa-brands fa-youtube"></i>
                </a> */}
            </div>
            <div className={styles.menu}>
                <a href="#bio" className={styles.link}>
                    Bio
                </a>

                <a href="#repertoire" className={styles.link}>
                    Repertoire
                </a>

                <a href="#agenda" className={styles.link}>
                    Agenda
                </a>

                <a href="#contact" className={styles.link}>
                    Contact
                </a>
            </div>
        </div>
    );
}
