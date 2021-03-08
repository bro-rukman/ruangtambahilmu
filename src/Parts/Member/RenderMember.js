import React from 'react'
import Link from 'next/link'
import {formatNumber} from '../../Config/FormatNumber'

export default function RenderMember({item}) {
    return (
        <div>
            <div className="shadow-xl bg-black hover:bg-gray-600 rounded relative cursor p-3" style={{height:150}}>
                <h1 className="mb-8 text-sm md:text-lg  lg:text-xl font-semibold font-playfair lg:font-bold font-gold hover:text-white">{item?.title ?? "title"}</h1>
                <p className="text-sm text-white">{item?.detail ?? "description"}</p>
                <h4 className=" text-xl font-bold font-gold">Rp {formatNumber(item?.price ?? "harga")}</h4>
                <Link href="/DetailMember/[slug]" as={`DetailMember/${item.id}`}><a className="link-wrapper"></a></Link>
            </div>
        </div>
    )
}
