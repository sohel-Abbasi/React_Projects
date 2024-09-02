import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
      <div className="navbar line text-[10px] font-[400] absolute flex gap-5 py-2 top-0 left-1/2 -translate-x-1/2">
        {[
          "iPhone",
          "iPad",
          "services",
          "mac",
          "products",
          "iwatch",
          "macbook",
        ].map((e) => (
          <a href="#" className="text-white ">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute top-9 flex flex-col items-center text-white left-1/2 -translate-x-1/2 ">
        <h3 className="masked text-[40px] tracking-tighter font-[700]">
          macbook Pro.
        </h3>
        <h5 className=" text-[9px]">Oh so pro !</h5>
        <p className=" text-[9px] text-center w-3/2">
          Lorem ipsum dolor sit adipisicing elit. Est nulla obcaecati voluptate
          tenetur.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        {/* <OrbitControls /> */}
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
