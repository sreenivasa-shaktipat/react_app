import Image from 'next/image'
import _1 from '../public/books/parashakthi/book.jpg';


export default function Book()
{
    return(
        
        <div>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg">
                            <a href="#">
                                <Image alt="Placeholder" className="block h-auto w-full" src={_1} />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="no-underline hover:underline text-black" href="#">
                                    Parashakthi by T Sreenivasulu <b>Telugu</b>
                                    </a>

                                    <br/>
                                    <br/>
                                        <a href="https://ipfs.io/ipfs/bafybeihzznwloyy3hzksv572s6ji5ffsm57ohywmh724mjlq26z5wrtod4/parashakthi_completeaudio_by_parameshwari.wma" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Audio</a>
                                        <a href="https://github.com/sreenivasa-shaktipat/Data/raw/main/Parasakthi_telugu.pdf" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Book</a>

                                </h1>
                                <p className="text-grey-darker text-sm">
                                    11/1/19
                                </p>
                            </header>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                    <p className="ml-2 text-sm">
                                    T Sreenivasulu
                                    </p>
                                </a>
                                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                    <span className="hidden">Like</span>
                                    <i className="fa fa-heart"></i>
                                </a>
                            </footer>
                        </article>
                    </div>

                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg">
                            <a href="#">
                                <Image alt="Placeholder" className="block h-auto w-full" src={_1} />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="no-underline hover:underline text-black" href="#">
                                    Parashakthi by T Sreenivasulu <b>Hindi</b>
                                    </a>
                                    <br />
                                    <br />
                                    <a href="https://github.com/sreenivasa-shaktipat/Data/raw/main/Parasakthi_Hindi.pdf" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Book</a>

                                </h1>
                                <p className="text-grey-darker text-sm">
                                    11/1/19
                                </p>
                            </header>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                    <p className="ml-2 text-sm">
                                    T Sreenivasulu
                                    </p>
                                </a>
                                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                    <span className="hidden">Like</span>
                                    <i className="fa fa-heart"></i>
                                </a>
                            </footer>
                        </article>
                    </div>
                </div>
            </div>
        </div>

    );
}