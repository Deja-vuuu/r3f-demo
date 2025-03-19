import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

const AinmaBox = ({ boxPositions }) => {
    const meshRef = useRef()
    useFrame(({ clock }) => {
        const seconds = parseInt(clock.getElapsedTime());
        const targetPosition = boxPositions[seconds % boxPositions.length];
        const target = new THREE.Vector3(
            targetPosition.x,
            targetPosition.y,
            targetPosition.z
        )

        meshRef.current.position.lerp(
            target, 0.05
        )
    })
    return (
        <mesh
            position-x={boxPositions[0].x}
            position-y={boxPositions[0].y}
            position-z={boxPositions[0].z}
            receiveShadow ref={meshRef} >
            <boxGeometry />
            <meshStandardMaterial color="green" metalness={0.9} roughness={0.6} />
        </mesh>
    )
}

export default AinmaBox