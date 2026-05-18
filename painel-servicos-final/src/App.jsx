import { useEffect, useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicosSection from './components/ServicosSection'
import DiferenciaisSection from './components/DiferenciaisSection'
import ContatoSection from './components/ContatoSection'
import Footer from './components/Footer'

function App() {
  const [modalAberto, setModalAberto] = useState(false)

  useEffect(() => {
    function abrirModalContato() {
      setModalAberto(true)
    }

    document.addEventListener('abrirContato', abrirModalContato)
    return () => document.removeEventListener('abrirContato', abrirModalContato)
  }, [])

  return (
    <>
      <Header abrirContato={() => setModalAberto(true)} />
      <main>
        <HeroSection abrirContato={() => setModalAberto(true)} />
        <ServicosSection abrirContato={() => setModalAberto(true)} />
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
