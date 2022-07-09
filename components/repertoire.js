import { useState, useEffect } from "react";
import styles from "../styles/repertoire.module.css";

export default function Repertoire() {
    const [data, setData] = useState(null);
    const [tab, setTab] = useState(1);

    const changeTab = (e) => {
        console.log(e.target.id);
        if (e.target.id === 2) {
            setTab(2);
            return;
        }
        setTab(1);
    };

    useEffect(() => {
        let abort = false;

        if (tab === 1) {
            //fetch request to db --> SOLOIST
            setData(/* db rows */);
            return;
        }
        //fetch request to db --> OPERA

        return () => {
            abort = true;
            setData(/* db rows */);
        };
    }, [tab]);
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
                <List props={data} />
            </div>
        </div>
    );
}

function List(props) {}
