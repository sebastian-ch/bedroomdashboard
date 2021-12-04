import Time from './Time'
import './App.css';
import Sunrise from './Sunrise';
import Wiki from './Wiki';
import Marvel from './Marvel';

function App() {
  return (
    <div className="App">
     <Time />
     <Sunrise />
     <div className='rows'>
     <Wiki />
     <Marvel />
     </div>
    </div>
  );
}

export default App;
