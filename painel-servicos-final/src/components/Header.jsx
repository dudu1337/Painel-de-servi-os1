import { Hexagon, Menu, X } from 'lucide-react'
import { useState } from 'react'

// cada item do menu tem um label e o id da seção que ele vai rolar até
const itensMenu = [
  { label: 'Serviços', alvo: 'servicos' },
  { label: 'Recursos', alvo: 'servicos' },
  { label: 'Métricas', alvo: 'metricas' },
  { label: 'Sobre', alvo: 'sobre' },
]

function rolarAte(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function Header({ abrirContato }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNavClick(alvo) {
    rolarAte(alvo)
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--dark-border)',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <div className="container py-3">
        <div className="d-flex align-items-center justify-content-between">

          {/* Logo - clica e vai pro topo */}
          <button
            onClick={() => rolarAte('inicio')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: 0,
            }}
          >
            <div
              style={{
                background: 'var(--gradient-primary)',
                borderRadius: '10px',
                padding: '6px 8px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Hexagon size={18} color="#fff" fill="rgba(255,255,255,0.2)" />
            </div>
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: 'var(--text-dark)',
                letterSpacing: '-0.5px',
              }}
            >
              Lumina
            </span>
          </button>

          {/* Menu desktop */}
          <div className="d-none d-md-flex align-items-center gap-4">
            {itensMenu.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.alvo)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Botão Começar agora - abre modal de contato */}
          <div className="d-none d-md-block">
            <button
              onClick={abrirContato}
              className="btn-primary-custom"
              style={{ fontSize: '0.9rem', padding: '10px 22px' }}
            >
              Começar agora
            </button>
          </div>

          {/* Hamburguer mobile */}
          <button
            className="d-md-none"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-dark)',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="d-md-none mt-3 pb-2"
            style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '1rem', background: 'rgba(255,255,255,0.95)', padding: '15px', borderRadius: '12px' }}
          >
            {itensMenu.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.alvo)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-dark)',
                  padding: '10px 0',
                  fontWeight: 500,
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { abrirContato(); setMenuOpen(false) }}
              className="btn-primary-custom mt-3 w-100"
              style={{ fontSize: '0.9rem', padding: '10px 22px' }}
            >
              Começar agora
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
