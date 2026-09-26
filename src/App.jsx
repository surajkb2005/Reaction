import Component from './components/Component';
import Basics from './components/Basics';
import Cards from './components/Cards';
import PropsCards from './components/PropsCards';

function App() {
  const list = ['mango', 'pineapple', 'santra'];
  
  return (<>
    <PropsCards name={'apple'} />
    <PropsCards name={'banana'} />
    <PropsCards name={'orange'} />
    {list.map((item,index) => (<PropsCards key={index} name={item}/>))}
  </>)
}

export default App
