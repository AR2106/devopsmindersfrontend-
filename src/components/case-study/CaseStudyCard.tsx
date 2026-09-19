import { Link } from "react-router-dom";

const CaseStudyCard = ({ item }: any) => {
  return (
    <Link
      to={`/case-studies/${item.slug}`}
      className="group block w-full"
      aria-label={`View ${item?.title || "case study"}`}
    >
      <article className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#E80112] group-hover:shadow-xl">
        {/* Image */}
        <div className="relative overflow-hidden bg-slate-50">
          <img
            src={item?.image}
            alt={item?.title || "Case study"}
            className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
          {/* Subtle image overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-70" />

          {/* Hover accent */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E80112] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="relative px-5 py-5 md:px-6 md:py-6">
          <div className="mb-3 h-px w-8 bg-[#E80112]/60 transition-all duration-500 group-hover:w-14" />

          <div className="flex items-center justify-between gap-5">
            <h2 className="max-w-2xl text-xl font-semibold leading-snug tracking-[-0.02em] text-slate-900 transition-colors duration-300 md:text-2xl group-hover:text-[#E80112]">
              {item?.title}
            </h2>

            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 group-hover:border-[#E80112]/40 group-hover:bg-[#E80112]/10 group-hover:text-[#E80112]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M4 10h11M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CaseStudyCard;
