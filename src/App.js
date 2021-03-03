import './App.css';
import Main from './components/MainComponent'
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
      <ParallaxProvider>
        <HashRouter>
          <div className="App">
            <Main />
          </div>
        </HashRouter>
      </ParallaxProvider>
  );
}

export default App;
