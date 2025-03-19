import { Physics } from "@react-three/rapier";
import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Controls } from "./controls";

const PhysicsPage = () => {
    const map = useMemo(
        () => [
            { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
            { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
            { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
            { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
            { name: Controls.jump, keys: ["Space"] },
        ],
        []
    );
    return (

        <KeyboardControls map={map}>
            <Canvas camera={{ position: [0, 6, 6], fov: 60 }} shadows>
                <color attach="background" args={["#171720"]} />
                <Physics debug>
                    <Experience />
                </Physics>
            </Canvas>
        </KeyboardControls>
    )
}

export default PhysicsPage