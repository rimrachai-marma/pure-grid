import React from "react";
import { motion, type Variants } from "framer-motion";

import Heading from "./Heading";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const MaintenanceSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-330 mx-auto px-20 py-15">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-8 grid grid-cols-3 gap-11.5"
        >
          <motion.div variants={fadeUp} className="flex flex-col justify-between gap-8">
            <div className="space-y-5">
              <Heading>Maintenance</Heading>
              <h2 className="font-medium text-[48px] leading-[130%] tracking-[-2px] text-[hsla(151,61%,11%,1)]">
                Worry-free solar upkeep
              </h2>
            </div>
            <p className="text-[24px] font-medium leading-[140%] tracking-[-0.8px] text-[hsla(151,61%,11%,1)]">
              At PureGrid, our engineering focus is on longevity. We combine premium materials with smart tech to ensure
              your energy infrastructure runs at peak performance for decades.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="flex flex-col gap-20">
            <motion.div variants={fadeUp} className="space-y-3">
              <h3 className="text-[24px] font-medium leading-[140%] tracking-[-0.8px] text-[hsla(151,61%,11%,1)]">
                Ruggedized Hardware
              </h3>
              <p className="text-[hsla(236,4%,32%,1)] font-medium leading-[160%]">
                Our panels are engineered to endure extreme environmental stress, significantly lowering the need for
                hardware swaps.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-3">
              <h3 className="text-[24px] font-medium leading-[140%] tracking-[-0.8px] text-[hsla(151,61%,11%,1)]">
                Proactive Health Checks
              </h3>
              <p className="text-[hsla(236,4%,32%,1)] font-medium leading-[160%]">
                We conduct systematic performance audits to keep your output at 100% and resolve minor issues before
                they escalate.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-3">
              <h3 className="text-[24px] font-medium leading-[140%] tracking-[-0.8px] text-[hsla(151,61%,11%,1)]">
                Rapid Response Team
              </h3>
              <p className="text-[hsla(236,4%,32%,1)] font-medium leading-[160%]">
                Should an interruption occur, our technical specialists provide immediate onsite support to restore your
                power flow fast.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 24 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full overflow-hidden rounded-3xl"
          >
            <img
              className="h-full w-full object-cover object-center"
              src="/solar-maintenance.png"
              alt="Solar maintenance"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
