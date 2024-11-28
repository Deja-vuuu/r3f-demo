import { Canvas, } from "@react-three/fiber"
import { OrbitControls, Grid, Stats, useHelper } from "@react-three/drei"
import { useControls } from 'leva'
import * as THREE from "three"
import { useRef } from "react"

const Light = () => {
    const lightRef = useRef()
    const help = useHelper(lightRef, THREE.PointLightHelper, 0.5, 'red')
    return <pointLight
        ref={lightRef}
        position={[1, 1, 0]}
        intensity={0.5}
        distance={3}
        decay={2}
        color={'yellow'} />
}

function App() {
    const { position, meshColor } = useControls({
        position: [4, 0, 4],
        meshColor: '#f1e7ff',
    })
    console.log(position)



    return (
        <>
            <Canvas>
                {/* <OrthographicCamera position={position} makeDefault fov={50} /> */}
                <mesh position-x={-0.6}>
                    <boxGeometry />
                    <meshStandardMaterial
                        color={meshColor}
                    // side={THREE.FrontSide}
                    />
                </mesh>
                <mesh position-y={2} position-x={-0.6}>
                    <boxGeometry />
                    <meshStandardMaterial color="green"
                    // side={THREE.DoubleSide}
                    />
                </mesh>
                <ambientLight intensity={0.5} />
                {/*<directionalLight position={[0, 0, 3]} intensity={1}/>*/}
                {/*<directionalLight position={[0, 3, 3]} intensity={0.5}/>*/}
                <Light />
                <OrbitControls />
                <axesHelper />
                {/*<gridHelper args={[10, 10, 'red', 'yellow']}/>*/}
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