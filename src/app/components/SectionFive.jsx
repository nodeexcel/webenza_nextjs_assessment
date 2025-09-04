import Image from "next/image";

function SectionFive({ sectionData }) {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between w-full mx-auto px-6 py-16 gap-10">
            <div className="w-full md:w-1/2 !md:mr-0 !mr-10">
                <Image
                    src={sectionData.img}
                    alt="Hospitality building"
                    width={900}
                    height={600}
                    className="shadow-lg object-cover"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4 space-y-6 !pl-10 md:!pl-0">
                <h2 className="header">
                    {sectionData.header}
                </h2>
                <p className="description md:w-[78%] w-full">
                    {sectionData.description}
                </p>
                <div className="flex items-center gap-10 pt-4">
                    {sectionData.sponsers.map((e) => (
                        <Image
                            key={e}
                            src={e}
                            alt="img"
                            width={100}
                            height={30}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SectionFive
