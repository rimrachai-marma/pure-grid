import React from "react";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 -z-10 w-[367.501px] h-[692.18px] rotate-90 rounded-[692.18px] bg-[linear-gradient(90deg,#CBFE91_-9.5%,#D6F3F4_100%)] blur-[100px]"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 right-0 -z-10 w-[589.381px] h-[367.501px] rounded-[589.381px] bg-[#DBE3AA] blur-[100px]"
      ></motion.div>

      <div className="max-w-330 mx-auto px-30 py-20 flex flex-col gap-15">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <Heading>Testimonials</Heading>
          <div className="space-y-4 w-full max-w-134">
            <h3 className="text-[48px] font-medium leading-[110%] tracking-[-2.5px] text-[hsla(151,61%,11%,1)]">
              Proven Success Stories
            </h3>
            <p className="text-[#59595D] text-[18px] leading-[170%]">
              Master your energy ecosystem with smart technology and tailored performance analytics.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -6, boxShadow: "0 12px 24px 0 rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 gradient-border px-6 py-8 rounded-4xl"
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
