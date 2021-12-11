import React,{useState,useEffect} from "react";

// 父组件



const App = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('副作用逻辑');
        let timer = setInterval(()=>{
            console.log('定时器开启');
        },1000)
    return () => {
        console.log('销毁函数');
        // clearInterval(timer)
    }
    })
    console.log('dom渲染/更新');
    
    return (
        <div>子组件count-{count}<button onClick={()=>{setCount(count+1)}}>+1</button></div>
    )
}
export default App