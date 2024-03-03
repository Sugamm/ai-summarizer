
import Hero from './components/Hero';
import Demo from './components/Demo';

import './App.css';
import Pricing from './components/Pricing';

export const App = () => {
  return (
    <main>
        <div className='main'>
            <div className='gradient'></div>
        </div>
        <div className='app'>
            <Hero />
            <Demo />
            <Pricing />
        </div>
    </main>
  )
}

export default App