import React from "react";
import Head from "next/head";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/*  <meta
                    name="viewport"
                    content="user-scalable=no, width=device-width, initial-scale=1.0"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" /> */}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
