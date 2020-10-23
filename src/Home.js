import React, { useState } from 'react';
import {motion} from 'framer-motion'

const variants = {
    open: { opacity: 1, x: 0},
    closed: { opacity: 0, x: "-100%"},
    big: {scale:2},
    normal: {scale: 1},
    normal: {scale: 0.1},
    rotate: {rotate: 360},
    circle: {borderRadius: "100%"}
}
export default function Home({selectedMode,controls}) {
    return(<div className='home'>
        <motion.div
            className={'shape'}

            animate={controls}
            transition={{duration: 0.5}}
            >
            Programming with Masoud
        </motion.div>
    </div>)
}