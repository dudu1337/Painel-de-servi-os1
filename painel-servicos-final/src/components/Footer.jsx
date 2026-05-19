import { Hexagon, ArrowUpRight } from 'lucide-react'

function Footer({ abrirContato }) {
  const currentYear = new Date().getFullYear()

  function rolarAte(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { label: 'Serviços', acao: () => rolarAte('servicos') },
    { label: 'Diferenciais', acao: () => rolarAte('metricas') },
    { label: 'Sobre', acao: () => rolarAte('sobre') },
    { label: 'Falar com Vendas', acao: abrirContato },
  ]

  return (
    <footer
      style={{
        background: 'var(--white)',
        paddingTop: '100px',
        paddingBottom: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container position-relative z-1">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 pb-5" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          
          <div className="mb-5 mb-md-0">
            <div className="d-flex align-items-center gap-2 mb-4">
              <Hexagon size={32} color="var(--primary)" fill="rgba(79,70,229,0.1)" />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-dark)' }}>
                Lumina.
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '300px', margin: 0 }}>
              Descomplicando operações digitais para empresas do futuro.
            </p>
          </div>

          <div className="d-flex flex-wrap gap-4 gap-md-5">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={link.acao}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-dark)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontFamily: 'Outfit, sans-serif',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}
              >
                {link.label} <ArrowUpRight size={14} opacity={0.5} />
              </button>
            ))}
          </div>

        </div>

        {/* Tipografia Gigante "LUMINA" */}
        <div 
          className="d-none d-md-block text-center" 
          style={{ 
            marginTop: '80px', 
            marginBottom: '40px',
            userSelect: 'none'
          }}
        >
          <span 
            style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontWeight: 900, 
              fontSize: '16vw', 
              lineHeight: 0.8,
              background: 'linear-gradient(180deg, rgba(79,70,229,0.08) 0%, transparent 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.05em'
            }}
          >
            LUMINA
          </span>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mt-4 mt-md-0">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, fontWeight: 500 }}>
            © {currentYear} Lumina Inc. Todos os direitos reservados.
          </p>
          <div className="d-flex gap-4">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Termos</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Privacidade</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
