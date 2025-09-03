"use client"

import React, { useEffect, useState } from 'react';
import SectionSix from './SectionSix';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';

function Landing() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchLandingPageData = async () => {
            try {
                const response = await fetch('/landingpagedata.json');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching landing page data:', error);
            }
        };

        fetchLandingPageData();
    }, []);

    return (
        <div className='w-full h-full'>
            {data?.tab1 && <SectionOne sectionData={data.tab1} />}
            {data?.tab2 && <SectionTwo sectionData={data.tab2} />}
            {data?.tab3 && <SectionThree sectionData={data.tab3} />}
            {data?.tab4 && <SectionFour sectionData={data.tab4} />}
            {data?.tab5 && <SectionFive sectionData={data.tab5} />}
            {data?.tab6 && <SectionSix sectionData={data.tab6} />}
        </div>
    );
}

export default Landing;
