import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, ExternalLink, Play } from "lucide-react";
import { caseStudies } from "../../data/caseStudies";

const CaseStudyDetails = () => {
  const { slug } = useParams();

  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 text-slate-900">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Project not found</h1>

          <p className="mt-3 text-slate-500">
            The case study you are looking for is unavailable.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900 selection:bg-[#E80112] selection:text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#E80112]/[0.04] blur-[160px]" />
        
        <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-slate-100/50 blur-[160px]" />

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

      <Helmet>
        <title>{study.title} | DevOps Minders</title>

        <meta name="description" content={study.description} />

        <meta property="og:title" content={study.title} />
        <meta property="og:description" content={study.description} />
        <meta property="og:image" content={study.image} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={study.title} />
        <meta name="twitter:description" content={study.description} />
        <meta name="twitter:image" content={study.image} />
      </Helmet>

      {/* 
        Standardized the wrapper to max-w-7xl, 
        but constrained inner sections to max-w-4xl to align text and images perfectly 
      */}
      {/* CHANGE: Updated horizontal padding to px-8 sm:px-10 lg:px-10 (40px) */}
      <div className="relative mx-auto 2xxl:max-w-7xl px-8 sm:px-10 lg:px-10 pb-24 pt-10 sm:pt-28 lg:pb-14 lg:pt-14">
        
        {/* Hero - max-w-4xl aligns with the image and content below */}
        <header className="mx-auto xl:max-w-4xl">
          <h1 className="2xx:max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
            {study.title}
          </h1>

          <p className="mt-7 2xxl:max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            {study.description}
          </p>

          {/* Project Links */}
          {(study.url || study.videoUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {study.url && (
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-md border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-900 transition-all duration-300 hover:border-[#E80112]/40 hover:bg-[#E80112]/[0.05]"
                >
                  <ExternalLink className="h-4 w-4 text-[#E80112]" />

                  <span>Visit Website</span>

                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E80112]" />
                </a>
              )}

              {study.videoUrl && (
                <a
                  href={study.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-md border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-900 transition-all duration-300 hover:border-[#E80112]/40 hover:bg-[#E80112]/[0.05]"
                >
                  <Play className="h-4 w-4 fill-[#E80112] text-[#E80112]" />

                  <span>View Project Video</span>

                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E80112]" />
                </a>
              )}
            </div>
          )}
        </header>

        {/* Main Project Image - max-w-4xl matches header width */}
        <figure className="mx-auto mt-14 w-full max-w-4xl sm:mt-16">
          <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm sm:p-3 lg:p-4">
            <div className="w-full overflow-hidden rounded-lg bg-slate-100">
              <img
                src={study.image}
                alt={study.title}
                className="block h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>
        </figure>

        {/* Case Study Content - max-w-4xl keeps text aligned with the image edges */}
        <article className="mx-auto mt-16 max-w-4xl sm:mt-20">
          {study.content?.map((block: any, index: number) => {
            if (!block?.type) return null;

            switch (block.type) {
              case "heading":
                return (
                  <h2
                    key={index}
                    className="mb-5 mt-12 text-2xl font-semibold leading-tight tracking-[-0.025em] text-slate-900 first:mt-0 sm:mt-14 sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );

              case "paragraph":
                return (
                  <p
                    key={index}
                    className="mb-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9"
                  >
                    {block.text}
                  </p>
                );

              case "list":
                if (block.variant === "quote") {
                  return (
                    <div key={index} className="my-9 space-y-5">
                      {block.items?.map((item: string, i: number) => (
                        <p
                          key={i}
                          className="text-lg italic leading-8 text-slate-700 sm:text-xl sm:leading-9"
                        >
                          “{item}”
                        </p>
                      ))}
                    </div>
                  );
                }

                return (
                  <ul key={index} className="my-8 space-y-4 pl-1">
                    {block.items?.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E80112]" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="my-12 border-l-2 border-[#E80112]/40 pl-6 sm:my-14 sm:pl-8"
                  >
                    <p className="text-xl font-medium italic leading-9 text-slate-800 sm:text-2xl sm:leading-10">
                      {block.text}
                    </p>
                  </blockquote>
                );

              case "image":
                return (
                  <figure key={index} className="my-12 w-full">
                    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm sm:p-3 lg:p-4">
                      <div className="w-full overflow-hidden rounded-lg bg-slate-100">
                        <img
                          src={block.src}
                          alt={block.alt || "Project detail"}
                          className="block h-auto w-full max-w-full object-contain"
                        />
                      </div>
                    </div>
                  </figure>
                );

              // case "cta":
              //   return (
              //     <section
              //       key={index}
              //       className="relative mt-16 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 px-6 py-10 text-center sm:mt-20 sm:px-10 sm:py-14"
              //     >
              //       <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-[#E80112]/[0.08] blur-[90px]" />

              //       <p className="relative mx-auto max-w-2xl text-xl font-medium leading-9 text-slate-800 sm:text-2xl sm:leading-10">
              //         {block.text}
              //       </p>
              //     </section>
              //   );

              default:
                return null;
            }
          })}
        </article>
      </div>
    </main>
  );
};

export default CaseStudyDetails;