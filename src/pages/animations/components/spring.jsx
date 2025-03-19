
import { useThree } from "@react-three/fiber";
import { Dodecahedron } from "@react-three/drei";
import { useEffect, useState } from "react";
import { MeshDistortMaterial } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)
const Spring = () => {
    const [variant, setVariant] = useState("closed");
    const viewport = useThree((state) => state.viewport);
    const { x, y, rotationX, rotationZ } = useSpring({
        from: {
            x: -1,
            y: 1,
            rotationX: 0,
            rotationZ: 0,
        },
        to: [
            {
                x: 1.5,
                y: 2,
                delay: 500,
            },
            {
                x: -2,
                y: 1,
                rotationX: Math.PI,
                rotationZ: Math.PI,
                delay: 50,
            },
            {
                x: 2,
                y: 1,
                delay: 50,
            },
            {
                x: -1,
                y: -1,
                rotationX: Math.PI * 2,
                rotationZ: Math.PI * 2,
                delay: 50,
            },
            {
                x: 1,
                y: -1,
                rotationX: Math.PI * 3,
                rotationZ: Math.PI * 2,
                delay: 50,
            },
            {
                x: -1,
                y: 1,
                rotationX: 0,
                rotationZ: 0,
                delay: 500,
            },
        ],
        config: {
            mass: 4,
            tension: 600,
            friction: 80,
        },
        loop: true,
        immediate: true,
    });

    // const springs = useSpring({
    //     color: clicked ? '#569AFF' : '#ff6d6d',
    // })
    return (
        <group position-y={-2 * viewport.height} position-z={1}>
            <animated.group
                position-x={x}
                position-y={y}
                rotation-x={rotationX}
                rotation-z={rotationZ}
            >
                <mesh>
                    <sphereGeometry args={[2.5, 64, 32]} />
                    <AnimatedMeshDistortMaterial
                        speed={5}
                        distort={0.5}
                        color={'#569AFF'}
                    />
                </mesh>
            </animated.group>

        </group>

    );
};
export default Spring
