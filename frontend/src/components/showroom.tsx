import { Canvas } from '@react-three/fiber';
import {useGLTF, Stage, PresentationControls } from "@react-three/drei"


//change any
function Model(props:any) {
    const {scene} = useGLTF("/Poap.glb");
    return <primitive object={scene} {...props} />
  }

const Showroom = () => {
    return (
        <Canvas dpr={[1,2]} shadows={'basic'} camera={{fov: 45}} style={{"position": "relative"}}>
                <color attach="background" args={['#001220']} />
                <PresentationControls speed={1.5} global zoom={.5}>
                  <Stage /* environment={"studio"} */>
                    <Model scale={0.01} />
                  </Stage>

                </PresentationControls>
              </Canvas>
    )
}

export default Showroom