import Head from 'next/head'
import { NavBar } from '@/components/0_navbar'
import styles from '@/styles/5_visite.module.css'
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Museum } from '@/components/4_museum';
import { Canvas } from '@react-three/fiber';
import { Model } from '@/components/4_Musee';
import gsap from 'gsap';
import { CameraControls, Loader, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei';

export let menuContexte = createContext(null);


export default function Home() {

    let menuOpen = useRef(false);
    let {progress} = useProgress();
    let [MenuButtonCss,setMenuButtonCss] = useState([styles.Button_1,styles.Button_2,styles.Button_3,styles.Button_4,styles.Button_5]);
    let menuIconImg = useRef('menuicon.svg');
    let cameraIndexRef = useRef(0);
    let [cameraIndex,setcameraIndex] = useState(0); 
    let [loadingOver,setLoadingOver] = useState(false);
    let [removeGlass,setRemoveGlass] = useState(false);
    let [rotateModel,setrotateModel] = useState(false);
    let [showInfo_1,setshowInfo_1] = useState(false);

    let showMenu = ()=>
    {
        let ButtonCssCopy = MenuButtonCss;
        if(!menuOpen.current)
        {
          
          ButtonCssCopy[0] =`${styles.Button_1} ${styles.Button_1_open}`;
          ButtonCssCopy[1] =`${styles.Button_2} ${styles.Button_2_open}`;
          ButtonCssCopy[2] =`${styles.Button_3} ${styles.Button_3_open}`;
          ButtonCssCopy[3] =`${styles.Button_4} ${styles.Button_4_open}`;
          ButtonCssCopy[4] =`${styles.Button_5} ${styles.Button_5_open}`;
          menuIconImg.current = 'close.svg';
        }
        else
        {
          ButtonCssCopy[0] =`${styles.Button_1}`;
          ButtonCssCopy[1] =`${styles.Button_2}`;
          ButtonCssCopy[2] =`${styles.Button_3}`;
          ButtonCssCopy[3] =`${styles.Button_4}`;
          ButtonCssCopy[4] =`${styles.Button_5}`;
          menuIconImg.current = 'menuicon.svg';
        }
        
        menuOpen.current = !menuOpen.current;
        setMenuButtonCss(c=> c =[...ButtonCssCopy] );
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
          
          if(cameraIndex < 2)
          {
            cameraIndexRef.current = cameraIndexRef.current+1
            setcameraIndex(c=> c = cameraIndex+1);
          }
        }

        if(cameraIndexRef.current == 1 || cameraIndexRef.current == 2)
        {
          let ButtonCssCopy = MenuButtonCss;
          ButtonCssCopy[0] =`${styles.Button_1} ${styles.Button_1_open} ${styles.Button_disabled} `;
          ButtonCssCopy[1] =`${styles.Button_2} ${styles.Button_2_open} ${styles.Button_disabled} `;
          
          
          setMenuButtonCss(c=> c =[...ButtonCssCopy] );
        }
        else
        {
          let ButtonCssCopy = MenuButtonCss;
          ButtonCssCopy[0] =`${styles.Button_1} ${styles.Button_1_open}`;
          ButtonCssCopy[1] =`${styles.Button_2} ${styles.Button_2_open}`;
          
          
          setMenuButtonCss(c=> c =[...ButtonCssCopy] );
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
      if(cameraIndexRef.current == 0)
      {
        setrotateModel(c => c = !rotateModel)
      }
      
    }
    useEffect(()=>
    {
       
    },[])

  return (
    <>
      <Head>
        <title>Musée du 229 | Visite</title>
        <meta name="description" content="Musée du 229" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <menuContexte.Provider value={{cameraIndex,setcameraIndex,removeGlass,setRemoveGlass,rotateModel,setrotateModel,
        loadingOver,setLoadingOver,showInfo_1,setshowInfo_1}}>
      <div className={`${styles.mainContainer}`}>
              <div className={`${styles.threejsContainer}`}>
                      <Canvas>
                          <Model />
                          <CameraCompo actualIndex={cameraIndex} />     
                      </Canvas>
                      {
                          !loadingOver?  <div className={`${styles.loaderContainer}`}>
                                          {progress<100 ? <LoaderComponent state={"loading"}/> : <LoaderComponent state={"loaded"}/>}
                                        </div> : null
                      }
                      
                      <InfoContainer state={showInfo_1} />
                      <div onClick={showMenu}  className={`${styles.Button_0}`}>
                              <img className={`${styles.ButtonImg}`} src={menuIconImg.current} alt='menu'></img>
                      </div>
                      <div onClick={rotateModelFunc}  className={MenuButtonCss[0]}>
                              <img className={`${styles.ButtonImg}`} src='redo.svg' alt='rotate'></img>
                      </div>
                      <div onClick={removeGlassFunc}  className={MenuButtonCss[1]}>
                              <img className={`${styles.ButtonImg}`} src='eye.svg' alt='remove Glass'></img>
                      </div>
                      <div  className={MenuButtonCss[2]}>
                              <Link href={"/"}>
                                      <img className={`${styles.ButtonImg}`} src='home.svg' alt='Home'></img>
                              </Link>
                      </div>
                      <div onClick={()=>{moveCam("right")}}  className={MenuButtonCss[3]}>
                              <img className={`${styles.ButtonImg}`} src='arrow-right.svg' alt='menu'></img>
                      </div>
                      <div onClick={()=>{moveCam("left")}}  className={MenuButtonCss[4]}>
                              <img className={`${styles.ButtonImg}`} src='arrow-left.svg' alt='menu'></img>
                      </div>
              </div>
              
              
      </div>
      </menuContexte.Provider>

    </>
  )
}


function CameraCompo(props)
{
        
        let camref = useRef(null);
        let orbitref = useRef(null);
        let activateOnce = useRef(false);
        let cameraPosition =[{x:-40.7,y:5.7,z:-15},{x:-14,y:5.7,z:-5},{x:12,y:5.7,z:5}];
        let cameraLook=[{x:-40.7,y:5,z:-26},{x:-14,y:5,z:-25},{x:12,y:5,z:-20}];
        let actualCamIndex = useRef(0);
        let actualCamPos = [cameraPosition[0].x,cameraPosition[0].y,cameraPosition[0].z];

        let setCampose = ()=>
        {
       
          orbitref.current.minDistance=8   //ZOMIN
          // orbitref.current.maxDistance=1500
          orbitref.current.maxAzimuthAngle = Math.PI*(1.4)+4;  //rotation droite
          orbitref.current.minAzimuthAngle = Math.PI*(0.6)+3;
          // orbitref.current.rotateSpeed = 0.2
          orbitref.current.maxPolarAngle=1.7 // rotation verticale MAXI
            actualCamIndex.current = props.actualIndex;

            
                  gsap.to(camref.current.position, 
                  { x: cameraPosition[actualCamIndex.current].x,
                    y: cameraPosition[actualCamIndex.current].y,
                    z: cameraPosition[actualCamIndex.current].z,
                    duration: 1,
                    onComplete:()=>
                    {
                      
                      
                    } });
                    gsap.to(orbitref.current.target, 
                      { x: cameraLook[actualCamIndex.current].x,
                        y: cameraLook[actualCamIndex.current].y,
                        z: cameraLook[actualCamIndex.current].z,
                        duration: 1,
                        onComplete:()=>
                        {
                          
                          
                        } });
        }
        
        useEffect(()=>
        {
          // if(!activateOnce.current)
          // {
          //     activateOnce.current = true;
             
          // }      
          
          // orbitref.current.target.set(-42,5,-10)
          // console.log(orbitref.current.target)
          setCampose();

        },[props.actualIndex])
        return  <>
                   
                   
                   <PerspectiveCamera ref={camref} position={actualCamPos}   makeDefault   />
                   <OrbitControls ref={orbitref} maxDistance={20} minDistance={8} 
                   maxAzimuthAngle ={ Math.PI*(1.4)+4} minAzimuthAngle = {Math.PI*(0.6)+3} 
                   maxPolarAngle={1.7} target={[-40.7,5,-26]} />
                   
                   

                </>

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



function InfoContainer(props)
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