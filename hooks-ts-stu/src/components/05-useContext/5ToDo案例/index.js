import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import './index.css'
import { MyProvider } from './context'
const App = () => {
    return (
        <div>
            <MyProvider>
                <ToDoForm></ToDoForm>
                <ToDoList></ToDoList>
            </MyProvider>
        </div>
    )
}
export default App