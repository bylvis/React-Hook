import React,{ useRef } from "react";

const App = () => {
    const myRef = useRef(null)
    return (
        <div>
            <input ref={ myRef } type="text" />
            <button onClick={()=>{console.log(myRef.current.value);}}>
                拿到当前input值
            </button>
        </div>
    )
}

export default App