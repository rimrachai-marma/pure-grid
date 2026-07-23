import React from "react";
import Heading from "./Heading";

import SolarGridIcon from "./icons/SolarGridIcon";
import SmartSolarIcon from "./icons/SmartSolarIcon";
import EnergyStorageIcon from "./icons/EnergyStorageIcon";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const cards: FeatureCard[] = [
  {
    icon: <SolarGridIcon />,
    title: "Solar Grid Integration",
    description: "Maintaining reliability and security as renewable energy joins the existing electrical grid.",
    link: "#",
  },
  {
    icon: <EnergyStorageIcon />,
    title: "Energy Storage Solutions",
    description: "Storing renewable energy so it can be used even when the sun isn't shining or wind isn't blowing.",
    link: "#",
  },
  {
    icon: <SmartSolarIcon />,
    title: "Smart Solar & IoT",
    description: "Using advanced sensors and AI to maximize energy production and system efficiency.",
    link: "#",
  },
];

const SolutionSection: React.FC = () => {
  return (
    <section className="bg-[url('/solar-panels.jpg')] bg-cover bg-center relative z-10 overflow-hidden">
      <img
        aria-hidden="true"
        className="absolute h-48 top-4 -right-8 object-contain -z-20"
        src="/solar-panels-bg-cityscap.png"
        alt="Background"
      />
      <div className="-z-10 absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_41.85%,rgba(220,230,236,0.80)_100%)] bg-cover bg-center"></div>

      <div className="max-w-330 mx-auto px-20 py-15">
        <div className="space-y-4">
          <Heading>Our Solutions</Heading>
          <p className="mt-4 w-89.5 text-[hsla(0,0%,0%,1)] text-[34px] font-normal leading-[140%] tracking-[-0.5px]">
            Design Solutions for a Zero-Carbon World
          </p>
        </div>

        <div className="py-8 grid grid-cols-3 gap-5">
          {cards.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col h-full bg-[hsla(153,100%,98%,0.79)] py-8 px-6 rounded-3xl border border-[#C1DBCF] shadow-[0_4px_4px_0_rgba(0,0,0,0.04)]"
            >
              {icon}
              <h3 className="mt-27.5 text-[hsla(151,61%,11%,1)] text-[30px] leading-[120%] tracking-[-1px]">{title}</h3>
              <p className="mt-3.5 text-[hsl(0_0%_35%)] leading-[160%] tracking-[-0.5px]">{description}</p>
              <a
                href="#"
                className="self-start mt-7.5 flex items-center gap-2.5 py-2.75 px-3 rounded-[10px] border border-[#C8DFD4] bg-[hsla(0,0%,100%,1)] text-[hsla(151,61%,11%,1)]"
              >
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path
                    d="M0.833333 5.00005C0.373092 5.00005 0 5.37313 0 5.83338C5.83333e-05 6.29355 0.373133 6.66671 0.833333 6.66671L11.0506 6.66671C10.6219 7.14463 10.0482 7.6823 9.45392 8.1983C8.84358 8.72821 8.23033 9.2198 7.76858 9.58013C7.53825 9.75988 7.07383 10.1155 6.94008 10.2165C6.62708 10.5 6.573 10.98 6.82858 11.3274C7.1015 11.6978 7.62342 11.7774 7.994 11.5048C8.13367 11.3993 8.55567 11.0804 8.79392 10.8945C9.26967 10.5232 9.9065 10.0117 10.5461 9.45646C11.1814 8.9048 11.8383 8.29321 12.3429 7.72221C12.5943 7.43771 12.826 7.14388 12.9988 6.85713C13.158 6.59321 13.3333 6.23013 13.3333 5.83338L13.3252 5.68613C13.2894 5.34755 13.138 5.0413 12.9988 4.81046C12.826 4.52363 12.5943 4.22913 12.3429 3.94456C11.8384 3.37353 11.1814 2.76199 10.5461 2.21035C9.9065 1.65508 9.26967 1.14361 8.79392 0.772356C8.55567 0.586414 8.13367 0.267515 7.994 0.162006C7.62342 -0.11061 7.10225 -0.0310108 6.82942 0.339414C6.57358 0.686864 6.627 1.16672 6.94008 1.45026C6.94008 1.45026 7.14592 1.60893 7.21275 1.6594C7.34642 1.76041 7.53825 1.90691 7.76858 2.08665C8.23033 2.44701 8.84358 2.93854 9.45392 3.46848C10.0482 3.9845 10.6219 4.52213 11.0506 5.00005L0.833333 5.00005Z"
                    fill="#0A2B1C"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
