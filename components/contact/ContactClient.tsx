"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomButton from "../custom/CustomButton";

type UserType = "individual" | "firm" | "";

type ContactSalesForm = {
    type: UserType;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    website: string;
    credential: string;
    otherCredential: string;
    firmName: string;
    jobTitle: string;
    teamSize: string;
    country: string;
    otherCountry: string;
};

const initialForm: ContactSalesForm = {
    type: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    website: "",
    credential: "",
    otherCredential: "",
    firmName: "",
    jobTitle: "",
    teamSize: "",
    country: "",
    otherCountry: "",
};



export default function ContactClientSection() {
    const router = useRouter();
    const [step, setStep] = useState<number>(1);
    const [form, setForm] = useState<ContactSalesForm>(initialForm);
    const [error, setError] = useState<string>("");

    const progress = step === 1 ? "0%" : "50%";

    const updateField = <K extends keyof ContactSalesForm>(
        name: K,
        value: ContactSalesForm[K]
    ) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError("");
    };

    const validateStepOne = () => {
        if (!form.type) {
            setError("Please choose Individual Coach or Coaching Firm.");
            return false;
        }

        return true;
    };

    const validateStepTwo = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.firstName.trim()) {
            setError("Please enter your first name.");
            return false;
        }

        if (!form.lastName.trim()) {
            setError("Please enter your last name.");
            return false;
        }

        if (!emailRegex.test(form.email.trim())) {
            setError("Please enter a valid email address.");
            return false;
        }

        if (form.type === "firm" && !form.firmName.trim()) {
            setError("Please enter your firm / company name.");
            return false;
        }

        return true;
    };

    const goNext = () => {
        if (!validateStepOne()) return;

        setStep(2);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const goBack = () => {
        setStep(1);
        setError("");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateStepTwo()) return;

        console.log("Contact Sales Form:", form);

        // Later backend API
        // const response = await fetch("/api/contact-sales", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(form),
        // });
        //
        // if (!response.ok) {
        //   setError("Something went wrong. Please try again.");
        //   return;
        // }

        sessionStorage.setItem("contactSalesName", form.firstName.trim());

        router.push("/thank-you");
    };

    return (
        <main className="min-h-screen bg-white text-black">
            <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-[#e8e8e8]">
                <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: progress }}
                />
            </div>

            <div className="pt-6 text-center">
                <div className="text-[18px] font-extrabold tracking-[-0.03em]">
                    Coach Digital
                </div>
            </div>

            <section className="mx-auto w-full max-w-[640px] px-6 py-10">
                {step === 1 && (
                    <div className="flex min-h-[calc(100vh-90px)] flex-col justify-center py-12">
                        <h1 className="mb-1 text-[24px] flex items-center font-bold leading-tight tracking-[-0.03em] text-black sm:text-[28px]">
                            <span className="mr-2 inline-flex h-[24px] w-[24px] items-center justify-center rounded bg-black text-[14px] font-bold text-white">
                                1
                            </span>
                            <span>Who are you?</span>

                        </h1>
                        <span className="mb-7 block text-[14px] font-normal tracking-normal text-black/50">
                            This helps us ask the right questions
                        </span>

                        <div className="space-y-2">
                            <button
                                type="button"
                                onClick={() => updateField("type", "individual")}
                                className={`flex w-full max-w-[590px] items-center rounded-md border px-3 py-3 text-left transition ${form.type === "individual"
                                    ? "border-black bg-[#f1f1f1]"
                                    : "border-[#dddddd] bg-[#eeeeee] hover:border-black"
                                    }`}
                            >
                                <span className={`mr-3 inline-flex h-[24px] w-[24px] items-center justify-center rounded border border-black/20 text-[13px] font-medium 
                                    ${form.type === "individual" ? " text-white bg-black" : " text-black bg-white"}`}>
                                    A
                                </span>

                                <span className="text-[17px] font-normal text-black">
                                    Individual Coach
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => updateField("type", "firm")}
                                className={`flex w-full max-w-[590px] items-center rounded-md border px-3 py-3 text-left transition ${form.type === "firm"
                                    ? "border-black bg-[#f1f1f1]"
                                    : "border-[#dddddd] bg-[#eeeeee] hover:border-black"
                                    }`}
                            >
                                <span className={`mr-3 inline-flex h-[24px] w-[24px] items-center justify-center rounded border border-black/20 text-[13px] font-medium 
                                    ${form.type === "firm" ? " text-white bg-black" : " text-black bg-white"}`}>
                                    B
                                </span>

                                <span className="text-[17px] font-normal text-black">
                                    Coaching Firm
                                </span>
                            </button>
                            {error && (
                                <div className="mt-8 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[14px] font-medium text-red-600">
                                    {error}
                                </div>
                            )}
                        </div>


                        <div className="mt-8">
                            <CustomButton
                                type="button"
                                text="OK"
                                variant="contained"
                                onClick={goNext}
                            />
                        </div>


                    </div>

                )}

                {step === 2 && (
                    <form
                        onSubmit={handleSubmit}
                        className="flex min-h-[calc(100vh-90px)] flex-col justify-center py-12"
                    >
                        <h1 className="mb-1 flex items-center text-[24px] font-bold leading-tight tracking-[-0.03em] text-black sm:text-[28px]">
                            <span className="mr-2 inline-flex h-[24px] w-[24px] items-center justify-center rounded bg-black text-[14px] font-bold text-white">
                                2
                            </span>

                            <span>
                                What is the best way to contact you?
                                <span className="text-red-500"> *</span>
                            </span>
                        </h1>

                        <span className="mb-7 block text-[14px] font-normal tracking-normal text-black/50">
                            Share your details so our team can reach you easily.
                        </span>

                        <div className="w-full max-w-[560px] space-y-5">
                            <Field
                                label="First name *"
                                isRequired={true}
                                name="firstName"
                                placeholder="Jane"
                                value={form.firstName}
                                onChange={updateField}
                            />

                            <Field
                                label="Last name *"
                                name="lastName"
                                isRequired={true}
                                placeholder="Smith"
                                value={form.lastName}
                                onChange={updateField}
                            />

                            <Field
                                label="Phone number"
                                name="phone"
                                type="tel"
                                placeholder="+44 7..."
                                value={form.phone}
                                onChange={updateField}
                            />

                            <Field
                                label="Email *"
                                name="email"
                                type="email"
                                isRequired={true}
                                placeholder="name@example.com"
                                value={form.email}
                                onChange={updateField}
                            />
                            <Field
                                label="Website"
                                name="website"
                                placeholder="Your website"
                                value={form.website}
                                onChange={updateField}
                            />

                            {form.type === "individual" && (
                                <>
                                    <SelectField
                                        label="ICF Credential"
                                        name="credential"
                                        value={form.credential}
                                        onChange={updateField}
                                        options={[
                                            "ACC — Associate Certified",
                                            "PCC — Professional Certified",
                                            "MCC — Master Certified",
                                            "ADHD Specialist (PAAC/ACO)",
                                            "In training / not yet credentialed",
                                            "Other",
                                        ]}
                                    />
                                    {form.credential === "Other" && (
                                        <Field
                                            label="Other credential *"
                                            isRequired={true}
                                            name="otherCredential"
                                            placeholder="Enter your credential"
                                            value={form.otherCredential}
                                            onChange={updateField}
                                        />
                                    )}</>
                            )}

                            {form.type === "firm" && (
                                <>
                                    <Field
                                        label="Firm / company name *"
                                        name="firmName"
                                        placeholder="Apex Coaching Group"
                                        value={form.firmName}
                                        isRequired={true}
                                        onChange={updateField}
                                    />

                                    <Field
                                        label="Your job title"
                                        name="jobTitle"
                                        placeholder="Managing Director"
                                        value={form.jobTitle}
                                        onChange={updateField}
                                    />

                                    <SelectField
                                        label="Number of coaches"
                                        name="teamSize"
                                        value={form.teamSize}
                                        onChange={updateField}
                                        options={[
                                            "2–5 coaches",
                                            "6–15 coaches",
                                            "16–50 coaches",
                                            "50+ coaches",
                                        ]}
                                    />
                                </>
                            )}

                            <SelectField
                                label="Country"
                                name="country"
                                value={form.country}
                                onChange={updateField}
                                options={[
                                    "United Kingdom",
                                    "United States",
                                    "Canada",
                                    "Australia",
                                    "Ireland",
                                    "Germany",
                                    "Netherlands",
                                    "UAE / Middle East",
                                    "Other",
                                ]}
                            />
                            {form.country === "Other" && (
                                <Field
                                    label="Other country *"
                                    isRequired={true}
                                    name="otherCountry"
                                    placeholder="Enter your country"
                                    value={form.otherCountry}
                                    onChange={updateField}
                                />
                            )}
                        </div>

                        <div className="mt-8 flex items-center gap-3">
                            <CustomButton
                                type="submit"
                                text="Submit"
                            />
                            <CustomButton
                                onClick={goBack}
                                text="Back"
                                variant="outlined"
                            />
                        </div>
                    </form>
                )}
            </section>
        </main>
    );
}

type FieldProps = {
    label: string;
    name: keyof ContactSalesForm;
    value: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    isRequired?: boolean;
    onChange: <K extends keyof ContactSalesForm>(
        name: K,
        value: ContactSalesForm[K]
    ) => void;
};

function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    isRequired = false
}: FieldProps) {
    return (
        <div>
            <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.06em] text-black/50">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                required={isRequired}
                placeholder={placeholder}
                onChange={(event) => onChange(name, event.target.value)}
                className="w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-[17px] text-black outline-none transition placeholder:text-gray-300 focus:border-black"
            />
        </div>
    );
}

type SelectFieldProps = {
    label: string;
    name: keyof ContactSalesForm;
    value: string;
    options: string[];
    onChange: <K extends keyof ContactSalesForm>(
        name: K,
        value: ContactSalesForm[K]
    ) => void;
};

function SelectField({
    label,
    name,
    value,
    options,
    onChange,
}: SelectFieldProps) {
    return (
        <div>
            <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.06em] text-black/50">
                {label}
            </label>

            <select
                name={name}
                value={value}
                onChange={(event) => onChange(name, event.target.value)}
                className="w-full cursor-pointer border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-[17px] text-black outline-none transition focus:border-black"
            >
                <option value="">Select...</option>

                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}