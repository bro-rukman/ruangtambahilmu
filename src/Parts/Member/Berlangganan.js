import React, { Component } from 'react'
import Link from 'next/link'
import RenderMember from './RenderMember'
import axios from 'axios'

class Berlangganan extends Component {
    state ={
        member : []
    }
    componentDidMount(){
        axios.get(`http://localhost:3004/langganan`).then((res)=>{
            this.setState({
                member : res.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        const {member} = this.state
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
                        member?.length >0 ? (member.map((item,index)=>{
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
}
export default Berlangganan;

