import React from 'react'
import Head from 'next/head'
import courses from '../constant/api/courses'
import axios from 'axios';

 function Checkout({data}) {
     console.log('checkout',data);
    return (
        <>
        <Head>
            <title>Checkout</title>
            <link rel="icon" href="/images/ruangtambahilmu.svg" />
        </Head>
        <main>
            <h3>checkout</h3>
        </main>
        </>
    )
}
Checkout.getInitialProps=async(props)=>{
    const {id} = props.query;
    try {
        const data = await courses.details(id)
        return {data}
    } catch (error) {
        return error
    }
}
export default Checkout;
