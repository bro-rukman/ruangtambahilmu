import React from 'react'
import Idea from '../../public/images/idea.svg'
// import RandomFile from '../../public/images/randomtough.png'
import Payment from '../../public/images/payment.svg'

export default function Keunggulan() {
    return (
        <>
            <section className="keunggulan mb-8 mt-20">
            <div className="w-auto mb-8">
                <h1 className="text-xl md:text-2xl font-medium md:font-semibold text-gray-700 text-center ">Keunggulan Ruang Tambah Ilmu</h1>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className=" py-4 ">
                        {/* <Idea className="mx-auto mb-2"/> */}
                        <img src="/images/idea.png" alt="" className="mx-auto mb-2"/>
                        <h4 className=" text-lg font-semibold text-gray-700 text-center mb-2">Growth Mindset</h4>
                        <p className="text-sm text-gray-500 text-center">Membantu kamu untuk mengembangkan pola pikir lebih dalam, yang berguna untuk masa depan kamu dalam mencapai kesuksesan.</p>
                    </div>
                    <div className=" py-4 ">
                        {/* <RandomFile className="mx-auto mb-2"/> */}
                        <img src="/images/randomtough.png" alt="keunggulan" className="mx-auto mb-2"/>
                        <h4 className=" text-lg font-semibold text-gray-700 text-center mb-2">Belajar Terstruktur</h4>
                        <p className="text-sm text-gray-500 text-center">Dengan mentor yang telah berpengalaman, menjadikan belajarmu lebih teratur secara konsep</p>
                    </div>
                    <div className=" py-4 ">
                        {/* <Payment className="mx-auto mb-2"/> */}
                        <img src="/images/payment.png" alt="" className="mx-auto mb-2"/>
                        <h4 className=" text-lg font-semibold text-gray-700 text-center mb-2">Biaya Terjangkau</h4>
                        <p className="text-sm text-gray-500 text-center">Biaya terjangkau dengan service terbaik, menjadikan kepuasan terhadap pelajar untuk belajar bersama kami.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
