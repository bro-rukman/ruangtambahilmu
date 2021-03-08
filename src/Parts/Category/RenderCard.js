import React from 'react'
import Link from 'next/link'

export default function RenderCard({item}) {
    console.log('rendercard',item);
    return (
        <>
            <div className="shadow-xl bg-white hover:bg-gray-100 p-4 rounded relative cursor">
                <div className="mx-auto mb-12">
                    {item?.kategori ?? ""}
                </div>
                <p className="text-sm text-gray-500"><span className="font-medium text-gray-500">{item?.total ?? "-"}{" "}</span>{"Course"}</p>
                <Link href="/DetailCategories/[slug]" as={`/DetailCategories/${item.id}`}><a className="link-wrapper"></a></Link>
            </div>
        </>
    )
}
