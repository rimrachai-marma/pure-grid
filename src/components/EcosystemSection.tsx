import { motion } from "framer-motion";

export default function EcosystemSection() {
  return (
    <section className="bg-[hsla(74,100%,97%,1)]">
      <div className="max-w-330 mx-auto px-20">
        <div className="relative">
          <motion.svg
            initial={{ opacity: 0, rotate: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-7 top-18.5"
            xmlns="http://www.w3.org/2000/svg"
            width="356"
            height="356"
            viewBox="0 0 356 356"
            fill="none"
          >
            <path
              d="M356 90.2695V117.747H265.536L264.542 91.1523L91.126 91.042L91.0156 264.627L204.896 264.518L295.139 355.669L90.7949 356L0 265.4V90.7109L90.5742 0H265.536L356 90.2695ZM222.95 222.239L133.271 222.351L133.051 132.783L222.397 132.451L222.95 222.239Z"
              fill="#06291B"
            />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <img
              src="/ecosystem.png"
              alt="Tablet showing a wind and solar farm, held in front of a green field"
              className="w-full object-cover"
            />
            <img aria-hidden src="pure-grid.png" alt="pure-grid" className="absolute left-44.5 bottom-33.5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="absolute bottom-4 -right-10 rounded-3xl border-2 border-[#DDD] bg-white shadow-[4px_40px_8px_0_rgba(0,0,0,0.08)] px-12.5 py-20"
          >
            <div className="w-full max-w-lg">
              <h3 className="font-medium text-[48px] leading-[110%] tracking-[-2.5px] text-[hsl(151_61%_11%)]">
                The advantages of a PureGrid ecosystem
              </h3>
              <p className="mt-5 text-[18px] leading-[170%] tracking-[-0.5px] text-[hsl(236_4%_32%)]">
                At PureGrid, we believe in the sun's infinite potential to revolutionize how we power our lives.
              </p>
            </div>

            <motion.ul
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-10 space-y-4"
            >
              {[
                "Cost Savings",
                "Eco-Friendly",
                "Energy Independence",
                "Low Maintenance",
                "Increased Property Value",
              ].map((item) => (
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  key={item}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsla(76,97%,36%,1)]"
                  >
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 6.2L4.6 8.8L10 3"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                  <span className="font-medium text-[24px] leading-[140%] tracking-[-0.8px] text-[hsl(151_61%_11%)]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
