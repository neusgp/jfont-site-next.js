/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "../styles/media.module.css";

export default function Media() {
    return (
        <div id="media" className={styles.media}>
            <Gallery />
            <div className={styles.video}>
                <div className={styles.video_container}>
                    <div className={styles.video_des}>
                        <p>
                            Joaquim plays a solo piano program featuring some
                            great works like <b>Corpus Chrisi en Sevilla</b> (I.
                            Albéniz).
                        </p>
                    </div>
                    <iframe
                        className={styles.iframe}
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Yvc6iCK7tWg"
                        title="YouTube video player"
                        frameboarder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className={styles.video_container}>
                    <iframe
                        className={styles.iframe}
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/NPkyILdbZl8"
                        title="YouTube video player"
                        frameboarder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className={styles.video_des}>
                        <p>
                            A couple of thoughts about the venezuelan composer
                            <b> Modesta Bor</b> and her Songs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Gallery() {
    return (
        <div className={styles.gallery}>
            <div className={styles.column1}>
                <img
                    className={styles.img}
                    src="https://joaquimfont.s3.eu-central-1.amazonaws.com/JOAQUIM+F.+17.jpg"
                    alt="Joaquim Font"
                />
                <img
                    className={styles.img}
                    src="https://joaquimfont.s3.eu-central-1.amazonaws.com/JOAQUIM+F.+28.jpg"
                    alt="Joaquim Font"
                />
                <img
                    className={styles.img}
                    src="https://joaquimfont.s3.eu-central-1.amazonaws.com/JOAQUIM+F.+33.jpg"
                    alt="Joaquim Font"
                />
            </div>
            <div className={styles.column2}>
                <img
                    className={styles.img}
                    src="https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim1.jpg"
                    alt="Joaquim Font"
                />
                <img
                    className={styles.img}
                    src="https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim29.jpg"
                    alt="Joaquim Font"
                />
                <img
                    className={styles.img}
                    src="https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim42.jpg"
                    alt="Joaquim Font"
                />
            </div>
            <div className={styles.column3}>
                <img
                    className={styles.img}
                    src="https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim44.jpg"
                    alt="Joaquim Font"
                />
                <img
                    className={styles.img}
                    src="https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim53.jpg"
                    alt="Joaquim Font"
                />
                {/*  <img
                    className={styles.img}
                    src="https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim53.jpg"
                    alt="Joaquim Font"
                /> */}
            </div>
        </div>
    );
}
