import React,{useState} from "react";

const App = () => {
    // 需求：声名一个count的变量
    const [count,setCount] = useState(10)
    // 再声名一个num变量
    const [num,setNum] = useState(0)
    return(
        <div>
            <div>函数组件 { count }</div>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setCount(count-1)}>-1</button>
            <div>num - {num}</div>
            <button onClick={()=>setNum(num+1)}>+1</button>
            <button onClick={()=>setNum(num-1)}>-1</button>
        </div>
    )
}
export default App