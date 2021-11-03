import SideBar from './source/pages/SideBar/SideBar';
import { ContentConteiner } from './common/containers/header/HeaderContainer';
import Header from './source/pages/Header/Header';

import './assets/fonts/fontello/css/search.css';
import TransactionList from './common/components/TransactionList/TransactionList';
import Transaction from './source/pages/Transaction/Transaction';

function App() {
  return (
    <div>
      <Header />
      <ContentConteiner>
        <SideBar />
        <Transaction/>
      </ContentConteiner>
    </div>
  );
}

export default App;
