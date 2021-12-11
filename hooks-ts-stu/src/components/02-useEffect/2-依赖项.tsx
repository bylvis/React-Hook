import React,{useEffect, useState} from "react";

const App = () => {
    // 基本使用
    // 格式 useEffect(callback,deps)
    const [count,setCount] = useState(0);
    const [num,setNum] = useState(9)
    useEffect(()=>{
        console.log('use Effect');
        console.log(`你点击了${count}次`);
        document.title = `${count}`
    },[count])
    return (
        <div>
            <p>count-{count}</p>
            <p>numpy- {num}</p>
            <button onClick={()=>{setNum(num+1)}}>num+1</button>
            <button onClick={()=>{setCount(count+1)}}>count+1</button>
        </div>
    )
}
export default App