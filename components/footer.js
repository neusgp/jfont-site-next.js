import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <div id="footer">
            <p>Joaquim Font - Neus Garcia 2022</p>
            <Link href={"/admin"}>
                <a>Admin</a>
            </Link>
        </div>
    );
}
