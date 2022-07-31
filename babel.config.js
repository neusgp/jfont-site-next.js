module.exports = {
    presets: [
        "@babel/preset-react", // necessary for all .jsx files
        "next/babel",
    ],
};
// fullcalendar attempts to import its own CSS files, but next.js does not allow this.
