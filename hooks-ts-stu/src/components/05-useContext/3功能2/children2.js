import React, { useContext } from "react";
import { myContext } from "./context";

const App = () => {
    // 获取共享数据
    const {count,decrement}=useContext(myContext)
    return (
        <div>
            <div>children2-count-{count}</div>
            <button onClick={()=>decrement()}>-1</button>
        </div>
    )
}
export default App