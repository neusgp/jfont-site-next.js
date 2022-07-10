import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Welcome from "../components/welcome.js";
import Bio from "../components/bio.js";
import Media from "../components/media.js";
import Navbar from "../components/navbar.js";
import Repertoire from "../components/repertoire.js";
import Agenda from "../components/agenda.js";
import Footer from "../components/footer.js";
import Contact from "../components/contact.js";

export default function Home() {
    /* const { pathname } = useRouter(); */

    useEffect(() => {
        console.log(location.hash);
        /* 
            if (hash === "") {
                window.scrollTo(0, 0);
            } else {
                setTimeout(() => {
                    const id = (hash || "").replace("#", "");
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 0);
            } */
    });
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
                <Agenda />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
