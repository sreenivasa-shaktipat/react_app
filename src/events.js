import NavBar from './components/NavBar'
import Event1ImageGrid from './components/Event1ImageGrid'
import DividePage from './components/DividePage'
import Footer from './components/Footer'
import React from "react"


export default function Events()
{
    return(
        <div>
            <NavBar />
            <Event1ImageGrid />
            <DividePage />
            <Footer />

        </div>
    );
}