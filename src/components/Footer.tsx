import React from "react";
import { HoverScale } from "./animations/HoverScale";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[hsla(153,62%,10%,1)]">
      <div className="max-w-330 mx-auto px-15 py-20 space-y-12.5">
        <div className="flex flex-col gap-7.5 w-full max-w-98.5">
          <a href="/">
            <img src="/logo.svg" alt="Brand Logo" />
          </a>
          <p className="leading-[160%] tracking-[-0.5px] text-[hsla(0,0%,64%,1)]">
            Delivering dependable, custom-engineered power solutions for a sustainable future.
          </p>
        </div>

        <div className="flex justify-between">
          <div className="w-full max-w-140 text-[hsla(0,0%,100%,1)] text-[56px] font-medium leading-[110%] tracking-[-2.5px]">
            Intelligent energy updates.
          </div>
          <div className="space-y-6 w-full max-w-92.5 text-[hsla(0,0%,100%,1)] text-[18px] leading-[170%] tracking-[-0.5px]">
            <p>Connect with PureGrid. Drop us a message below to start your energy transition.</p>
            <form className="flex flex-col gap-2" action="#">
              <input
                className="py-3.25 px-5 rounded-[34px] placeholder:text-[hsla(0,0%,100%,1)]/50 leading-[180%] tracking-[-0.3px] border border-[hsla(0,0%,97%,1)]"
                placeholder="Enter your email here"
                type="email"
              />
              <HoverScale scale={1.08} className="self-start">
                <button className="cursor-pointer rounded-[40px] px-7 font-medium py-2.5 bg-[hsla(76,86%,57%,1)] text-[hsla(153,62%,10%,1)]">
                  Join the Grid
                </button>
              </HoverScale>
            </form>
          </div>
        </div>

        <div className="space-y-7.5">
          <div className="flex items-center gap-5">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  opacity="0.4"
                  d="M13 13.5H17L18 9.5H13V7.5C13 6.47 13 5.5 15 5.5H18V2C18 2 14.943 2 13.643 2C10.928 2 9 3.657 9 6.7V9.5H5V13.5H9V22H13V13.5Z"
                  fill="white"
                />
                <path
                  d="M13 13.5H17L18 9.5H13V7.5C13 6.47 13 5.5 15 5.5H18V2C18 2 14.943 2 13.643 2C10.928 2 9 3.657 9 6.7V9.5H5V13.5H9V22H13V13.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.4" d="M8 3H3L10.5484 13.4516L16 21H21L13.4516 10.5484L8 3Z" fill="white" />
                <path
                  d="M3 21L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516L3 3H8L13.4516 10.5484ZM21 3L13.4516 10.5484"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.4" d="M6.5 9.5H2V22H6.5V9.5Z" fill="white" />
                <path
                  opacity="0.4"
                  d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                  fill="white"
                />
                <path
                  opacity="0.4"
                  d="M14.0001 9.5H9.5V22H14.0001V15.7502C14.0001 14.7837 14.7835 14.0002 15.75 14.0002C16.7165 14.0002 17.5 14.7837 17.5 15.7502V22H21.9987L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174V9.5Z"
                  fill="white"
                />
                <path d="M6.5 9.5H2V22H6.5V9.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
                <path
                  d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0001 9.5H9.5V22H14.0001V15.7502C14.0001 14.7837 14.7835 14.0002 15.75 14.0002C16.7165 14.0002 17.5 14.7837 17.5 15.7502V22H21.9987L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174V9.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  opacity="0.4"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5Z"
                  fill="white"
                />
                <path
                  d="M21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M17.5078 6.5H17.4988"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="border-t border-[hsla(0,0%,97%,1)]/20"></div>

          <div className="flex justify-between gap-6">
            <nav className="flex gap-2">
              <a
                className="px-5 p-0.75 bg-[hsla(0,0%,100%,0.1)] rounded-[20px] text-[hsla(0,0%,100%,1)] leading-[180%] tracking-[-0.3px]"
                href="#"
              >
                About Us
              </a>
              <a
                className="px-5 p-0.75 bg-[hsla(0,0%,100%,0.1)] rounded-[20px] text-[hsla(0,0%,100%,1)] leading-[180%] tracking-[-0.3px]"
                href="#"
              >
                Solution
              </a>
              <a
                className="px-5 p-0.75 bg-[hsla(0,0%,100%,0.1)] rounded-[20px] text-[hsla(0,0%,100%,1)] leading-[180%] tracking-[-0.3px]"
                href="#"
              >
                Latest News
              </a>
              <a
                className="px-5 p-0.75 bg-[hsla(0,0%,100%,0.1)] rounded-[20px] text-[hsla(0,0%,100%,1)] leading-[180%] tracking-[-0.3px]"
                href="#"
              >
                Terms of Service
              </a>
            </nav>

            <p className="text-[hsla(0,0%,100%,1)] leading-[180%] tracking-[-0.3px]">
              &copy; 2026 PureGrid. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
