import React, { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function SectionTwo({ sectionData }) {
  const [isVideo, setVideo] = useState(false);

  return (
    <section
      className="flex flex-col md:flex-row w-full text-white bg-cover bg-center h-[100vh] px-6 py-10"
      style={{ backgroundImage: `url(${sectionData.img})` }}
    >
      {isVideo && (
        <div className="w-full h-full flex justify-center items-center z-50">
          <div className="relative w-full h-full aspect-video">
            <button
              onClick={() => setVideo(false)}
              className="absolute top-3 right-3 cursor-pointer hover:text-gray-200 text-white text-3xl"
            >
              <IoClose />
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src={sectionData.video}
              title="Corporate Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
      {!isVideo && (
        <>
          <div className="w-full h-[50%] md:h-full md:w-[50%] flex justify-center items-center order-2 md:order-1 mt-8 md:mt-0">
            <button
              className="w-40 h-40 rounded-full border-4 border-white flex flex-col justify-center items-center text-white transition hover:bg-white hover:text-black"
              onClick={() => setVideo(true)}
            >
              <IoPlayOutline size={36} />
              <span className="mt-2 text-sm">Corporate Video</span>
            </button>
          </div>
          <div className="w-full md:w-[50%] h-[50%] md:h-full flex flex-col md:items-start items-center justify-center gap-10 order-1 md:order-2">
            <div>
              <h1 className="corporate-header">
                {sectionData.header1} <br /> {sectionData.header2}
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-[60%]">
              {sectionData.content1.map((item, i) => (
                <div key={`c1-${i}`}>
                  <h2 className="corporate-content-value">{item.value}</h2>
                  {item.label && (
                    <p className="corporate-content-label">{item.label}</p>
                  )}
                  {item.des && (
                    <p className="corporate-content-des">{item.des}</p>
                  )}
                  <hr className="mt-3 opacity-40" />
                </div>
              ))}

              {sectionData.content2.map((item, i) => (
                <div key={`c2-${i}`}>
                  <h2 className="corporate-content-value">{item.value}</h2>
                  {item.label && (
                    <p className="corporate-content-label">{item.label}</p>
                  )}
                  {item.des && (
                    <p className="corporate-content-des">{item.des}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default SectionTwo;
