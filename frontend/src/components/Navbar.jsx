import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import icon_fireplace from "../assets/icon_fireplace.png";
import useLanguage from "../hooks/useLanguage";

function Navbar() {
    const {

        t,

        isArabic,

        changeLanguage

    } = useLanguage();


    const [open, setOpen] = useState(false);


    return (

        <header className="navbar">

            <div className="navbar__container">


                {/* Logo */}
                <div className="navbar__logo">
                    <img src={icon_fireplace} alt="fireplace" width="25" height="25" />


                </div>


                {/* Mobile Button */}
                <button
                    className="navbar__toggle"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>



                {/* Navigation */}

                <nav
                    className={
                        open
                            ? "navbar__menu active"
                            : "navbar__menu"
                    }
                >

                    <NavLink
                        to="/"
                        onClick={() => setOpen(false)}
                    >
                        {t("navbar.home")}
                    </NavLink>


                    <NavLink
                        to="/services"
                        onClick={() => setOpen(false)}
                    >
                        {t("navbar.services")}
                    </NavLink>


                    <NavLink
                        to="/gallery"
                        onClick={() => setOpen(false)}
                    >
                        {t("navbar.gallery")}
                    </NavLink>


                    <NavLink
                        to="/about"
                        onClick={() => setOpen(false)}
                    >
                        {t("navbar.about")}
                    </NavLink>


                    <NavLink
                        to="/contact"
                        onClick={() => setOpen(false)}
                    >
                        {t("navbar.contact")}
                    </NavLink>
                    <NavLink to="/blog">
                        {t("navbar.blog")}
                    </NavLink>

                </nav>



                <NavLink
                    to="/design-request"
                    className="navbar__button"
                >
                    {t("navbar.request")}
                </NavLink>
<div className="language-switcher">
                <button
                    className={!isArabic ? "active-language" : ""}
                    onClick={() => changeLanguage("en")}
                >
                    EN
                </button>

                <button
                    className={isArabic ? "active-language" : ""}
                    onClick={() => changeLanguage("ar")}
                >
                    AR
                </button>


            </div>
            </div>
        </header>

    );
}


export default Navbar;