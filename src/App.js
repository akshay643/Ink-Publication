import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderImg from './components/HeaderImg/HeaderImg'
import Navigation from './components/Navigation'
import About from './components/AboutUs/About'
import CardContainer from './components/Research/CardContainer'
import Counter from './components/Counter/Counter'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navigation />
      <HeaderImg />
      <About />
      <CardContainer />
      <Counter />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
