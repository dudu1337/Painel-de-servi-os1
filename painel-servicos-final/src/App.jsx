import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicosSection from './components/ServicosSection'
import DiferenciaisSection from './components/DiferenciaisSection'
import ContatoSection from './components/ContatoSection'
import Footer from './components/Footer'

function App() {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
      <Header abrirContato={() => setModalAberto(true)} />
      <main>
        <HeroSection abrirContato={() => setModalAberto(true)} />
        <ServicosSection />
        <DiferenciaisSection />
        <ContatoSection
          aberto={modalAberto}
          fechar={() => setModalAberto(false)}
          abrirContato={() => setModalAberto(true)}
        />
      </main>
      <Footer abrirContato={() => setModalAberto(true)} />
    </>
  )
}

export default App
