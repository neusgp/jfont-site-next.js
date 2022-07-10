import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styles from "../styles/agenda.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");

export default function Agenda({ props }) {
    console.log("props", props);
    const localizer = momentLocalizer(moment);

    return (
        <div id="agenda" className={styles.agenda}>
            <h1 className={styles.title}>AGENDA</h1>
            <div className={styles.events}>
                <NextEvents props={props} />
                <div className={styles.calendar}>
                    <Calendar
                        localizer={localizer}
                        /* events={eventsList} */
                        startAccessor="start"
                        endAccessor="end"
                    />
                </div>
            </div>
        </div>
    );
}

function NextEvents({ props }) {
    const [events, setEvents] = useState(props);
    return (
        <div id="nextevents" className={styles.nextevents}>
            <h2 className={styles.h2}>NEXT EVENTS</h2>
            {events.map((event) => {
                return (
                    <div key={event.id} className={styles.event}>
                        <p>{event.title}</p>
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                        <p>{event.location}</p>
                        <p>{event.description}</p>
                        <p>{event.url}</p>
                    </div>
                );
            })}
        </div>
    );
}
