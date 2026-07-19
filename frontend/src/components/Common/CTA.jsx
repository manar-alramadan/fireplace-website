import "./CTA.css";
import {NavLink} from "react-router-dom";

function CTA() {
    return (
        <section className="cta">

            <div className="cta-content">

                <h2>we are ready anytime you want</h2>

                <p>
                    Contact PlaceFire today and let us design a luxury fireplace

                </p>

                <button>
                    <NavLink to="/design-request" style={{ textDecoration: 'none', color: 'white' }}>
                        Request Your Design
                    </NavLink></button>

            </div>

        </section>
    );
}

export default CTA;