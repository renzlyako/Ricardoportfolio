import Navbar       from './components/Navbar.jsx'
import Hero         from './components/Hero.jsx'
import Stats        from './components/Stats.jsx'
import Services     from './components/Services.jsx'
import Credentials  from './components/Credentials.jsx'
import About        from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import SocialMedia   from './components/SocialMedia.jsx'
import Contact      from './components/Contact.jsx'
import Footer       from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Credentials />
      <About />
      <Testimonials />
      <SocialMedia />
      <Contact />
      <Footer />
    </>
  )
}
