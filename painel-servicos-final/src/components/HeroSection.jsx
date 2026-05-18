import { ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react'

function HeroSection({ abrirContato }) {
  function rolarServicos() {
    const el = document.getElementById('servicos')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  function rolarSobre() {
    const el = document.getElementById('sobre')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      style={{
        background: 'var(--gradient-hero)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* efeitos de luz no fundo */}
      <div
        style={{
          position: 'absolute',
          top: '0%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(79,70,229,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="fade-in-up">
              <span className="badge-custom mb-4 d-inline-flex align-items-center justify-content-center">
                <Sparkles size={14} style={{ marginRight: '8px' }} />
                Nova Plataforma Lumina
              </span>
              <h1
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  lineHeight: '1.05',
                  marginBottom: '1.5rem',
                  color: 'var(--text-dark)',
                  letterSpacing: '-1px',
                }}
              >
                Gerencie todos os seus{' '}
                <span
                  style={{
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  serviços digitais
                </span>{' '}
                em um único ecossistema
              </h1>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  marginBottom: '3rem',
                  maxWidth: '680px',
                  margin: '0 auto 3rem',
                }}
              >
                Chega de dezenas de abas abertas. A Lumina centraliza suas ferramentas, automações e métricas
                em uma interface impossivelmente simples e incrivelmente rápida.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                <button
                  onClick={rolarServicos}
                  className="btn-primary-custom d-flex align-items-center justify-content-center gap-2"
                  style={{ padding: '14px 36px', fontSize: '1.05rem' }}
                >
                  Explorar plataforma
                  <ArrowRight size={18} />
                </button>
                <button 
                  onClick={rolarSobre} 
                  className="btn-outline-custom"
                  style={{ padding: '14px 36px', fontSize: '1.05rem' }}
                >
                  Entenda como funciona
                </button>
              </div>

              {/* mini estatísticas centralizadas */}
              <div 
                className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 mt-5 fade-in-up delay-2"
                style={{ 
                  borderTop: '1px solid rgba(0,0,0,0.05)', 
                  paddingTop: '2.5rem' 
                }}
              >
                {[
                  { label: 'Empresas ativas', value: '4.200+' },
                  { label: 'Integrações nativas', value: '150+' },
                  { label: 'Uptime garantido', value: '99.99%' },
                  { label: 'Suporte humanizado', value: '24/7' },
                ].map((stat) => (
                  <div key={stat.label} style={{ minWidth: '120px' }}>
                    <div
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.8rem',
                        color: 'var(--primary)',
                        lineHeight: 1,
                        marginBottom: '8px'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
