const steps = [
    {
        number: "1",
        title: "Consultation",
        description:
            "We discuss your ideas, space, and project requirements.",
    },
    {
        number: "2",
        title: "Design",
        description:
            "Our designers prepare a custom fireplace concept for approval.",
    },
    {
        number: "3",
        title: "Installation",
        description:
            "Professional installation using premium materials and expert craftsmanship.",
    },
    {
        number: "4",
        title: "Final Delivery",
        description:
            "Quality inspection, finishing touches, and project handover.",
    },
];

function WorkProcess() {
    return (
        <section className="work-process">

            <h2>How We Work</h2>

            <div className="process-grid">

                {steps.map((step) => (
                    <div key={step.number} className="process-card">

            <span className="process-number">
              {step.number}
            </span>

                        <h3>{step.title}</h3>

                        <p>{step.description}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default WorkProcess;