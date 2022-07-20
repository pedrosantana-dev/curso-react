import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function ComponenteNove(props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Nome: {props.valor}</p>

            <CondicaoIf condicao={props.valor === "Pedro"}>
                <p>Verdadeiro, é o meu nome</p>
            </CondicaoIf>
            <CondicaoIf condicao={props.valor === "Ana"}>
                <p>É minha irmã</p>
            </CondicaoIf>
            <CondicaoIf condicao={props.valor !== "Pedro" && props.valor !== "Ana"}>
                <p>Falso, desconheço esse nome</p>
            </CondicaoIf>
        </div>
    )
}