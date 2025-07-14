import React from 'react'
import Link from 'next/link'

type FeatureCardProps = {
    FeatureName: string,
    FeatureDescription1: string,
    FeatureDescription2: string,
    FeatureGoToButton: string,
    FeatureImg:string,
    FeatureLink:string
}

function FeatureCard({FeatureName,FeatureDescription1,FeatureDescription2,FeatureGoToButton,FeatureImg,FeatureLink}:FeatureCardProps) {
    return (
        <>
                <div className='bg-gray-100 rounded-lg flex justify-between items-center p-[3vw] h-[40vh] w-[90vw] lg:w-[60vw] transition-transform duration-300 ease-in hover:scale-105' >
                    <span>
                        <h1 className='text-base sm:text-sm md:text-md lg:text-2xl font-bold '>{FeatureName}</h1>
                        <h4 className='text-sm sm:text-sm md:text-md lg:text-2xl font-bold'>{FeatureDescription1}</h4>
                        <h5 className='text-sm sm:text-base md:text-md lg:text-md'>{FeatureDescription2}</h5>
                        <button className='bg-blue-600 rounded text-white text-base cursor-pointer my-[3vh] p-[.5vw] '><Link href={FeatureLink}>Go to {FeatureGoToButton}</Link></button>
                    </span>
                    <img src={FeatureImg} alt="" className='h-[30vh] w-[40vw]' />
                </div>

        </>
    )
}

export default FeatureCard