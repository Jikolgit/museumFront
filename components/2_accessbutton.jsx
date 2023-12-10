import styles from '@/styles/2_accessbutton.module.css'
import Link from 'next/link'

export function AccessButton()
{
    return <div className={styles.accessbuttonContainer} >
        <Link href={"visite"} >
                        <span className={styles.accessbutton}>
                                        V I S I T E R
                                </span>
        </Link>

           </div>
}


// LIMITER MOUVEMENT CAMERA
// METTRE UN LOADER