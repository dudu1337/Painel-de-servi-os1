import { CheckCircle, TrendingUp, HeartHandshake, Gauge } from 'lucide-react'

const metricas = [
  { valor: '4.200+', label: 'Empresas confiam no NexaHub' },
  { valor: '150+', label: 'Integrações disponíveis' },
  { valor: '99.9%', label: 'Disponibilidade garantida' },
  { valor: '< 2s', label: 'Tempo de resposta médio' },
]

const diferenciais = [
  {
    icone: TrendingUp,
    titulo: 'Escalabilidade real',
    descricao: 'Cresce junto com seu negócio, de startups a grandes empresas.',
  },
  {
    icone: HeartHandshake,
    titulo: 'Suporte humano',
    descricao: 'Time de especialistas disponível 24h para resolver qualquer problema.',
  },
  {
    icone: Gauge,
    titulo: 'Alta performance',
    descricao: 'Infraestrutura distribuída globalmente para latência mínima.',
  },
]

function DiferenciaisSection() {
  return (
    <section
      id="metricas"
      style={{
        background: 'linear-gradient(180deg, var(--dark) 0%, #0d1a3a 50%, var(--dark) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow central */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(15,111,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container position-relative">
        {/* Métricas */}
        <div className="text-center mb-5">
          <span className="badge-custom mb-3 d-inline-block">Números reais</span>
          <h2 className="section-title text-white">
            Resultados que{' '}
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              comprovam
            </span>
          </h2>
        </div>

        <div className="row g-4 mb-5">
          {metricas.map((m) => (
            <div key={m.label} className="col-6 col-md-3 text-center">
              <div
                style={{
                  background: 'var(--gradient-card)',
                  border: '1px solid var(--dark-border)',
                  borderRadius: 'var(--radius)',
                  padding: '28px 20px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                    marginBottom: '10px',
                  }}
                >
                  {m.valor}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{m.label}</div>
              </div>
            </div>
          ))}
        </div>

        <hr className="divider-line mb-5" />

        {/* Diferenciais */}
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <span className="badge-custom mb-3 d-inline-block">Por que o NexaHub?</span>
            <h2 className="section-title text-white">
              A plataforma feita para{' '}
              <span style={{ color: 'var(--accent)' }}>quem quer mais</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
              Não somos só mais uma ferramenta. O NexaHub foi construído para ser o centro de operações digitais
              da sua empresa, com simplicidade e poder ao mesmo tempo.
            </p>
            {[
              'Sem contrato de longo prazo',
              'Dados sempre seus, nunca vendidos',
              'Atualizações automáticas incluídas',
              'Conformidade com LGPD garantida',
            ].map((item) => (
              <div key={item} className="d-flex align-items-center gap-2 mb-2">
                <CheckCircle size={18} color="var(--accent)" />
                <span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{item}</span>
              </div>
            ))}
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
              {diferenciais.map(({ icone: Icone, titulo, descricao }) => (
                <div key={titulo} className="col-12">
                  <div
                    style={{
                      background: 'var(--gradient-card)',
                      border: '1px solid var(--dark-border)',
                      borderRadius: 'var(--radius)',
                      padding: '24px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '18px',
                      transition: 'border 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.border = '1px solid rgba(15,111,255,0.3)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.border = '1px solid var(--dark-border)')
                    }
                  >
                    <div
                      style={{
                        background: 'rgba(15,111,255,0.12)',
                        border: '1px solid rgba(15,111,255,0.2)',
                        borderRadius: '10px',
                        padding: '10px',
                        flexShrink: 0,
                      }}
                    >
                      <Icone size={22} color="var(--primary)" />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontFamily: 'Sora, sans-serif',
                          fontWeight: 700,
                          color: 'var(--white)',
                          fontSize: '1rem',
                          marginBottom: '6px',
                        }}
                      >
                        {titulo}
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiferenciaisSection
