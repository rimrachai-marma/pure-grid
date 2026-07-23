import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <h2
      className={`text-[18px] inline-block font-medium rounded-[10px] leading-[170%] tracking-[-0.5px] bg-[hsla(156,74%,9%,1)] text-[hsla(76,100%,81%,1)] px-5 py-1 ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
