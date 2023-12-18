import styles from '@/styles/5_popup.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';

import { pageContexte } from '@/pages';

export function PopUp(props)
{
    let [popUpCss,setPopUpCss] = useState(styles.popupContainer);

    let showPopUpFunc = (state)=>
    {
        if(state)
        {
            setPopUpCss(c => c = `${styles.popupContainer} ${styles.popupContainerVisible} ` )
        }
        else
        {
            setPopUpCss(c => c = `${styles.popupContainer} ` )
        }
    }
    useEffect(()=>
    {
        if(props.state == "show")
        {
            showPopUpFunc(true);
        }
        else
        {
            showPopUpFunc(false);
        }
    },[props.state]);

    return <div className={popUpCss} >
                    <div className={styles.popupContent} >
                                BIENTOT DISPONIBLE
                    </div>

           </div>
}


export function BillsPopUp(props)
{
    let valContexte = useContext(pageContexte);
    let [popUpCss,setPopUpCss] = useState(styles.billpopupContainer);

    let showPopUpFunc = (state)=>
    { 
        if(state)
        {
            setPopUpCss(c => c = `${styles.billpopupContainer} ${styles.billpopupContainervisible} ` )
        }
        else
        {
            setPopUpCss(c => c = `${styles.billpopupContainer} ` )
        }
    }
    let hidePopUp = ()=>
    {
       
        setPopUpCss(c => c = `${styles.billpopupContainer} ` )
    }
    useEffect(()=>
    {
        if(props.state == "show")
        {
            showPopUpFunc(true);
        }
        else
        {
            showPopUpFunc(false);
        }
    },[props.state]);

    return <div className={popUpCss} >
                    <div className={styles.billpopupContent} >
                            <div className={styles.billcontent1}>Billeterie</div>
                            <div className={styles.billcontent2}>
                                    Accedez à des oeuvres et expositions exclusives grâce à la Billeterie
                            </div>
                            <div className={styles.billcontent3}>
                                    Bientôt disponible
                            </div>
                            <div className={styles.billcontent4}>
                                    <div onClick={()=>{valContexte.showBillPopUpFunc("hide")}} className={styles.billcontent4_button}>OK</div>
                            </div>
                    </div>

           </div>
}

