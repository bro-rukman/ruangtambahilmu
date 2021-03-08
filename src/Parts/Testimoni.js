import React from 'react'

export default function Testimoni() {
    return (
        <>
         <section className="testimoni mb-8 mt-20">
         <div className="w-auto mb-8">
                <h1 className="text-xl md:text-2xl font-medium md:font-semibold text-gray-700 text-center ">Testimoni</h1>
         </div>    
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             <div className="card shadow-xl p-2">
                 <div className="flex items-center mb-4">
                     <img src="/images/img-1.png" alt="" style={{width:50,height:50}}/>
                     <div className="ml-2">
                         <h5 className="text-gray-700 text-md font-semibold">Letty Mariana</h5>
                         <p className="text-xs text-gray-500">Finance manager</p>
                     </div>
                 </div>
                 <p className="text-xs font-normal text-gray-400">"Di waktu luang aku gunakan untuk belajar bersama ruang ilmu, teknik penyampaian nya sangat bagus dan menyenangkan"</p>
             </div>
             <div className="card shadow-xl p-2">
                 <div className="flex items-center mb-4">
                     <img src="/images/img-2.png" alt="" style={{width:50,height:50}}/>
                     <div className="ml-2">
                         <h5 className="text-gray-700 text-md font-semibold">Christina Jane</h5>
                         <p className="text-xs text-gray-500">Digital Marketing</p>
                     </div>
                 </div>
                 <p className="text-xs font-normal text-gray-400">"Di waktu luang aku gunakan untuk belajar bersama ruang ilmu, teknik penyampaian nya sangat bagus dan menyenangkan"</p>
             </div>
             <div className="card shadow-xl p-2">
                 <div className="flex items-center mb-4">
                     <img src="/images/img-3.png" alt="" style={{width:50,height:50}}/>
                     <div className="ml-2">
                         <h5 className="text-gray-700 text-md font-semibold">James Franklin</h5>
                         <p className="text-xs text-gray-500">Project manager</p>
                     </div>
                 </div>
                 <p className="text-xs font-normal text-gray-400">"Di waktu luang aku gunakan untuk belajar bersama ruang ilmu, teknik penyampaian nya sangat bagus dan menyenangkan"</p>
             </div>
             <div className="card shadow-xl p-2">
                 <div className="flex items-center mb-4">
                     <img src="/images/img-4.png" alt="" style={{width:50,height:50}}/>
                     <div className="ml-2">
                         <h5 className="text-gray-700 text-md font-semibold">Hana</h5>
                         <p className="text-xs text-gray-500">Student</p>
                     </div>
                 </div>
                 <p className="text-xs font-normal text-gray-400">"Di waktu luang aku gunakan untuk belajar bersama ruang ilmu, teknik penyampaian nya sangat bagus dan menyenangkan"</p>
             </div>
         </div>
         </section>   
        </>
    )
}
