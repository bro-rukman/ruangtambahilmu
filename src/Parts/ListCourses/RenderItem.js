import React from 'react'
import Link from 'next/link'
import Play from '../../../public/images/play.svg'
import {formatNumber} from '../../Config/FormatNumber'

export default function RenderItem({item}) {
console.log('render',item);
    return (
        <>
                <div className="item shadow-lg">
                    <figure className="item-image cursor-pointer">
                        <img src={item?.thumbnail ?? ""} alt={item?.name ?? "Info"} className="image-img"/>
                        <div className="btn-middle">
                            <Play/>
                        </div>
                    </figure>
                    <div className="item-meta px-3">
                    <Link href="/courses/[slug]" as={`/courses/${item.id}`}><a><h4 className="text-md text-gray-700 pt-2 font-medium hover:text-gray-600 hover:underline">{item?.name ?? "Course name"}</h4></a></Link>
                        <h6 className="text-sm font-normal text-gray-600">{item?.level ?? "Level name"}</h6>
                        <div className="flex justify-between items-center mb-2">
                            <h5 className="text-sm text-gray-800 pt-2 font-semibold">Rp{" "}{formatNumber(item?.price ?? "price")}{",-"} </h5>
                            <span className=" text-sm px-2 rounded bg-indigo-200">{item?.type ?? "Type"}</span>
                        </div>
                    </div>
                </div>
        </>
    )
}
