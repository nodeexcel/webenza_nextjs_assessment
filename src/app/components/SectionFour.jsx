import React from 'react'

function SectionFour({ sectionData }) {
    return (
        <div className='flex flex-col gap-3 w-full !p-5'>
            <h1 className='header !w-full text-center'>{sectionData.header}</h1>
            <div className='md:flex hidden gap-[1px] !mx-auto'>
                <div className='flex flex-col gap-[1px]'>
                    <ul className='flex gap-[1px]'>
                        {sectionData.leftSectionImgs.slice(0, 3).map((e) => (
                            <div key={e}>
                                <img src={e} alt='img' className='object-cover' />
                            </div>
                        ))}
                    </ul>
                    <ul className='flex gap-[1px]'>
                        {sectionData.leftSectionImgs.slice(3).map((e) => (
                            <div key={e}>
                                <img src={e} alt='img' className='object-cover' />
                            </div>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col gap-[1px]'>
                    <ul className='flex gap-[1px]'>
                        {sectionData.rightSectionImgs.slice(0, 1).map((e) => (
                            <div key={e}>
                                <img src={e} alt='img' className='object-cover' />
                            </div>
                        ))}
                    </ul>
                    <div className='flex gap-[1px]'>
                        <ul className='flex gap-[1px]'>
                            {sectionData.rightSectionImgs.slice(1, 2).map((e) => (
                                <div key={e}>
                                    <img src={e} alt='img' className='object-cover' />
                                </div>
                            ))}
                        </ul>
                        <ul className='flex flex-col gap-[1px]'>
                            {sectionData.rightSectionImgs.slice(2).map((e) => (
                                <div key={e}>
                                    <img src={e} alt='img' className='object-cover' />
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:hidden flex'>
                <ul className='flex flex-wrap w-full gap-[1px]'>
                    {sectionData.mobileSectionImg.map((e, i) => (
                        <div key={i}>
                            <img src={e} alt='img' className='object-cover w-full' />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SectionFour