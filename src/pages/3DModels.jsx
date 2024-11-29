import { Canvas, } from "@react-three/fiber"
import { OrbitControls, Grid, Stats, useFBX, Environment } from "@react-three/drei"
import { useControls } from 'leva'
import { Suspense } from "react"

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

function App() {
    const { position, meshColor } = useControls({
        position: [4, 0, 4],
        meshColor: '#f1e7ff',
    })

    const dino = useFBX("models/Idle.fbx");
    const fish = useFBX("models/Fish.fbx");

    return (
        <>
            <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>

                <Suspense fallback={<Loader />}>
                <ambientLight intensity={1} />
                    <primitive object={dino} scale={0.03} />
                    <primitive object={fish} scale={0.03} position-x={-10} />

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