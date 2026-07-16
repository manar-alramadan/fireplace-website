
const contactInfo = [
    {
        icon: "🌏",
        title: "Location",
        value: "Riyadh, Saudi Arabia"
    },

    {
        icon: "📞",
        title: "Phone",
        value: "0 54 159 5401",
        link: "tel:+966541595401" // يفتح تطبيق الاتصال بالرقم مباشرة
    },

    {
        icon: "📲",
        title: "WhatsApp",
        value: "+966 54 159 5401",
        link: "https://wa.me/966541595401" // الرابط المباشر للمحادثة
    },

    {
        icon: "📸",
        title: "instagram",
        value: "contact with us",
        link: "https://www.instagram.com/qpt8.8?igsh=dTE0ZHhpYnc4cnc%3D&utm_source=qr" // الرابط المباشر للمحادثة
    },

    {
        icon: "🕒",
        title: "Working Hours",
        value: "every day | 9:00 AM - 6:00 PM"
    }
];


function ContactInfo(){

    return (

        <section className="contact-info">


            {
                contactInfo.map((item)=>(
<a href={item.link}   style={{ textDecoration: "none" ,color: "blue" }}  >


                    <div
                        className="contact-card"
                        key={item.title}
                    >

                        <div className="contact-icon">
                            {item.icon}
                        </div>


                        <h3>
                            {item.title}
                        </h3>


                        <p>
                            {item.value}
                        </p>


                    </div>
                   </a>
                ))
            }


        </section>

    );

}


export default ContactInfo;