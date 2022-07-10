import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styles from "../styles/agenda.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

/* moment.locale("en-GB"); */

export default function Agenda() {
    const [eventsList, setEventList] = useState([]);
    const localizer = momentLocalizer(moment);
    useEffect(() => {});

    return (
        <div id="agenda" className={styles.agenda}>
            <h1 className={styles.title}>AGENDA</h1>
            <div className={styles.events}>
                <NextEvents />
                <div className={styles.calendar}>
                    <Calendar
                        localizer={localizer}
                        events={eventsList}
                        startAccessor="start"
                        endAccessor="end"
                    />
                </div>
            </div>
        </div>
    );
}

function NextEvents() {
    return (
        <div className={styles.nextevents}>
            <h2 className={styles.h2}>NEXT EVENTS</h2>
            <p>(list)</p>
        </div>
    );
}
