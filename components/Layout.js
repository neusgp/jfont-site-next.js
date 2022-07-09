import Footer from "./footer.js";

export default function Layout({ children }) {
    return (
        <div id="layout">
            {children}
            <Footer />
        </div>
    );
}
