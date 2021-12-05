import {useEffect, useState} from 'react';

import Time from './Time'
import './App.css';
import Sunrise from './Sunrise';
import Wiki from './Wiki';
import Marvel from './Marvel';

function App() {

  const [bcolor, setBcolor] = useState('#030201');

  useEffect(() => {

    function setBackgroundColor() {

      let t = new Date();
      let hr = t.getHours();

      if (hr === 5) {
        setBcolor('#AC66CC')
      } else if ( hr === 6) {
        setBcolor('#F6B8B8')
      } else if (hr === 7) {
        setBcolor('#FFED99')
      } else if (hr >= 8) {
        setBcolor('#030201')
      }

    }

    setBackgroundColor();

    setInterval(() => {
      setBackgroundColor();
    }, 3600000)


  },[])
  
  
  return (
    <div className="App"
          style={{
            backgroundColor: bcolor
          }}
    
    >
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
