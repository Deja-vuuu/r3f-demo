// import { RigidBody } from "@react-three/rapier";
// import { useKeyboardControls } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef, useEffect } from "react";
// import { Vector3 } from "three";
// import { Controls } from "../controls";
// const MOVEMENT_SPEED = 5;
// const JUMP_FORCE = 8;
// const ROTATION_SPEED = 5;

// export const Player = () => {
//   const rigidBody = useRef();
//   const [, get] = useKeyboardControls();
//   const impulse = new Vector3();

//   useEffect(() => {
//     console.log('Initial RigidBody:', rigidBody.current);
//   }, []);

//   useFrame((state) => {
//     const body = rigidBody.current;
//     if (!body) {
//       console.log('RigidBody not initialized');
//       return;
//     }

//     console.log('body', body);


//     impulse.set(0, 0, 0);
//     if (get()[Controls.forward]) impulse.z -= MOVEMENT_SPEED;
//     if (get()[Controls.back]) impulse.z += MOVEMENT_SPEED;
//     if (get()[Controls.left]) impulse.x -= MOVEMENT_SPEED;
//     if (get()[Controls.right]) impulse.x += MOVEMENT_SPEED;

//     body.applyImpulse(impulse, true);
//   });

//   return (
//     <RigidBody
//       ref={rigidBody}
//       type="dynamic"
//       position={[0, 2, 0]}
//       mass={1}
//     >
//       <mesh castShadow>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color="yellow" />
//       </mesh>
//     </RigidBody>
//   );
// };




import { RigidBody, RapierRigidBody } from "@react-three/rapier";
import { useRef, useEffect } from "react";

const Player = () => {
  const rigidBody = useRef(null);

  useEffect(() => {


    if (rigidBody.current) {
      console.log('rigidBody.current');
      console.log('rigidBody.current', rigidBody.current);
      // A one-off "push"
      rigidBody.current.applyImpulse({ x: 0, y: 10, z: 0 }, true);

      // A continuous force
      rigidBody.current.addForce({ x: 0, y: 10, z: 0 }, true);

      // A one-off torque rotation
      rigidBody.current.applyTorqueImpulse({ x: 0, y: 10, z: 0 }, true);

      // A continuous torque
      rigidBody.current.addTorque({ x: 0, y: 10, z: 0 }, true);
    }
  }, []);

  return (
    <RigidBody ref={rigidBody}>
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    </RigidBody>
  );
};


export {
  Player
};