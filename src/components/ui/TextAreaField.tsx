import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export default function TextAreaField({
  label,
  placeholder,
  register,
  error,
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>

      <textarea
        {...register}
        placeholder={placeholder}
        className={`mt-2 h-32 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#E80112] focus:ring-2 focus:ring-[#E80112]/20 ${
          error ? "border-[#E80112]" : "border-slate-200"
        }`}
      />

      {error && (
        <p className="mt-1 text-xs text-[#E80112]">{error.message}</p>
      )}
    </div>
  );
}