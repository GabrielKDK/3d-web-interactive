import React, { Suspense } from 'react'
import* as THREE from 'three'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei"
import { TextureLoader } from 'three'
import Laptop from './Laptop'
const texture = new TextureLoader().load('./space.png')
export default function Scene (){
    return(
        <div className='container'>
        <Canvas 
            background={texture}
            camera={{position:[0,6,25],fov:85}}
            gl={{
                outputEncoding: THREE.sRGBEncoding,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure:3.4
            }}>
            <Suspense fallback={null}>
            <Laptop/>
            </Suspense>
            <directionalLight position={[10,10,10]} color={'#ffffff'} intensity={1.3}/>
            <ambientLight intensity={0.5} color={'#ffffff'}/>
            <OrbitControls target={[0,5,1]}/>
        </Canvas>
        </div>
    )
}