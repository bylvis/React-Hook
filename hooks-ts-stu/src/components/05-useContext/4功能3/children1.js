import React, { useContext } from "react";
import { myContext } from './context'
const App = () => {
    const { count,dispatch } = useContext(myContext)
    return (
        <div>
            <div>children1-count-{count}</div>
            <button onClick={()=>dispatch({type:'increment'})}>+1</button>
        </div>
    )
}
export default App