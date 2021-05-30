import './App.css';

import ApartmentsList from './components/ApartmentsList/ApartmentsList';
import MoreBtn from './components/MoreBtn/MoreBtn';

function App() {
  return (
    <div className="App">
      <h1>Our Latest Developments</h1>
      <ApartmentsList />
      <MoreBtn />
    </div>
  );
}

export default App;
