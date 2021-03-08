import Head from 'next/head'
import Header from 'src/Parts/Header'
import Hero from 'src/Parts/Hero'
import Course from 'src/Parts/ListCourses/Course'
import Categories from 'src/Parts/Category/Categories'
import Footer from 'src/Parts/Footer'
import Berlangganan from 'src/Parts/Member/Berlangganan'
import ReferalSection from 'src/Parts/ReferalSection'
import Keunggulan from 'src/Parts/Keunggulan'
import Testimoni from 'src/Parts/Testimoni'
import courses from 'src/constant/api/courses'
import HeaderLogin from 'src/Parts/HeaderLogin'

export default function Home({data}) {
  console.log('data',data);
  return (
    <>
    <div className="">
      <Head>
        <title>Ruang Tambah Ilmu</title>
        <link rel="icon" href="/images/ruangtambahilmu.svg" />
      </Head>
      <main>
        <section>
          <HeaderLogin/>
        </section>
        <section>
          <Hero/>
        </section>
        <section className="container-xs container mx-auto">
          <Course data={data}/>
        </section>
        <section className="container-xs container mx-auto">
          <Categories/>
        </section>
        <section className="container-xs container mx-auto">
          <Berlangganan data={data}/>
        </section>
        <section className="bg-black">
          <ReferalSection/>
        </section>
        <section className="container-xs container mx-auto">
          <Keunggulan/>
        </section>
        <section className="container-xs container mx-auto">
          <Testimoni/>
        </section>
        <section>
          <Footer/>
        </section>
        {/* <section className="container">
              <h1 className="mt-20">homepage</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              <div className=" bg-indigo-400 p-4">flex1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quas!</div>
              <div className="flex-1 bg-indigo-500 ">flex2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, quibusdam.</div>
              <div className="flex-1 bg-indigo-600">flex3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, unde!</div>
              <div className="flex-1 bg-indigo-600">flex4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aperiam.</div>
              <div className="flex-1 bg-indigo-400  ">flex5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, nulla.</div>
              <div className="flex-1 bg-indigo-500 ">flex6 Lorem ipsum dolor sit amet consectetur adipisicing elit. A, laudantium.</div>
              <div className="flex-1 bg-indigo-600">flex7 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, tenetur!</div>
              <div className="flex-1 bg-indigo-600">flex8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, blanditiis!</div>
              </div>
        </section> */}
      </main>
    </div>
    </>
  )
}
Home.getInitialProps=async()=>{
  try {
    const data = await courses.all();
    return {data : data.data}
  } catch (error) {
    return error
  }
}
