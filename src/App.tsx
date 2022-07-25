import { MonsterProvider } from './hooks/MonsterContext';
import Banner from './components/Banner';
import Container from './components/Container';
import './App.scss';

function App() {
  return (
    <MonsterProvider>
     <div id='app'>
          <div className='container'>
            <Banner />
            <Container />
          </div>
          <a style={{position: 'fixed', bottom: 30, right:30}} href="https://github.com/eric-nichols-nyc/create-a-monster" rel="noreferrer" target="_blank">
            <img src="../images/github.png" alt="github" width="40"/>
          </a>
        </div>
    </MonsterProvider>
  );
}

export default App;
