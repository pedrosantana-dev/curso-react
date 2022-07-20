import React from "react";

import ComponenteFilho from "./ComponenteFilho";

function ComponentePai(props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Pai</p>
            <ComponenteFilho titulo="Componente Filho" cargo="administrador">
                Pedro Santana
            </ComponenteFilho>
            <ComponenteFilho titulo="Componente Filho" cargo="secretaria">
                Ana Silva
            </ComponenteFilho>
            <ComponenteFilho titulo="Componente Filho" cargo="operador">
                Carlos Santos
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai