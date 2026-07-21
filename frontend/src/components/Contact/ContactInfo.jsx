import useLanguage from "../../hooks/useLanguage";

function ContactInfo() {

    const { t } = useLanguage();

    const contactInfo = [

        {
            key: "location",
            icon: "🌏",
            value: "Riyadh, Saudi Arabia"
        },

        {
            key: "phone",
            icon: "📞",
            value: "054 159 5401",
            link: "tel:+966541595401"
        },

        {
            key: "whatsapp",
            icon: "📲",
            value: "+966 54 159 5401",
            link: "https://wa.me/966541595401"
        },

        {
            key: "instagram",
            icon: "📸",
            value: "www.instagram.com",
            link: "https://www.instagram.com/qpt8.8?igsh=dTE0ZHhpYnc4cnc%3D&utm_source=qr"
        },

        {
            key: "hours",
            icon: "🕒",
            value: "9:00 AM - 6:00 PM"
        }

    ];

    return (

        <section className="contact-info">

            {contactInfo.map((item) => {

                const card = (

                    <div className="contact-card">

                        <div className="contact-icon">
                            {item.icon}
                        </div>

                        <h3>
                            {t(`contact.info.${item.key}.title`)}
                        </h3>

                        <p>
                            {item.key === "location"
                                ? t("contact.info.location.value")
                                : item.key === "hours"
                                    ? t("contact.info.hours.value")
                                    : item.value}
                        </p>

                    </div>

                );

                return item.link ? (

                    <a
                        key={item.key}
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{
                            textDecoration: "none",
                            color: "inherit"
                        }}
                    >
                        {card}
                    </a>

                ) : (

                    <div key={item.key}>
                        {card}
                    </div>

                );

            })}

        </section>

    );

}

export default ContactInfo;