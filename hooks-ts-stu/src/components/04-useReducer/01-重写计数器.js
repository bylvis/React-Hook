import React,{useReducer} from "react"; 

const reducer = (state,action) => {
    switch(action.type){
        case 'add': return state+1
        case 'des': return state-1
        default: return state
    }
}

const App = () => {
    const [count,dispatch] = useReducer(reducer,0)
    return (
        <div>
            count-{count}
            <button onClick={() => dispatch({type:'add'})}>+1</button>
            <button onClick={() => dispatch({type:'des'})}>-1</button>
        </div>
    )
} 
export default App