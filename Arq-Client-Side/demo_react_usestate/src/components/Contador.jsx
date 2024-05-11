import { useState } from "react";

export function Contador(){
    const [contagem, setContagem] = useState(0);
    function handleClick(){
        setContagem(contagemAtual => contagemAtual + 1);
    }
    return(
        <>
            <button onClick={handleClick}>Clicar</button>
            <span>contagem {contagem}</span>
        </>
    )
}