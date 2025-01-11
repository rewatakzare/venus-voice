import Link from "next/link";
import Background from "./Background";

export default function Home() {
  return (
    <div
      id="home"
      className="homepage w-full min-h-screen p-4 flex flex-col justify-center items-center relative "
    >
      <div className="absolute inset-0 -z-10">
        <Background/>
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
      </div>

      {/* Content Section */}
      <div className="relative max-w-7xl w-full px-6 sm:px-8">
        <div className="text-center">
          {/* Intro Text */}
          <p className="max-w-3xl mx-auto text-sm sm:text-md md:text-xl text-slate-500">
            Master Communication Skills, Break Barriers, and Unlock New Opportunities
          </p>

          {/* Heading */}
          <h1 className="pt-[4vh] tracking-wide text-4xl w sm:text-6xl md:text-7xl font-bold text-white">
            {' '}
            <span className="relative ">
              Venus Voice
            </span>
             : The Gateway to Professional English
          </h1>

          {/* Subtext */}
          <p className="mt-10 sm:mt-[4rem] max-w-2xl mx-auto text-sm sm:text-lg text-slate-500">
          Venus Voice is the institution launched for all online learners
          who meet the challenges of learning English language skills.
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-10 sm:mt-12">
            <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScyEJtGotVeOb9plV4fS3JUQFpYZzzTpWuhXYn49DZyNj_6mQ/viewform?usp=dialog"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border border-yellow-400 text-yellow-400 text-sm sm:text-base font-medium rounded-full bg-transparent hover:bg-yellow-400 hover:text-black transition-transform transform hover:scale-105"
            >
            Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
