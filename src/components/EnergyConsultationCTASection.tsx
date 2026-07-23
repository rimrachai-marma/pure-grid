import React from "react";
import { motion } from "framer-motion";

import { HoverScale } from "./animations/HoverScale";

const EnergyConsultationCTASection: React.FC = () => (
  <section className="max-w-330 mx-auto px-20">
    <div className="grid grid-cols-2 bg-[url('/environmental-engineers-working-together.png')] bg-cover bg-center rounded-3xl p-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="p-8 bg-[hsla(0,0%,100%,1)] rounded-2xl flex flex-col gap-10"
      >
        <div className="space-y-5 text-center">
          <h3 className="text-[48px] font-medium leading-[110%] tracking-[-2.5px] text-[hsla(151,61%,11%,1)]">
            Future-proof your energy ecosystem
          </h3>
          <p className="text-[18px] leading-[130%] tracking-[-0.5px] text-[hsla(236,4%,32%,1)]">
            Transition to a high-efficiency PureGrid system and unlock immediate operational savings. Schedule your
            strategic consultation today.
          </p>
        </div>
        <HoverScale scale={1.08} className="self-center">
          <button className="rounded-[40px] cursor-pointer px-7 font-medium py-2.5 bg-[hsla(76,86%,57%,1)] text-[hsla(153,62%,10%,1)]">
            Get Start
          </button>
        </HoverScale>
      </motion.div>
    </div>
  </section>
);

export default EnergyConsultationCTASection;
