import React from "react";
import Head from "next/head";
import { useState } from "react";

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
            date: "desc",
        },
    });

    const soloRepertoire = await prisma.repertori.findMany({
        where: {
            genre: "solo",
        },
    });

    const operaRepertoire = await prisma.repertori.findMany({
        where: {
            genre: "opera",
        },
    });

    return {
        props: {
            initialEvents: events,
            soloProgramm: soloRepertoire,
            operaProgramm: operaRepertoire,
        },
    };
}

export default function Home({ initialEvents, soloProgramm, operaProgramm }) {
    const [isActive, setIsActive] = useState(false);

    const openMenu = () => {
        console.log("hey!");
        if (isActive) {
            setIsActive(false);
            return;
        }
        setIsActive(true);
    };

    console.log(
        "events:",
        initialEvents,
        "solop",
        soloProgramm,
        "operap",
        operaProgramm
    );

    return (
        <>
            <Head>
                <title>JOAQUIM FONT</title>
            </Head>
            <div>
                <Navbar isActive={isActive} openMenu={openMenu} />
                <Welcome openMenu={openMenu} />
                <Bio />
                <Media />
                <Repertoire solo={soloProgramm} opera={operaProgramm} />
                <Agenda props={initialEvents} />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
