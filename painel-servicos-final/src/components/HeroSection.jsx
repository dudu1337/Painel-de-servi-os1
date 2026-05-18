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
        paddingTop: '100px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* efeitos de luz no fundo */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(15,111,255,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-8%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,224,198,0.10) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div className="row align-items-center g-5">
          {/* lado esquerdo - texto */}
          <div className="col-lg-6">
            <div className="fade-in-up">
              <span className="badge-custom mb-4 d-inline-block">
                <Sparkles size={12} style={{ marginRight: '6px' }} />
                Plataforma de Serviços Digitais
              </span>
              <h1
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                  lineHeight: '1.1',
                  marginBottom: '1.5rem',
                  color: 'var(--white)',
                }}
              >
                Gerencie seus{' '}
                <span
                  style={{
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  serviços digitais
                </span>{' '}
                em um só lugar
              </h1>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '1.15rem',
                  lineHeight: '1.75',
                  marginBottom: '2.5rem',
                  maxWidth: '480px',
                }}
              >
                O NexaHub centraliza todas as suas ferramentas, automações e integrações digitais
                numa interface moderna e fácil de usar. Mais produtividade, menos dor de cabeça.
              </p>

              <div className="d-flex flex-wrap gap-3 align-items-center">
                {/* botão principal - rola até os cards de serviço */}
                <button
                  onClick={rolarServicos}
                  className="btn-primary-custom d-flex align-items-center gap-2"
                >
                  Explorar serviços
                  <ArrowRight size={16} />
                </button>

                {/* botão secundário - rola até seção sobre/contato */}
                <button onClick={rolarSobre} className="btn-outline-custom">
                  Saiba mais
                </button>
              </div>

              {/* mini estatísticas */}
              <div className="d-flex flex-wrap gap-4 mt-5">
                {[
                  { label: 'Empresas ativas', value: '4.200+' },
                  { label: 'Integrações', value: '150+' },
                  { label: 'Uptime garantido', value: '99.9%' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      style={{
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.6rem',
                        color: 'var(--white)',
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* lado direito - card visual animado (só aparece em telas grandes) */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <div
              className="fade-in-up delay-3"
              style={{ position: 'relative', width: '100%', maxWidth: '440px' }}
            >
              <div
                style={{
                  background: 'var(--gradient-card)',
                  border: '1px solid var(--dark-border)',
                  borderRadius: 'var(--radius)',
                  padding: '32px',
                  boxShadow: 'var(--shadow-hover)',
                  animation: 'float 5s ease-in-out infinite',
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'var(--white)' }}>
                    Dashboard Overview
                  </span>
                  <span className="badge-custom" style={{ fontSize: '0.7rem' }}>Live</span>
                </div>

                {[
                  { label: 'Automações ativas', val: 87, color: 'var(--primary)' },
                  { label: 'APIs conectadas', val: 62, color: 'var(--accent)' },
                  { label: 'Relatórios gerados', val: 94, color: '#a78bfa' },
                ].map((item) => (
                  <div key={item.label} className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.label}</span>
                      <span style={{ color: 'var(--white)', fontSize: '0.85rem', fontWeight: 600 }}>{item.val}%</span>
                    </div>
                    <div style={{ background: 'var(--dark)', borderRadius: '4px', height: '6px' }}>
                      <div style={{ width: `${item.val}%`, height: '100%', background: item.color, borderRadius: '4px' }} />
                    </div>
                  </div>
                ))}

                <div className="mt-4 d-flex gap-3" style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '1rem' }}>
                  {[TrendingUp, Shield].map((Icon, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'rgba(15,111,255,0.1)',
                        border: '1px solid rgba(15,111,255,0.2)',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Icon size={16} color="var(--primary)" />
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
                        {i === 0 ? 'Performance +12%' : 'Seguro & estável'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  background: 'var(--accent)',
                  color: '#0a0f1e',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  padding: '8px 14px',
                  borderRadius: '50px',
                  animation: 'pulse-glow 3s ease-in-out infinite',
                }}
              >
                ✓ Tudo integrado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
