import { useGLTF,useHelper,useAnimations,Html } from "@react-three/drei"
import { useRef,useEffect,useState } from "react";
import * as THREE from 'three'
import "./model.css"


function Model({path,position,name,labelOffset}) {
    if(!path) return null;
    const groupRef = useRef();
    const {scene,animations} = useGLTF(path);
    const { actions } = useAnimations(animations, scene)
    const [hidden, setHidden] = useState(false);
       // 添加模型加载后的处理
    useEffect(()=>{
        if (animations.length > 0) {
            // 从animations随机找一个动画播放
            const animation = animations[Math.floor(Math.random() * animations.length)].name;
            actions[animation].fadeIn(0.5).play();
            // // 循环播放
            actions.clampWhenFinished = true;
            actions.loop = THREE.LoopOnce;
          }
    },[])
    // useHelper(groupRef, THREE.BoxHelper, 'green')
    return (
        <group ref={groupRef} position={position}>
             {/* <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh> */}
            <primitive object={scene} />
            <Html occlude onOcclude={setHidden} position={labelOffset}>
                <div className={`label noselect ${hidden ? "label--hidden" : ""}`}>
                <div className="label__name">{name}</div>
                </div>
            </Html>
        </group>
    )
}

export default Model