import React,{useState,useEffect} from "react";
import axios from 'axios'
const App = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        axios.get('http://www.liulongbin.top:3006/api/getbooks').then(res=>{
            console.log('请求的结果',res);
        })
    },[])
    return (
        <div><button onClick={()=>setCount(count+1)}>+1</button></div>
    )
}
export default App