/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    });

    return (
        <div /* className={} */>
            <h1>Ops!</h1>
            <p>This page doesn't exist...</p>
            <p>
                Go back to the
                <Link href="/">
                    <a> Homepage</a>
                </Link>
            </p>
        </div>
    );
}
