
import Link from 'next/link'

export default function NavBar()
{
    return(
        <div>
            <header className="text-gray-700 body-font border-b border-gray-200">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl"></span>
                    <b>Sreenivasa Shaktipat</b>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/">
                        <button className="mr-5 hover:text-gray-900" >Home</button> 
                    </Link>
                    <Link href="/events">
                        <button className="mr-5 hover:text-gray-900" >Events</button>
                    </Link>
                    <Link href="/books">
                        <button className="mr-5 hover:text-gray-900" >Books  </button> 
                    </Link>
                    <Link href="/videos">
                        <button className="mr-5 hover:text-gray-900" >Videos </button> 
                    </Link>
                    <Link href="/qna">
                        <button className="mr-5 hover:text-gray-900" >Q & A</button> 
                    </Link>
                    <Link href="/contact">
                        <button  className="mr-5 hover:text-gray-900" >Contact</button> 
                    </Link>
                    </nav>
                    <Link href="/donation"><button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Donation
                    <svg fill="none" stroke="currentColor"   className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                    </Link>
                </div>
        </header>
        </div>
    );
}