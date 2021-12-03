import Time from './Time'
import './App.css';
import Sunrise from './Sunrise';
import Wiki from './Wiki';

function App() {
  return (
    <div className="App">
     <Time />
     <Sunrise />
     <div className='rows'>
     <Wiki />
     <div className='right'>Right Side</div>
     </div>
    </div>
  );
}

export default App;
