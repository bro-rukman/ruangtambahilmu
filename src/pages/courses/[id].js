import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from 'src/Parts/Header'
import courses from 'src/constant/api/courses'
import Youtube from 'react-youtube'
import Check from '../../../public/images/check-circle.svg'
import Footer from 'src/Parts/Footer'

function DetailCourse({data}) {
    const User=[
            {
                review :[
                    {
                        userId : 1,
                        name : "Endang Rukmana1",
                        title: "Software Engineer",
                        ulasan : "Kelas nya menarik dan mentornya sangat detail dalam menjelaskan"
                    },
                    {
                        userId : 2,
                        name : "Endang Rukmana2",
                        title: "Software Engineer",
                        ulasan : "Kelas nya menarik dan mentornya sangat detail dalam menjelaskan"
                    },
                    {
                        userId : 3,
                        name : "Endang Rukmana3",
                        title: "Software Engineer",
                        ulasan : "Kelas nya menarik dan mentornya sangat detail dalam menjelaskan"
                    },
                ]
            },
            {
                benefit : [
                    {
                        detail  : "Belajar Fundamental Javascript"
                    },
                    {
                        detail  : "Belajar OOP (Object Oriented Programming"
                    },
                    {
                        detail  : "Membuat Project sederhana"
                    }
                ]
            }
    ]
    console.log('id',data);
    return (
        <>
        <Head>
            <title>Detail</title>
            <link rel="icon" href="/images/ruangtambahilmu.svg" />
        </Head>
        <Header/>
    <div className="container-xs container mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="col-span-2">
            {
            data?.chapters?.[0]?.lessons?.[0]?.video && 
            <div className="video-wraper p-2">
                <Youtube
                    videoId={data?.chapters?.[0]?.lessons?.[0]?.video} 
                    id={data?.chapters?.[0]?.lessons?.[0]?.video} 
                    opts={{
                        playerVars:{
                            loop:1,
                            mute : 1,
                            autoplay : 1,
                            controls : 0,
                            showinfo : 0
                        }
                    }}
                    onEnd={(event)=>{
                        event.target.playVideo()
                    }}
                />
            <Link href="/Checkout"><button className="absolute-center px-6 py-2 bg-button text-gray-700 hover:text-white rounded">Lihat Video</button></Link>
            {/* <Link href="/Checkout/[slug]" as={`/Checkout/${item.id}`}><button className="absolute-center px-6 py-2 bg-button text-white rounded">Get Premium</button></Link> */}
            </div>
            }
            <div className=" items-center mt-2">
                    <div className="text-lg text-gray-700 font-medium mb-2">{data?.name ?? "no data"}</div>
                    <div className="text-sm font-normal text-gray-500 mb-2">{data?.mentor?.name ?? "no data"}</div>
                    <div className="text-sm mb-2 text-gray-500">{data?.level ?? "Title"}</div>
                    <button className="px-12 py-2 rounded mt-2 bg-button text-gray-700 hover:text-white uppercase font-bold">Beli</button>
            </div>
            </div>
            <div className="p-2 col-span-1">
                <h1>list video</h1>
            </div>
        </div>
            <hr/>
        <div className=" grid grid-cols-1 lg:grid-cols-2 mt-8 mb-8 gap-4">
            <div>
                <h4 className="mb-2 text-xl text-gray-700 font-semibold">Deskripsi</h4>
                <p className="text-sm overflow-auto text-justify rounded text-gray-500" style={{height:300}}>{data?.description ?? "No description"}</p> 
            </div>
            <div className="mx-4">
                <h4 className="mb-2 text-xl text-gray-700 font-semibold">Ulasan</h4>
                <div className="text-sm overflow-auto rounded" style={{height:300}}>
                {
                    User?.length>0 ? (User?.map((item,index)=>{
                        return(
                            <div item={item} key={index}>
                                        <div className="mb-1 text-md text-gray-700">{item?.review?.length > 0 ? (item?.review?.map((item,index)=>{
                                            return (
                                                <div key={index} item={item}>
                                                    <div className="flex mt-4">
                                                    <div>
                                                        <img src="/images/img-1.png" alt="image-user" className="mb-4 mr-4" style={{width:40,height:40}}/>
                                                    </div>
                                                    <div>
                                                        <div className="text-gray-700 text-sm">{item.name}</div>
                                                        <div className="text-gray-500 text-sm mb-2">{item.title}</div>
                                                    </div>
                                                    </div>
                                                    <div className="text-gray-500 text-sm mb-2">{item.ulasan}</div>
                                                    <hr/>
                                                </div>
                                            )
                                        })): (
                                            <div>{""}</div>
                                        )}</div>
                            </div>
                        )
                })) : (
                    <div className="w-full py-10 text-md text-center ">Item not found</div>
                )}
                </div> 
            </div>
        </div>
            <h2 className="my-8 text-xl text-gray-700 font-semibold">Materi yang akan dipelajari</h2>
            <div>
                { User?.length>0 ? (User?.map((item,index)=>{
                    return(
                        <div item={item} key={index}>
                                    <div className="mb-1 text-md text-gray-700">{item?.benefit?.length > 0 ? (item?.benefit?.map((item,index)=>{
                                        return (
                                            <div key={index} item={item}>
                                                <div className="flex items-center mt-2">
                                                    <Check/>
                                                <div>
                                                    <div className="text-gray-700 text-sm ml-2">{item?.detail ?? "Benefit"}</div>
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    })): (
                                        <div>{""}</div>
                                    )}</div>
                                </div>
                    )
            })) : (
                <div className="w-full py-10 text-md text-center ">Item not found</div>
            )}
        </div>
        <div className="w-auto mt-8">
            <h1 className="text-xl md:text-2xl font-medium md:font-semibold text-gray-700 ">Kelas Serupa</h1>
            <p className=" w-2/3 md:w-full text-sm text-gray-500">Pelajari lebih banyak materi yang berhubungan dengan minatmu</p>
        </div>
        </div>
        <Footer/>
        </>
    )
}
DetailCourse.getInitialProps=async(props)=>{
    const {id} = props.query;
    try {
        const data = await courses.details(id)
        return {data};
    } catch (error) {
        return error
    }
}
export default DetailCourse;
