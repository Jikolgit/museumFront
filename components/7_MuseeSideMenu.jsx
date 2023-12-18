import styles from '@/styles/7_MuseeSideMenu.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { menuContexte } from '@/pages/visite';


export function SideMenu(props)
{
    let valContexte = useContext(menuContexte);
    let menuOpen = useRef(props.open);
    // let [MenuButtonCss,setMenuButtonCss] = useState([styles.Button_1,styles.Button_2,styles.Button_3,styles.Button_4,styles.Button_5]);
    let menuIconImg = useRef('menuicon.svg');
    let showMenu = ()=>
    {
        let ButtonCssCopy = valContexte.menuButtonCss;
        if(!menuOpen.current)
        {
          
          ButtonCssCopy[0] =`${styles.Button_1} ${styles.Button_1_open}`;
          ButtonCssCopy[1] =`${styles.Button_2} ${styles.Button_2_open}`;
          ButtonCssCopy[2] =`${styles.Button_3} ${styles.Button_3_open}`;
          ButtonCssCopy[3] =`${styles.Button_4} ${styles.Button_4_open}`;
          ButtonCssCopy[4] =`${styles.Button_5} ${styles.Button_5_open}`;
          menuIconImg.current = 'close.svg';
          // valContexte.setshowSideMenuState(c => c = true)
        }
        else
        {
          ButtonCssCopy[0] =`${styles.Button_1}`;
          ButtonCssCopy[1] =`${styles.Button_2}`;
          ButtonCssCopy[2] =`${styles.Button_3}`;
          ButtonCssCopy[3] =`${styles.Button_4}`;
          ButtonCssCopy[4] =`${styles.Button_5}`;
          menuIconImg.current = 'menuicon.svg';
          // valContexte.setshowSideMenuState(c => c = false)
        }
        
        menuOpen.current = !menuOpen.current;
        valContexte.setMenuButtonCss(c=> c =[...ButtonCssCopy] );
    }
    useEffect(()=>
    {
      if(valContexte.showSideMenuState)
      showMenu();
    },[valContexte.showSideMenuState])
    return <>

                <div onClick={showMenu}  className={`${styles.Button_0}`}>
                        <img className={`${styles.ButtonImg}`} src={menuIconImg.current} alt='menu'></img>
                </div>
                {valContexte.exposition == 1? 
                    <div onClick={valContexte.rotateModelFunc}  className={valContexte.menuButtonCss[0]}>
                    <img className={`${styles.ButtonImg}`} src='redo.svg' alt='rotate'></img>
                    </div>
                    :
                    null
                }
                
                <div onClick={valContexte.removeGlassFunc}  className={valContexte.menuButtonCss[1]}>
                        <img className={`${styles.ButtonImg}`} src='eye.svg' alt='remove Glass'></img>
                </div>
                <div onClick={()=>{valContexte._showSubMenu(true)}}  className={valContexte.menuButtonCss[2]}>
                        {/* <Link href={"/"}> */}
                                <img className={`${styles.ButtonImg}`} src='home.svg' alt='Home'></img>
                        {/* </Link> */}
                </div>
                <div onClick={()=>{valContexte.moveCam("right")}}  className={valContexte.menuButtonCss[3]}>
                        <img className={`${styles.ButtonImg}`} src='arrow-right.svg' alt='menu'></img>
                </div>
                <div onClick={()=>{valContexte.moveCam("left")}}  className={valContexte.menuButtonCss[4]}>
                        <img className={`${styles.ButtonImg}`} src='arrow-left.svg' alt='menu'></img>
                </div>
    
           </>
}

