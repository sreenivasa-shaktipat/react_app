import Link from 'next/link'

export default function Footer()
{
    return(
        <div className='p-10'>
                <div className="flex justify-center">
                    <div className="ml-4 inline-flex text-gray-700 bg-blue-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                        <Link href="/contact">Contact</Link>
                        </div>
                </div>

        </div>
    );
}