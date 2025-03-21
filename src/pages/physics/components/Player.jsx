import { RigidBody, RapierRigidBody } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Vector3 } from "three";
import { Controls } from "../controls";
const MOVEMENT_SPEED = 5;
const JUMP_FORCE = 8;
const ROTATION_SPEED = 5;

export const Player = () => {
  const rigidBody = useRef(null);
  const [, get] = useKeyboardControls();
  const impulse = new Vector3();
  const isInAir = useRef(false);
  useFrame(() => {
    const body = rigidBody.current;
    const curVel = body.linvel();
    if (!body) return;

    // 减小阻尼使下降更快
    body.setLinearDamping(0.1);  // 改为更小的值

    impulse.set(0, 0, 0);
    if (get()[Controls.forward]) impulse.z -= MOVEMENT_SPEED;
    if (get()[Controls.back]) impulse.z += MOVEMENT_SPEED;
    if (get()[Controls.left]) impulse.x -= MOVEMENT_SPEED;
    if (get()[Controls.right]) impulse.x += MOVEMENT_SPEED;
    if (get()[Controls.jump] && !isInAir.current) {
      console.log('body', body);
      impulse.y += JUMP_FORCE;
      isInAir.current = true;
      // 检查是否在地面上

      // if (body.isTouchingFloor()) {
      //   impulse.y += JUMP_FORCE;
      // }
    } else {
      impulse.y = curVel.y
      // isInAir.current = false;
    }

    body.setLinvel(impulse, true);
  });

  return (
    <RigidBody
      ref={rigidBody}
      type="dynamic"
      position={[0, 2, 0]}
      lockRotations={true}
      // colliders={"ball"}
      // mass={2}           // 增加质量
      // gravityScale={2.5} // 增加重力影响
      onCollisionEnter={({ other }) => {
        if (other.colliderObject.name === "ground") {
          isInAir.current = false;
        }
      }}
    >
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    </RigidBody>
  );
};



