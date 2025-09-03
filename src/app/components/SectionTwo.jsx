import React from 'react'

function SectionTwo({ sectionData }) {
  return (
    <div
      className="flex w-full text-white !p-5 bg-cover h-[100vh]"
      style={{ backgroundImage: `url(${sectionData.img})` }}
    >
      <div className='w-[50%] flex justify-center items-center'>
        <p className='w-35 h-35 rounded-full description border border-[#fff] flex justify-center items-center'>Corperte Video</p>
      </div>
      <div className='w-[30%] flex flex-col justify-center gap-5'>
        <div>
          <h1 className='text-[45px]'>{sectionData.header1}</h1>
          <h1 className='text-[45px]'>{sectionData.header2}</h1>
        </div>
        <div className='flex gap-4 justify-between'>
          <ul>
            {sectionData.content1.map((e, i) => (
              <div className='' key={i}>
                <h1 className='text-[45px]'>{e.value}</h1>
                <p className=''>{e?.label}</p>
                <p className='text-[#b6b6b6]'>{e.des}</p>
                {i == 0 && <hr style={{ color: "white", width: "100%", marginTop: "25px", marginBottom: "10px" }} />}
              </div>
            ))}
          </ul>
          <ul className='max-w-[40%]'>
            {sectionData.content2.map((e, i) => (
              <div className='' key={i}>
                <h1 className='text-[45px]'>{e.value}</h1>
                <p className=''>{e?.label}</p>
                <p className='text-[#b6b6b6]'>{e.des}</p>
                {i == 0 && <hr style={{ color: "white", width: "100%", marginTop: "25px", marginBottom: "10px" }} />}
              </div>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default SectionTwo