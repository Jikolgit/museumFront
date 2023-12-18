import Head from 'next/head'
import { NavBar } from '@/components/0_navbar'
import styles from '@/styles/5_visite.module.css'
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { Model, CameraCompo } from '@/components/4_Model_1';
import gsap from 'gsap';
import { CameraControls, Loader, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei';
import { TransitionPage, TransitionPageExpo } from '@/components/pagetransition';
import { InfoContainer, SideMenu, SubMenu } from '@/components/7_MuseeSideMenu';
import { Switch3DModel, SwitchSideMenu } from '@/components/8_switchModel';
import { PopUp } from '@/components/5_popup';

export let menuContexte = createContext(null);


export default function Home() {

    let [exposition,setExposition] = useState(1);
    let expositionIndex = useRef(1);
    let {progress} = useProgress();
    let [menuButtonCss,setMenuButtonCss] = useState([styles.Button_1,styles.Button_2,styles.Button_3,styles.Button_4,styles.Button_5]);

    let cameraIndexRef = useRef(0);
    let obJectExpo = useRef(1);
    let [cameraIndex,setcameraIndex] = useState(0); 
    let [loadingOver,setLoadingOver] = useState(false);
    let [removeGlass,setRemoveGlass] = useState(false);
    let [rotateModel,setrotateModel] = useState(false);
    let [showInfo_1,setshowInfo_1] = useState(false);
    let [expotransition,setExpotransition] = useState(false);
    let [hometransition,setHometransition] = useState(false);
    let [showSubMenuState,setshowSubMenuState] = useState(false);
    let [showSideMenuState,setshowSideMenuState] = useState(false);

    let [popUpState,setpopUpState] = useState('hide');

    let showPopUpFunc = ()=>
    {
      if(popUpState != "show")
      {
        setpopUpState(c=> c = "show");
  
        window.setTimeout(()=>
        {
          setpopUpState(c=> c = "hide");
        },3000);
      }
      
    }

    let switchModel = (dir)=>
    {
        if(dir == "next")
        {
          if(expositionIndex.current == 2)
          {
            expositionIndex.current ++;
            setExposition( c => c = exposition+1 )
          }
          
        }
        else
        {
          if(expositionIndex.current == 1)
          {
            setExposition( c => c = exposition-1 )
          }
          
        }
    }
    let _showSubMenu = (state)=>
    {
      setshowSubMenuState(c => c = state)
    }
    let moveCam = (direction)=>
    {
        if(direction == 'left')
        {
          if(cameraIndex > 0)
          {
            cameraIndexRef.current = cameraIndexRef.current-1
            setcameraIndex(c=> c = cameraIndex-1);
          }
          
        }
        else
        {
          
          if(cameraIndex < obJectExpo.current)
          {
            cameraIndexRef.current = cameraIndexRef.current+1;
            setcameraIndex(c=> c = cameraIndex+1);
          }
        }
        if(exposition == 1)
        {
          if(cameraIndexRef.current == 1 || cameraIndexRef.current == 2)
          {
            let ButtonCssCopy = menuButtonCss;
            ButtonCssCopy[0] =`${styles.Button_1} ${styles.Button_1_open} ${styles.Button_disabled} `;
            ButtonCssCopy[1] =`${styles.Button_2} ${styles.Button_2_open} ${styles.Button_disabled} `;
            
            
            setMenuButtonCss(c=> c =[...ButtonCssCopy] );
          }
          else
          {
            let ButtonCssCopy = menuButtonCss;
            ButtonCssCopy[0] =`${styles.Button_1} ${styles.Button_1_open}`;
            ButtonCssCopy[1] =`${styles.Button_2} ${styles.Button_2_open}`;
            
            
            setMenuButtonCss(c=> c =[...ButtonCssCopy] );
          }
        }

    }

    let removeGlassFunc = ()=>
    {
      if(cameraIndexRef.current == 0)
      {
        setRemoveGlass(c => c = !removeGlass)
      }
      
    }
    let rotateModelFunc = ()=>
    {
      if(cameraIndexRef.current == 0 && exposition == 1)
      {
        setrotateModel(c => c = !rotateModel)
      }
      
    }

    let expoTransitionState = (state)=>
    {
      valContexte.setExpotransition(c => c = state);
    }
    useEffect(()=>
    {
       
    },[])

  return (
    <>
      <Head>
        <title>Musée du 229 | Visite</title>
        <meta name="description" content="Visite du Musée du 229" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <menuContexte.Provider value={{cameraIndex,setcameraIndex,removeGlass,setRemoveGlass,rotateModel,setrotateModel,
        loadingOver,setLoadingOver,showInfo_1,setshowInfo_1,rotateModelFunc,removeGlassFunc,moveCam,menuButtonCss,setMenuButtonCss
        ,_showSubMenu,switchModel,showSubMenuState,exposition,setExposition,setExpotransition,showSideMenuState,setshowSideMenuState,
        showPopUpFunc,obJectExpo,setHometransition}}>
      <div className={`${styles.mainContainer}`}>
              <div className={`${styles.threejsContainer}`}>
                      <Canvas>

                          <Switch3DModel index={exposition} _cameraIndex = {cameraIndex} />
                      </Canvas>
                      <SwitchSideMenu index={exposition} />
                      {
                          !loadingOver?  <div className={`${styles.loaderContainer}`}>
                                          {progress<100 ? <LoaderComponent state={"loading"}/> : <LoaderComponent state={"loaded"}/>}
                                        </div> : null
                      }

              </div>
              
            
      </div>
      {expotransition? <TransitionPageExpo  type={"expo"} /> : null}
      {hometransition? <TransitionPageExpo type={"home"} /> : null}
      <PopUp state={popUpState} />
      </menuContexte.Provider>
      <TransitionPage />
      

    </>
  )
}


function LoaderComponent(props)
{
      let content = useRef(null);
      let showContent = useRef('props')
      let valContext = useContext(menuContexte);
      let [loaderContentCss,setLoaderContentCss] = useState(styles.loaderContent);
      let enterMuseum = ()=>
      {
        
        setLoaderContentCss(c=> c = `${styles.loaderContent} ${styles.loaderContent_fadeOut}`)
      }
      if(props.state == "loading")
      {
          content.current = <div className={styles.loaderContent} >
                                    EN COUR DE CHARGEMENT......
                            </div>
      }
      else
      {
        content.current = <div className={loaderContentCss} >
                          <div onClick={enterMuseum} className={styles.loaderContentEnterButton} >ENTRER</div>
                  </div>
      }
      // if(showContent.current == "props")
      // {}
      // else
      // {

      // }
      useEffect(()=>
      {
          if(loaderContentCss == `${styles.loaderContent} ${styles.loaderContent_fadeOut}`)
          {
            window.setTimeout(()=>{valContext.setLoadingOver(c=> c = true);},1100)
          }
          
      },[loaderContentCss])
      
      return content.current;
}

