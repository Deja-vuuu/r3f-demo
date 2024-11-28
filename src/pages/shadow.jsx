import { OrbitControls, RandomizedLight, AccumulativeShadows } from "@react-three/drei"
import { Canvas, } from "@react-three/fiber"

function App() {
    return (
        <>
            <Canvas camera={{ position: [0, 3, 3] }} shadows>
                <OrbitControls />
                {/* <SoftShadows /> */}

                <AccumulativeShadows
                    temporal
                    frames={35}
                    alphaTest={0.85}
                    scale={5}
                    position={[0, -0.499, 0]}
                    color="#EFBD4E"
                    
                >
                    <RandomizedLight
                        amount={4}
                        radius={9}
                        intensity={0.55}
                        ambient={0.25}
                        position={[5, 5, -10]}
                    />
                    <RandomizedLight
                        amount={4}
                        radius={5}
                        intensity={0.25}
                        ambient={0.55}
                        position={[-5, 5, -9]}
                    />
                </AccumulativeShadows>

                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow
                // shadow-mapSize={[2048, 2048]}
                >
                    {/* <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} /> */}
                </directionalLight>
                <directionalLight position={[-5, 5, 5]} intensity={0.5} color="red" castShadow

                // default
                />

                <mesh position={[1, 1, 1]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh rotation-y={Math.PI / 4} castShadow receiveShadow>
                    <boxGeometry />
                    <meshStandardMaterial color="white" />
                </mesh>

                <mesh rotation-x={-Math.PI / 2} position-y={-0.5} receiveShadow>
                    <planeGeometry args={[5, 5]} />
                    <meshStandardMaterial color="white" />
                </mesh>

                <group position-x={10}>
                    <mesh position={[1, 1, 1]} castShadow>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <mesh rotation-y={Math.PI / 4} castShadow receiveShadow>
                        <boxGeometry />
                        <meshStandardMaterial color="white" />
                    </mesh>

                    <mesh rotation-x={-Math.PI / 2} position-y={-0.5} receiveShadow>
                        <planeGeometry args={[5, 5]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                </group>

            </Canvas >
        </>
    )
}

export default App
