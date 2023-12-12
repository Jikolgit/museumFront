import styles from '@/styles/pagetransition.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export function TransitionPage()
{
    let progressRef = useRef(null);
    let _router = useRouter();
    let [containerCss,setcontainerCss] = useState(styles.pagetransitionContainer);
    let [progressCss,setprogressCss] = useState(styles.barProgress);
    let [content,setContent] = useState(
                                            <div className={containerCss} >
                                                        <div className={styles.progressContainer} >
                                                                <div className={styles.progressTitle} >CHARGEMENT</div>
                                                                <div className={styles.barContainer}>
                                                                        
                                                                                <div ref={progressRef} className={progressCss}></div> 
                                                                        
                                                                </div>
                                                        </div>

                                            </div>
    )
    let removePage = ()=>
    {
       
        window.setTimeout(()=>
        {
            setcontainerCss(c=> c = `${styles.pagetransitionContainerremove}`);
            
        },1500)
    }
    let hidePage  = ()=>
    {
        window.setTimeout(()=>
        {
            setcontainerCss(c=> c = `${styles.pagetransitionContainer} ${styles.pagetransitionContainerhide} `);
            removePage()
        },2000)
        
    }
    let LoadingBar = ()=>
    {
        window.setTimeout(()=>
        {
            setprogressCss(c=> c = `${styles.barProgress} ${styles.barProgressFull} `);
            hidePage()
        },3000);
    }

    useEffect(()=>
    {
        LoadingBar();
        //hidePage()
    },[])    
    return <div className={containerCss} >
                    <div className={styles.progressContainer} >
                            <div className={styles.progressTitle} >CHARGEMENT</div>
                            <div className={styles.barContainer}>
                                    
                                            <div ref={progressRef} className={progressCss}></div> 
                                    
                            </div>
                    </div>

           </div>
}
