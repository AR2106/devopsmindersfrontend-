export const ServiceCard = ({ title, description, icon }: any) => {
  return (
    <div
      className="
        group relative bg-white rounded-2xl p-8 cursor-pointer
        border border-slate-200
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 
        hover:border-[#E80112]
        hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.08),0_0_0_1px_rgba(232,1,18,0.3)]

        /* Equal height fix */
        h-full flex flex-col
      "
    >
      {/* Icon Container - Custom Red Tint (#E80112) */}
      <div className="w-14 h-14 rounded-xl bg-[#E80112]/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#E80112]/20">
        <span className="text-[#E80112] w-6 h-6">{icon}</span>
      </div>

      {/* Title - Dark Text */}
      <h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900 transition-colors duration-300">
        {title}
      </h3>

      {/* Description - Dark Gray Text */}
      <p className="text-slate-600 text-base leading-relaxed flex-1">
        {description}
      </p>

      <div className="mt-6" />
    </div>
  );
};
