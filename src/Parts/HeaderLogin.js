import React from 'react'
import Link from 'next/link'
import Logo from '../../public/images/ruangtambahilmu.svg'
import Bars from '../../public/images/bars.svg'

export default function HeaderLogin() {
    return (
        <>
            <div class="container-xs container mx-auto h-16">
                <nav className="flex md:justify-between items-center h-full">
                    <div className=" container-xs container mx-auto flex justify-between items-center p-0">
                    <a href="/" className="lg:block"><Logo/></a>
                    <div id="hamburgerbtn" className="lg:hidden cursor-pointer">
                        <Bars/>
                    </div>
                    </div>
                    <ul className="hidden lg:flex justify-between items-center" id="mobileMenu">
                        <li> <Link href="/"><a className="px-6 py-3 mx-1 font-medium text-gray-700 hover:text-gray-500 hover:underline">Berlangganan</a></Link></li>
                        <div className="dropdown">
                            <li> <Link href="#"><a className="px-6 py-3 mx-1 font-medium text-gray-700 hover:text-gray-500 hover:underline">Kategori</a></Link></li>
                                <div className="dropdown-content shadow-lg py-6 bg-white">
                                    <li><Link href="/DetailCategories"><a className="py-3 px-6 font-medium text-gray-700 hover:text-gray-500 hover:underline">Formal</a></Link></li>
                                    <li><Link href="/DetailCategories"><a className="py-3 px-6 font-medium text-gray-700 hover:text-gray-500 hover:underline">Informal</a></Link></li>
                                    <li><Link href="/DetailCategories"><a className="py-3 px-6 font-medium text-gray-700 hover:text-gray-500 hover:underline">Soft Skill</a></Link></li>
                                    <li><Link href="/DetailCategories"><a className="py-3 px-6 font-medium text-gray-700 hover:text-gray-500 hover:underline">Hard Skill</a></Link></li>
                                </div>
                        </div>
                        <li> <Link href="/Zoom"><a className="px-6 py-3 mx-1 font-medium text-gray-700 hover:text-gray-500 hover:underline">Zoom</a></Link></li>
                        <li> <Link href="/Offair"><a className="px-6 py-3 mx-1 font-medium text-gray-700 hover:text-gray-500 hover:underline">OffAir</a></Link></li>
                        <li> <Link href="/Training"><a className="px-6 py-3 mr-8 font-medium text-gray-700 hover:text-gray-500 hover:underline">Training</a></Link></li>
                        <div className="dropdown">
                            <li><Link href="/Register"><a className="font-medium text-gray-700 hover:text-gray-500 pl-20 mx-1">
                                <img src="/images/img-2.png" alt="" style={{width:40,height:40}}/>
                            </a></Link></li>
                            <div className="dropdown-content bg-white shadow-xl" style={{width:150}}>
                                <li><Link href="#"><a className="py-3 px-6 font-medium text-gray-700 hover:text-gray-500 hover:underline">Kelas saya</a></Link></li>
                                <li><Link href="#"><a className="py-3 px-6 font-medium text-gray-700 hover:text-gray-500 hover:underline">Log out</a></Link></li>
                            </div>
                        </div>
                    </ul>
                    
                </nav>
            </div>
        </>
    )
}
