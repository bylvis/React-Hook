import React,{useState,useEffect} from "react";

const App = () => {
    const [count,setCount] = useState(0)
    
    useEffect(()=>{
        console.log('依赖项数组为空,所以本段只执行一次!');
        setInterval(()=>{
            console.log('定时器执行',count);
        },1000)
    },[])
    return (
        <div><button onClick={()=>setCount(count+1)}>+1</button></div>
    )
}
export default App