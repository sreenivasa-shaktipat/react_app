import Image_2 from '../public/2.jpeg'
import Image_3 from '../public/3.jpeg'
import Image_4 from '../public/4.jpeg'
import Image_5 from '../public/5.jpeg'
import Image_6 from '../public/6.jpeg'
import Image_7 from '../public/7.jpeg'
import Image_8 from '../public/8.jpeg'
import Image_9 from '../public/9.jpeg'
import React from "react"


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

                <div className="container mx-auto px-4"> 
            
                <div className='p-20'>
                <section className="pt-8 px-4">
                  <div className="flex flex-wrap -mx-4">
                    <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src={Image_2} alt=""/></div>
                    <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src={Image_3} alt=""/></div>
                    <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src={Image_4} alt=""/></div>
                    <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src={Image_5} alt=""/></div>
                    <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src={Image_6} alt=""/></div>
                    <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src={Image_7} alt=""/></div>
                    <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src={Image_8} alt=""/></div>
                    <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src={Image_9} alt=""/></div>

                  </div>
                </section>
                </div>
               
              </div>























            </div>
            </section>

        </div>
    );
}