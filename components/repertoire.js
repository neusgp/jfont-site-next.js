import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/repertoire.module.css";

export default function Repertoire({ solo, opera }) {
    console.log("repertoire props", solo, opera);
    const [tab, setTab] = useState();

    const changeTab = (e) => {
        console.log(e.target.id);
        if (e.target.id == 2) {
            setTab(2);
            return;
        }
        setTab(1);
    };

    console.log("tab", tab);

    return (
        <div id="repertoire" className={styles.repertoire}>
            <h1 className={styles.title}>Repertoire</h1>
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
            <List tab={tab} solo={solo} opera={opera} />
        </div>
    );
}

function List({ tab, solo, opera }) {
    console.log("list props", tab, solo, opera);
    return (
        <>
            {tab == 1 ? (
                <div className={styles.list}>
                    {solo.map((item) => {
                        return (
                            <div key={item.id} className={styles.item}>
                                <p className={styles.composer}>
                                    {item.composer}
                                </p>
                                <p className={styles.worktitle}>{item.title}</p>

                                <p className={styles.place_year}>
                                    {item.place_year}
                                </p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className={styles.list}>
                    {opera.map((item) => {
                        return (
                            <div key={item.id} className={styles.item}>
                                <p className={styles.composer}>
                                    {item.composer}
                                </p>
                                <p className={styles.worktitle}>{item.title}</p>

                                <p className={styles.place_year}>
                                    {item.place_year}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
