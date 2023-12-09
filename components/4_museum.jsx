
import styles from '@/styles/4_museum.module.css'
import { useEffect, useRef } from 'react';
import Link from 'next/link';

import * as THREE from 'three'





export function Museum()
{
    let containerRef = useRef(null)
    useEffect(()=>
    {
 
    },[])
    return  < div ref={containerRef} className={styles.threeContainer} >
                    
                        VISITE DU MUSEE
            </div>
}



