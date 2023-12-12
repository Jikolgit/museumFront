import styles from '@/styles/2_accessbutton.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react';
export function AccessButton()
{
    let _router = useRouter();
    let [accessButtonContent,setaccessButtonContent] = useState("V I S I T E R");
    let accessButtonTest = useRef(<div className={styles.buttonLoading} ></div>) ;
    let gotoPage = ()=>
    {
        setaccessButtonContent(c=> c = accessButtonTest.current )
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


// LIMITER MOUVEMENT CAMERA
// METTRE UN LOADER