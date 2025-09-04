import React from 'react'

function SectionOne({ sectionData }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full mx-auto px-6 py-16 gap-10">

      <div className='h-fit'>
        <img src={sectionData.img} alt='img' className='md:block hidden' style={{ backgroundSize: '28%' }} />
      </div>
      <div className='!pl-10 w-full md:max-w-[75%] flex flex-col gap-4 justify-center'>
        <h1 className='text-[#3E513A] w-full md:max-w-[75%] text-[32px] md:text-[38px]'>{sectionData.header}</h1>
        <p className=' w-full md:max-w-[80%] section1-description' style={{ lineHeight: '170%' }}>{sectionData.description1}</p>
        <p className='w-full md:max-w-[80%] section1-description' style={{ lineHeight: '170%' }}>{sectionData.description2}</p>
      </div>
    </section>
  )
}

export default SectionOne