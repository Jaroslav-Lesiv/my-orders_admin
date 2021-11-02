import React from 'react'
import NavPanel from './pages/navigation'
import { ContentConteiner } from './ui/core/conteiner'
import "./fontello/css/search.css"
import Header from './pages/header/index'

function App() {
    return (
        <div>
            <Header />
            <ContentConteiner>
                <NavPanel />
                saasdasda
            </ContentConteiner>
        </div>
    )
}

export default App;

