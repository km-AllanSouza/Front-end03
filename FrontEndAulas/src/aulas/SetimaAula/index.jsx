import { useState } from "react"
import "./style.scss"

export function SetimaAula(){
    
    // contador = 0
    const [contador, setContador ] = useState(0)
    const [temaEscuro, setTemaEscuro] = useState(false)

    function somarNumero(){
        setContador( contador + 1 )
    }

    function trocarTema(){
        setTemaEscuro(!temaEscuro)
    }

    return (
        
        <main className={`setima-aula-component ${temaEscuro ? 'dark-theme' :''}`}>
            <h1> Contador </h1>
            <button onClick={trocarTema}> TrocarTema</button>
            <button onClick={somarNumero}> Adicionar</button>
            <span>Numero Atual: {contador}</span>

        </main>

    )
}