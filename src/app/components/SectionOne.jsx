import React from 'react'

function SectionOne({ sectionData }) {
  return (
    <div
      className="flex w-full text-[#C0A177]"
    >
      <div className='h-fit'>
        <img src={sectionData.img} alt='img' className='md:block hidden' style={{ backgroundSize: '28%' }} />
      </div>
      <div className='!pl-10 w-full md:max-w-[75%] flex flex-col gap-4 justify-center'>
        <h1 className='text-[#3E513A] w-full md:max-w-[75%] text-[32px] md:text-[38px]'>{sectionData.header}</h1>
        <p className='text-[18px] w-full md:max-w-[80%] md:text-[22px] description !text-[#c0a177]' style={{ lineHeight: '170%' }}>{sectionData.description1}</p>
        <p className='text-[18px] w-full md:max-w-[80%] md:text-[22px] description !text-[#c0a177]' style={{ lineHeight: '170%' }}>{sectionData.description2}</p>
      </div>
    </div>
  )
}

export default SectionOne