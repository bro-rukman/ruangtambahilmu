import React from 'react'
import Link from 'next/link'

export default function ReferalSection() {
    return (
        <>
         <section className="referal container-xs container mx-auto flex items-center justify-center mb-8 mt-20">
            <div className="w-auto text-center">
                <h1 className="text-xl text-white mb-8">Kamu bisa berlangganan tanpa membayar lho,<br/> Yuk cari tahu caranya !</h1>
                <Link href="/"><a className=" px-8 py-3 bg-button text-white text-lg font-semibold">Lihat penawaran</a></Link>
            </div>
         </section>   
        </>
    )
}
