import React,{ useRef } from "react";

const App = () => {
    const myRef = useRef(10)
    
    return (
        <div>
            {/* <input ref={ myRef } type="text" /> */}
            <button onClick={()=>{console.log(myRef.current++);}}>
                拿到当前input值
            </button>
        </div>
    )
}

export default App