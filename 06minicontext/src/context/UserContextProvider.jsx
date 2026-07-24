import React from "react";
import userContext from "./userContext";

const UserContextProvider =({children})=>{
    const [user,setuser]= React.useState(null)  
    return(
        
        <userContext.Provider value={{user,setuser}}>
        {children}
        </userContext.Provider>
       
    )

}
export default UserContextProvider;