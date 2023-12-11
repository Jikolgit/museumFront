import styles from '@/styles/2_accessbutton.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
export function AccessButton()
{
    let _router = useRouter();
    let gotoPage = ()=>
    {
        console.log('gooo')
        _router.push('visite');
    }
    return <div className={styles.accessbuttonContainer} >
        <div onClick={gotoPage} >
                        <span className={styles.accessbutton}>
                                        V I S I T E R
                                </span>
        </div>

           </div>
}


// LIMITER MOUVEMENT CAMERA
// METTRE UN LOADER