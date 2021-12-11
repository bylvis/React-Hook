import React,{ useRef,useState,useEffect} from "react";

const App = () => {
    const myRef = useRef()
    const [count,setCount] = useState(0)
    useEffect(()=>{
        myRef.current = setInterval(()=>{
            console.log('定时器开启');
        },1000)
        return()=>{clearInterval(myRef.current)}
    },[count])
    console.log(myRef.current);
    return (
        <div>
            <p>count--{count}</p>
            <button onClick={()=>{setCount(count+1)}}>
                +1
            </button>
            <button onClick={()=>{clearInterval(myRef.current)}}>清除定时器</button>
        </div>
    )
}

export default App