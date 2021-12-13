import React, { useReducer } from "react";
// 导出context对象
export const myContext = React.createContext()
const reducer = (state,action) => {
    switch(action.type){
        case 'increment':return state+1
        case 'decrement':return state-1
        default:return state
    }
}
// 导出函数组件 给children子组件提供value数据 
export const  MyProvider = ({children}) => {
    // 声名count
    const [count,dispatch] = useReducer(reducer,10)
    // 组合要共享的数据
    const value = {
        count,
        dispatch
    }
    return <myContext.Provider value={value}>{children}</myContext.Provider>
} 