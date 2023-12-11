import styles from '@/styles/0_navBar.module.css'
import { useEffect, useRef, useState } from 'react'

export function NavBar()
{

    let [chevronIconLink,setchevronIconLink] = useState(styles.mobilemenuContainer);
    let normalMenuId = useRef(1);
    let openMenuState = useRef(false);
    let [normalMenuContent,setNormalMenuContent] = useState(null);
    let closeMenu = ()=>
    {
        
        if(openMenuState.current)
        {
            openMenuState.current = false
            setchevronIconLink(`${styles.mobilemenuContainer} `)
        }
        else
        {
            openMenuState.current = true
            setchevronIconLink(`${styles.mobilemenuContainer} ${styles.mobilemenuContaineropen}`)
        }
    }
    let closeNormalMenu = ()=>
    {
        setNormalMenuContent(null);
    }
    let openNormalMenu =(id)=>
    {
        normalMenuId.current = id
        setNormalMenuContent(<SubMenuNormal menuId={normalMenuId.current} closefunc = {closeNormalMenu} />);
    }
    return (
            <>
            <header className={styles.navBarContainer} >
                    <div className={styles.navBar}>
                            <div className={styles.title}>
                                <div className={styles.titlelogo} >
                                    <img className={styles.titlelogoimg} src='websitelogo.png' alt='logo' ></img>
                                </div>
                                {/* <div className={styles.title_text}>
                                        <span className={styles.title_text_1}></span>
                                        <span className={styles.title_text_2}><br/> </span>
                                </div> */}
                            </div>
                            <div className={styles.menu}>
                                  <div className={styles.picdiv}>
                                         <img onClick={()=>{openNormalMenu(1)}} className={styles.menupic1} src='menu1.png' alt='pic1'></img>
                                  </div>
                                  <div className={styles.picdiv}>
                                        <img onClick={()=>{openNormalMenu(2)}} className={styles.menupic2} src='menu2.png' alt='pic2'></img>
                                  </div>
                                  
                                  
                            </div>
                            <div className={styles.mobilemenu}>
                                    <div className={styles.mobileicon}>
                                            <img className={styles.mobileiconpic} onClick={closeMenu} src='mobilemoneuicon.png' alt='pic3'></img>
                                    </div> 
                            </div>
                    </div>
           </header>
           <div className={chevronIconLink}>
                    <div className={styles.closeContainer} >
                            <img className={styles.closepic} onClick={closeMenu} src='close.png' alt='close'></img>
                    </div>
                    <SubMenu menuId={1} icon={'menu1.png'} title={'Billeterie'} />
                    <SubMenu menuId={2} icon={'menu2.png'} title={'Contribuer'} />
                    {normalMenuContent}
                    
           </div>
           </>
           )
}


function SubMenu(props)
{
    
    let [chevronIconLink,setchevronIconLink] = useState('chevron-down.png');
    let [mobileMenu1ElemCss,setmobileMenu1Css] = useState(styles.mobileMenu1Elem);
    let subeMenuOpen1 = useRef(false);
    let iconCss = useRef(styles.menuLeftpic)
    let elemContent = useRef(null);
    let openSubMenu = ()=>
    {
        
        if(subeMenuOpen1.current)
        {
            setchevronIconLink('chevron-down.png')
            setmobileMenu1Css(`${styles.mobileMenu1Elem}`)
            subeMenuOpen1.current = false;
        }
        else
        {
            setchevronIconLink('chevron-up.png')
            setmobileMenu1Css(`${styles.mobileMenu1Elem} ${styles.mobileMenu1Elemopen} `)
            subeMenuOpen1.current = true

        }
    }
    if(props.menuId == 1)
    {
        iconCss.current = styles.menuLeftpic
        elemContent.current =   <>
                                    <div className={styles.mobileMenu1ElemTitle} >Programme</div> 
                                    <div className={styles.mobileMenu1ElemTitle} >A venir</div> 
                                </>
    }
    else if(props.menuId == 2)
    {
        iconCss.current = styles.menuLeftpic2
        elemContent.current =   <>
                                    <div className={styles.mobileMenu1ElemTitle} >Vos suggestions</div> 
                                    <div className={styles.mobileMenu1ElemTitle} >Faire un don</div> 
                                </>
    }
    return(
        <div className={styles.mobileMenu1}>
                            <div className={styles.mobileMenu1Title} onClick={openSubMenu}>
                                    <div className={styles.menuLeft}  >
                                                <div className={styles.leftmenuicon} ><img className={iconCss.current} src={props.icon} alt='pic1'></img></div> 
                                                <div className={styles.mobilemenutitle} >{props.title} </div> 
                                        </div>
                                        <div className={styles.menuRight}>
                                                <div className={styles.menuicon} ><img className={styles.menuRightpic} src={chevronIconLink} alt='pic1'></img></div> 
                                    </div>
                            </div>
                            <div className={mobileMenu1ElemCss}>
                                    {elemContent.current}

                            </div>
 
        </div>
    )
}


function SubMenuNormal(props)
{
    let [normalMenuCss,setnormalMenuCss] = useState(`${styles.menuNormalContainer} ${styles.menuNormalContainerOpen}`);
    let openMenuState = useRef(false);
    let content = useRef(null)
    let closeNormalMenu = ()=>
    {
        setnormalMenuCss(`${styles.menuNormalContainer}`)
    }
    
    if(props.menuId == 0)
    {
        content.current = null;
    }
    else if(props.menuId == 1)
    {
        content.current =         <>
                                            <div className={styles.menuNormalElem}>Programme</div>
                                            <div className={styles.menuNormalElem}>A venir</div>
                                    </>
    }
    else if(props.menuId == 2)
    {
        content.current =  <>
                                            <div className={styles.menuNormalElem}>Vos suggestions</div>
                                            <div className={styles.menuNormalElem}>Faire un don</div>
                           </>
    }
    return <div onClick={props.closefunc} className={normalMenuCss} >
                <div className={styles.menuNormal} >
                        <div className={styles.menuNormalClosePart} >
                                
                                        <img className={styles.closepic} onClick={props.closefunc} src='close.png' alt='close'></img>
                                
                        </div>
                       {content.current}
                </div>

            </div>;
}