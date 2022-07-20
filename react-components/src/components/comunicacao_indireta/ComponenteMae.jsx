import React from "react";

function ComponenteMae(props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
        </div>
    )
}

export default ComponenteMae