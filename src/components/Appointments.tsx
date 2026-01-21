import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Services from "./Services";

interface AppointmentsProps { }

const Appointments: React.FunctionComponent<AppointmentsProps> = () => {
    const [step, setStep] = useState(1);

    // Formik setup for name validation
    const formik = useFormik({
        initialValues: {
            fullName: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('חובה להזין שם מלא')
                .matches(/^[\u0590-\u05FFa-zA-Z\s]+$/, 'השם יכול להכיל רק אותיות בעברית או באנגלית')
                .min(2, 'שם מלא חייב להיות לפחות 2 תווים')
                .max(25, 'שם מלא לא יכול להיות יותר מ-25 תווים'),
        }),
        onSubmit: (values) => {
            setStep(2)

        },
    });




    const handleNextStep = () => setStep((prev) => prev + 1);
    const handlePrevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <main>
            <div className="schedule">
                <h1>לקביעת תור</h1>
                <div className="progressScale"></div>

                <div id="progLvls">
                    {/* step 1 -- name */}
                    <span className={`progLvl ${step >= 1 ? "active" : ""}`}>1</span>
                    {/* step 2 -- services */}
                    <span className={`progLvl ${step >= 2 ? "active" : ""}`}>2</span>
                </div>

                {step === 1 && (
                    <div className="telForm">
                        <form onSubmit={formik.handleSubmit}>

                            <label htmlFor="fullName">שם מלא:</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.fullName}
                            />
                            {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}

                            <button type="submit">המשך</button>
                        </form>
                        <br />


                    </div>
                )}

                {step === 2 && (
                    <Services goBack={handlePrevStep} name={formik.values.fullName} />
                )}
            </div>


        </main>
    );
};

export default Appointments;
