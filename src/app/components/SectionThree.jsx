import React, { useState } from 'react'

function SectionThree({ sectionData }) {
    const [step, setStep] = useState(0)

    function handleLeft() {
        if (step === 0) {
            setStep(4)
        } else {
            setStep((prev) => prev - 1)
        }
    }
    function handleRight() {
        if (step === 4) {
            setStep(0)
        } else {
            setStep((prev) => prev + 1)
        }
    }
    return (
        <div
            className="flex w-full !p-5 flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${sectionData.img})` }}
        >
            <h1 className='text-center header !w-full'>{sectionData.header}</h1>
            <div className='w-full flex'>
                <div className='md:w-[50%] w-full md:order-1 order-2' style={{ marginLeft: "15px" }}>
                    <div className='max-w-[85%] flex flex-col justify-between h-full gap-3'>
                        <div className='flex flex-col gap-1'>
                            <hr style={{ width: "50%" }} />
                            <h1 className='header !text-[#D1B983]'>{sectionData.content?.[step]?.header}</h1>
                            <hr style={{ width: "50%" }} />
                            <p className='description !text-[#AFAFAF]'>{sectionData.content?.[step]?.description}{" "}{sectionData.content?.[step]?.description2} {" "} {sectionData.content?.[step]?.description3} </p>
                        </div>
                        <div>
                            <span onClick={handleLeft}>left</span> {step + 1}/{sectionData.content.length} <span onClick={handleRight}>Right</span>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-full md:order-2 order-1 md:mb-0 mb-3'>
                    <img src={sectionData.content?.[step]?.img} className='object-cover' />
                </div>
            </div>
        </div>

    )
}

export default SectionThree