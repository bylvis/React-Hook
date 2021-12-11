
import React, { useState } from "react";

import { Slider, } from 'antd';
import './index.css'

const App = () => {
    const [width,setWidth] = useState(30)
    const [height,setHeight] = useState(30)
    const [borderRadius,setBorder] = useState(30)
    const style = {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
    }
    return (
        <div className='container'>
            <Slider 
            defaultValue={width} 
            onChange={(val) => setWidth(val)}
            min={0}
            max={300}
            />
            <Slider
            defaultValue={height}
            onChange={(val) => setHeight(val)}
            min={0}
            max={300}
            />
            <Slider
            defaultValue={borderRadius}
            onChange={(val) => setBorder(val)}
            min={0}
            max={300}
            />
            <div style={style} className='el'>函数组</div>
        </div>
    )
}
export default App