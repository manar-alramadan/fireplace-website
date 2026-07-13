import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

    const [open, setOpen] = useState(false);


    return (

        <header className="navbar">

            <div className="navbar__container">


                {/* Logo */}
                <div className="navbar__logo">
                    🔥 PlaceFire
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
                        Home
                    </NavLink>


                    <NavLink
                        to="/services"
                        onClick={() => setOpen(false)}
                    >
                        Services
                    </NavLink>


                    <NavLink
                        to="/gallery"
                        onClick={() => setOpen(false)}
                    >
                        Gallery
                    </NavLink>


                    <NavLink
                        to="/about"
                        onClick={() => setOpen(false)}
                    >
                        About
                    </NavLink>


                    <NavLink
                        to="/contact"
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </NavLink>


                </nav>



                <button className="navbar__button">
                    Request Design
                </button>


            </div>

        </header>

    );
}


export default Navbar;