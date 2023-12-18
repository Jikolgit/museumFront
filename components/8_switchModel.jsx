import styles from '@/styles/5_popup.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { CameraCompo, Model } from './4_Model_1';
import { CameraCompo_2, Model_2 } from './6_Model_2';

import { menuContexte } from '@/pages/visite';
import { InfoContainer, SideMenu, SideMenu2, SubMenu } from './7_MuseeSideMenu';

export function Switch3DModel(props)
{
    let content = useRef(
    <>
            <Model />
            {/* <CameraCompo actualIndex={props._cameraIndex} />   */}
    </>);
    if(props.index == 1)
    {
        content.current = <>
                                    <Model />
                                    <CameraCompo actualIndex={props._cameraIndex} />  
                            </>
    }
    if(props.index == 2)
    {
        content.current =   <>
                                    <Model_2 />
                                    <CameraCompo_2 actualIndex={props._cameraIndex} />
                            </>
    }

    return content.current;
}


export function SwitchSideMenu(props)
{
    let valContexte = useContext(menuContexte);
    let content = useRef(
    <>
           <InfoContainer state={valContexte.showInfo_1} />
            <SideMenu />
            <SubMenu state={valContexte.showSubMenuState} /> 
    </>);
    if(props.index == 1)
    {
        content.current = <>
                                    <InfoContainer state={valContexte.showInfo_1} />
                                    <SideMenu open={false} expo={valContexte.exposition} />
                                    <SubMenu state={valContexte.showSubMenuState} /> 
                            </>
    }
    if(props.index == 2)
    {
        content.current =   <>
                                    <InfoContainer state={valContexte.showInfo_1} />
                                    <SideMenu2 open={false} expo={valContexte.exposition} />
                                    <SubMenu state={valContexte.showSubMenuState} />
                            </>
    }

    return content.current;
}
