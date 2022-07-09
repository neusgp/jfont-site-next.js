/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.css";
import logo from "../public/joaquimfont.png";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Image className={styles.logo} src={logo} />
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
                <Link href="#bio">
                    <a className={styles.link}>Bio</a>
                </Link>
                <Link href="#repertoire">
                    <a className={styles.link}>Repertoire</a>
                </Link>
                <Link href="#agenda">
                    <a className={styles.link}>Agenda</a>
                </Link>
                <Link href="#contact">
                    <a className={styles.link}>Contact</a>
                </Link>
            </div>
        </div>
    );
}
