import ProductList from './components/ProductList';
import Card from './components/Card';
import Shine from './components/Shine';
import Glare from './components/Glare';

import front from './images/front-card.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <div className="showcase">
          <Card>
            <div className="card__front">
              <img src={front} alt="" />
              <Shine />
              <Glare />
            </div>
          </Card>
        </div>
      </header>

      <ProductList />
    </div>
  );
}

export default App;
