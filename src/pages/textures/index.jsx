
import { Canvas, } from "@react-three/fiber"
import { Environment,OrbitControls } from "@react-three/drei"
import { Box } from "./box";
const Textures = () => {
   
    
    return (
        <>
            <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
       
                 <Box></Box>
                 <OrbitControls />
                 <Environment preset="sunset" />
            </Canvas>
        </>
    );
}

export default Textures;