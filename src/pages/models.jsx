import { Canvas,} from "@react-three/fiber"
import { OrbitControls, Grid, Stats, useFBX, Environment,useAnimations, useGLTF } from "@react-three/drei"
import { useControls } from 'leva'
import { Suspense,useEffect,useRef} from "react"
import {Fish} from '../components/Fish.jsx'

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}
useGLTF.preload("/models/Fish.gltf")
function App() {

    // const {scene} = useGLTF("models/a.glb");
    // console.log('dino',scene);
    
    // const fish = useFBX("models/Fish.fbx");
    // console.log('scene',fish);
    
    // const { actions } = useAnimations(animations, scene);
    // useEffect(()=>{
    //     if (fish.animations.length > 0) {
    //         const mixer = new THREE.AnimationMixer(fish);
    //         const action = mixer.clipAction(fish.animations[0]);
    //         action.play();
    //         mixerRef.current = mixer;
    //       }
    // },[fish])
    return (
        <>
            <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
                <Suspense fallback={<Loader />}>
                <ambientLight intensity={1} />
            {/* <primitive object={scene} scale={0.03} />*/}
            {/* <primitive object={fish} scale={0.03} position-x={-10} /> */}
            
                 <Fish/>
                </Suspense> 
                <Environment preset="sunset" />
                <OrbitControls />
                <axesHelper />
                <Grid
                    sectionSize={3}
                    sectionColor={"black"}
                    sectionThickness={1}
                    cellSize={1}
                    cellColor={"#6f6f6f"}
                    cellThickness={0.6}
                    infiniteGrid
                    fadeDistance={50}
                    fadeStrength={5}
                />
                <Stats />
            </Canvas>
        </>
    )
}

export default App