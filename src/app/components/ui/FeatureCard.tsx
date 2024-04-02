import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface FeatureCardProps {
  tagColor: string;
  tagText: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  tagColor,
  tagText,
  title,
  description,
}) => {
  const bgColorClass = ["purple", "yellow", "green", "blue"].includes(tagColor)
    ? `bg-${tagColor}`
    : "bg-default";

  return (
    <div
      className={`bg-[#fff] shadow-lg justify-between text-left items-start flex flex-col p-6 w-full rounded-xl transform transition duration-300 ease-in-out hover:-translate-y-2`}
    >
      <div className="flex items-center gap-2">
        <div className={`w-2.5 h-2.5 ${bgColorClass} rounded-full`}></div>
        <p className="text-sm">{tagText}</p>
      </div>
      <div className="mt-16">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-2 opacity-40">{description}</p>
        {/* <button className="mt-4 text-sm">
          Learn more <span className={inter.className}>-&gt;</span>
        </button> */}
      </div>
    </div>
  );
};

export default FeatureCard;
