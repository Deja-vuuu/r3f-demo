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


  useEffect(() => {


    if (rigidBody.current) {
      console.log('rigidBody.current');
      console.log('rigidBody.current', rigidBody.current);
      // A one-off "push"
      rigidBody.current.applyImpulse({ x: 0, y: 100, z: 0 }, true);

      // A continuous force
      rigidBody.current.addForce({ x: 0, y: 100, z: 0 }, true);

      // A one-off torque rotation
      rigidBody.current.applyTorqueImpulse({ x: 0, y: 100, z: 0 }, true);

      // A continuous torque
      rigidBody.current.addTorque({ x: 0, y: 100, z: 0 }, true);
    }
  }, []);

  useFrame(() => {
    const body = rigidBody.current;
    if (!body) return;

    // 设置阻尼防止无限滑动
    body.setLinearDamping(0.95);

    impulse.set(0, 0, 0);
    if (get()[Controls.forward]) impulse.z -= MOVEMENT_SPEED;
    if (get()[Controls.back]) impulse.z += MOVEMENT_SPEED;
    if (get()[Controls.left]) impulse.x -= MOVEMENT_SPEED;
    if (get()[Controls.right]) impulse.x += MOVEMENT_SPEED;
    console.log('impulse', impulse);

    // 确保力的大小合适
    impulse.multiplyScalar(0.5);
    body.applyImpulse({
      x: impulse.x,
      y: 0,
      z: impulse.z,
    }, true);
  });

  return (
    <RigidBody
      ref={rigidBody}
      type="dynamic"
      position={[0, 2, 0]}
      mass={1}
      friction={0.7}      // 添加摩擦力
      restitution={0.2}   // 添加弹性
      linearDamping={0.95} // 添加线性阻尼
      angularDamping={0.95} // 添加角度阻尼
    >
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    </RigidBody>
  );
};



