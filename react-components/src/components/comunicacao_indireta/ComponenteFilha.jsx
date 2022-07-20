import React from "react";

function ComponenteFilha(props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
        </div>
    )
}

export default ComponenteFilha