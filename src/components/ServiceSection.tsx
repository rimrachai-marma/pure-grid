import React from "react";
import { motion } from "framer-motion";

import Heading from "./Heading";
import { TailoredEnergyPlansIcon } from "./icons/TailoredEnergyPlansIcon";
import { AcceleratedDeploymentIcon } from "./icons/AcceleratedDeploymentIcon";
import { IndustryLeadingExpertiseIcon } from "./icons/IndustryLeadingExpertiseIcon";
import { PerformanceMonitoringIcon } from "./icons/PerformanceMonitoringIcon";
import { ScalableArchitectureIcon } from "./icons/ScalableArchitectureIcon";
import { FlexibleFinancingIcon } from "./icons/FlexibleFinancingIcon";

type Service = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: TailoredEnergyPlansIcon,
    title: "Tailored Energy Plans",
    description: "Custom-engineered solar strategies that fit your specific industrial or residential needs.",
  },
  {
    icon: AcceleratedDeploymentIcon,
    title: "Accelerated Deployment",
    description: "A streamlined, hassle-free installation process to get your system online faster.",
  },
  {
    icon: IndustryLeadingExpertiseIcon,
    title: "Industry-Leading Expertise",
    description: "Over 15 years of experience delivering high-performance renewable energy solutions.",
  },
  {
    icon: PerformanceMonitoringIcon,
    title: "24/7 Performance Monitoring",
    description: "Dedicated technical assistance and real-time grid tracking whenever you need it.",
  },
  {
    icon: ScalableArchitectureIcon,
    title: "Scalable Architecture",
    description: "Comprehensive energy coverage that grows alongside your power requirements.",
  },
  {
    icon: FlexibleFinancingIcon,
    title: "Flexible Financing Options",
    description: "Multiple investment plans designed to suit your financial comfort and maximize ROI.",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section id="services">
      <div className="max-w-330 mx-auto p-20 space-y-17.5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <Heading>Our Services</Heading>
          <div className="flex">
            <h2 className="flex: 1 0 0 font-medium text-[48px] leading-[130%] tracking-[-2px] text-[hsla(151,61%,11%,1)]">
              PureGrid is the Preferred Choice for Industry Leaders.
            </h2>
            <p className="w-124.75 text-[18px] leading-[160%] tracking-[-0.5px] text-[hsl(0_0%_35%)]">
              Experience the PureGrid advantage: precision-engineered reliability and unmatched grid resilience for
              total peace of mind.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-3 gap-7.5"
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -8, boxShadow: "0 12px 24px 0 rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="gradient-border rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.04)] p-7.5 flex flex-col gap-12.5"
            >
              <motion.div whileHover={{ rotate: -8, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <Icon />
              </motion.div>
              <div className="space-y-3">
                <h3 className="text-[24px] leading-[130%] tracking-[-1px] text-[hsla(146,100%,1%,1)]">{title}</h3>
                <p className="leading-[160%] tracking-[-0.5px] text-[hsla(0,0%,35%,1)]">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
