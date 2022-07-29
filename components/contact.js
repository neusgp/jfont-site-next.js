import React from "react";
import { useState } from "react";
import styles from "../styles/contact.module.css";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const successfulSub = () => {
        setSubmitted(true);
    };

    return (
        <div id="contact" className={styles.contact}>
            <h1 className={styles.title}>Contact</h1>
            <p className={styles.text}>
                To get in touch, please fill the formular below:
            </p>
            {submitted ? (
                <div className={styles.thanks}>
                    <p>Your message was successfully submitted. Thanks!</p>
                </div>
            ) : (
                <Formular successfulSub={successfulSub} />
            )}

            <p className={styles.text}>Or contact me directly:</p>
            <div className={styles.personaldata}>
                <p className={styles.text}>joafontplans@gmail.com</p>
                <p className={styles.text}>+34 622 26 11 59</p>
            </div>
        </div>
    );
}

function Formular(props) {
    console.log("formular function", props);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending");

        if (!firstname || !lastname || !email || !message) {
            setError(true);
            return;
        }
        setError(false);

        let data = {
            firstname,
            lastname,
            email,
            message,
        };

        fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log("Response received");
            if (res.status === 200) {
                console.log("Response succeded!");
                setFirstname("");
                setLastname("");
                setEmail("");
                setMessage("");
                props.successfulSub();
            }
        });
    };

    console.log("error", error);

    return (
        <form className={styles.form} /* onSubmit */>
            <input
                className={styles.input}
                onChange={(e) => {
                    setFirstname(e.target.value);
                }}
                type="text"
                name="firstname"
                placeholder="First Name"
            />
            <input
                className={styles.input}
                onChange={(e) => {
                    setLastname(e.target.value);
                }}
                type="text"
                name="lastname"
                placeholder="Last name"
            />
            <input
                className={styles.input}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                type="text"
                name="email"
                placeholder="E-mail"
            />
            <textarea
                className={styles.textarea}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
                type="text"
                name="message"
                placeholder="Your message..."
            />
            {error && (
                <div className={styles.error}>
                    <p>Please, make sure to fill all the fields.</p>
                </div>
            )}
            <button className={styles.button} onClick={handleSubmit}>
                Send
            </button>
        </form>
    );
}
