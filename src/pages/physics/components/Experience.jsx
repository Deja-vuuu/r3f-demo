import { Grid, OrbitControls, Gltf } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Player } from "./Player";

export const Experience = () => {
  return (
    <>
      <directionalLight position={[-10, 10, 5]} intensity={0.4} castShadow />
      <directionalLight position={[10, 10, 5]} intensity={0.2} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Player />
      <RigidBody type="fixed" name="ground">
        <mesh position-y={-0.251} receiveShadow>
          <boxGeometry args={[32, 0.5, 32]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </RigidBody>
      <RigidBody
        // colliders={false}
        position-x={3}
        position-y={3}
        gravityScale={0.2}
        restitution={1.2}
        mass={1}
        colliders={"ball"}
      >
        <Gltf src="/models/ball.glb" castShadow />
      </RigidBody>
      <Grid
        sectionSize={3}
        sectionColor={"white"}
        sectionThickness={1}
        cellSize={1}
        cellColor={"#ececec"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={100}
        fadeStrength={5}
      />
    </>
  );
};
