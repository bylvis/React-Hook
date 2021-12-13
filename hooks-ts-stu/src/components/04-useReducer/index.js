import React,{useReducer} from "react"; 

let initValue = { count: 4 }

const reducer = (state,action) => {
    switch(action.type){
        case 'add': return {count:state.count+1}
        case 'des': return {count:state.count-1}
        default: return {count:state.count}
    }
}

const App = () => {
    const [count,dispatch] = useReducer(reducer,initValue)
    return (
        <div>
            count-{count}
            <button onClick={() => dispatch({type:'add'})}>+1</button>
            <button onClick={() => dispatch({type:'des'})}>-1</button>
        </div>
    )
} 
export default App 