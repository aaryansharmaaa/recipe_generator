import './App.css';
import Header from './Components/Header/Header';
import Tabs from './Components/Tabs/Tabs';
import RecipeList from './Components/RecipeList/RecipeList';
import { useState } from 'react';

function App() {
  const [loader, setLoader] = useState(true);

  return (
    <div className="App">
      <Header />
      <Tabs setLoader={setLoader} />
      <RecipeList setLoader={setLoader} />
      {
        loader && <div className='loader'>
          <div className='spinner'></div>
        </div>
      }
    </div>
  );
}

export default App;
