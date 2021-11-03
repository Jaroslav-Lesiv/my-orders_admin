import SideBar from './source/pages/SideBar/SideBar';
import { ContentConteiner } from './common/containers/header/HeaderContainer';
import Header from './source/pages/Header/Header';

import './assets/fonts/fontello/css/search.css';

function App() {
  return (
    <div>
      <Header />
      <ContentConteiner>
        <SideBar />
      </ContentConteiner>
    </div>
  );
}

export default App;
