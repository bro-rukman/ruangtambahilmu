import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Facebook from '../../public/images/facebook.svg'
import Instagram from '../../public/images/ig.svg'
import Twitter from '../../public/images/twitter.svg'
import Youtube from '../../public/images/youtube.svg'

export default function Footer() {
    const router = useRouter();
    console.log("route",router.query);
    return (
        <>
        <div className="bg-black">

            <div className="container-xs container mx-auto pb-5 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="pt-5">
                        <ul>
                            <li className="text-lg text-white font-medium mb-5">Bantuan</li>
                            <li><Link href="/"><a className="text-white font-md text-sm hover:text-gray-500">Tentang Kami</a></Link></li>
                        </ul>
                    </div>
                    <div className="pt-5">
                        <ul>
                            <li className="text-lg text-white font-medium mb-5">Hubungi Kami</li>
                            <li className="text-white font-md text-sm">info@ruangtambahilmu.co.id</li>
                            <li className="text-white font-md text-sm pt-3">(021) 73245200</li>
                        </ul>
                    </div>
                    <div className="pt-5">
                        <ul>
                            <li className="text-lg text-white font-medium mb-5">Ikuti Kami</li>
                            <div className="flex">
                                <li className="mr-2"><Link href="/"><a>
                                    <Facebook/>
                                </a></Link></li>
                                <li className="mr-2"><Link href="/"><a>
                                    <Instagram/>
                                </a></Link></li>
                                <li className="mr-2"><Link href="/"><a>
                                    <Twitter/>
                                </a></Link></li>
                                <li className="mr-2"><Link href="/"><a>
                                    <Youtube/>
                                </a></Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <p className="text-sm text-white mt-20">@2021. PT. EFSU DIGITAL INDONESIA | Allright Reserved</p>
            </div>
        </div>
        </>
    )
}
