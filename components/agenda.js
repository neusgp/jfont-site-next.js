import React from "react";
import { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import styles from "../styles/agenda.module.css";

export default function Agenda({ props }) {
    console.log("events list ready to put into calendar", props);

    return (
        <div id="agenda" className={styles.agenda}>
            <h1 className={styles.title}>Agenda</h1>
            <div className={styles.events}>
                <NextEvents props={props} />
                <div className={styles.calendar}>
                    <FullCalendar
                        events={props}
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                    />
                </div>
            </div>
        </div>
    );
}

function NextEvents({ props }) {
    const [events, setEvents] = useState(props);
    console.log(events);
    return (
        <div id="nextevents" className={styles.nextevents}>
            {events.map((event) => {
                return (
                    <div key={event.id} className={styles.event}>
                        <div className={styles.datetime}>
                            <p className={styles.p}>{event.date}</p>
                            <p className={styles.p}>{event.time}h</p>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.eventtitle}>{event.title}</p>
                            <p className={styles.p}>{event.description}</p>
                            <p>{event.location}</p>
                            <p className={styles.p}>
                                <a href={event.url}>{event.url}</a>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
