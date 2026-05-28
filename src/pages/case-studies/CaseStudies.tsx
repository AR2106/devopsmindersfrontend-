import CaseStudyCard from "../../components/case-study/CaseStudyCard";
import { caseStudies } from "../../data/caseStudies";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className=" px-4 lg:px-12 py-14">
        <div className="mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Case Studies
          </h1>

          <p className="mt-5 text-gray-400 text-base lg:text-lg max-w-3xl leading-relaxed">
            We design and build AI-powered products, SaaS platforms, and
            enterprise systems that solve real business problems. Each case
            study below shows how we transform complex ideas into scalable
            digital experiences using AI, automation, and modern engineering.
          </p>
        </div>

        <div className="mb-8 flex items-center gap-3">
          <div className="h-[1px] w-12 bg-gray-700" />
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Selected Work
          </span>
        </div>
        <div className="grid gap-8 md:grid-cols-2 ">
          {caseStudies.map((item) => (
            <div
              key={item.slug}
              className="transition-all duration-300 hover:-translate-y-2"
            >
              <CaseStudyCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
