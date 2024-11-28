import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useControls } from "leva"

const Cube = (props) => {
    const ref = useRef()
    const { speed } = useControls({
        speed: {
            value: 0,
            min: -12,
            max: 12,
        },

    })

    useFrame((state, delta) => {

        console.log(delta)
        ref.current.rotation.y += delta * speed

    })

    return (
        <mesh {...props} ref={ref}>
            <boxGeometry />
            <meshStandardMaterial color={"white"} />
        </mesh>
    )
}

function App() {

    return (
        <>
            <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
                <OrbitControls />
                <Cube rotation-y={Math.PI / 4} />
                <ContactShadows
                    position-y={-2}
                    opacity={0.5}
                    blur={2}
                    color={"pink"}
                    scale={10}
                />
                <Environment preset="city" />
            </Canvas>
        </>
    )
}

export default App
