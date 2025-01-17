import React, { useState } from "react" 
import validator from "validator"

export default function Formulario(){ 

    const [email, setEmailValue] = useState('')  

    const emailChange=(e)=>{ 
        setEmailValue(e.target.value)
    } 

    const [password, setPassworValue] = useState('')  

    const passwordChange=(e)=>{ 
        setPassworValue(e.target.value)
    }

    const handleSubmit=(e)=>{ 
        e.preventDefault() 
        
        const email_valido = require('validator')

        if(email == '' || password == ''){ 
            alert('Verifique se você digitou a senha ou email nos campos corretos!')
        } else if(email_valido.isEmail(email) == false) { 
            alert('O email digitado é inválido!')
        } else if(password.length < 6){ 
            alert('Senha inválida!')
        } else{ 
            if(email_valido.isEmail(email)){ 
                alert('O usuário entrou na plataforma!!')
            }
        }
    }
    return( 
        <>   
            <form id="form" onSubmit={handleSubmit}> 
                <h1 id="title">Login do usuário</h1>
                <input type="email" placeholder="Digite seu email..." id="email" value={email} onChange={emailChange}/> <br/>
                <input type="password" placeholder="Digite sua senha..." id="senha" value={password} onChange={passwordChange}/> <br/>
                <button id="btn" type="submit" > Entrar</button>    
            </form>
        </>
    )
}