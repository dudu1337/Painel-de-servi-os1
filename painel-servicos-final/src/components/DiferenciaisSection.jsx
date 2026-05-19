import { CheckCircle, TrendingUp, HeartHandshake, Gauge, Zap } from 'lucide-react'

const metricas = [
  { valor: '4.200+', label: 'Empresas confiam' },
  { valor: '150+', label: 'Integrações' },
  { valor: '99.9%', label: 'Uptime' },
]

const diferenciais = [
  {
    icone: TrendingUp,
    titulo: 'Escalabilidade real',
    descricao: 'Cresce junto com seu negócio, de startups a grandes corporações.',
  },
  {
    icone: HeartHandshake,
    titulo: 'Suporte humanizado',
    descricao: 'Especialistas disponíveis 24h para resolver qualquer problema.',
  },
  {
    icone: Gauge,
    titulo: 'Alta performance',
    descricao: 'Infraestrutura distribuída para latência mínima e velocidade máxima.',
  },
]

function DiferenciaisSection() {
  return (
    <section
      id="metricas"
      style={{
        background: 'var(--bg-subtle)',
        paddingTop: '100px',
        paddingBottom: '100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div className="text-center mb-5 fade-in-up">
          <span className="badge-custom mb-3 d-inline-flex align-items-center justify-content-center">
            <Zap size={14} style={{ marginRight: '6px' }} /> Diferenciais
          </span>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--text-dark)',
              marginBottom: '1rem',
              letterSpacing: '-0.5px'
            }}
          >
            Tudo o que você precisa, <br />
            <span
              style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              sem a complexidade.
            </span>
          </h2>
        </div>

        {/* Bento Box Grid */}
        <div className="row g-4">
          
          {/* Box 1: Texto e Features (Lado Esquerdo Superior) */}
          <div className="col-lg-4 fade-in-up delay-1">
            <div
              style={{
                background: 'var(--gradient-primary)',
                borderRadius: '32px',
                padding: '40px',
                height: '100%',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(79,70,229,0.2)'
              }}
            >
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.8rem', marginBottom: '16px' }}>
                Por que a Lumina?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Não somos só mais uma ferramenta. A Lumina foi construída para ser o centro nervoso das suas operações.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Sem contratos abusivos',
                  'LGPD totalmente garantida',
                  'Updates em tempo real',
                ].map((item) => (
                  <li key={item} className="d-flex align-items-center gap-2">
                    <CheckCircle size={18} color="#fff" style={{ opacity: 0.9 }} />
                    <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Box 2: Métricas (Lado Direito Superior) */}
          <div className="col-lg-8 fade-in-up delay-2">
            <div
              style={{
                background: 'var(--white)',
                borderRadius: '32px',
                padding: '40px',
                height: '100%',
                border: '1px solid var(--dark-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '32px' }}>
                Números que falam por si
              </h3>
              <div className="row g-4">
                {metricas.map((m) => (
                  <div key={m.label} className="col-md-4">
                    <div
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 800,
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1,
                        marginBottom: '8px',
                        letterSpacing: '-1px'
                      }}
                    >
                      {m.valor}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Boxes Inferiores: Diferenciais */}
          {diferenciais.map(({ icone: Icone, titulo, descricao }, idx) => (
            <div key={titulo} className={`col-lg-4 fade-in-up delay-${idx + 1}`}>
              <div
                style={{
                  background: 'var(--white)',
                  borderRadius: '32px',
                  padding: '36px',
                  height: '100%',
                  border: '1px solid var(--dark-border)',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                }}
              >
                <div
                  style={{
                    background: 'rgba(79,70,229,0.08)',
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <Icone size={28} color="var(--primary)" />
                </div>
                <h4
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    fontSize: '1.25rem',
                    marginBottom: '12px',
                  }}
                >
                  {titulo}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                  {descricao}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default DiferenciaisSection
