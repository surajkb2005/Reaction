import Component from './components/Component';
import Basics from './components/Basics';
import Cards from './components/Cards';
import PropsCards from './components/PropsCards';
import UserGreeting from './components/UserGreeting';
import Notes from './components/Notes';
import Stopwatch from './components/Stopwatch';

function App() {
  const list = ['mango', 'pineapple', 'santra'];

  return (<>
    <Stopwatch/>
    <Notes />
  </>)
}

export default App
