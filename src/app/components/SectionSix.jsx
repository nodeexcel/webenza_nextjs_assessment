import Image from "next/image";

function SectionSix({ sectionData }) {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full mx-auto px-6 py-16 gap-10">
            <div className="w-full md:w-1/2 flex flex-col gap-4 !pl-10 md:!pl-[45px] space-y-6">
                <h2 className="header">
                    {sectionData.header}
                </h2>
                <p className="description md:w-[78%] w-full">
                    {sectionData.description}
                </p>

                <div className="flex flex-wrap items-center gap-8 pt-6">
                    {sectionData.sponsers.map((e) => (
                        <Image
                            key={e}
                            src={e}
                            alt="Domino's"
                            width={60}
                            height={30}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>
            <div className="w-full md:w-1/2 !md:ml-0 !ml-10">
                <Image
                    src={sectionData.img}
                    alt="Retail spaces"
                    width={900}
                    height={600}
                    className="shadow-lg object-cover"
                />
            </div>
        </section>
    );
}

export default SectionSix