export function SideMenu2(props)
{
    let valContexte = useContext(menuContexte);
    let menuOpen = useRef(props.open);
    // let [MenuButtonCss,setMenuButtonCss] = useState([styles.Button_1,styles.Button_2,styles.Button_3,styles.Button_4,styles.Button_5]);
    let menuIconImg = useRef('menuicon.svg');
    let showMenu = ()=>
    {
        let ButtonCssCopy = valContexte.menuButtonCss;
        if(!menuOpen.current)
        {
          
          ButtonCssCopy[0] =`${styles.Button_1} ${styles.Button_1_open}`;
          ButtonCssCopy[1] =`${styles.Button_2} ${styles.Button_2_open}`;
          ButtonCssCopy[2] =`${styles.Button_3} ${styles.Button_3_open}`;
          ButtonCssCopy[3] =`${styles.Button_4} ${styles.Button_4_open}`;
          
          menuIconImg.current = 'close.svg';
        }
        else
        {
          ButtonCssCopy[0] =`${styles.Button_1}`;
          ButtonCssCopy[1] =`${styles.Button_2}`;
          ButtonCssCopy[2] =`${styles.Button_3}`;
          ButtonCssCopy[3] =`${styles.Button_4}`;
          
          menuIconImg.current = 'menuicon.svg';
        }
        
        menuOpen.current = !menuOpen.current;
        valContexte.setMenuButtonCss(c=> c =[...ButtonCssCopy] );
    }
    useEffect(()=>
    {
      if(valContexte.showSideMenuState)
      showMenu();
    },[valContexte.showSideMenuState])
    return <>

                <div onClick={showMenu}  className={`${styles.Button_0}`}>
                        <img className={`${styles.ButtonImg}`} src={menuIconImg.current} alt='menu'></img>
                </div>
                <div onClick={valContexte.removeGlassFunc}  className={valContexte.menuButtonCss[0]}>
                        <img className={`${styles.ButtonImg}`} src='eye.svg' alt='remove Glass'></img>
                </div>
                <div onClick={()=>{valContexte._showSubMenu(true)}}  className={valContexte.menuButtonCss[1]}>
                        {/* <Link href={"/"}> */}
                                <img className={`${styles.ButtonImg}`} src='home.svg' alt='Home'></img>
                        {/* </Link> */}
                </div>
                <div onClick={()=>{valContexte.moveCam("right")}}  className={valContexte.menuButtonCss[2]}>
                        <img className={`${styles.ButtonImg}`} src='arrow-right.svg' alt='menu'></img>
                </div>
                <div onClick={()=>{valContexte.moveCam("left")}}  className={valContexte.menuButtonCss[3]}>
                        <img className={`${styles.ButtonImg}`} src='arrow-left.svg' alt='menu'></img>
                </div>
    
           </>
}
export function InfoContainer(props)
{
  let valContext = useContext(menuContexte);
  let [infoCss,setInfoCss] = useState(styles.info_first_container);
  useEffect(()=>
  {
    if(!props.state)
    {
      setInfoCss(c=> c = styles.info_first_container)
    }
    else
    {
      setInfoCss(c=> c = `${styles.info_first_container}  ${styles.info_container_visible}`)
    }
  },[props.state])
  let showInfo_1 = ()=>
  {
    valContext.setshowInfo_1(c=> c = !valContext.showInfo_1)
  }
  return(
    <div onClick={showInfo_1} className={infoCss} >
        <div  className={styles.info_container}>
                <div className={styles.info_container_0}>
                    Trône d’apparat du roi Ghézo
                </div>
                <div className={styles.info_container_1}>
                    Le roi s’installait sur ce trône pour des occasions exceptionnelles comme la cérémonie 
                    d’Ato en hommage aux ancêtres royaux. Le trône était installé sur une estrade qui lui 
                    permettait de surplomber la foule et de distribuer des présents à l'ensemble de ses 
                    sujets : cauris, tissus, animaux, nourriture, armes…
                </div>
                <div className={styles.info_container_2}>
                    source: https://tresorsroyaux.bj/tresor/1/trone-apparat-ghezo/
                </div>
        </div>
    </div>
  )
}

export function SubMenu(props)
{   //CHANGEMENT D4EXPOSITION
    let valContext = useContext(menuContexte);
    let _router = useRouter();
    let subMenuContainerCss = useRef(styles.subMenuContainer);
    let subMenuCss = useRef(styles.subMenu);
    if(props.state)
    {
        subMenuContainerCss.current = `${styles.subMenuContainer} ${styles.subMenuContainer_visible}`
        subMenuCss.current = `${styles.subMenu} ${styles.subMenu_visible}`
    }
    else
    {
        subMenuContainerCss.current = `${styles.subMenuContainer}`;
        subMenuCss.current = `${styles.subMenu}`;
    }

    let returnHome = ()=>
    {
      valContext.setHometransition(c => c = true);
        _router.push('/');
    }
    let SubMenuElemTemplate = (props)=>
    {
        return <>
                    <div onClick={(e)=>{e.stopPropagation(); props.func();}} className={styles.subMenuElem}>
                                        <div className={styles.subMenuElem_left} >
                                                {props.title}
                                        </div>
                                        <div className={styles.subMenuElem_right} >
                                                <img className={styles.subMenuElem_right_IMG} src={props.icon} alt='chvron'></img>
                                        </div>
                    </div>
        
               </>
    }

    let switchexpo = (number)=>
    {
      valContext.showPopUpFunc()
      // if(number == 1)
      // {
      //   valContext.obJectExpo.current = 1
      // }
      // else if(number == 2)
      // {
      //   valContext.obJectExpo.current = 2
      // }
      // valContext.setExposition(c => c = number);
      // valContext.setExpotransition(c => c = true);
      // valContext._showSubMenu(false);
      // valContext.setshowSideMenuState(c => c = true)
    }
    
    return( 
        <div onClick={(e)=>{e.stopPropagation(); valContext._showSubMenu(false)}} className={subMenuContainerCss.current} >
                    <div className={subMenuCss.current} >
                                <SubMenuElemTemplate title={"Page d'accueil"} icon={"homepage.png"} func={returnHome} />
                                <SubMenuElemTemplate title={"1ère Exposition"} icon={"nextpage.png"} func={()=>{switchexpo(2)}} />
                                <SubMenuElemTemplate title={"Salle d'attente"} icon={"prevpage.png"} func={()=>{switchexpo(1)}} />
                    </div>
        </div>
      )
    
}

