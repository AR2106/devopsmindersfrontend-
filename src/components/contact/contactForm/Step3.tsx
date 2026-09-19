import { useFormContext } from "react-hook-form";
import type { FormValues } from "../../../types";
import Button from "../../ui/Button";

type Props = {
    back: () => void;
};

export default function Step3({ back }: Props) {
    const { getValues } = useFormContext<FormValues>();
    const data = getValues();

    return (
        <div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">
                Step 3: Review & Submit
            </h3>
            <p className="text-sm text-slate-600">
                Please review your details before submitting.
            </p>

            <div className="mt-6 mb-6 rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm">
                <div className="grid gap-3">
                    <p>
                        <span className="text-slate-500">Name:</span>{" "}
                        <span className="font-medium text-slate-900">{data.name}</span>
                    </p>
                    <p>
                        <span className="text-slate-500">Email:</span>{" "}
                        <span className="font-medium text-slate-900">{data.email}</span>
                    </p>
                    <p>
                        <span className="text-slate-500">Service:</span>{" "}
                        <span className="font-medium text-slate-900">{data.service}</span>
                    </p>
                    <p>
                        <span className="text-slate-500">Budget:</span>{" "}
                        <span className="font-medium text-slate-900">{data.budget}</span>
                    </p>
                    <p>
                        <span className="text-slate-500">Message:</span>{" "}
                        <span className="font-medium text-slate-900">{data.message}</span>
                    </p>
                </div>
            </div>

            <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-[#E80112] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#c5010f]"
            >
                Submit Request
            </button>

            <div className="mt-6 flex justify-between gap-4 border-t border-slate-200 pt-6">
                <Button variant="secondary" onClick={back}>
                    Back
                </Button>
            </div>
        </div>
    );
}