import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/repertoire.module.css";

export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const works = await prisma.repertori.findMany();

    return {
        props: {
            initialWorks: works,
        },
    };
}

export default function Repertoire({ initialWorks }) {
    const [tab, setTab] = useState(1);

    console.log(initialWorks);

    const changeTab = (e) => {
        console.log(e.target.id);
        if (e.target.id === 2) {
            setTab(2);
            return;
        }
        setTab(1);
    };

    return (
        <div id="repertoire" className={styles.repertoire}>
            <h1 className={styles.title}>REPERTOIRE</h1>
            <div className={styles.tabs}>
                <p id="1" onClick={changeTab}>
                    SOLOIST
                </p>
                <p>|</p>
                <p id="2" onClick={changeTab}>
                    OPERA
                </p>
                {/* <p onClick="">CHAMBER MUSIC</p> */}
            </div>
        </div>
    );
}

function List(props) {}
