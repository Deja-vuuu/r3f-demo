import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid, Stats, useFBX, Environment, useAnimations, useHelper, } from '@react-three/drei'
import Model  from './Models'
import { useRef } from 'react'

const models = [
    {
        name: 'Cow',
        path: 'models/html/Cow.glb',
        position: [-15, 0, 0],
        labelOffset: [0, 8, 0],
    },
    {
        name: 'Pig',
        path: 'models/html/Pig.glb',
        position: [-10, 0, 0],
        labelOffset: [0, 8, 0],
    },
    {
        name: 'Horse',
        path: 'models/html/Horse.glb',
        position: [-5, 0, 0],
        labelOffset: [0, 8, 0],
    },
    {
        name: 'Sheep',
        path:'models/html/Sheep.glb',
        position: [0, 0, 0], labelOffset: [0, 8, 0],

    },
    {
        name: 'Pug',
        path:'models/html/Pug.glb',
        position: [5, 0, 0], labelOffset: [0, 0, 0],
    },
    {
        name: 'Zebra',
        path:'models/html/Zebra.glb',
        position: [10, 0, 0], labelOffset: [0, 0, 0],
    },
    {
        name: 'Llama',
        path:'models/html/Llama.glb',
        position: [15, 0, 0], labelOffset: [0, 0, 0],
    },

]


const Html = () => {
    const groupRef = useRef();
    return (
        <>
            <Canvas camera={{ position: [-20, 10, 10], fov: 30 }}>
                
              
                {/* <ambientLight intensity={0.5} /> */}
           
                {
                    models.map((model, index) => (
                        <Model key={index} {...model} />
                    ))
                }
              
                <OrbitControls />
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
               <Environment preset="sunset" />
                <axesHelper />
                <Stats />
            </Canvas>
        </>
    )
}
export default Html