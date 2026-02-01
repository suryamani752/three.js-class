import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    // canvas: ye humara 3D world ka darwaza (portal hai)
    // iske andar jo bhi hoga, wo 3D space mein hoga

    <Canvas camera={{ position: [3, 3, 3] }}>
      {/* canvas prop: "camera" -> hum camera ko thoda diagonal rakh rahe hai (x = 3, y = 3, z = 3) 
      taaki box ka corner dikhe, shirf front face nahi*/}
      {/* Lights: Bina light ke sab kuch kala dikhega
      TODO: NEXT PART MEIN DETAIL MEIN SIKHEGE */}

      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      {/* orbitControls component -> bas isko yaha rakhne se interaction enable ho jaayega.
      enableZoom={true} by default hota hai  */}
      <OrbitControls />

      {/* ye ek 3D object hai */}
      <mesh rotation={[0.5, 0.5, 0]}>
        {/* rotation: box ko thoda tilted dikhane ke liye X and Y axis par thoda ghumaya hai */}
        {/* Geometry: Object ka shape (BOX) */}
        <boxGeometry args={[2, 2, 2]} />

        {/* Material: Object ka color/look  */}
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </Canvas>
  );
}

export default App;
