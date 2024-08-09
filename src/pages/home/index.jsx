import { Canvas } from "@react-three/fiber"
import { useControls } from 'leva'
import * as THREE from "three"

function App() {
    const { position, meshColor } = useControls({
        position: [3, 3, 3],
        meshColor: '#f1e7ff',
    })
    console.log(position)
    return (
        <>
            <Canvas camera={{ position: position }}>
                <mesh position-x={-0.6}>
                    <boxGeometry />
                    <meshStandardMaterial
                        color="green"
                        side={THREE.FrontSide} // Optional as it's the default
                    />
                </mesh>
                <mesh position-y={2} position-x={-0.6}>
                    <boxGeometry />
                    <meshStandardMaterial color="green"
                    // side={THREE.DoubleSide} 
                    />
                </mesh>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 3]} intensity={1} />
                <directionalLight position={[0, 3, 3]} intensity={0.5} />
            </Canvas >
        </>
    )
}

export default App