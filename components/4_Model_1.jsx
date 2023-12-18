/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/musee.glb 
*/
import gsap from 'gsap';
import React, { useContext, useEffect, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';
import { menuContexte } from '@/pages/visite';
import { vertexShader,_fragmentShader,vertexShader2,_fragmentShader2 } from './shaders';


export function Model(props) {
  let valContext = useContext(menuContexte);

  let glassBoxRef = useRef(null);
  let glassRef = useRef(null);
  let maskRef = useRef(null);
  let descRef = useRef(null);
  let EnanblemaskRotation = useRef(false);
  const { nodes, materials } = useGLTF('/model_1.glb');
  let uniform2 = useRef(
  {
    utime:{value:0.0}
  }
  )

  
  let [plafondtxtSrc,wallGroundtxtSrc,maskTxtSrc,piedTxtSrc,tronetxtSrc,tamtamtxtSrc1,tamtamtxtSrc2] = 
  useTexture(["/plafondtxt.jpg",'/scenetxt2.jpg','model_2/masktxt_new_1.jpg','/piedtxt.jpg','/model_2/troneTXT.jpg','tamtxt.jpg','tamtxt_2.jpg']);
  let txtarray = [plafondtxtSrc,wallGroundtxtSrc,maskTxtSrc,piedTxtSrc,tronetxtSrc,tamtamtxtSrc1,tamtamtxtSrc2];
  for(let i =0;i< txtarray.length;i++)
  {
    txtarray[i].flipY = false;
    txtarray[i].colorSpace = THREE.SRGBColorSpace; 
    txtarray[i].minFilter = THREE.LinearFilter;
    txtarray[i].magFilter = THREE.LinearFilter;
  }
  const hdrtexture = useLoader(RGBELoader, "/hdr3.hdr");
  hdrtexture.mapping = THREE.EquirectangularReflectionMapping;
  let glasstxt = useRef(new THREE.MeshPhysicalMaterial({transmission:1,roughness:0,metalness:0,ior:1,envMap:hdrtexture}));
  let maskCubetxt = useRef(new THREE.MeshBasicMaterial({visible:false,transparent:true}));
  let plafondtxt = useRef(new THREE.MeshBasicMaterial({map:plafondtxtSrc}));
  let wallgroundtxt = useRef(new THREE.MeshBasicMaterial({map:wallGroundtxtSrc}));
  let masktxt = useRef(new THREE.MeshBasicMaterial({map:maskTxtSrc}));
  let fronttxt = useRef(new THREE.ShaderMaterial({vertexShader:vertexShader2,fragmentShader:_fragmentShader2}));
  let piedtxt = useRef(new THREE.MeshBasicMaterial({map:piedTxtSrc}));
  let glassBartxt = useRef(new THREE.MeshBasicMaterial({map:tronetxtSrc}));

  let tamtamtxt_1 = useRef(new THREE.MeshBasicMaterial({map:tamtamtxtSrc1}));
  let tamtamtxt_2 = useRef(new THREE.MeshBasicMaterial({map:tamtamtxtSrc2}));


  // let glasstxt = useRef(new THREE.MeshBasicMaterial({color:"white",wireframe:true}));
  // let maskCubetxt = useRef(new THREE.MeshBasicMaterial({color:"white",wireframe:true}));
  // let plafondtxt = useRef(new THREE.MeshBasicMaterial({color:"white",wireframe:true}));
  // let wallgroundtxt = useRef(new THREE.MeshBasicMaterial({color:"white",wireframe:true}));
  // let masktxt = useRef(new THREE.MeshBasicMaterial({color:"white",wireframe:true}));
  // let fronttxt = useRef(new THREE.MeshBasicMaterial({color:"white",wireframe:true}));
  // let piedtxt = useRef(new THREE.MeshBasicMaterial({color:"white",wireframe:true}));
  // let glassBartxt = useRef(new THREE.MeshBasicMaterial({color:"white",wireframe:true}));

  // let tamtamtxt_1 = useRef(new THREE.MeshBasicMaterial({color:"white",wireframe:true}));
  // let tamtamtxt_2 = useRef(new THREE.MeshBasicMaterial({color:"white",wireframe:true}));
  useEffect(()=>
  {
   
    if(valContext.removeGlass)
    {
          glassBoxRef.current.material.visible = false;
          glassRef.current.material.visible = false;
    }
    else
    {
          glassBoxRef.current.material.visible = true;
          glassRef.current.material.visible = true;
    }

    if(valContext.rotateModel)
    {
      EnanblemaskRotation.current = true;
    }
    else
    {
      EnanblemaskRotation.current = false;
    }
  },[valContext.removeGlass,valContext.rotateModel])

  useFrame((state,delta)=>
  {
        if(EnanblemaskRotation.current)
        {
          maskRef.current.rotation.y += 0.01;
        }
        
        
  })
  let showInfo_1 = ()=>
  {
    valContext.setshowInfo_1(c=> c = !valContext.showInfo_1)
  }
  // return (
  //   <group {...props} dispose={null}>
  //     <mesh geometry={nodes.pied.geometry} material={piedtxt.current} position={[-41.033, 0.015, -27.952]} />
  //     <mesh geometry={nodes.trone.geometry} material={tronetxt.current} position={[-14.503, 2.033, -26.188]} />
  //     <mesh ref={glassRef} geometry={nodes.glass.geometry} material={glasstxt.current} position={[-41.179, 6.567, -28.002]} />
  //     <mesh geometry={nodes.bar.geometry} material={masktxt.current} position={[-41.049, 2.986, -25.205]} />
  //     <mesh ref={glassBoxRef} geometry={nodes.glassbar.geometry} material={glassBartxt.current} position={[-41.029, 6.293, -27.971]} />
  //     <mesh geometry={nodes.scene.geometry} material={wallgroundtxt.current} position={[0.01, 0.044, 0.044]} />
  //     <mesh geometry={nodes.pied2.geometry} material={socletxt.current} position={[-14.543, 1.078, -26.219]} />
  //     <mesh geometry={nodes.bar2.geometry} material={masktxt.current} position={[-14.585, 2.986, -20.437]} />
  //     <mesh ref={descRef} onClick={showInfo_1} geometry={nodes.desc.geometry} material={descTxt.current} position={[-17.31, 2.712, -23.462]} rotation={[-0.41, -0.508, -0.208]} />
  //     <mesh geometry={nodes.descselect.geometry} material={deselectTxt.current} position={[-17.31, 2.712, -23.462]} rotation={[-0.41, -0.508, -0.208]} />
  //     <mesh geometry={nodes.tamtam_1.geometry} material={tamtamtxt_1.current} position={[13.529, 2.612, -22.799]} />
  //     <mesh geometry={nodes.tamtam_2.geometry} material={tamtamtxt_2.current} position={[19.813, 5.632, -23.939]} scale={1.413} />
  //     <mesh geometry={nodes.tamtam_2_1.geometry} material={tamtamtxt_2.current} position={[7.293, 4.327, -26.362]} rotation={[0.972, -0.358, 0.475]} scale={1.413} />
  //     <mesh ref={maskRef} geometry={nodes.maskCube.geometry} material={maskCubetxt.current} position={[-41.034, 6.114, -27.974]}>
  //       <mesh geometry={nodes.cap_new.geometry} material={masktxt.current} position={[0.007, 0.359, 0.019]} />
  //       <mesh geometry={nodes.ears_new.geometry} material={masktxt.current} position={[0.006, 0.03, -0.285]} />
  //       <mesh geometry={nodes.face_new.geometry} material={masktxt.current} position={[0.006, -0.198, 0.095]} />
  //       <mesh  geometry={nodes.front_new.geometry} material={fronttxt.current} position={[0.011, 0.53, 0.1]} rotation={[-0.083, 0, 0]} scale={0.797} />
  //     </mesh>
  //     <mesh geometry={nodes.plafond.geometry} material={plafondtxt.current} position={[-0.127, 31.974, 0.044]} />
      
  //   </group>
  // )
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pied.geometry} material={piedtxt.current} position={[-41.033, 0.015, -27.952]} />
      <mesh ref={glassRef} geometry={nodes.glass.geometry} material={glasstxt.current} position={[-41.179, 6.567, -28.002]} />
      <mesh geometry={nodes.bar.geometry} material={masktxt.current} position={[-41.049, 2.986, -25.205]} />
      <mesh ref={glassBoxRef} geometry={nodes.glassbar.geometry} material={glassBartxt.current} position={[-41.029, 6.293, -27.971]} />
      <mesh geometry={nodes.scene.geometry} material={wallgroundtxt.current} position={[0.01, 0.044, 0.044]} />
      <mesh geometry={nodes.tamtam_1.geometry} material={tamtamtxt_1.current} position={[13.529, 2.612, -22.799]} />
      <mesh geometry={nodes.tamtam_2.geometry} material={tamtamtxt_2.current} position={[19.813, 5.632, -23.939]} scale={1.413} />
      <mesh geometry={nodes.tamtam_2_1.geometry} material={tamtamtxt_2.current} position={[7.293, 4.327, -26.362]} rotation={[0.972, -0.358, 0.475]} scale={1.413} />
      <mesh ref={maskRef} geometry={nodes.maskCube.geometry} material={maskCubetxt.current} position={[-41.034, 6.114, -27.974]}>
        <mesh geometry={nodes.cap_new.geometry} material={masktxt.current} position={[0.007, 0.359, 0.019]} />
        <mesh geometry={nodes.ears_new.geometry} material={masktxt.current} position={[0.006, 0.03, -0.285]} />
        <mesh geometry={nodes.face_new.geometry} material={masktxt.current} position={[0.006, -0.198, 0.095]} />
        <mesh geometry={nodes.front_new.geometry} material={fronttxt.current} position={[0.011, 0.53, 0.1]} rotation={[-0.083, 0, 0]} scale={0.797} />
      </mesh>
      <mesh geometry={nodes.plafond.geometry} material={plafondtxt.current} position={[-0.127, 31.974, 0.044]} />
    </group>
  )
}

export function CameraCompo(props)
{
        
        let camref = useRef(null);
        let orbitref = useRef(null);
        let activateOnce = useRef(false);
        // let cameraPosition =[{x:-35.7,y:25.7,z:-15},{x:-14,y:5.7,z:-5},{x:12,y:5.7,z:5}];
        let cameraPosition =[{x:-35.7,y:25.7,z:-15},{x:12,y:5.7,z:5}];
        let cameraLook=[{x:-40.7,y:5,z:-26},{x:12,y:5,z:-20}];
        // let cameraLook=[{x:-40.7,y:5,z:-26},{x:-14,y:5,z:-25},{x:12,y:5,z:-20}];
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

          setCampose();

        },[props.actualIndex])
        return  <>
                   
                   
                   <PerspectiveCamera ref={camref} position={actualCamPos}   makeDefault   />
                   <OrbitControls ref={orbitref} maxDistance={20} minDistance={8} 
                   maxAzimuthAngle ={ Math.PI*(1.4)+4} minAzimuthAngle = {Math.PI*(0.6)+3} 
                   maxPolarAngle={1.7} target={[-40.7,5,-26]} />
                   
                   

                </>

}

useGLTF.preload('/model_1.glb')
