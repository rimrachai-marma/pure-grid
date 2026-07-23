import React from "react";
import Heading from "./Heading";

interface Testimonial {
  name: string;
  title: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jakes P.",
    title: "Realtor, Real Estate Owner",
    image: "Jakes P..jpg",
    quote:
      "PureGrid revolutionized how I track my solar output. The dashboard is incredibly intuitive, and I love seeing my carbon footprint drop in real-time!",
  },
  {
    name: "Arophia T.",
    title: "Civil Engineer",
    image: "Arophia T..jpg",
    quote:
      "Completely changed how I manage my power consumption. The app is so simple to use, and I love how much I'm saving on my monthly utility bills!",
  },
  {
    name: "Avado M.",
    title: "Sr. Marketing Executive",
    image: "Avado M..jpg",
    quote:
      "PureGrid made energy independence a reality for my home. The interface is seamless, and I love how I can optimize battery storage just one tap!",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative z-10">
      <div className="absolute top-0 left-0 -z-10 w-[367.501px] h-[692.18px] rotate-90 rounded-[692.18px] opacity-40 bg-[linear-gradient(90deg,#CBFE91_-9.5%,#D6F3F4_100%)] blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 -z-10 w-[589.381px] h-[367.501px] rounded-[589.381px] opacity-30 bg-[#DBE3AA] blur-[100px]"></div>

      <div className="max-w-330 mx-auto px-30 py-20 flex flex-col gap-15">
        <div className="flex flex-col items-center gap-3 text-center">
          <Heading>Testimonials</Heading>
          <div className="space-y-4 w-full max-w-134">
            <h3 className="text-[48px] font-medium leading-[110%] tracking-[-2.5px] text-[hsla(151,61%,11%,1)]">
              Proven Success Stories
            </h3>
            <p className="text-[#59595D] text-[18px] leading-[170%]">
              Master your energy ecosystem with smart technology and tailored performance analytics.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div className="space-y-6 gradient-border px-6 py-8 rounded-4xl">
              <div className="flex gap-2 items-center">
                <div className="size-15 overflow-hidden rounded-full">
                  <img
                    className="object-cover object-center size-full"
                    src={`/${testimonial.image}`}
                    alt={testimonial.name}
                  />
                </div>
                <div className="flex flex-col">
                  <strong className="text-[hsla(0,0%,6%,1)] font-bold leading-[170%]">{testimonial.name}</strong>
                  <span className="text-[14px] leading-[170%] text-[hsla(241,2%,36%,1)]">{testimonial.title}</span>
                </div>
              </div>
              <p className="text-[20px] leading-[170%] text-[hsla(0,0%,6%,1)]">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
