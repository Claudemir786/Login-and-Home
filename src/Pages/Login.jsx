


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CssPages/Login.css'

function Login() {
   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorLogin,setErrorLogin] = useState(false);

  const navigation = useNavigate();

  const handleLogin = (e)=>{
    e.preventDefault();//impede que a pagina carregue no momento que partar o botão;

    try {

        //verifica senha e email
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
        const validEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //se os dois estoverem certos
        if(validEmail.test(email) && validPassword.test(password)){
            console.log("Email e senha validos");
            alert("Login realizado com sucesso");
            navigation("/Home");
        
        }else{
            console.log("Email ou senha invalidos");
            setErrorLogin(true);
        }
        
    } catch (error) {
        console.error("Falha ao fazer o Login: ", error);
    }
   
  }

  return (
    <div>

      <div className="card">
          <div className="divTitle">
            <h2 className="title">Login</h2>
          </div>
          <div className="divForm">
              <form>
                  <label>
                      <span>Email</span>
                      <input type="text" placeholder="digite seu e-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  </label>
                   <label>
                      <span>Senha</span>
                      <input type="password" placeholder="********"  onChange={(e)=>setPassword(e.target.value)}/>
                  </label>
                  {errorLogin &&(
                    <>
                        <p>Email ou senha inválido</p>
                        <p>Por favor digite um e-mail válido</p>
                        <p>A senha deve conter:</p>
                        <p>Letras maiúsculas e minúsculas, caracter especial e no mínimo 8 dígitos</p>
                    </>
                  )}
                  <div>
                    <button onClick={handleLogin}>Entrar</button>
                  </div>
              </form>
          </div>
      </div>

    </div>
  )
}

export default Login