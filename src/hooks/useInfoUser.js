import { useContext } from "react"
import { UserContext } from "../context/infoUser";


export const useUserContext = () =>{
    const context = useContext(UserContext);
    console.log("Cheguei aqui")
    if(!context){
        console.log("Contexto não encontrado")
    }
    console.log("context: ", context)
    return context
}