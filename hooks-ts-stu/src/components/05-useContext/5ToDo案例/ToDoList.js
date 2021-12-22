import React, { useContext } from "react";
import { myContext } from "./context";

const ToDoList = () => {
    const { list, dispatch1 } = useContext(myContext)
    return (
        <div>
            <ul>
                {list.map(item => {
                    return (
                        <div>
                            <li onClick={() => dispatch1({ type: 'toggle', id: item.id })}
                                style={{ textDecoration: item.done ? 'line-through' : '' ,float:'left'}}
                                key={item.id}>{item.name
                                }
                            </li>
                            <button onClick={() => dispatch1({ type: 'del', id: item.id })}>X</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default ToDoList