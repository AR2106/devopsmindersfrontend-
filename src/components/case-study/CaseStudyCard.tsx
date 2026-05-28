import { Link } from "react-router-dom";

const CaseStudyCard = ({ item }: any) => {
  return (
    <Link to={`/case-studies/${item.slug}`} className="group block w-full">
      <div className="rounded-sm overflow-hidden bg-transparent">
        <div className="overflow-hidden">
          <img
            src={item?.image}
            alt={item.title}
            className="w-full h-[260px] md:h-[320px] object-fill"
          />
        </div>
        <div className="py-4 md:py-6">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 transition duration-300 group-hover:text-primary">
            {item?.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
