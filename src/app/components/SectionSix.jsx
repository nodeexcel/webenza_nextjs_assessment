import React from 'react'

function SectionSix({ sectionData }) {
    console.log(sectionData)
    return (
        <div className='flex w-full !p-5 md:flex-row flex-col'>
            <div className='md:w-[50%] w-full md:order-1 order-2' style={{ marginLeft: "15px" }}>
                <div className='md:w-[85%] w-full flex flex-col gap-3'>
                    <h1 className='header'>{sectionData?.header}</h1>
                    <p className='hospilaity_retai'>{sectionData?.description}</p>
                    <div>
                        <ul className='flex gap-5 flex-wrap w-full'>
                            {sectionData.sponsers.map((e) =>
                                <div className='w-[26%] flex' key={e}>
                                    <img src={e} alt='image' />
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:w-[50%] w-full md:order-2 order-1 md:mb-0 mb-3'>
                <img src={sectionData.img} className='object-cover' />
            </div>
        </div>
    )
}

export default SectionSix