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
        </div>
    </MonsterProvider>
  );
}

export default App;
