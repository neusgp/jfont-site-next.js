import React from "react";
import styles from "../styles/bio.module.css";

export default function Bio() {
    return (
        <div className={styles.bio}>
            <div id="bio" className={styles.content}>
                <div className={styles.text}>
                    <h1 className={styles.title}>BIO</h1>
                    <p className={styles.biotext}>
                        Joaquim Font (Igualada, 1995) es forma en els seus
                        inicis al conservatori dIgualada. Posteriorment, becat
                        per la fundació de música Ferrer-Salat es gradua al
                        conservatori del Liceu amb Josep Colom i Raimon Garriga.
                        Des del 2018 resideix a Essen (Alemanya) on estudia amb
                        Hisako Kawamura i Lied i correpetició dòpera amb Xaver
                        Poncette a la Folkwang Universität der Kunste on és
                        becat per la fundació Yehundi Menuhin. Actua regularment
                        com a solista, música de cambra i Lied a Espanya i
                        Alemanya.
                    </p>
                </div>
            </div>
        </div>
    );
}
