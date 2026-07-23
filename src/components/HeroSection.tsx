"use client";

import { motion } from "framer-motion";
import { HoverScale } from "./animations/HoverScale";

const HeroSection = () => {
  return (
    <header className="bg-[url('/hero.jpg')] bg-cover bg-center relative z-10 overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 w-305 h-231.75 rounded-[463.5px] opacity-[0.56] bg-[hsla(196,100%,25%,1)] blur-[148.4px]"></div>

      <motion.nav
        initial={{ opacity: 0, y: -40, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-330 mx-auto px-20 py-6 flex justify-between items-center"
      >
        <a href="/">
          <img src="/logo.svg" alt="Brand Logo" />
        </a>

        <div className="bg-[rgba(237,237,237,0.19)] backdrop-blur-[14px] rounded-[37px] flex justify-center items-center gap-8 font-normal text-[hsla(0,0%,100%,1)] text-base p-1 border-[0.5px] border-white">
          <a className="bg-white font-medium text-[hsla(0,0%,1%,1)] rounded-[34px] px-9.5 py-3" href="/">
            Home
          </a>
          <a className="py-3" href="#about">
            About us
          </a>
          <a className="py-3" href="#services">
            Services
          </a>
          <a className="py-3" href="#news">
            News
          </a>
          <a className="py-3 mr-8" href="#testimonials">
            Testimonials
          </a>
        </div>

        <HoverScale scale={1.08} className="inline-block">
          <a
            className="bg-white text-[hsla(151,61%,11%,1)] py-2.75 px-5 rounded-[10px] border border-[#DEDEDE]"
            href="#"
          >
            Book a Free Appointment
          </a>
        </HoverScale>
      </motion.nav>

      <div className="max-w-330 mx-auto px-20 grid grid-cols-3 gap-28.5">
        <div className="col-span-2 pt-30 pb-51.5 space-y-4">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: (delay = 0) => ({
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
              }),
            }}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="text-[80px] text-[hsla(0,0%,100%,1)] font-medium leading-[110%] tracking-[-4px]"
          >
            Powering the Future through Pure Design.
          </motion.h1>

          <div className="space-y-12">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: (delay = 0) => ({
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
                }),
              }}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="text-[18px] text-[hsla(0,0%,100%,1)] leading-[170%] tracking-[-0.5px]"
            >
              I help renewable energy companies scale by creating high-performance digital interfaces that simplify
              complex energy data and drive global adoption.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: (delay = 0) => ({
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
                }),
              }}
              initial="hidden"
              animate="visible"
              custom={0.45}
            >
              <HoverScale scale={1.08} className="inline-block">
                <a
                  className="rounded-xl px-6 py-3.75 font-medium bg-[hsla(76,86%,57%,1)] text-[hsla(153,62%,10%,1)]"
                  href="#"
                >
                  Let’s Build Together
                </a>
              </HoverScale>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 2, ease: [0.16, 1, 0.3, 1] } },
          }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="col-span-1 pt-62.25"
        >
          <div className="p-4 rounded-xl border border-white/40 bg-white">
            <img className="rounded-lg" src="/solar.png" alt="solar image" />
            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <img src="/business_insider.png" alt="business_insider logo" />
              <img src="/forbes.png" alt="forbes logo" />
            </div>
            <a href="#" className="flex items-center gap-1 justify-end">
              <span className="text-[hsla(151,61%,11%,1)]">Learn more</span>
              <div className="size-8 border-2 border-[#F8F8F8] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                  <path
                    d="M7.54205 14.1423C7.28169 14.4026 7.28169 14.8247 7.54205 15.0851C7.80239 15.3454 8.22453 15.3454 8.48486 15.0851L14.2646 9.30533C14.2925 9.81817 14.2721 10.4468 14.2278 11.0749C14.1823 11.72 14.1135 12.3449 14.0561 12.81C14.0275 13.042 13.966 13.5059 13.9474 13.6387C13.9307 13.976 14.1716 14.2782 14.5128 14.3301C14.8767 14.3853 15.2169 14.1351 15.2724 13.7712C15.2917 13.6325 15.35 13.2134 15.3796 12.9735C15.4387 12.4943 15.5096 11.8447 15.5573 11.1688C15.6047 10.4974 15.6303 9.7798 15.5927 9.17135C15.574 8.86819 15.5389 8.57093 15.4744 8.31095C15.4152 8.07161 15.309 7.76704 15.0845 7.5426L14.9966 7.46393C14.7848 7.29262 14.526 7.20503 14.3166 7.15318C14.0566 7.08869 13.759 7.05314 13.4558 7.03439C12.8474 6.99675 12.1298 7.02247 11.4583 7.06981C10.7824 7.11751 10.1328 7.18842 9.65369 7.24754C9.41373 7.27713 8.99461 7.33545 8.85592 7.35477C8.49207 7.41019 8.24228 7.75004 8.29749 8.11392C8.34932 8.45519 8.65098 8.69642 8.98848 8.6797C8.98848 8.6797 9.19468 8.65303 9.26103 8.64377C9.39378 8.62529 9.58517 8.59965 9.81715 8.57103C10.2822 8.51367 10.9072 8.44482 11.5522 8.39934C12.1803 8.35504 12.809 8.33466 13.3218 8.36252L7.54205 14.1423Z"
                    fill="#141B34"
                  />
                </svg>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="bg-white">
        <div className="max-w-330 mx-auto px-30 py-15 ">
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center gap-20"
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="text-[18px] leading-[170%] tracking-[-0.5px] text-[hsla(151,61%,11%,1)]"
            >
              ADVANCED INNOVATIONS
            </motion.h3>

            <div className="flex gap-2 justify-between">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="flex items-center gap-7.5"
              >
                <span className="leading-[160%] text-[hsla(236,4%,32%,1)]">Average Reduction in Energy Costs</span>
                <span className="text-[80px] leading-[110%] tracking-[-4px] text-[hsla(151,61%,11%,1)]">80%</span>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="flex items-center gap-7.5"
              >
                <span className="leading-[160%] text-[hsla(236,4%,32%,1)]">Years of System Lifespan</span>
                <span className="text-[80px] leading-[110%] tracking-[-4px] text-[hsla(151,61%,11%,1)]">22%</span>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="flex items-center gap-7.5"
              >
                <span className="leading-[160%] text-[hsla(236,4%,32%,1)]">Return on Investment (ROI)</span>
                <span className="text-[80px] leading-[110%] tracking-[-4px] text-[hsla(151,61%,11%,1)]">76%</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
