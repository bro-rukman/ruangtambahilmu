import React,{useState} from 'react'

export default function Hero() {
    const [state, setstate] = useState(()=> (""));
    function submit(){
        window.open(`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register?email=${state}`);
    }
    return (
        <div className="header-clipping mb-10">
            <div className="container-xs container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 flex justify-between items-center pt-12 mb-12">
                    <div className="pt-20">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Mari Tingkatkan Wawasan, Pengetahuan, Keahlian dan Keterampilan kita  <br/> Bersama dalam <span className="text-2xl text-gray-700">Ruang</span> Tambah Ilmu </h1>
                        <p className="text-gray-500 text-lg mb-8">Lakukan pembelajaran bersama Guru, Dosen, Pembimbing, Coach, Motivator dan Mentor yang berpengalaman !</p>
                        <form onSubmit={submit} className="pt-5">
                            <input className="bg-white focus:outline-none border-2 px-6 py-3 w-1/2 " onChange={(event) => setstate(event.target.value)} type="text" value={state} placeholder="Email address" />
                            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white ml-3">Submit</button>
                        </form>
                    </div>
                    <div className=" hidden lg:block ml-24 relative ">
                        <div className="relative border-gray-500 border-4 pt-5 pl-20 rounded " style={{width :330, height: 370}}>
                            <div className="absolute w-full h-full pt-5 -ml-7" style={{width:330, height:220}}>
                                <img className="shadow-xl rounded" src="/images/hero.jpg" alt="img-hero"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
