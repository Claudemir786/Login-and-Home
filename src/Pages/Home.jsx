import { useFetch } from "../hooks/useFecth"
import { LoaderCircle } from "lucide-react"
import "./CssPages/Home.css";
import { useContext } from "react";

import { useUserContext } from "../hooks/useInfoUser";


const Home = () => {

    const {name,setName} = useUserContext();
    console.log("user: ", name);
    const [listBooks,error,load] = useFetch("https://gutendex.com/books/?languages=pt")
  return (
    <div className="Container">
        <h1>Lista de Livros</h1>
        <h2>Nome do user: {name}</h2>
        <button onClick={()=>setName("Junior")}>trocar</button>
        {error &&(
            <>
                <h2 className="Error message">Falha ao carregar dados</h2>
            </>
        )}
        {load &&(
            <LoaderCircle style={{animation: 'spin 1s linear infinite'}} />
        )}
        {listBooks &&(
            <>
                <ul>
                    {listBooks.map((book)=>(
                        <li key={book.id}>
                           <p>{book.title}</p> 
                           <img src={book.formats?.["image/jpeg"]} alt="imagem do livro" />
                        </li>
                    ))}
                </ul>
            </>
        )}
    
    </div>
  )
}

export default Home