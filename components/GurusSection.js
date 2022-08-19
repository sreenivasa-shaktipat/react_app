import Image from 'next/image'
import Image_2 from '../public/2.jpeg'
import Image_3 from '../public/3.jpeg'
import Image_4 from '../public/4.jpeg'
import Image_5 from '../public/5.jpeg'
import Image_6 from '../public/6.jpeg'
import Image_7 from '../public/7.jpeg'
import Image_8 from '../public/8.jpeg'
import Image_9 from '../public/9.jpeg'


export default function GurusSection()
{
    return(
        <div>
        <section className="text-gray-700 body-font border-t border-gray-200">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Shaktipat Guru</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    {""}
                </p>
                </div>
                <div className="flex flex-wrap -m-2">
                <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <p><br/></p>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <Image alt="team" className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0" src={Image_2} />
                    </div>
                </div>
                <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <p><br/></p>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <Image alt="team" className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0  " src={Image_3} />
                    </div>
                </div>
                <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <p><br/></p>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <Image alt="team" className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0  " src={Image_4} />
                    </div>
                </div>
                <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                    <p><br/></p>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">

                    <Image alt="team" className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0  " src={Image_5} />
                    </div>
                    
                </div>
                <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <p><br/></p>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <Image alt="team" className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0  " src={Image_6} />
                    </div>
                </div>
                <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <p><br/></p>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <Image alt="team" className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0  " src={Image_7} />
                    </div>
                </div>
                <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <p><br/></p>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <Image alt="team" className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0  " src={Image_8} />
                    </div>
                </div>
                <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <p><br/></p>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <Image alt="team" className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0  " src={Image_9} />
                    </div>
                </div>

                </div>
            </div>
            </section>

        </div>
    );
}