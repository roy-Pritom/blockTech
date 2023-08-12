
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Features from './Components/Features/Features'
import About from './Components/About/About'
import Tokenomics from './Components/Tokenomics/Tokenomics'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <div className='bg-[rgb(18,19,31)] '>
      {/*navBar */}
      <Header></Header>
      <Banner></Banner>

      <div className="max-w-screen-2xl lg:mx-auto">
      <Features></Features>
      <About></About>
      </div>

      <Tokenomics></Tokenomics>

      <Products></Products>
      <Footer></Footer>

    </div>
  )
}

export default App
