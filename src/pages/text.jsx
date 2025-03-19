import { Canvas } from "@react-three/fiber"
import { Grid, OrbitControls, Text3D,useTexture,Environment,Center} from "@react-three/drei"
import * as THREE from "three"
const Com = ()=>{
    const texture = useTexture("textures/Fabric_Rug_009_basecolor.png");
    return  <Text3D font='font/san_Regular.json'  
    // rotation-y={THREE.MathUtils.degToRad(30)}
    bevelEnabled
    bevelThickness={0.1}
    // bevelSize={0.1}
    bevelSegments={10}
    >
    他时若遂凌云志，敢笑黄巢不丈夫。

    {/* <meshMatcapMaterial matcap={texture} /> */}
    <meshStandardMaterial 
    // map={texture} 
    color="#fff"
    />
</Text3D>
}

const Text = () => {
   
    return <Canvas
        camera={{ position: [0, 0, 10] }}
        fov={42}
    >
        <Center>
        <Com/>
        </Center>
        <Environment preset="sunset" />
        <axesHelper />
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
    </Canvas>
}



export default Text