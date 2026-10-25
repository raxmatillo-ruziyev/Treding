// Har bir komponent to'g'ridan-to'g'ri import qilinadi, shuning uchun
// Components papkasida index.js bo'lishi shart emas.
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Trading from './Components/Trading'
import Services from './Components/Services'
import Market from './Components/Market'
import Finance from './Components/Finance'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Trading />
      <Services />
      <Market />
      <Finance />
      <Footer />
    </>
  )
}

export default App