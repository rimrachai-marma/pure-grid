import React from "react";
import { motion } from "framer-motion";

import Heading from "./Heading";

const MaintenanceSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-330 mx-auto px-20 py-15">
        <div className="py-8 grid grid-cols-3 gap-11.5">
          <div className="flex flex-col justify-between gap-8">
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
          </div>
          <div className="flex flex-col gap-20">
            <div className="space-y-3">
              <h3 className="text-[24px] font-medium leading-[140%] tracking-[-0.8px] text-[hsla(151,61%,11%,1)]">
                Ruggedized Hardware
              </h3>
              <p className="text-[hsla(236,4%,32%,1)] font-medium leading-[160%]">
                Our panels are engineered to endure extreme environmental stress, significantly lowering the need for
                hardware swaps.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-[24px] font-medium leading-[140%] tracking-[-0.8px] text-[hsla(151,61%,11%,1)]">
                Proactive Health Checks
              </h3>
              <p className="text-[hsla(236,4%,32%,1)] font-medium leading-[160%]">
                We conduct systematic performance audits to keep your output at 100% and resolve minor issues before
                they escalate.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-[24px] font-medium leading-[140%] tracking-[-0.8px] text-[hsla(151,61%,11%,1)]">
                Rapid Response Team
              </h3>
              <p className="text-[hsla(236,4%,32%,1)] font-medium leading-[160%]">
                Should an interruption occur, our technical specialists provide immediate onsite support to restore your
                power flow fast.
              </p>
            </div>
          </div>
          <motion.div
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
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
