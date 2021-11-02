import React from 'react';
import NavPanel from './pages/navigation';

import './assets/fonts/fontello/css/search.css';
import Header from './pages/header/index';
import { ContentConteiner } from './common/containers/header/HeaderContainer';

function App() {
  return (
    <div>
      <Header />
      <ContentConteiner>
        <NavPanel />
        saasdasda
      </ContentConteiner>
    </div>
  );
}

export default App;
