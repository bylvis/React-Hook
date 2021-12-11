import React,{useState,useEffect} from "react";

// 父组件
const Parent = () => {
    const [isShow,setShow] = useState(true)
    return(
        <div onClick={()=>setShow(!isShow)}>父组件
            {isShow ? <App></App> : null}
        </div>
    )
}


const App = () => {
    useEffect(()=>{
        let timer = setInterval(()=>{
            console.log('定时器开启');
        },1000)
    return () => {
        console.log('我被卸载了!');
        clearInterval(timer)
    }
    },[])
    return (
        <div>子组件</div>
    )
}
export default Parent