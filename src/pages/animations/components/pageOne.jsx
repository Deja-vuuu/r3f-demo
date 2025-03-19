import AinmaBox from './animaBox'
import { useThree } from '@react-three/fiber'


const PageOne = () => {
    // const viewport = useThree((state) => state.viewport);
    return <group>
        <AinmaBox
            boxPositions={[
                { x: -5, y: 0, z: 0 },
                { x: 0, y: 5, z: 0 },
                { x: 5, y: 0, z: 0 },
                { x: 0, y: -5, z: 0 },
            ]}
        />
        <AinmaBox
            boxPositions={[
                { x: 5, y: 0, z: 0 },
                { x: 0, y: -5, z: 0 },
                { x: -5, y: 0, z: 0 },
                { x: 0, y: 5, z: 0 },
            ]}
        />
    </group >
}

export default PageOne