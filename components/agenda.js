import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styles from "../styles/agenda.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");

export default function Agenda({ props }) {
    const localizer = momentLocalizer(moment);
    console.log("events list ready to put into calendar", props);

    return (
        <div id="agenda" className={styles.agenda}>
            <h1 className={styles.title}>AGENDA</h1>
            <div className={styles.events}>
                <NextEvents props={props} />
                <div className={styles.calendar}>
                    <Calendar
                        localizer={localizer}
                        events={props}
                        onView="month"
                        views={["month"]}
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
    console.log(events);
    return (
        <div id="nextevents" className={styles.nextevents}>
            {events.map((event) => {
                return (
                    <div key={event.id} className={styles.event}>
                        <div className={styles.datetime}>
                            <p className={styles.p}>{event.start}</p>
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
