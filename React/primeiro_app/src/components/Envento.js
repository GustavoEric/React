function Evento(){
    function meuEvento(){
        alert("Apertado")
    }
    return(
        <div>
            <p>Clica no Botão</p>
            <button onClick = {meuEvento}>Enviar</button>
        </div>
    )
}

export default Evento