import React from 'react';
import { motion } from "framer-motion"

export default function Sidebar({setSelectedMode}) {

    const onButtonClick=(mode)=>{
        setSelectedMode(mode)
    }

    return (<div className='sidebar'>
        <MyButton onClick={()=>onButtonClick('closed')}>Closed</MyButton>
        <MyButton onClick={()=>onButtonClick('open')}>Open</MyButton>

        <MyButton onClick={()=>onButtonClick('big')}>Big</MyButton>

        <MyButton onClick={()=>onButtonClick('normal')}>Normal</MyButton>

        <MyButton onClick={()=>onButtonClick('small')}>Small</MyButton>

        <MyButton onClick={()=>onButtonClick('rotate')}>Rotate</MyButton>

        <MyButton onClick={()=>onButtonClick('circle')}>Circle</MyButton>

    </div>)
}

const MyButton = ({ children, onClick }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >{children}</motion.button>
)