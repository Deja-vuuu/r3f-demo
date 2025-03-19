import { Center, useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion-3d";

const Computer = () => {
    const { scene, animations } = useGLTF('/models/computer.glb')
    console.log('scene', animations);

    const modelRef = useRef();
    const { actions } = useAnimations(animations, modelRef)
    console.log('actions----', actions);
    useEffect(() => {
        console.log('actions', actions);
        console.log('Animations:', animations.map(anim => anim.name));
        actions['Animation']?.reset().fadeIn(0.5).play();
        return () => actions['Animation'].fadeOut(0.5);
    }, [actions]);

    return <motion.mesh>
        <primitive
            object={scene}
            ref={modelRef}
            position={[0, 0, 0]}
        />
    </motion.mesh>
}
useGLTF.preload('/models/computer.glb')
export default Computer;