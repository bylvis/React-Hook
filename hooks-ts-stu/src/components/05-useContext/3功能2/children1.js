import React, { useContext } from "react";
import { myContext } from './context'
const App = () => {
    const { count,increment } = useContext(myContext)
    return (
        <div>
            <div>children1-count-{count}</div>
            <button onClick={()=>increment()}>+1</button>
        </div>
    )
}
export default App