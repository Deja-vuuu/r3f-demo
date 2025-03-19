import { useTexture } from "@react-three/drei";
import * as THREE from  'three'
    
export const Box = () => {

    const props = useTexture({
        map: "textures/Fabric_Rug_009_basecolor.png",
        normalMap: "textures/Fabric_Rug_009_normal.png",
        roughnessMap: "textures/Fabric_Rug_009_roughness.png",
        aoMap: "textures/Fabric_Rug_009_ambientOcclusion.png",
      });
    // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.rotation = Math.PI / 6;


    const texture = useTexture("https://makio135.com/matcaps/64/637598_B7C4D3_22293A_9BACBF-64px.png");
    const standardTexture = useTexture("textures/Fabric_Rug_009_basecolor.png");
    return (
    <>
        <mesh>
            {/* <boxGeometry /> */}
            {/* 画一个球 */}
            <sphereGeometry />
            <meshStandardMaterial map={standardTexture}/>
            <boxGeometry />
            {/* <meshMatcapMaterial matcap={texture} /> */}
        </mesh>
    </>
    );

    
};




// Fabric_Rug_009_height.png


