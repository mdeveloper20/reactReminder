import React,{useState} from 'react';
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    big: {scale:2},
    normal:{scale:1},
    small:{scale:0.1},
    rotate:{rotate:180},
    circle:{borderRadius:"100%"}

  }

export default function Home({selectedMode}) {



    return (<div className='home'>
        <motion.div
            initial={"open"}
            animate={selectedMode}
            variants={variants}
            transition={{ duration: 0.5 }}
            className='shape'>
            Programming with Masoud
          </motion.div>
    </div>)
}