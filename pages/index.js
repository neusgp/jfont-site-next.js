import React from "react";
import Head from "next/head";
/* import { useRouter } from "next/router"; */
import { useEffect } from "react";
import { PrismaClient } from "@prisma/client";

import Welcome from "../components/welcome.js";
import Bio from "../components/bio.js";
import Media from "../components/media.js";
import Navbar from "../components/navbar.js";
import Repertoire from "../components/repertoire.js";
import Agenda from "../components/agenda.js";
import Footer from "../components/footer.js";
import Contact from "../components/contact.js";

export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const events = await prisma.agenda.findMany({
        orderBy: {
            start: "desc",
        },
    });

    return {
        props: {
            initialEvents: events,
        },
    };
}

export default function Home({ initialEvents }) {
    console.log(initialEvents);

    return (
        <>
            <Head>
                <title>JOAQUIM FONT</title>
            </Head>
            <div>
                <Navbar />
                <Welcome />
                <Bio />
                <Media />
                <Repertoire />
                <Agenda props={initialEvents} />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
