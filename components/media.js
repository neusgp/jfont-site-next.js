import React from "react";
import styles from "../styles/media.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original:
            "https://joaquimfont.s3.eu-central-1.amazonaws.com/JOAQUIM+F.+17.jpg",
    },
    {
        original:
            "https://joaquimfont.s3.eu-central-1.amazonaws.com/JOAQUIM+F.+28.jpg",
    },
    {
        original:
            "https://joaquimfont.s3.eu-central-1.amazonaws.com/JOAQUIM+F.+33.jpg",
    },
    {
        original:
            "https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim1.jpg",
    },
    {
        original:
            "https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim29.jpg",
    },
    {
        original:
            "https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim42.jpg",
    },
    {
        original:
            "https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim44.jpg",
    },
    {
        original:
            "https://joaquimfont.s3.eu-central-1.amazonaws.com/Joaquim53.jpg",
    },
];

export default function Media() {
    return (
        <div id="media" className={styles.media}>
            <div className={styles.gallery}>
                <ImageGallery
                    items={images}
                    slideDuration={1200}
                    slideInterval={6000}
                    autoPlay={true}
                />
            </div>
            <div className={styles.video}>
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
            </div>
        </div>
    );
}
