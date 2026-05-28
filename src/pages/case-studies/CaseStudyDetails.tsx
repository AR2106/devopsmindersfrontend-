import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { caseStudies } from "../../data/caseStudies";

const CaseStudyDetails = () => {
  const { slug } = useParams();

  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return <h1 className="text-center mt-10">Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      {/* SEO */}
      <Helmet>
        <title>{study.title} | Case Study</title>
        <meta name="description" content={study.description} />
        <meta property="og:title" content={study.title} />
        <meta property="og:description" content={study.description} />
        <meta property="og:image" content={study.image} />
      </Helmet>

      {/* HERO */}
      <h1 className="text-4xl font-bold sm:mb-10 mb-6">{study.title}</h1>

      <img
        src={study.image}
        alt={study.title}
        className="w-full h-[400px] object-cover rounded-xl mb-8"
      />

      <p className="text-gray-300 text-lg mb-10">{study.description}</p>
      {study.content?.map((block: any, index: number) => {
        if (!block?.type) return null;

        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="text-2xl md:text-3xl font-bold mt-10 mb-4"
              >
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="text-gray-300 leading-relaxed mb-5 text-lg"
              >
                {block.text}
              </p>
            );

          case "list":
            return (
              <div key={index} className="mb-6 space-y-2">
                {block.items?.map((item: string, i: number) => {
                  if (block.variant === "quote") {
                    return (
                      <p key={i} className="text-gray-300 text-lg">
                        “{item}”
                      </p>
                    );
                  }
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-gray-300 text-lg"
                    >
                      <span className="text-red-500 text-[24px]">•</span>
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-red-500 pl-4 italic text-gray-400 my-6"
              >
                {block.text}
              </blockquote>
            );

          case "image":
            return (
              <img
                key={index}
                src={block.src}
                alt={block.alt || "case study image"}
                className="rounded-xl my-6 w-full object-cover"
              />
            );

          case "cta":
            return (
              <div
                key={index}
                className="bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-xl mt-12 text-center"
              >
                <p className="text-xl font-semibold">{block.text}</p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default CaseStudyDetails;
