import { useState } from "react";
import home_gurus_I from '../public/home-gurus.jpeg'
import React from "react"


export default function Shaktipat()
{
    const [gettext, setText] = useState("A powerful yogi awakens the aspirant’s Kundalini by a transfer of his or her energy to the aspirant. This process, known as Shaktipat, activates the dormant Kundalini and is like lighting a candle with one that is already lit and glowing. Shakti means power or energy in Sanskrit, and pat means transfer. Thus Shaktipat is transfer of energy. A powerful yogi can transmit energy to an aspirant and awaken the Kundalini. This is accomplished in one of four ways: by touch, gaze, sound or thought.");

    return(
        <div>
            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Shaktipat</h1>
                    <p className="mb-8 leading-relaxed text-justify	">
                        {gettext}
                    </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={home_gurus_I} />
                    </div>
                </div>
            </section>

        </div>
    );
}