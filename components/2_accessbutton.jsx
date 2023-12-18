import styles from '@/styles/2_accessbutton.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useRef, useState } from 'react';

import { pageContexte } from '@/pages';

export function AccessButton()
{
    let valcontexte = useContext(pageContexte);
    let _router = useRouter();
    let [accessButtonContent,setaccessButtonContent] = useState("V I S I T E R");
    let accessButtonTest = useRef(<div className={styles.buttonLoading} ></div>) ;
    let gotoPage = ()=>
    {
        setaccessButtonContent(c=> c = accessButtonTest.current );
        
        _router.push('visite');
    }
    return <div className={styles.accessbuttonContainer} >
        <div onClick={gotoPage} >
                        <div className={styles.accessbutton}>
                                        {accessButtonContent}
                                </div>
        </div>

           </div>
}

export function BillsButton()
{
    let valcontexte = useContext(pageContexte);
    let _router = useRouter();
    let [accessButtonContent,setaccessButtonContent] = useState("V I S I T E R");
    let accessButtonTest = useRef(<div className={styles.buttonLoading} ></div>) ;
    let gotoPage = ()=>
    {
        setaccessButtonContent(c=> c = accessButtonTest.current );
        
        _router.push('visite');
    }
    return <div className={styles.accessbuttonContainer} >
                    <div onClick={()=>{valcontexte.showBillPopUpFunc("show")}}  >
                            <div className={styles.billsbutton}>
                                            <img className={styles.buttonimg} src='billsButton.png' alt='bills'></img>
                            </div>
                    </div>

           </div>
}
