import React, { useState } from "react";
// 导出context对象
export const myContext = React.createContext()

// 导出函数组件 给children子组件提供value数据 
export const  MyProvider = ({children}) => {
    // 声名count
    const [count,setCount] = useState(0)
    // 组合要共享的数据
    const value = {
        count,
        increment:()=>{
            setCount(count+1)
        },
        decrement:()=>{
            setCount(count-1)
        }
    }
    return <myContext.Provider value={value}>{children}</myContext.Provider>
} 