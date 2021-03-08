import React from 'react'
import Link from 'next/link'
import Logo from '../../public/images/ruangtambahilmu.svg'
import Dropdown from '../../public/images/down-arrow.svg'
import Bars from '../../public/images/bars.svg'


 function Header() {
    // var hamburger = document.getElementById("hamburgerbtn");
    // var mobileView = document.getElementById("mobileMenu");

    // hamburger.addEventListener('click',function(){
    //     mobileView.classList.toggle('activeMobile')
    // })
    // ShowNavbar=()=>{
    //     const show = document.getElementById("mobileMenu")
    //     show.addEventListener('click',function(){
    //         return show.classList.toggle('activeMobile')
    //     })
    // }
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
                        <li> <Link href="/Training"><a className="px-6 py-3 mx-1 font-medium text-gray-700 hover:text-gray-500 hover:underline">Training</a></Link></li>
                        <li><Link href="/Register"><button className="font-medium text-gray-700 hover:text-gray-500 hover:underline px-6 py-3 mx-1">Register</button></Link></li>
                        <li><Link href="/Login"><button className="border-2 text-gray-700 hover:text-white rounded px-6 py-3 mx-1 masuk">Masuk</button></Link></li>
                    </ul>
                    
                </nav>
            </div>
        </>
    )
}
export default Header;
