import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from './Contact'
import React from "react"

import HomePage_P_I from '../public/home-kundalini-p.jpg'


export default function HomepageSectionA()
{
    const [gettext, setText] = useState("Kundalini is the ultimate life force. Creative power, divine feminine energy. Put simply, it is our “inner fire”. So simple, and yet so abstract. Once activated, this energy is felt like liquid fire: electric, timeless, paralyzing.When we activate this energy, it flows within us resembling the wavy shape of a serpent: curving from the base of the spine, into the gut, then into the heart and into the head.As the energy flows through this “pipe”, it goes through all of our chakras, giving each of them a “boost” as the energy activates them (both kundalini and chakras live in the subtle body), all the way to our head, the crown chakra. It also passes through our nadis (energy “pipes” in our bodies that allow the energy to flow). The result is an expanded state of consciousness.");



    return(
        <div>
            
            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Kundalini</h1>
                    <p className="mb-8 leading-relaxed text-justify">
                        {gettext}
                    </p>
                    <div className="flex justify-center">
                       
                    </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={HomePage_P_I} />
                    </div>
                </div>
            </section>



        </div>
    );
}