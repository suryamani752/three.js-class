import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5] }}>
      <OrbitControls />

      {/* lights: inke bina standardMaterial kala dikhega */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[2, 5, 2]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* 1. sphere (shiny green ball) */}
      <mesh position={[-1.5, 0, 0]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="limegreen" roughness={0.1} />
      </mesh>

      {/* 2. red metal donut */}
      <mesh position={[1.5, 0, 0]} castShadow>
        {/* raduis,  tubeThickness, radialsegments, tubularsegments */}
        <torusGeometry args={[0.8, 0.2, 16, 32]} />
        <meshStandardMaterial color="tomato" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </Canvas>
  );
}

export default App;
