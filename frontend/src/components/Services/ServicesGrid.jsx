import ww from "../../assets/ww.jpg";
import m from "../../assets/m.jpg";
import w from "../../assets/w.jpg";
import u from "../../assets/u.jpg";
import j from "../../assets/j.jpg";
import d from "../../assets/d.jpg";
const services = [
    {
        title: "Modern Fireplaces",
        description:
            "Elegant fireplace designs with a modern look for contemporary homes.",
        icon: j,
    },
    {
        title: "Marble Fireplaces",
        description:
            "Luxury marble fireplaces crafted with premium materials and finishes.",
        icon: m,
    },
    {
        title: "Outdoor Fireplaces",
        description:
            "Beautiful outdoor fireplaces for gardens, patios, and family gatherings.",
        icon: u,
    },
    {
        title: "TV Wall Designs",
        description:
            "Custom TV wall designs integrated with modern fireplaces.",
        icon:w,
    },
    {
        title: "Custom Design",
        description:
            "Personalized fireplace solutions designed specifically for your home.",
        icon: d,
    },
    {
        title: "Maintenance",
        description:
            "Professional maintenance and renovation services for existing fireplaces.",
        icon: ww,
    },
];

function ServicesGrid() {
    return (
        <section className="services-grid-section">

            <h2>Our Services</h2>

            <p className="services-subtitle">
                Discover our premium fireplace solutions designed for comfort,
                elegance, and long-lasting quality.
            </p>

            <div className="services-grid">

                {services.map((service) => (
                    <div className="service-card" key={service.title}>

                        <div >
                            <img src={service.icon} alt={service.title} className="service-icon" />
                        </div>

                        <h3>{service.title}</h3>

                        <p>{service.description}</p>

                        <button>Choose</button>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default ServicesGrid;