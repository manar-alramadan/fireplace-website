export function sendToWhatsApp(formData) {

    const phone = "966541595401"; // ضع رقم المدير هنا بدون علامة +

    const message = `
🔥 New Fireplace Design Request

👤 Customer Information

Name: ${formData.fullName}

Phone: ${formData.phone}

Email: ${formData.email || "Not provided"}

City: ${formData.city}

🏡 Project Information

Service: ${formData.service}

Property Type: ${formData.property}

Budget: ${formData.budget}

📝 Project Details

${formData.message}
`;

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}