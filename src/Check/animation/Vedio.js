import React from 'react'
import { Clip } from './AnimationStyle'
import Ved from './scroll-wheel-three.mp4'

const Vedio = () => {
    return (
        <Clip>
            <video autoPlay controls loops>
                <source src={Ved}type="video/mp4" />
                Your browser does not support the video tag.
            </video>


        </Clip>
    )
}

export default Vedio
