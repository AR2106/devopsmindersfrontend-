import { Helmet } from "react-helmet-async";
import CaseStudyCard from "../../components/case-study/CaseStudyCard";
import { caseStudies } from "../../data/caseStudies";

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | DevOpsMinders</title>

        <meta
          name="description"
          content="Explore DevOpsMinders case studies showcasing successful DevOps, cloud, AI automation, Kubernetes, and software engineering projects delivered for businesses."
        />

        <meta
          name="keywords"
          content="DevOps Case Studies, AI Projects, Cloud Migration, Kubernetes Projects, DevOps Portfolio"
        />

        <link
          rel="canonical"
          href="https://www.devopsminders.com/case-studies"
        />

        <meta property="og:title" content="Case Studies | DevOpsMinders" />

        <meta
          property="og:description"
          content="Discover real-world DevOps, cloud infrastructure, AI automation, and software engineering projects by DevOpsMinders."
        />

        <meta
          property="og:url"
          content="https://www.devopsminders.com/case-studies"
        />

        <meta property="og:type" content="website" />
      </Helmet>
      <main className="relative min-h-screen overflow-hidden bg-white text-slate-900 selection:bg-[#E80112] selection:text-white">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Subtle gray and brand color glows */}
          <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#E80112]/[0.03] blur-[140px]" />
          <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-slate-100/50 blur-[160px]" />

          {/* Technical grid */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px",
            }}
          />
          {/* Removed the vertical red center line from here */}
        </div>

        {/* 
          Updated Container: 
          - max-w-6xl reduces the overall horizontal width on desktop
          - pt-10 pb-10 applies 40px padding top and bottom
          - lg:px-[40px] explicitly gives 40px horizontal space on desktop
        */}
        <div className="relative mx-auto 2xxl:max-w-6xl px-4 pt-10 pb-10 sm:px-6 lg:px-20">
          {/* Header */}
          <header className="relative mb-14 max-w-4xl sm:mb-16 lg:mb-20">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#E80112] sm:w-10" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
                Our Work
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-7xl">
              Building digital products
              <span className="block text-[#E80112]">
                that solve real problems.
              </span>
            </h1>

            <div className="mt-7 flex flex-col gap-6 sm:mt-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Explore selected projects where thoughtful engineering,
                intelligent technology, and scalable digital experiences come
                together to solve complex business challenges.
              </p>

              <div className="hidden shrink-0 items-center gap-3 lg:flex">
                <span className="h-2 w-2 rounded-full bg-[#E80112] shadow-[0_0_14px_rgba(232,1,18,0.5)]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Selected Projects
                </span>
              </div>
            </div>

            {/* Header divider */}
            <div className="mt-10 h-px w-full bg-gradient-to-r from-[#E80112]/40 via-slate-200 to-transparent sm:mt-12" />
          </header>

          {/* Case studies */}
          <section aria-label="Selected case studies">
            {/* Also reduced the horizontal space (gap) between the grid columns to 40px */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-12">
              {caseStudies?.map((item, index) => (
                <div key={item.slug} className="group relative">
                  {/* Project index */}
                  <div className="mb-3 flex items-center justify-between px-1">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-8 bg-slate-200 transition-all duration-500 group-hover:w-14 group-hover:bg-[#E80112]" />
                  </div>

                  <CaseStudyCard item={item} />
                </div>
              ))}
            </div>
          </section>

          {/* Bottom atmosphere */}
          <div className="pointer-events-none mt-20 flex items-center gap-4 sm:mt-24">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
            <div className="h-1 w-1 rounded-full bg-[#E80112]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
          </div>
        </div>
      </main>
    </>
  );
};

export default CaseStudies;