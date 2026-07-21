import { NavLink } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";
import "./Footer.css";

const quickLinks = [
    { key: "home", path: "/" },
    { key: "services", path: "/services" },
    { key: "gallery", path: "/gallery" },
    { key: "about", path: "/about" },
    { key: "contact", path: "/contact" },
];

const services = [
    "modern",
    "outdoor",
    "marble",
    "gypsum",
    "custom",
];

function Footer() {

    const { t } = useLanguage();

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-column">

                    <h2>🔥 PlaceFire</h2>

                    <p>
                        {t("footer.description")}
                    </p>

                </div>

                <div className="footer-column">

                    <h3>
                        {t("footer.quickLinks")}
                    </h3>

                    {quickLinks.map((link) => (

                        <NavLink
                            key={link.path}
                            to={link.path}
                        >
                            {t(`navbar.${link.key}`)}
                        </NavLink>

                    ))}

                </div>

                <div className="footer-column">

                    <h3>
                        {t("footer.servicesTitle")}
                    </h3>

                    {services.map((service) => (

                        <p key={service}>
                            {t(`footer.services.${service}`)}
                        </p>

                    ))}

                </div>

                <div className="footer-column">

                    <h3>
                        {t("footer.contact")}
                    </h3>

                    <p>
                        🗺️ {t("footer.location")}
                    </p>

                    <a href="tel:0541595401">
                        📞 0541595401
                    </a>

                    <a
                        href="https://www.instagram.com/qpt8.8?igsh=dTE0ZHhpYnc4cnc%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📸 Instagram
                    </a>

                    <a
                        href="https://wa.me/966541595401"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💬 WhatsApp
                    </a>

                </div>

            </div>

            <div className="footer-bottom">

                © 2026 PlaceFire. {t("footer.rights")}

            </div>

        </footer>

    );

}

export default Footer;