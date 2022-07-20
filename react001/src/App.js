import React from "react";
import Comment from './components/Comment'

function App() {
    return (
        <>
            <h1>Comentários</h1>
            <Comment title="Comentário Um" author="Pedro Santana" />
            <Comment title="Comentário Dois" author="Carlos Alberto" />
            <Comment title="Comentário Três" author="Angela Silva" />
        </>
    )
}

export default App