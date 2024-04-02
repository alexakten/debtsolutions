import Navbar from "./components/ui/Navbar";
import Link from "next/link";
import { Inter } from "next/font/google";
import FeatureCard from "./components/ui/FeatureCard";

const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    tagColor: "purple",
    tagText: "Earn",
    title: "Cash flow forecasting",
    description:
      "Cash flow forecasting using machine learning algorithms and Markov chains.",
  },
  {
    tagColor: "yellow",
    tagText: "Budget",
    title: "Cash flow forecasting",
    description:
      "We look over your current expenses and give you a customized budget.",
  },
  {
    tagColor: "green",
    tagText: "Plan",
    title: "Cash flow forecasting",
    description:
      "Cash flow forecasting using machine learning algorithms and Markov chains.",
  },
  {
    tagColor: "blue",
    tagText: "Repay",
    title: "Cash flow forecasting",
    description:
      "Cash flow forecasting using machine learning algorithms and Markov chains.",
  },
];

export default function Landing() {
  return (
    <main className="relative flex tracking-tight flex-col items-center px-3 text-center bg-[#F9F9F9] text-zinc-900 sm:px-8 2xl:text-lg">
      <Navbar />

      <section className="relative flex mt-48 w-full max-w-8xl flex-col justify-center items-center">
        <div className="px-6 py-1 text-black flex items-center gap-2 bg-white shadow-md rounded-full">
          {/* <div className="w-2.5 h-2.5 bg-black rounded-full"></div> */}
          <div className="flex ">
            <p className="opacity-40">v.1 launching soon</p>
            <button className="opacity-100 tracking-normal border-l pl-2 ml-2 hover:text-purple">
              Join beta <span className={inter.className}>-&gt;</span>
            </button>
          </div>
        </div>
        <h1 className="max-w-4xl mt-5 text-8xl tracking-tight">
          We help you repay your debt.
        </h1>
        {/* <h3 className="mt-8 max-w-md text-xl opacity-50">
          Stop worrying about your debt. Payable helps you set up a plan to pay
          back what you owe.
        </h3> */}

        <button className="px-6 mt-8 py-2 rounded-full tracking-normal text-white bg-black hover:bg-purple ">
          Get started <span className={inter.className}>-&gt;</span>
        </button>
      </section>

      <section className="grid m-20 grid-cols-4 w-full gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            tagColor={feature.tagColor}
            tagText={feature.tagText}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  );
}
