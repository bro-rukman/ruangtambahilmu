import '../../styles/style.css'
import 'react-toastify/dist/ReactToastify.css'
import 'nprogress/nprogress.css'

import NProgress, { configure } from 'nprogress'
import {ToastContainer} from 'react-toastify'

import Router from 'next/router'

NProgress.configure({showSpinner : false})
Router.events.on('routerChangeStart',()=>NProgress.start())
Router.events.on('routerChangeComplete',()=>NProgress.done())
Router.events.on('RouterChangeError',()=>NProgress.done())


function MyApp({ Component, pageProps }) {
  return(
    <>
    <Component {...pageProps} />
    <ToastContainer position="top-center"/>
    </>
  )
}

export default MyApp
