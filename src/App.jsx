import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App() {

  return (

      <div>
        <Navbar />
          <section id='home' >
            <Home />
          </section>
          <section id='about' className='scroll-mt-[1rem]'>
            <About />
          </section>
          <section id='project' className='scroll-m-[1rem]'>
            <Project />
          </section>
          <section id='contact'className='scroll-m-[3rem]'>
            <Contact />
          </section>
          <Footer />
      </div>

  )
}

export default App;
