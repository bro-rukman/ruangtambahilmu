import React,{useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../Parts/Header'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import LoginSvg from '../../public/images/loginsvg.svg'
import Facebook from '../../public/images/facebook.svg'
import Google from '../../public/images/Chrome.svg'

export default function Register() {
    const [state, setState] = useState(()=>(""))
    function submitRegister(){
        // 
    }
    console.log('data',state);
    return (
        <>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/images/ruangtambahilmu.svg" />
            </Head>
            <main>
                <section className="container-xs container mx-auto mt-20">
                    <h1 className="text-2xl font-medium text-gray-700 mb-8 text-center">Register</h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <form onSubmit={submitRegister}>
                        <div className="name mb-2">
                            <h5 className="text-sm font-medium mb-2 text-gray-700">Nama Lengkap</h5>
                            <input type="text" onChange={(event)=>setState(event.target.value)} value={state.name} className="text-sm px-3 py-2 border-2 w-full rounded text-gray-500" placeholder="your name" id="name" />
                        </div>
                        <div className="name mb-2">
                            <h5 className="text-sm font-medium mb-2 text-gray-700">Jenis Kelamin</h5>
                            <select name="Jenis Kelamin" id="gender" className="border-2 px-3 py-2 w-full rounded text-gray-500" onChange={(event)=>setState(event.target.value)} value={state.gender}>
                                <option selected className="text-sm text-gray-500 pr-3">Pilih Jenis Kelamin</option>
                                <option value="male">Laki laki</option>
                                <option value="female">Perempuan</option>
                            </select>
                        </div>
                        {/* <div className="name mb-2">
                            <h5 className="text-medium mb-2 text-gray-700">Tanggal Lahir</h5>
                            <DatePicker onChange={handleChange} maxDate={new Date()} value={register.birthday} id="birthday" isClearable showPreviousMonths showYearDropdown placeholderText="Tanggal lahir" className="border-2 px-3 py-2 rounded"/>
                        </div> */}
                        <div className="name mb-2">
                            <h5 className="text-sm font-medium mb-2 text-gray-700">No Handphone</h5>
                            <input type="phone" onChange={(event)=>setState(event.target.value)} value={state.phone} className="text-sm px-3 py-2 border-2 w-full rounded ttext-gray-500" placeholder="No Handphone" id="phone" />
                        </div>
                        <div className="name mb-2">
                            <h5 className="text-sm font-medium mb-2 text-gray-700">Email</h5>
                            <input type="email" onChange={(event)=>setState(event.target.value)} value={state.email} className="text-sm px-3 py-2 border-2 w-full rounded ttext-gray-500" placeholder="Email" id="email" />
                        </div>
                        <div className="name mb-2">
                            <h5 className="text-sm font-medium mb-2 text-gray-700">Password</h5>
                            <input type="password" onChange={(event)=>setState(event.target.value)} value={state.password} className="text-sm px-3 py-2 border-2 w-full rounded ttext-gray-500" placeholder="Password" id="password" />
                        </div>
                        <div className="name mb-2">
                            <h5 className="text-sm font-medium mb-2 text-gray-700">Konfirmasi Password</h5>
                            <input type="password" onChange={(event)=>setState(event.target.value)} value={state.confirmpassword} className=" text-sm px-3 py-2 border-2 w-full rounded ttext-gray-500" placeholder="Konfirmasi Password" id="confirmpassword" />
                        </div>
                        <div className="text-center">
                            <button className="bg-button px-10 text-white hover:text-gray-700 py-2 mt-10 mb-6">Register</button>

                            <p className="text-sm">Sudah punya akun ? <Link href="/Login"><a className="text-blue-700 text-sm">Masuk</a></Link></p>
                        </div>
                    </form>
                    <div className="mx-auto my-auto hidden lg:block">
                        <LoginSvg/>
                    </div>
                    </div>
                </section>
            </main>
        </>
    )
}
