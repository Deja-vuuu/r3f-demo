
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Grid, Float, Environment, ScrollControls, Center, Scroll, Sky } from "@react-three/drei"
import PageOne from './components/pageOne'
import Computer from './components/computer'
import Background from './components/background'
import Motion from './components/motion'
import Spring from './components/spring'
import { useState } from "react"




const Animation = () => {
    const [color, setColor] = useState()

    return (
        <Canvas camera={{ position: [0, 3, 30], fov: 30 }} style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}
            shadows
        >
            <ScrollControls pages={3}>
                <Background setColor={setColor} />
                <directionalLight position={[-5, 5, 5]} intensity={0.5} />
                <Center>
                    <Float
                        rotationIntensity={1} floatIntensity={1} floatingRange={[-3, 3]}
                        speed={1}
                    >
                        <Computer />
                    </Float>
                </Center>
                <Scroll>
                    <PageOne />
                    {/* 第二页 */}
                    <Motion />
                    <Spring />
                </Scroll>




                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <Environment preset="lobby"
                //  background={true} 
                />
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
            </ScrollControls>
            {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
        </Canvas>

    )
}

export default Animation