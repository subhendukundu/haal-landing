import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'


export default function ParallaxImg(props) {
    return (
        <ParallaxBanner
            layers={[{ image: props.img, amount: 0.8 }]}
            style={{
                height: '100vh',
                backgroundPosition:'right',
            }}
        >
            <div>
                {props.children}
            </div>
        </ParallaxBanner>
    )
}
