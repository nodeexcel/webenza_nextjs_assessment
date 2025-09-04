import React, { useState } from "react";
import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";



function SectionThree({ sectionData }) {
  const [step, setStep] = useState(0);

  const totalSteps = sectionData.content.length;

  function handleLeft() {
    setStep((prev) => (prev === 0 ? totalSteps - 1 : prev - 1));
  }

  function handleRight() {
    setStep((prev) => (prev === totalSteps - 1 ? 0 : prev + 1));
  }

  return (
    <section
      className="flex w-full flex-col gap-10 h-full bg-cover bg-center px-6 py-12"
      style={{ backgroundImage: `url(${sectionData.img})` }}
    >
      <h1 className="header md:block hidden text-center">
        {sectionData.header}
      </h1>
      <h1 className="header block md:hidden !pl-5">
        What’s <span className="text-[#CDB47A]">Happening</span> at Bagmane
      </h1>

      <div className="w-full flex flex-col md:flex-row h-full gap-8">
        <div className="w-full md:w-1/2 h-full">
          <div className="flex flex-col justify-between !pl-10 md:!pl-[45px] h-full gap-6">
            <div className="flex flex-col gap-4 md:w-[78%] w-full">
              <hr className="md:w-1/2 w-full" />
              <h2 className="caurosel-header">
                {sectionData.content?.[step]?.header}
              </h2>
              <hr className="md:w-1/2 w-full border-1" />
              <p className="description">
                {sectionData.content?.[step]?.description}{" "}
                {sectionData.content?.[step]?.description2}{" "}
                {sectionData.content?.[step]?.description3}
              </p>
            </div>
            <div className="md:flex hidden items-center gap-4 text-[#51634E] mt-4">
              <button
                onClick={handleLeft}
                className="w-8 h-8 rounded-full cursor-pointer border-[1.5px] flex items-center justify-center border-[#51634E] transition"
              >
                <GoArrowLeft size={20} />
              </button>
              <span className="description">
                {step + 1}{" "}/{" "}{totalSteps}
              </span>
              <button
                onClick={handleRight}
                className="w-8 h-8 rounded-full cursor-pointer border-[1.5px] flex items-center justify-center border-[#51634E] transition"
              >
                <GoArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 !px-5 md:px-0">
          <Image
            src={sectionData.content?.[step]?.img}
            alt={sectionData.content?.[step]?.header || "Slide image"}
            width={800}
            height={500}
            className="object-cover w-full h-auto"
          />
          <div className="flex md:hidden justify-center items-center gap-4 text-[#51634E] !mt-4">
            <button
              onClick={handleLeft}
              className="w-8 h-8 rounded-full cursor-pointer border-[1.5px] flex items-center justify-center border-[#51634E] transition"
            >
              <GoArrowLeft size={20} />
            </button>
            <button
              onClick={handleRight}
              className="w-8 h-8 rounded-full cursor-pointer border-[1.5px] flex items-center justify-center border-[#51634E] transition"
            >
              <GoArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
