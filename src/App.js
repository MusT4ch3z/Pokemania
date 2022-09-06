import './App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import Pagination from './utils/Pagintaion/Pagination';


function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="_container">
          <Header />
          <Pagination />
          <CardList />
        </div>
      </div>
    </div>
  );
}

export default App;