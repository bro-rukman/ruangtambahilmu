import React from 'react'
import Link from 'next/link'
import RenderMember from './RenderMember'

export default function Berlangganan({data}) {
    console.log('langganan',data);
    const detailBerlangganan=()=>{
        return 0;
    }
    const DataMember=[
        {
            title : "FREE PAKET",
            description : "1 VIDEO / hari",
            harga : 0,
            benefit : [
                {
                    detail : "Free Video pertama perhari "
                }
            ]
        },
        {
            title : "SILVER",
            description : "1 KELAS / bulan",
            harga : 15000,
            benefit :[
                {
                    detail : "Akses kelas 1 kali/ hari"
                },
                {
                    detail : "Mentor yang telah berpengalaman dibidangnya"
                },
                {
                    detail : "Forum Diskusi"
                },
                {
                    detail : "Update kelas terbaru"
                },
            ]
        },
        {
            title : "DIAMOND",
            description : "1 KELAS / hari (Max 20 KELAS / bulan)",
            harga : 20000
        },
        {
            title : "PLATINUM",
            description : "5 KELAS / hari (Max 50 KELAS /bulan)",
            harga : 50000
        },
        {
            title : "URANIUM",
            description : "10 KELAS / hari (Max 200 KELAS /bulan)",
            harga : 200000
        },
        {
            title : "TITANIUM",
            description : "30 KELAS / hari (Max 600 KELAS /bulan)",
            harga : 500000
        },
        {
            title : "PLUTONIUM",
            description : "Unlimited KELAS",
            harga : 800000
        },
    ]
    return (
        <>
        <section className="langganan mb-8 mt-20">
            <div className="w-auto">
                <hr/>
                <h1 className="text-gray-700 text-xl md:text-2xl font-medium md:font-semibold mt-3 mb-1">Paket Berlangganan Pengembangan Diri Berkesinambungan</h1>
                <p className="text-sm text-gray-600 mb-8">Dapatkan lebih banyak kelas yang bisa kamu akses sesuai keinginanmu</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    DataMember?.length >0 ? (DataMember.map((item,index)=>{
                        return <RenderMember item={item} key={index}></RenderMember>
                    })) : (
                        <div className="w-full text-center py-10">
                            <h2>No items Founds !</h2>
                        </div>
                    )
                }
            </div>
        </section>
            
        </>
    )
}

