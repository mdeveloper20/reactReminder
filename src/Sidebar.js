import React from 'react';
import {motion} from 'framer-motion'

export default function Sidebar({setSelectedMode,controls}) {

    const onButtonClick = (mode)=>{
        setSelectedMode(mode)
        switch (mode) {
            case 'closed':
                controls.start({
                    opacity:0
                })
                break;
            case 'open':
                controls.start({
                    opacity:1
                })
                break;
            default:
                break;
        }
        
    }

    return(<div className='sidebar'>
        <MyButton onClick={()=>onButtonClick('closed')}>
            Close
        </MyButton>

        <MyButton onClick={()=>onButtonClick('open')}>
            Open
        </MyButton>

        <MyButton onClick={()=>onButtonClick('big')}>
            Big
        </MyButton>

        <MyButton onClick={()=>onButtonClick('normal')}>
            Normal
        </MyButton>

        <MyButton onClick={()=>onButtonClick('small')}>
            Small
        </MyButton>

        <MyButton onClick={()=>onButtonClick('rotate')}>
            Rotate
        </MyButton>

        <MyButton onClick={()=>onButtonClick('circle')}>
            Circle
        </MyButton>
    </div>)
}

const MyButton = ({onClick,children})=>(
    <motion.button
        onClick={onClick}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}

        >
          {children}  
        </motion.button>
)

