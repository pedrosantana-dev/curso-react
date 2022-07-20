import React from "react";

export default function ComponenteDez(props) {

    const estilos = {
        color: 'red', 
        padding: "10px", 
        backgroundColor: 'yellow'
    }
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {/* <p style={{color: 'red', padding: "10px", backgroundColor: 'yellow'}}>Texto do parágrafo</p> */}
            <p style={estilos}>Texto do parágrafo</p>
            <p style={{color: props.corTexto}}>Texto do parágrafo</p>
        </div>
    )
}