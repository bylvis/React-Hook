import React from "react";
import Child1 from './children1'
import Child2 from './children2'
// 引入自定义的myProvider
import {MyProvider} from './context'
const App = () => {
    return (
        <div>
            <MyProvider>
             <Child1></Child1>
             <Child2></Child2>
            </MyProvider>
        </div>
    )
}
export default App