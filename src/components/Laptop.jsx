import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import Page from './Page'
const Laptop = (props) => {
  const { nodes, materials } = useGLTF("/Laptop.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane005"
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.grey}
      />
      <mesh
        name="Plane005_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials.Black}
      />
      <mesh
        name="Plane007"
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        name="Plane007_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.grey}
      />
      <mesh
        name="Screen"
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
      >
    <Html 
    className="screen"
    position={[0,12.851,-5.38028]}
    style={{background:'red',
            width:'914px',
            height:'652px',
            overflowY:'auto'}}
    transform
    occlude

    >
    <Page />
    
    </Html>
      </mesh>
      <mesh
        name="Teclas"
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
      />
      <mesh
        name="Touchpad"
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
      />
      <mesh
        name="TouchpadBtns"
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
      />
    </group>
  );
}

useGLTF.preload("/Laptop.glb");
export default Laptop