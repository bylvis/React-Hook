import React,{useEffect, useState} from "react";

const App = () => {
    // 基本使用
    // 格式 useEffect(callback,deps)
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('use Effect');
        console.log(`你点击了${count}次`);
        document.title = `${count}`
    })
    return (
        <div>
            <p>count-{count}</p>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
        </div>
    )
}
export default App