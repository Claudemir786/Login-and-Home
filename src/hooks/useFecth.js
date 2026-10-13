import { useEffect, useState } from "react";
import { getListBooks } from "../service/books"




export const useFetch =(url)=>{
    
        const [listBooks,setListBooks] = useState([]);
        const [error,setError] = useState(false);
        const [load,setLoad] = useState(true);

        useEffect(()=>{
            getlist();
        },[])
        
        async function getlist(){

            try{
                 const list = await getListBooks(url);

                if(list){
                    setListBooks(list);
                    setLoad(false);
                }else{
                    setError(true);
                }
                
            } catch (error) {
                console.error("Erro ao fazer busca de lista")
                setError(true);
            }
                
    }
       
    return[listBooks,error,load];
    
}