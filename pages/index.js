import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '@/components/0_navbar'
import styles from '@/styles/Home.module.css'
import { Banner } from '@/components/1_banner';
import { AccessButton, BillsButton } from '@/components/2_accessbutton';
import { FooterComponent } from '@/components/3_footer';
import { createContext, useContext, useEffect, useState } from 'react';
import { TransitionPage } from '@/components/pagetransition';
import { BillsPopUp, PopUp } from '@/components/5_popup';

export let pageContexte = createContext();



export default function Home() {


  let [popUpState,setpopUpState] = useState('hide');
  let [billpopUpState,setbillpopUpState] = useState('hide');

  let showPopUpFunc = ()=>
  {
    if(popUpState != "show")
    {
      setpopUpState(c=> c = "show");

      window.setTimeout(()=>
      {
        setpopUpState(c=> c = "hide");
      },3000);
    }
    
  }

  let showBillPopUpFunc = (state)=>
  {
   
    setbillpopUpState(c=> c = state);
    
  }

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
      
      <pageContexte.Provider value={{showPopUpFunc,showBillPopUpFunc}}>
            <NavBar />
            <main className={`${styles.main}`}>
                  <Banner />
                  <BillsButton />
            </main>
            <footer className={`${styles.footer}`}>
                  <FooterComponent />
            </footer>
            <PopUp state={popUpState} />
            <BillsPopUp state={billpopUpState} /> 
            <TransitionPage />
      </pageContexte.Provider>
    </>
  )
}
