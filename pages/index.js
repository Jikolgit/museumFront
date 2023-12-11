import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '@/components/0_navbar'
import styles from '@/styles/Home.module.css'
import { Banner } from '@/components/1_banner';
import { AccessButton } from '@/components/2_accessbutton';
import { FooterComponent } from '@/components/3_footer';
import { useEffect } from 'react';
export default function Home() {

  useEffect(()=>
  {
    
  },[])
  return (
    <>
      <Head>
        <title>Musée du 229</title>
        <meta name="description" content="Musée du 229" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/museumicon.png" />
      </Head>
      <NavBar />
      
      <main className={`${styles.main}`}>
            <Banner />
            <AccessButton />
      </main>
      <footer className={`${styles.footer}`}>
            <FooterComponent />
      </footer>
    </>
  )
}
