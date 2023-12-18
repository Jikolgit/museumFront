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
                            <div>Réalisé par <a className={styles.footerEndingLink} href="https://abdelbio.vercel.app/" >Abdel BIO</a> </div>
                            <div>Copyright. Tout droit réservé</div>
                    </div>
           </div>
}


function FooterSection(props)
{
    let content = null;

    let onpenLink = ()=>
    {
        window.open('https://www.tiktok.com/@webdu229','_blank')
    }
    if(props.number == 1)
    {
        content = <div className={styles.footerSection}>
                        <div className={styles.sectionTitle}>Liens utiles</div>
                        <div className={styles.sectionElem}><a  className={styles.sectionElemLink} href="https://abdelbio.vercel.app/">Portfolio</a> </div>
                        {/* <div className={styles.sectionElem}>Webdu229</div> */}
                  </div>
    }
    else if(props.number == 2)
    {
        content = <div className={styles.footerSection}>
                        <div className={styles.sectionTitle}>Assisstance</div>
                        <div className={styles.sectionElem}>{'('}+229{')'} 90 39 73 97</div>
                        <div className={styles.sectionElem}>zbio234@gmail.com</div>
                  </div>
    }
    else if(props.number == 3)
    {
        content = <div className={styles.footerSection}>
                        <div className={styles.sectionTitle}>Suivez nous</div>
                        <div onClick={onpenLink} className={styles.sectionElem}>
                                <div className={styles.sectionElemIcon}>
                                        <img src='logo-tiktok.png' alt='icon'></img>
                                </div>
                                <div className={styles.sectionElemText}>Tiktok</div>
                        </div>
                        {/* <div className={styles.sectionElem}>
                                <div className={styles.sectionElemIcon}>
                                        <img src='logo-youtube.png' alt='icon'></img>
                                </div>
                                <div className={styles.sectionElemText}>Youtube</div>
                        </div> */}
                  </div>
    }
    return   content
}

