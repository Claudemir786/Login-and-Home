
//importando o context
import { createContext, useState } from "react";
//criando a variavel que recebe o contexto
export const UserContext = createContext();

//cria o provider
export const UserContextProvider = ({children})=>{
    const [name,setName] = useState("Claudemir");
    const [email,setemail] = useState("Clauds@");

    return(
        <UserContext.Provider value={{name,setName}}>
            {children}
        </UserContext.Provider>
    )
}
