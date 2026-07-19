import {NavLink} from "react-router-dom";

function Hero() {

    return (

        <section className="hero">

            <div className="hero__content">

                <h1>
                    Modern Fireplaces
                    Designed For Your Home
                </h1>


                <p>
                    We design and build luxury fireplaces
                    that transform your living space.
                </p>


                <button  >
                    <NavLink
                        to="/design-request"      style={{ textDecoration: 'none', color: 'white' }}
                    >
                        Request Design
                    </NavLink>
                </button>

            </div>


        </section>

    );

}


export default Hero;