import Component from './components/Component';
import Basics from './components/Basics';
import Cards from './components/Cards';
import PropsCards from './components/PropsCards';
import UserGreeting from './components/UserGreeting';

function App() {
  const list = ['mango', 'pineapple', 'santra'];

  return (<>
    <UserGreeting loggedin={true} />
    <UserGreeting loggedin={true} name='John' />
    <UserGreeting loggedin={false} />
    <UserGreeting loggedin={false} name='John' />
    <UserGreeting />
  </>)
}

export default App
