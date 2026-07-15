import { NavLink } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const services = [
    "Modern Fireplaces",
    "Outdoor Fireplaces",
    "Marble Fireplaces",
    "Gypsum Fireplaces",
    "Custom Designs",
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-column">
                    <h2>🔥 PlaceFire</h2>
                    <p>
                        Luxury fireplace design and installation for modern homes.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Quick Links</h3>

                    {quickLinks.map((link) => (
                        <NavLink key={link.path} to={link.path}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="footer-column">
                    <h3>Services</h3>

                    {services.map((service) => (
                        <p key={service}>{service}</p>
                    ))}
                </div>

                <div className="footer-column">
                    <h3>Contact</h3>

                    <p>�?️ Riyadh, Saudi Arabia</p>
                    <a href="tel:0541595401">📞 0541595401</a>
                    <a href="https://www.instagram.com/qpt8.8?igsh=dTE0ZHhpYnc4cnc%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        📸 Instagram
                    </a>
                    <a href="https://wa.me/966541595401" target="_blank" rel="noopener noreferrer">
                        💬 WhatsApp
                    </a>

                </div>

            </div>

            <div className="footer-bottom">
                © 2026 PlaceFire. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;