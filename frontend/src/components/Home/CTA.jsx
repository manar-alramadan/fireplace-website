import {NavLink} from "react-router-dom";

function CTA() {

    return (

        <section className="cta-section">


            <div className="cta-content">


                <h2>
                    Ready To Build Your Dream Fireplace?
                </h2>


                <p>
                    Contact us today and get a custom
                    fireplace design for your home.
                </p>
                <p>
                    We operate throughout the Kingdom of Saudi Arabia
                </p>

                <button>   <NavLink style={{ textDecoration: 'none', color: 'white' }}
                    to="/design-request"

                >
                    Request Your Design
                </NavLink>

                </button>


            </div>


        </section>

    );

}


export default CTA;