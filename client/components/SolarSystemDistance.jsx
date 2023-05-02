import React, { Suspense, useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Text, Billboard } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { DoubleSide } from 'three'
import { Provider, useSelector } from 'react-redux'
import { selectPlanet } from '../slices/planet'
import Navbar from './Navbar'
import store from '../store'
import ScaleSystemSecondNav from './ScaleSystemSecondNav'

function SolarSystemMaker() {
  const planet = useSelector(selectPlanet)
  //const dispatch = useDispatch()

  const sunMap = useLoader(TextureLoader, '/images/sun2.jpg')
  const earthMap = useLoader(TextureLoader, '/images/earth.jpg')
  const mercuryMap = useLoader(TextureLoader, '/images/mercury.jpg')
  const venusMap = useLoader(TextureLoader, '/images/venus.jpg')
  const marsMap = useLoader(TextureLoader, '/images/mars.jpg')
  const jupiterMap = useLoader(TextureLoader, '/images/jupiter.jpg')
  const saturnMap = useLoader(TextureLoader, '/images/saturn.jpg')
  const uranusMap = useLoader(TextureLoader, '/images/uranus2.jpg')
  const neptuneMap = useLoader(TextureLoader, '/images/neptune.jpg')
  const moonMap = useLoader(TextureLoader, '/images/moon.jpg')
  const ringMap = useLoader(TextureLoader, '/images/ring2.png')
  //const plutoMap = useLoader(TextureLoader, 'images/pluto.jpg')

  const sunMesh = useRef()
  const mercuryMesh = useRef()
  const pin1 = useRef()
  const venusMesh = useRef()
  const pin2 = useRef()
  const earthMesh = useRef()
  const pin3 = useRef()
  const marsMesh = useRef()
  const pin4 = useRef()
  const jupiterMesh = useRef()
  const pin5 = useRef()
  const saturnMesh = useRef()
  const pin6 = useRef()
  const ringMesh = useRef()
  const uranusMesh = useRef()
  const pin7 = useRef()
  const neptuneMesh = useRef()
  const pin8 = useRef()
  //const plutoMesh = useRef()
  //const pin9 = useRef()

  const ringmercuryMesh = useRef()
  const ringvenusMesh = useRef()
  const ringearthMesh = useRef()
  const ringmarsMesh = useRef()
  const ringjupiterMesh = useRef()
  const ringsaturnMesh = useRef()
  const ringuranusMesh = useRef()
  const ringneptuneMesh = useRef()
  //const ringplutoMesh = useRef()

  useFrame(() => {
    sunMesh.current.rotation.y += 0.01 / 27
    mercuryMesh.current.rotation.y += 0.01 / 58.8
    pin1.current.rotation.y += 0.001 * 4.2
    venusMesh.current.rotation.y -= 0.01 / 244
    pin2.current.rotation.y += 0.001 * 1.6
    earthMesh.current.rotation.y += 0.01
    pin3.current.rotation.y += 0.001
    marsMesh.current.rotation.y += 0.01 / 1.03
    pin4.current.rotation.y += 0.001 * 0.53
    jupiterMesh.current.rotation.y += 0.01 / 0.41
    pin5.current.rotation.y += 0.001 * 0.08
    saturnMesh.current.rotation.y += 0.01 / 0.44
    pin6.current.rotation.y += 0.001 * 0.03
    ringMesh.current.rotation.x = 1.56

    uranusMesh.current.rotation.y -= 0.01 / 0.72
    pin7.current.rotation.y += 0.001 * 0.01
    neptuneMesh.current.rotation.y += 0.01 / 0.67
    pin8.current.rotation.y += 0.001 * 0.006
    //plutoMesh.current.rotation.y += 0.01 / 6.41
    //pin9.current.rotation.y += 0.001 / 248

    ringmercuryMesh.current.rotation.x = 1.569
    ringvenusMesh.current.rotation.x = 1.569
    ringearthMesh.current.rotation.x = 1.569
    ringmarsMesh.current.rotation.x = 1.569
    ringjupiterMesh.current.rotation.x = 1.569
    ringsaturnMesh.current.rotation.x = 1.569
    ringuranusMesh.current.rotation.x = 1.569
    ringneptuneMesh.current.rotation.x = 1.569
    //ringplutoMesh.current.rotation.x = 1.569
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight intensity={3} position={[0, 0, 0]} />

      {/* Sun */}
      <mesh ref={sunMesh}>
        <sphereGeometry args={[11]} />
        <meshStandardMaterial map={sunMap} />

        <mesh ref={ringmercuryMesh} position={[0, 0, 0]}>
          <torusGeometry args={[419.95, 0.5, 30, 100]} />
          <meshStandardMaterial
            color={planet === 'mercury' ? '#39FF14' : 'white'}
          />
        </mesh>
        <mesh ref={ringvenusMesh} position={[0, 0, 0]}>
          <torusGeometry args={[803.91, 0.5, 30, 100]} />
          <meshStandardMaterial
            color={planet === 'venus' ? '#39FF14' : 'white'}
          />
        </mesh>

        <mesh ref={ringearthMesh} position={[0, 0, 0]}>
          <torusGeometry args={[1115.88, 0.5, 30, 100]} />
          <meshStandardMaterial
            color={planet === 'earth' ? '#39FF14' : 'white'}
          />
        </mesh>
        <mesh ref={ringmarsMesh} position={[0, 0, 0]}>
          <torusGeometry args={[1703, 0.5, 30, 100]} />
          <meshStandardMaterial
            color={planet === 'mars' ? '#39FF14' : 'white'}
          />
        </mesh>
        <mesh ref={ringjupiterMesh} position={[0, 0, 0]}>
          <torusGeometry args={[5807, 0.5, 30, 100]} />
          <meshStandardMaterial
            color={planet === 'jupiter' ? '#39FF14' : 'white'}
          />
        </mesh>
        <mesh ref={ringsaturnMesh} position={[0, 0, 0]}>
          <torusGeometry args={[10666, 0.5, 30, 100]} />
          <meshStandardMaterial
            color={planet === 'saturn' ? '#39FF14' : 'white'}
          />
        </mesh>
        <mesh ref={ringuranusMesh} position={[0, 0, 0]}>
          <torusGeometry args={[21477, 0.5, 30, 100]} />
          <meshStandardMaterial
            color={planet === 'uranus' ? '#39FF14' : 'white'}
          />
        </mesh>
        <mesh ref={ringneptuneMesh} position={[0, 0, 0]}>
          <torusGeometry args={[34556, 0.5, 30, 100]} />
          <meshStandardMaterial
            color={planet === 'neptune' ? '#39FF14' : 'white'}
          />
        </mesh>
        {/* <mesh ref={ringplutoMesh} position={[0, 0, 0]}>
          <torusGeometry args={[44035, 0.5, 30, 100]} />
          <meshStandardMaterial
            color={planet === 'pluto' ? '#39FF14' : 'white'}
          />
        </mesh> */}
      </mesh>

      {/* Mercury */}
      <mesh ref={pin1} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[419.95, 100, 0]}
        >
          <Text
            fontSize={50}
            color={planet === 'mercury' ? '#39FF14' : 'white'}
          >
            Mercury
          </Text>
        </Billboard>
        <mesh ref={mercuryMesh} position={[419.95, 0, 0]}>
          <sphereGeometry args={[0.04]} />
          <meshStandardMaterial map={mercuryMap} />
        </mesh>
      </mesh>

      {/* Venus */}
      <mesh ref={pin2} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[803.91, 100, 0]}
        >
          <Text fontSize={70} color={planet === 'venus' ? '#39FF14' : 'white'}>
            Venus
          </Text>
        </Billboard>
        <mesh ref={venusMesh} position={[803.91, 0, 0]}>
          <sphereGeometry args={[0.09]} />
          <meshStandardMaterial map={venusMap} />
        </mesh>
      </mesh>

      {/* Earth */}
      <mesh ref={pin3} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[1115.88, 100, 0]}
        >
          <Text fontSize={90} color={planet === 'earth' ? '#39FF14' : 'white'}>
            Earth
          </Text>
        </Billboard>
        <mesh ref={earthMesh} position={[1115.88, 0, 0]}>
          <sphereGeometry args={[0.095]} />
          <meshStandardMaterial map={earthMap} />
          {/* moon */}
          <mesh position={[0.2, 0, 0]}>
            <sphereGeometry args={[0.02]} />
            <meshStandardMaterial map={moonMap} />
          </mesh>
        </mesh>
      </mesh>

      {/* Mars */}
      <mesh ref={pin4} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[1703, 100, 0]}
        >
          <Text fontSize={110} color={planet === 'mars' ? '#39FF14' : 'white'}>
            Mars
          </Text>
        </Billboard>
        <mesh ref={marsMesh} position={[1703, 0, 0]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial map={marsMap} />
        </mesh>
      </mesh>

      {/* Jupiter */}
      <mesh ref={pin5} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[5807, 100, 0]}
        >
          <Text
            fontSize={500}
            color={planet === 'jupiter' ? '#39FF14' : 'white'}
          >
            Jupiter
          </Text>
        </Billboard>
        <mesh ref={jupiterMesh} position={[5807, 0, 0]}>
          <sphereGeometry args={[1.0]} />
          <meshStandardMaterial map={jupiterMap} />
        </mesh>
      </mesh>

      {/* Saturn */}
      <mesh ref={pin6} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[10666, 100, 0]}
        >
          <Text
            fontSize={700}
            color={planet === 'saturn' ? '#39FF14' : 'white'}
          >
            Saturn
          </Text>
        </Billboard>
        <mesh ref={saturnMesh} position={[10666, 0, 0]}>
          <sphereGeometry args={[0.85]} />
          <meshStandardMaterial map={saturnMap} />
          <mesh ref={ringMesh} position={[0, 0, 0]} angle={0.15}>
            <ringGeometry args={[1.5, 1.0, 32]} angle={0.15} />
            <meshStandardMaterial map={ringMap} side={DoubleSide} />
          </mesh>
        </mesh>
      </mesh>

      {/* Uranus */}
      <mesh ref={pin7} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[21477, 100, 0]}
        >
          <Text
            fontSize={1000}
            color={planet === 'uranus' ? '#39FF14' : 'white'}
          >
            Uranus
          </Text>
        </Billboard>
        <mesh ref={uranusMesh} position={[21477, 0, 0]}>
          <sphereGeometry args={[0.38]} />
          <meshStandardMaterial map={uranusMap} />
        </mesh>
      </mesh>

      {/* Neptune */}
      <mesh ref={pin8} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[34556, 100, 0]}
        >
          <Text
            fontSize={1500}
            color={planet === 'neptune' ? '#39FF14' : 'white'}
          >
            Neptune
          </Text>
        </Billboard>
        <mesh ref={neptuneMesh} position={[34556, 0, 0]}>
          <sphereGeometry args={[0.32]} />
          <meshStandardMaterial map={neptuneMap} />
        </mesh>
      </mesh>

      {/* Pluto */}
      {/* <mesh ref={pin9} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[44035, 100, 0]}
        >
          <Text fontSize={50} color={'white'}>
            Pluto
          </Text>
        </Billboard>
        <mesh ref={plutoMesh} position={[44035, 0, 0]}>
          <sphereGeometry args={[0.025]} />
          <meshStandardMaterial map={plutoMap} />
        </mesh>
      </mesh> */}
    </>
  )
}
export default function SolarSystem() {
  return (
    <div
      style={{ cursor: 'url(/images/rocket.png), pointer' }}
      className="flex flex-row bg-black"
      // style={{ width: '100vw', height: '100vh' }}
    >
      <Navbar />
      <div
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <ScaleSystemSecondNav />
        <Canvas
          camera={{
            position: [1200, 600, 50],
            fov: 50,
            near: 0.1,
            far: 1000000,
          }}
        >
          <color attach="background" args={[0x000000]} />
          <Provider store={store}>
            <Suspense fallback={null}>
              <SolarSystemMaker />
            </Suspense>
            <OrbitControls />

            <Stars
              radius={100000} // Radius of the inner sphere (default=100)
              depth={5000} // Depth of area where stars should fit (default=50)
              count={300000} // Amount of stars (default=5000)
              factor={500} // Size factor (default=4)
              saturation={0} // Saturation 0-1 (default=0)
              // fade
              speed={1} // Faded dots (default=false)
            />
          </Provider>
        </Canvas>
      </div>
    </div>
  )
}
