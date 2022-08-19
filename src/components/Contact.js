
import Image_1 from '../public/contact.jpeg'
import Youtube from '../components/youtube'
import React from "react"

export default function Contact()
{
    return(
        <div>
            
            <div className="p-10">
            <h1 className="text-3xl">TS ASRAMAM TELANGANA HYDERABAD</h1>
            <hr className="mb-5"/>
            <br/>
            <p className="text-sm">
            </p>

            <div className="proportional-nums font-bold">
                +91 9704424072 <br/>
                +91 7981407323 <br/>
            </div>

            <Youtube/>

            <br/>
            <br/>
            <br/>
            <br/>




            
            <img className="shadow rounded max-w-full h-auto align-middle border-none" src={Image_1} alt=""/>






            </div>
        </div>
    )
}