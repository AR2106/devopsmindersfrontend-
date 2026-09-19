import { useFormContext } from "react-hook-form";
import type { FormValues } from "../../../types";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";

type Props = {
    next: () => void;
};

export default function Step1({ next }: Props) {
    const {
        register,
        formState: { errors },
    } = useFormContext<FormValues>();

    return (
        <div className="form-card">
            <h3 className="mb-2 text-xl font-bold text-slate-900">Step 1: Contact Info</h3>
            <p className="text-sm text-slate-600">Provide details so we can best assist you.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
                <InputField
                    label="Full Name"
                    placeholder="Full Name"
                    register={register("name", { required: "Name is required" })}
                    error={errors.name}
                />

                <InputField
                    label="Email"
                    placeholder="Email Address"
                    type="email"
                    register={register("email", {
                        required: "Email required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email",
                        },
                    })}
                    error={errors.email}
                />

                <InputField
                    label="Phone"
                    placeholder="Phone Number"
                    register={register("phone", {
                        required: "Phone required",
                        minLength: { value: 10, message: "Min 10 digits" },
                    })}
                    error={errors.phone}
                />

                <InputField
                    label="Company Name"
                    placeholder="Company Name"
                    register={register("company")}
                />
            </div>

            <div className="mt-4 flex justify-between gap-4 border-t border-slate-200 pt-6 mt-6">
                <Button type="button" onClick={next}>
                    Next
                </Button>
            </div>
        </div>
    );
}