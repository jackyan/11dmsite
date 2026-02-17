import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Solutions from './sections/Solutions'
import Advantages from './sections/Advantages'
import Process from './sections/Process'
import About from './sections/About'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Advantages />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
