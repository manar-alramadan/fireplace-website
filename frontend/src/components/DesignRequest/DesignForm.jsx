import { useState } from "react";
import { sendToWhatsApp } from "./whatsapp";
function DesignForm() {

    const [formData, setFormData] = useState({

        fullName: "",

        phone: "",

        city: "",

        service: "",

        property: "",

        budget: "",

        message: ""

    });


    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            !formData.fullName ||
            !formData.phone ||
            !formData.city ||
            !formData.service ||
            !formData.property ||
            !formData.budget


        ) {
            alert("Please fill in all required fields.");
            return;
        }

        sendToWhatsApp(formData);
        setTimeout(() => {
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            city: "",
            service: "",
            property: "",
            budget: "",
            message: ""
        });
        }, 500);

    };


    return (

        <section className="design-form-section">

            <form
                className="design-form"
                onSubmit={handleSubmit}
            >

                <div className="form-card">

                    <h2>

                        👤 Customer Information

                    </h2>

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />



                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    >
                        <option value="">City </option>
                        <option value="Riyadh">Riyadh (الرياض)</option>
                        <option value="Jeddah">Jeddah (جدة)</option>
                        <option value="Mecca">Mecca (مكة المكرمة)</option>
                        <option value="Medina">Medina (المدينة المنورة)</option>
                        <option value="Dammam">Dammam (الدمام)</option>
                        <option value="Khobar">Khobar (الخبر)</option>
                        <option value="Dhahran">Dhahran (الظهران)</option>
                        <option value="Abha">Abha (أبها)</option>
                        <option value="Taif">Taif (الطائف)</option>
                        <option value="Tabuk">Tabuk (تبوك)</option>
                        <option value="Buraidah">Buraidah (بريدة)</option>
                        <option value="Hail">Hail (حائل)</option>
                        <option value="Jazan">Jazan (جازان)</option>
                        <option value="Najran">Najran (نجران)</option>
                        <option value="Al-Jouf">Al-Jouf (الجوف)</option>
                        <option value="Al-Baha">Al-Baha (الباحة)</option>
                        <option value="Arar">Arar (عرعر)</option>
                        <option value="Jubail">Jubail (الجبيل)</option>
                        <option value="Yanbu">Yanbu (ينبع)</option>
                        <option value="Qatif">Qatif (القطيف)</option>
                    </select>

                </div>


                <div className="form-card">

                    <h2>

                        🏡 Project Information

                    </h2>

                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >

                        <option value="">Select Service</option>

                        <option value="Modern Fireplace">
                            Modern Fireplace
                        </option>

                        <option value="Traditional Fireplace">
                            Traditional Fireplace
                        </option>

                        <option value="Outdoor Fireplace">
                            Outdoor Fireplace
                        </option>

                        <option value="Custom Design">
                            Custom Design
                        </option>

                    </select>



                    <select
                        name="property"
                        value={formData.property}
                        onChange={handleChange}
                        required
                    >

                        <option value="">Property Type</option>

                        <option value="Villa">
                            Villa
                        </option>

                        <option value="Apartment">
                            Apartment
                        </option>

                        <option value="Farm">
                            Farm
                        </option>

                        <option value="Commercial">
                            Commercial
                        </option>

                    </select>



                    <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                    >

                        <option value="">Budget Range</option>

                        <option value="Under 5,000 SAR">
                            Under 5,000 SAR
                        </option>

                        <option value="5,000 - 10,000 SAR">
                            5,000 - 10,000 SAR
                        </option>

                        <option value="10,000 - 20,000 SAR">
                            10,000 - 20,000 SAR
                        </option>

                        <option value="Above 20,000 SAR">
                            Above 20,000 SAR
                        </option>

                    </select>

                </div>

                <div className="form-card">

                    <h2>

                        📝 Project Details

                    </h2>

                    <textarea

                        name="message"

                        rows="7"

                        placeholder="Describe your project..."

                        value={formData.message}

                        onChange={handleChange}

                    />

                </div>


                <button
                    type="submit"
                    className="submit-btn"
                >

                    Submit Design Request

                </button>
                <p className="design-note">
                    After clicking "Submit Design Request", WhatsApp will open with your request ready to send.
                </p>
            </form>




        </section>

    );

}

export default DesignForm;