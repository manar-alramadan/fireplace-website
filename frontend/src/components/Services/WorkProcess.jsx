import useLanguage from "../../hooks/useLanguage";

function WorkProcess() {

    const { t } = useLanguage();

    const steps = [

        {
            number: "1",
            key: "consultation",
        },

        {
            number: "2",
            key: "design",
        },

        {
            number: "3",
            key: "installation",
        },

        {
            number: "4",
            key: "delivery",
        },

    ];

    return (

        <section className="work-process">

            <h2>
                {t("services.process.title")}
            </h2>

            <div className="process-grid">

                {steps.map((step) => (

                    <div
                        key={step.number}
                        className="process-card"
                    >

                        <span className="process-number">
                            {step.number}
                        </span>

                        <h3>
                            {t(`services.process.steps.${step.key}.title`)}
                        </h3>

                        <p>
                            {t(`services.process.steps.${step.key}.description`)}
                        </p>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default WorkProcess;