import { useEffect, useRef } from 'react'
import Head from 'next/head'


import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import BlurBlob from '@/components/BlurBlob'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

<script defer src="https://tracklyze.com/insightCore.js" data-domain="james-wissemann.com"></script>




export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
     <Head>
        <script
          src="https://tracklyze.com/insight_core_dev.js"
          data-domain="james-wissemann.com"
          async
          defer
        ></script>
      </Head>
      <BlurBlob />
      <div id="blur">BLUR</div>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white bg-opacity-0 dark:bg-zinc-900 " />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
