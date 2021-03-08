import React,{useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Login() {
    const [state, setState] = useState(()=>(""))
    console.log(state);
    function submitLogin() {
        // 
    }
    return (
        <>
        <Head>
            <title>Login</title>
            <link rel="icon" href="/images/ruangtambahilmu.svg" />
        </Head>
            <section className="container-xs container mx-auto mt-20">
                <h1 className="text-2xl font-medium text-gray-700 mb-8 text-center">Masuk</h1>
                <div className="w-full lg:w-1/2  mx-auto mt-20">
                    <form onSubmit={submitLogin}>
                        <div className="mb-2">
                            <h5 className="text-sm font-medium mb-2 text-gray-700">Email</h5>
                            <input type="text" onChange={(event)=>setState(event.target.value)} value={state.name} className="text-sm px-3 py-2 border-2 w-full rounded text-gray-500" placeholder="email" id="name" />
                        </div>
                        <div className="mb-2">
                            <h5 className="text-sm font-medium mb-2 text-gray-700">Password</h5>
                            <input type="password" onChange={(event)=>setState(event.target.value)} value={state.password} className="text-sm px-3 py-2 border-2 w-full rounded text-gray-500" placeholder="password" id="password" />
                        </div>
                        <p className="text-sm"><Link href="/Login"><a className="text-blue-700 text-sm">Lupa password ?</a></Link></p>
                    </form>
                    <div className="text-center">
                        <button className="bg-button px-10 text-white hover:text-gray-700 py-2 mt-10 mb-6">Masuk</button>
                    </div>
                </div>
            </section>
        </>
    )
}
