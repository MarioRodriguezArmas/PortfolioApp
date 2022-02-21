import {About, Footer,Header,Testimonials,Skills,Work} from './containers'
import { Navbar } from './components';
import './index.css'


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App;
