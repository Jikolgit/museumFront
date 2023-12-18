import styles from '@/styles/1_banner.module.css'
import { useEffect, useRef, useState } from 'react'
import { AccessButton } from './2_accessbutton';
export function Banner()
{
    let devOnce = useRef(false);
    let picList = ["cap1.png","cap2.png","cap3.png"];
    let picIndex = useRef(1);
    let [pic1css,setpic1css] = useState(styles.bannerBackgroundpic1);
    let [pic2css,setpic2css] = useState(styles.bannerBackgroundpic2);
    let [pic3css,setpic3css] = useState(styles.bannerBackgroundpic3);
    let [selectorCss1,setselectorCss1] = useState(`${styles.select} ${styles.selectActive}`);
    let [selectorCss2,setselectorCss2] = useState(styles.select);
    let [selectorCss3,setselectorCss3] = useState(styles.select);

    let switchBanner = ()=>
    {
        window.setInterval(()=>
        {
            picIndex.current ++;
            if(picIndex.current == 1)
            {
                
                setpic1css(c => c =`${styles.bannerBackgroundpic1}`);
                setselectorCss1(c => c=`${styles.select} ${styles.selectActive}`)
                setselectorCss2(c => c=`${styles.select}`)
                setselectorCss3(c => c=`${styles.select}`)
                
            }
            else if(picIndex.current == 2)
            {
                
                setpic1css(c => c =`${styles.bannerBackgroundpic1} ${styles.BackgroundpicinVisble} `);
                setpic2css(c => c =`${styles.bannerBackgroundpic2}`);
                setselectorCss1(c => c=`${styles.select}`)
                setselectorCss2(c => c=`${styles.select} ${styles.selectActive}`)
                setselectorCss3(c => c=`${styles.select}`)
            }
            else if(picIndex.current == 3)
            {
                 
                setpic2css(`${styles.bannerBackgroundpic2} ${styles.BackgroundpicinVisble} `);
                setselectorCss1(c => c=`${styles.select}`)
                setselectorCss3(c => c=`${styles.select} ${styles.selectActive}`)
                setselectorCss2(c => c=`${styles.select}`)
            }
            if(picIndex.current == 3)
            {
                picIndex.current = 0;
            }
            
        },5500)
    }
    useEffect(()=>
    {
        if(!devOnce.current)
        {
            devOnce.current = true;
          
            switchBanner();
        }

    },[])
    return  <div className={styles.bannerContainer} >
                    <div className={styles.bannerBackground}>
                            <img className={pic1css} src={"cap1.png"} alt='back'></img>
                            <img className={pic2css} src={"cap2.png"} alt='back'></img>
                            <img className={pic3css} src={"cap3.png"} alt='back'></img>
                    </div>
                    <div className={styles.bannerdescription}>
                           <div className={styles.descriptionelem1container}>
                                    <p>
                                            Musée du 229 vous offre une vue 3D de quelques oeuvres d'arts du patrimoine culturel Béninois
                                    </p>
                                    <div className={styles.bannerdescriptionButtonCont}>
                                                {/* <span className={styles.bannerdescriptionButton}>
                                                    EN SAVOIR PLUS
                                                </span> */}
                                                <AccessButton />
                                    </div>
                           </div>
                           <div className={styles.descriptionelem2container}>
                                    <div className={selectorCss1}></div>
                                    <div className={selectorCss2}></div>
                                    <div className={selectorCss3}></div>
                           </div>
                           
                    </div>
                    <div className={styles.bannerdescriptionMobile}>
                            <div className={styles.descriptionelem2container}>
                                    <div className={selectorCss1}></div>
                                    <div className={selectorCss2}></div>
                                    <div className={selectorCss3}></div>
                            </div>
                           <div className={styles.descriptionelem1container}>
                                    <p>
                                            Musée du 229 vous offre une exposition virtuelle 3D de quelques oeuvres d'arts du patrimoine culturel Béninois
                                    </p>
                                    <div className={styles.bannerdescriptionButtonCont}>
                                                {/* <span className={styles.bannerdescriptionButton}>
                                                    EN SAVOIR PLUS
                                                </span> */}
                                                <AccessButton />
                                    </div>
                           </div>

                           
                    </div>
            </div>
}