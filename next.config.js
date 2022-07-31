/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
    "@fullcalendar/common",
    "@fullcalendar/react",
    "@fullcalendar/daygrid",
    "@fullcalendar/interaction",
    "@fullcalendar/timegrid",
]);

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = withTM({ nextConfig });

/* module.exports = nextConfig; */
