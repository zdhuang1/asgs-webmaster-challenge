import './index.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidekick from './components/Sidekick'
import PastEvents from './components/PastEvents'
import Details from './components/Details'
import Footer from './components/Footer'

function App() {
  return (
    <div className="">
      <Navbar />
      <main>
        <Hero />
        <Sidekick />
        <PastEvents />
        <Details />
      </main>
      <Footer />
    </div>
  )
}

export default App