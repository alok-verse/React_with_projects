import React from "react";
import Todocontext from "./Todocontext";

const TodoContextProvider =({children})=>{
    const [todos,setTodos]= React.useState([]) ; 
    return(
        
        <Todocontext.Provider value={{user,setuser}}>
        {children}
        </Todocontext.Provider >
       
    )

}
export default TodoContextProvider;