import React,{useState} from "react";
const myContext = React.createContext()
const Parent = () => {
    const [color,setColor] = useState('red')
    
    return(
        <div>
            
            <button onClick={()=>setColor('pink')}>button</button>
            <myContext.Provider value={color}>
                <div>父组件</div>
                <Son></Son>
            </myContext.Provider>
        </div>
    )
}
const Son = () => {
    return(
        <div>
            <div>儿组件</div>
            <App></App>
        </div>
    )
}
const App = () => {
    return (
        <div>
            <myContext.Consumer>
                {
                    data => {
                        console.log(data)
                        return(
                            <div style={{color:data}}>孙组件</div>
                        )
                    }
                    
                }
            </myContext.Consumer>
        </div>
    )
}
export default Parent