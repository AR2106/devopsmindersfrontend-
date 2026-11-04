import { Helmet } from "react-helmet-async";
import CaseStudyCard from "../../components/case-study/CaseStudyCard";
import { caseStudies } from "../../data/caseStudies";

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Software Development, AI & Cloud Case Studies | DevOps Minders</title>

        <meta
          name="description"
          content="Explore DevOps Minders case studies showcasing custom software development, AI platform engineering, cloud migration, and DevOps implementations for global brands."
        />

        <meta
          name="keywords"
          content="Software Development Case Studies, AI Projects, Cloud Migration Case Studies, DevOps Portfolio, IT Solutions Case Studies, DevOps Minders"
        />

        <link
          rel="canonical"
          href="https://www.devopsminders.com/case-studies"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevOps Minders" />
        <meta property="og:title" content="Software Development, AI & Cloud Case Studies | DevOps Minders" />

        <meta
          property="og:description"
          content="Explore DevOps Minders case studies showcasing custom software development, AI platform engineering, cloud migration, and DevOps implementations for global brands."
        />

        <meta
          property="og:url"
          content="https://www.devopsminders.com/case-studies"
        />
        <meta
          property="og:image"
          content="https://www.devopsminders.com/assets/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devopsminders" />
        <meta name="twitter:title" content="Software Development, AI & Cloud Case Studies | DevOps Minders" />
        <meta
          name="twitter:description"
          content="Explore DevOps Minders case studies showcasing custom software development, AI platform engineering, cloud migration, and DevOps implementations for global brands."
        />
        <meta
          name="twitter:image"
          content="https://www.devopsminders.com/assets/og-image.png"
        />
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
        </div>

        {/* Updated Container - Matches Service.tsx exactly */}
        <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 pt-20 pb-[10px] sm:px-5 md:px-6 sm:pt-24 lg:pb-10 lg:pt-14">
          {/* Header */}
          <header className="relative mb-4 sm:mb-6 lg:mb-0">
            {/* 2-column layout for text and image matching Service.tsx */}
            <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
              {/* Left Column: Text */}
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#E80112] sm:w-10" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
                    Our Work
                  </span>
                </div>

                {/* H1 Updated: AI Focus */}
                <h1 className="max-w-4xl text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-[3.75rem] xl:text-[4.15rem]">
                  AI & Cloud Projects that
                  <span className="block text-[#E80112]">
                    solve real problems.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Explore selected projects where AI development, intelligent automation, 
                  and scalable cloud infrastructure come together to solve complex business challenges.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#E80112]" />
                    AI & Cloud Projects
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative hidden lg:mt-8 lg:block">
                <img
                  src="/assets/case-studies-hero.webp"
                  alt="DevOps Minders AI Case Studies and Project Portfolio"
                  loading="lazy"
                  decoding="async"
                  className="relative mx-auto h-auto max-h-[420px] w-full max-w-md object-contain"
                />
              </div>
            </div>


          </header>

          {/* Case studies */}
          <section aria-label="Selected case studies">
            {/* Grid setup to handle responsiveness correctly */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
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