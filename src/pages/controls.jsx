import { Environment, OrbitControls, useGLTF,PresentationControls } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

import { Lighthouse } from "@/components/Lighthouse";


// console.log(Lighthouse);



const Controls = () => {
    return <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
        {/* <OrbitControls 
        //  enableZoom={false}
        
        maxAzimuthAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={15}
        />
       
        <Lighthouse position={[0, 0, -1]} scale={[0.2, 0.2, 0.2]} /> */}
         <PresentationControls
              global={false} // Spin globally or by dragging the model
              cursor={true} // Whether to toggle cursor style on drag
            //   snap={true} // Snap-back to center (can also be a spring config)
              speed={1} // Speed factor
              zoom={1} // Zoom factor when half the polar-max is reached
              rotation={[0, 0, 0]} // Default rotation
              polar={[0, Math.PI / 2]} // Vertical limits
              azimuth={[-Infinity, Infinity]} // Horizontal limits
              config={{ mass: 2, tension: 250, friction: 16 }} // Spring config
            >
              <Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} />
            </PresentationControls>;
        <Environment preset="city" />
    </Canvas>
}

export default Controls;