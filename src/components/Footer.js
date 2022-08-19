import ReactDOM from "react-dom/client";
import React from "react"
import {Link} from 'react-router-dom'

import Contact from './Contact'

export default function Footer()
{
    return(
        <div className='p-10'>
                <div className="flex justify-center">
                    <div className="ml-4 inline-flex text-gray-700 bg-blue-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">


                            <Link to="/contact" className="mr-5 hover:text-gray-900">Contact</Link>


                </div>
            </div>
        </div>
    );
}