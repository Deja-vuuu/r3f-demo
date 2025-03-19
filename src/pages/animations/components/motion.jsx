import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
const Teeth = () => {
    const [variant, setVariant] = useState("closed");
    const viewport = useThree((state) => state.viewport);
    useEffect(() => {
        const interval = setInterval(() => {
            setVariant((variant) => (variant === "opened" ? "closed" : "opened"));
        }, 1500);
        return () => clearInterval(interval);
    });
    return (
        <group position-y={-viewport.height} position-z={1}>
            <MotionConfig
                transition={{
                    type: "spring",
                    mass: 5,
                    stiffness: 500,
                    damping: 42,
                }}
            >
                <motion.group animate={variant}>
                    <motion.mesh
                        position-x={-1}
                        position-y={-1}
                        variants={{
                            closed: {
                                y: -1,
                                rotateY: 0,
                            },
                            opened: {
                                scale: 1.1,
                                y: 0,
                                rotateY: Math.PI / 2,
                            },
                        }}
                    >
                        <coneGeometry args={[0.5, 1, 4]} />
                        <motion.meshStandardMaterial
                            color="#ffffff"
                            variants={{
                                closed: {
                                    color: "#ffffff",
                                },
                                opened: {
                                    color: "#7564a4",
                                },
                            }}
                        />
                    </motion.mesh>
                    <motion.mesh
                        position-x={0}
                        position-y={1}
                        rotation-x={Math.PI}
                        variants={{
                            closed: {
                                y: 1,
                                rotateY: 0,
                            },
                            opened: {
                                scale: 1.2,
                                y: 0,
                                rotateY: Math.PI / 2,
                            },
                        }}
                    >
                        <coneGeometry args={[0.5, 1, 4]} />
                        <motion.meshStandardMaterial
                            color="#ffffff"
                            variants={{
                                closed: {
                                    color: "#ffffff",
                                },
                                opened: {
                                    color: "#7c5ecf",
                                },
                            }}
                        />
                    </motion.mesh>
                    <motion.mesh
                        position-x={1}
                        position-y={-1}
                        variants={{
                            closed: {
                                y: -1,
                                rotateY: 0,
                            },
                            opened: {
                                scale: 1.1,
                                y: 0,
                                rotateY: Math.PI / 2,
                            },
                        }}
                    >
                        <coneGeometry args={[0.5, 1, 4]} />
                        <motion.meshStandardMaterial
                            color="#ffffff"
                            variants={{
                                closed: {
                                    color: "#ffffff",
                                },
                                opened: {
                                    color: "#6232e6",
                                },
                            }}
                        />
                    </motion.mesh>
                </motion.group>
            </MotionConfig>
        </group>

    );
};
export default Teeth
