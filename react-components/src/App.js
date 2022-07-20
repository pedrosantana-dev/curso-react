import React from "react";
import './App.css'

// componentes
import ComponenteUm from './components/ComponenteUm'
import ComponenteDois from "./components/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis";
import ComponenteSete from "./components/ComponenteSete"
import ComponenteOito from "./components/ComponenteOito";
import ComponenteNove from "./components/ComponenteNove";
import ComponenteDez from "./components/ComponenteDez"
import ComponentePai from "./components/comunicacao_direta/ComponentePai";


function App() {
    return (
        <>
            <ComponentePai titulo="Comunicação Direta" />
            <ComponenteDez titulo="Componente Dez" corTexto="green" />
            <ComponenteNove titulo="Componente nove" valor="Joao" />
            <ComponenteOito titulo="Componente oito" valor={9} />
            <ComponenteSete titulo="Componente sete" valor={true} />
            <ComponenteSeis titulo="Componente seis" />
            <ComponenteQuatro titulo="Componente quatro" />
            <ComponenteTres titulo="Componente três" subtitulo="Texto do componente três" />
            <ComponenteUm />
            <ComponenteDois />
        </>
    )
}

export default App;