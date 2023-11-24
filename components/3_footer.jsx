import styles from '@/styles/3_footer.module.css'
import { useEffect, useRef, useState } from 'react'

export function FooterComponent()
{
    return <div className={styles.footerContainer} >
                    <div className={styles.footerContainerSection}>
                            <FooterSection number={1} />
                            <FooterSection number={2} />
                            <FooterSection number={3} />
                    </div>

                    <div className={styles.footerEnding}>
                            <div>Réalisé par <span className={styles.footerEndingLink}>Abdel BIO</span> </div>
                            <div>Copyright. Tout droit réservé</div>
                    </div>
           </div>
}


function FooterSection(props)
{
    let content = null;

    if(props.number == 1)
    {
        content = <div className={styles.footerSection}>
                        <div className={styles.sectionTitle}>Lien Util</div>
                        <div className={styles.sectionElem}>. Portfolio</div>
                        <div className={styles.sectionElem}>. Webdu229</div>
                  </div>
    }
    else if(props.number == 2)
    {
        content = <div className={styles.footerSection}>
                        <div className={styles.sectionTitle}>Assisstance</div>
                        <div className={styles.sectionElem}>. {'('}+229{')'} 90 39 73 97</div>
                        <div className={styles.sectionElem}>. zbio234@gmail.com</div>
                  </div>
    }
    else if(props.number == 3)
    {
        content = <div className={styles.footerSection}>
                        <div className={styles.sectionTitle}>Suivez nous</div>
                        <div className={styles.sectionElem}>. Tiktok</div>
                        <div className={styles.sectionElem}>. Youtube</div>
                  </div>
    }
    return   content
}

