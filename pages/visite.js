import Head from 'next/head'
import { NavBar } from '@/components/0_navbar'
import styles from '@/styles/5_visite.module.css'
import { useEffect } from 'react';
import Link from 'next/link';
import { Museum } from '@/components/4_museum';
export default function Home() {

    useEffect(()=>
    {
        console.log('prêt2')
    },[])

  return (
    <>
      <Head>
        <title>Musée du 229 | Visite</title>
        <meta name="description" content="Musée du 229" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.mainContainer}`}>
                <Museum />
      </div>

    </>
  )
}
