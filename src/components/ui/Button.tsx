type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
    fullWidth?: boolean;
};

export default function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    fullWidth = false,
}: Props) {
    const base =
        "inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#E80112]/30 focus-visible:ring-offset-2";

    const styles =
        variant === "primary"
            ? "bg-[#E80112] text-white hover:bg-[#c5010f] hover:shadow-md"
            : "border border-slate-200 bg-white text-slate-700 hover:border-[#E80112]/40 hover:bg-slate-50 hover:text-[#E80112]";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${styles} ${fullWidth ? "w-full" : ""}`}
        >
            {children}
        </button>
    );
}