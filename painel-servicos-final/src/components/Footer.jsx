import { useState } from 'react'
import { Zap, Github, Linkedin, Mail } from 'lucide-react'

function Footer({ abrirContato }) {
  const currentYear = new Date().getFullYear()
  const [emailNewsletter, setEmailNewsletter] = useState('')
  const [inscrito, setInscrito] = useState(false)
  const [erroNews, setErroNews] = useState('')

  function handleNewsletter() {
    if (!emailNewsletter.trim() || !emailNewsletter.includes('@')) {
      setErroNews('E-mail inválido.')
      return
    }
    setInscrito(true)
    setEmailNewsletter('')
    setErroNews('')
    // reseta a mensagem de sucesso depois de 4 segundos
    setTimeout(() => setInscrito(false), 4000)
  }

  function rolarAte(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = {
    Produto: [
      { label: 'Serviços', acao: () => rolarAte('servicos') },
      { label: 'Recursos', acao: () => rolarAte('recursos') },
      { label: 'API', acao: abrirContato },
      { label: 'Segurança', acao: () => rolarAte('metricas') },
    ],
    Empresa: [
      { label: 'Sobre nós', acao: () => rolarAte('sobre') },
      { label: 'Blog', acao: abrirContato },
      { label: 'Carreiras', acao: abrirContato },
      { label: 'Contato', acao: abrirContato },
    ],
    Suporte: [
      { label: 'Documentação', acao: abrirContato },
      { label: 'Status', acao: abrirContato },
      { label: 'FAQ', acao: abrirContato },
      { label: 'Comunidade', acao: abrirContato },
    ],
  }

  return (
    <footer
      style={{
        background: '#070c18',
        borderTop: '1px solid var(--dark-border)',
        paddingTop: '60px',
        paddingBottom: '32px',
      }}
    >
      <div className="container">
        <div className="row g-4 mb-5">
          {/* logo + descrição + redes */}
          <div className="col-lg-4">
            <button
              onClick={() => rolarAte('inicio')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}
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
                <Zap size={16} color="#fff" fill="#fff" />
              </div>
              <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: 'var(--white)' }}>
                Nexa<span style={{ color: 'var(--accent)' }}>Hub</span>
              </span>
            </button>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', maxWidth: '300px' }}>
              Plataforma de serviços digitais para empresas que querem mais eficiência, integração e controle nas operações.
            </p>
            <div className="d-flex gap-3 mt-4">
              {[
                { Icon: Github, href: 'https://github.com' },
                { Icon: Linkedin, href: 'https://linkedin.com' },
                { Icon: Mail, href: '#', acao: abrirContato },
              ].map(({ Icon, href, acao }, i) => (
                <a
                  key={i}
                  href={href}
                  onClick={acao ? (e) => { e.preventDefault(); acao() } : undefined}
                  target={href !== '#' ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    background: 'var(--dark-card)',
                    border: '1px solid var(--dark-border)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)'
                    e.currentTarget.style.border = '1px solid rgba(15,111,255,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.border = '1px solid var(--dark-border)'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* links do footer com ações reais */}
          {Object.entries(links).map(([categoria, itens]) => (
            <div key={categoria} className="col-6 col-lg-2">
              <h6 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'var(--white)', fontSize: '0.9rem', marginBottom: '16px' }}>
                {categoria}
              </h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {itens.map((item) => (
                  <li key={item.label} style={{ marginBottom: '10px' }}>
                    <button
                      onClick={item.acao}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'color 0.2s',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* newsletter com feedback */}
          <div className="col-lg-3">
            <h6 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'var(--white)', fontSize: '0.9rem', marginBottom: '16px' }}>
              Newsletter
            </h6>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '14px' }}>
              Novidades e updates direto na sua caixa de entrada.
            </p>

            {inscrito ? (
              <div
                style={{
                  background: 'rgba(52,211,153,0.1)',
                  border: '1px solid rgba(52,211,153,0.3)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#34d399',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                }}
              >
                ✓ Inscrito com sucesso!
              </div>
            ) : (
              <>
                <div className="d-flex gap-2">
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={emailNewsletter}
                    onChange={(e) => { setEmailNewsletter(e.target.value); setErroNews('') }}
                    onKeyDown={(e) => e.key === 'Enter' && handleNewsletter()}
                    style={{
                      flex: 1,
                      background: 'var(--dark-card)',
                      border: erroNews ? '1px solid #f87171' : '1px solid var(--dark-border)',
                      borderRadius: '8px',
                      padding: '10px 14px',
                      color: 'var(--white)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                  <button
                    onClick={handleNewsletter}
                    className="btn-primary-custom"
                    style={{ padding: '10px 16px', fontSize: '0.85rem', flexShrink: 0 }}
                  >
                    OK
                  </button>
                </div>
                {erroNews && (
                  <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '6px', marginBottom: 0 }}>
                    {erroNews}
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        <hr
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--dark-border), transparent)',
            border: 'none',
            marginBottom: '24px',
          }}
        />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
            © {currentYear} NexaHub. Todos os direitos reservados.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0 }}>
            Desenvolvido por{' '}
            <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Kaike Vitor & Luís Eduardo</span>
            {' '}— Criatividade e Inovação · Trilha Bootstrap + React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
