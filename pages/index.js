import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Welcome from "../components/welcome.js";
import Bio from "../components/bio.js";
import Media from "../components/media.js";
import Navbar from "../components/navbar.js";
import Repertoire from "../components/repertoire.js";

export default function Home() {
    const { asPath } = useRouter();

    useEffect(() => {
        const hash = asPath.split("#")[1];
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
        }
    }, [asPath]);
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
            </div>
        </>
    );
}
