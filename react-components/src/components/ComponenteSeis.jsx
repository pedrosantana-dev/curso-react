import React from "react";
import clientes from '../seeds/clientes'

const ComponenteSeis = (props) => {

    function cliente() {
        return clientes.map(item => {
            return <li key={item.id}>Nome: {item.nome} | Email: {item.email}</li>
        })
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>

            <ul>
                {cliente()}
            </ul>
        </div>
    )
}

export default ComponenteSeis