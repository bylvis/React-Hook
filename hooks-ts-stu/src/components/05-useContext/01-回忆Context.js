import React,{useContext, useState} from "react";
const myContext = React.createContext()
const Parent = () => {
    const [color,setColor] = useState('red')
    return(
        <div>
            <button onClick={()=>setColor('pink')}>button</button>
            <myContext.Provider value={color}>
                <div>父组件</div>
                <Son></Son>
            </myContext.Provider>
        </div>
    )
}
const Son = () => {
    return(
        <div>
            <div>儿组件</div>
            <App></App>
        </div>
    )
}
const App = () => {
    // 接收数据
    const color = useContext(myContext)
    return (
        <div>
            <div style={{color:color}}>孙组件</div>
        </div>
    )
}
export default Parent