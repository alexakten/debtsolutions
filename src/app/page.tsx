import Navbar from "./components/ui/Navbar";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const steps = [
  {
    number: "1",
    title: "Learn",
    description:
      "Connect with a community of experienced regenerative farmers.",
  },
  {
    number: "2",
    title: "Implement",
    description:
      "Get a customized regenerative agriculture plan for your farm.",
  },
  {
    number: "3",
    title: "Measure",
    description: "Monitor soil health and carbon sequestration with our tools.",
  },
  {
    number: "4",
    title: "Share",
    description:
      "Share your learnings with the community and keep improving your methods.",
  },
];

export default function Landing() {
  return (
    <main className="relative flex flex-col items-center px-3 text-center bg-gray-200 text-zinc-900 sm:px-8 2xl:text-lg">
      <Navbar />
      <section className="relative flex h-[100svh] w-full max-w-8xl flex-col justify-center items-center">
        <p className="border px-4 py-1 border-gray-300 text-zinc-500 rounded-full">
          🇸🇪 Launching in Sweden in 2024!
        </p>
        <h1 className="max-w-3xl mt-4 text-8xl tracking-tight">
          The new way to repay your debt
        </h1>
        <h3 className="mt-8 max-w-md text-xl opacity-50">
          Stop worrying about your debt. Payable helps you set up a plan to pay
          back what you owe.
        </h3>

        <button className="px-6 mt-8 py-2 rounded-full text-white bg-purple hover:bg-indigo-500 ">
          Get started <span className={inter.className}>-&gt;</span>
        </button>
      </section>
    </main>
  );
}
