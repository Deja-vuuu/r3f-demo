import { OrbitControls, useHelper, SpotLight } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import { useControls } from "leva"
import { Canvas, } from "@react-three/fiber"

import * as THREE from "three"

const Lights = () => {
    const ref = useRef()
    // const helper = useHelper(ref, THREE.PointLightHelper, 0.5, "red")
    const helper = useHelper(ref, THREE.SpotLightHelper, "red")
    const { color, distance, attenuation, angle, anglePower } = useControls({
        color: "#876ae5",
        distance: 6,
        attenuation: 2.2,
        angle: 1,
        anglePower: 1,
    })
    // const [randomColor, setRandomColor] = useState("#ff0000")
    // // 生成随机raga颜色的方法
    // const randomColorGenerator = () => {
    //     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16) // 生成随机颜色
    //     setRandomColor(randomColor) // 更新状态

    // }
    // useEffect(() => {
    //     const intervalId = setInterval(randomColorGenerator, 500) // 每隔1秒生成一次随机颜色
    //     return () => clearInterval(intervalId)
    // }, [])
    return (
        <>
            {/* <pointLight
                ref={ref}
                position={[1, 1, 0]}
                color={randomColor}
                intensity={1}
                decay={5}
                distance={3}
            /> */}
            <SpotLight
                ref={ref}
                color={color}
                distance={distance}
                angle={angle}
                attenuation={attenuation}
                anglePower={anglePower}
            />

            {/* <hemisphereLight color={'deepskyblue'} groundColor={'sandybrown'} intensity={0.5} position={[0, 1, 0]} /> */}
        </>
    )
}

function App() {
    return (
        <>
            <Canvas camera={{ position: [0, 3, 3] }}>
                <Lights />
                <OrbitControls />

                <mesh rotation-y={Math.PI / 4}>
                    <boxGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>

                <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
                    <planeGeometry args={[5, 5]} />
                    <meshStandardMaterial color="white" clearcoat={0.5} reflectivity={0.8} />
                </mesh>
            </Canvas>
        </>
    )
}

export default App