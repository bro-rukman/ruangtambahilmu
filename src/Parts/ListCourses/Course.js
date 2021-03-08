import React from 'react'
import Link from 'next/link'
import RenderItem from './RenderItem'
import Youtube from '../../../public/images/youtube.svg'

export default function Course({data}) {
    console.log('props',data);
    return (
    <>
        <div className="flex justify-between items-start pt-5 mt-8 mb-8">
            <div className="w-auto">
                <h1 className="text-xl md:text-2xl font-medium md:font-semibold text-gray-700 ">Kelas Terbaru</h1>
                <p className=" w-2/3 md:w-full text-sm text-gray-500">Pelajari berbagai kelas gratis dan premium yang dapat kamu akses selamanya</p>
            </div>
            <div className="w-auto">
                <Link href="/allcourse"><a className="text-xs sm:text-sm text-gray-500 hover:underline">Lihat semua</a></Link>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-5">
            {
                data?.length > 0 ? (data.map((item,index)=>{
                    return <RenderItem item={item} key={index}></RenderItem>
                })) : (
                    <div className="w-full text-center py-10">
                        <h1>Item not Founds !</h1>
                    </div>
                )
            }
        </div>
        {/* <div className="card-example">
        <div className="overlay relative ">
            <Youtube className="image"/>
            <div className="middle">
            <h2 className="">hello</h2>
            </div>
        </div>
        <h3>title</h3>
        <Link href="/youtube"><a className="link-wrapper opacity-0">hello</a></Link>
        </div> */}

    </>
    )
}
