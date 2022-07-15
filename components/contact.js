import React from "react";
import styles from "../styles/contact.module.css";

export default function Contact() {
    return (
        <div id="contact" className={styles.contact}>
            <h1 className={styles.title}>CONTACT</h1>
            <p className={styles.text}>
                To get in touch, please fill the formular below:
            </p>
            {/* <div className="personaldata">

            </div> */}
            <Formular />
            <p className={styles.text}>Or contact me directly:</p>
            <div className={styles.personaldata}>
                <p className={styles.text}>joafontplans@gmail.com</p>
                <p className={styles.text}>+34 622 26 11 59</p>
            </div>
        </div>
    );
}

function Formular() {
    return (
        <form className={styles.form} /* onSubmit */>
            <input
                className={styles.input}
                /* onChange={this.handleChange} */
                type="text"
                name="firstname"
                placeholder="First Name"
            />
            <input
                className={styles.input}
                /*  onChange={this.handleChange} */
                type="text"
                name="lastname"
                placeholder="Last name"
            />
            <input
                className={styles.input}
                /*  onChange={this.handleChange} */
                type="text"
                name="email"
                placeholder="E-mail"
            />
            <textarea
                className={styles.textarea}
                /*  onChange={this.handleChange} */
                type="text"
                name="message"
                placeholder="Your message..."
            />
            <button className={styles.button}>Send</button>
        </form>
    );
}
