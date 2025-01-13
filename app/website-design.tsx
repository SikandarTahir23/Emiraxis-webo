'use client'

import Image from "next/image"

const WebsiteDesign = () => {
    return (   
    <div className="text-white">
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
            <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
                Expert <br /> Event Staffing
            </div>
            <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
                Delivering expert event staffing solutions for your event success
            </p>
        </div>

        {/* Grid with 8 images in 2 rows and 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
            {/* First row */}
            <div>
                <Image
                    width={500}
                    height={500}
                    priority
                    className="h-auto max-w-full rounded-lg"
                    src="/images/staff1.jpg"
                    alt="Staff image 1"
                />
            </div>
            <div>
                <Image
                    width={500}
                    height={500}
                    priority
                    className="h-auto max-w-full rounded-lg"
                    src="/images/staff2.jpg"
                    alt="Staff image 3"
                />
            </div>
            <div>
                <Image
                    width={500}
                    height={500}
                    priority
                    className="h-auto max-w-full rounded-lg"
                    src="/images/staff3.jpg"
                    alt="Staff image 5"
                />
            </div>
            <div>
                <Image
                    width={500}
                    height={500}
                    priority
                    className="h-auto max-w-full rounded-lg"
                    src="/images/staff4.jpg"
                    alt="Staff image 7"
                />
            </div>

            {/* Second row */}
            <div>
                <Image
                    width={500}
                    height={500}
                    priority
                    className="h-auto max-w-full rounded-lg"
                    src="/images/staff5.jpg"
                    alt="Staff image 4"
                />
            </div>
            <div>
                <Image
                    width={500}
                    height={500}
                    priority
                    className="h-auto max-w-full rounded-lg"
                    src="/images/staff7.jpg"
                    alt="Staff image "
                />
            </div>
            <div>
                <Image
                    width={500}
                    height={500}
                    priority
                    className="h-auto max-w-full rounded-lg"
                    src="/images/staff8.jpg"
                    alt="Staff image 8"
                />
            </div>
            <div>
                <Image
                    width={500}
                    height={500}
                    priority
                    className="h-auto max-w-full rounded-lg"
                    src="/images/staff6.jpg"
                    alt="Staff image 8"
                />
            </div>
        </div>
    </div> );
}

export default WebsiteDesign;
