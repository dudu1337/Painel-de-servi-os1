import { useState } from 'react'
import { X, Send, CheckCircle, Mail, User, MessageSquare } from 'lucide-react'

// esse componente serve como seção "sobre" na página
// e também exibe o modal de contato quando o usuário clica em "Começar agora"

function ContatoSection({ aberto, fechar, abrirContato }) {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErro('')
  }

  function handleEnviar() {
    // validação básica dos campos
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      setErro('Por favor, preencha todos os campos antes de enviar.')
      return
    }
    if (!form.email.includes('@')) {
      setErro('Digite um e-mail válido.')
      return
    }
    // simula envio (em produção aqui entraria o fetch pra API)
    setEnviado(true)
    setTimeout(() => {
      setEnviado(false)
      setForm({ nome: '', email: '', mensagem: '' })
      fechar()
    }, 2500)
  }

  function handleFechar() {
    setForm({ nome: '', email: '', mensagem: '' })
    setErro('')
    setEnviado(false)
    fechar()
  }

  return (
    <>
      {/* seção "sobre" que aparece na página normalmente */}
      <section
        id="sobre"
        style={{
          background: 'linear-gradient(180deg, var(--dark) 0%, #0b1220 100%)',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}
      >
        <div className="container">
          <div
            style={{
              background: 'var(--gradient-card)',
              border: '1px solid var(--dark-border)',
              borderRadius: 'var(--radius)',
              padding: 'clamp(32px, 5vw, 64px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* efeito de fundo */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '200px',
                background: 'radial-gradient(ellipse, rgba(15,111,255,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <span className="badge-custom mb-4 d-inline-block">Pronto pra começar?</span>
            <h2
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                color: 'var(--white)',
                marginBottom: '1rem',
              }}
            >
              Leve sua operação digital{' '}
              <span
                style={{
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                para o próximo nível
              </span>
            </h2>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                lineHeight: '1.7',
                maxWidth: '520px',
                margin: '0 auto 2.5rem',
              }}
            >
              Fale com a gente e descubra como o NexaHub pode se encaixar no dia a dia da sua empresa.
              Sem enrolação, sem contrato obrigatório.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button
                onClick={abrirContato}
                className="btn-primary-custom d-flex align-items-center gap-2"
              >
                <Mail size={16} />
                Entrar em contato
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('servicos')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-outline-custom"
              >
                Ver serviços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* modal de contato - aparece quando aberto=true */}
      {aberto && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={(e) => {
            // fecha se clicar fora do modal
            if (e.target === e.currentTarget) handleFechar()
          }}
        >
          <div
            style={{
              background: '#111827',
              border: '1px solid var(--dark-border)',
              borderRadius: 'var(--radius)',
              padding: 'clamp(24px, 4vw, 40px)',
              width: '100%',
              maxWidth: '480px',
              position: 'relative',
            }}
          >
            {/* botão fechar */}
            <button
              onClick={handleFechar}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--dark-border)',
                borderRadius: '8px',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <X size={16} />
            </button>

            {!enviado ? (
              <>
                <h3
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 700,
                    color: 'var(--white)',
                    marginBottom: '6px',
                    paddingRight: '40px',
                  }}
                >
                  Fale com a gente
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '28px' }}>
                  Preencha o formulário e entraremos em contato em até 24h.
                </p>

                {/* campo nome */}
                <div className="mb-3">
                  <label style={{ color: 'var(--text-light)', fontSize: '0.88rem', marginBottom: '6px', display: 'block' }}>
                    <User size={13} style={{ marginRight: '6px', opacity: 0.6 }} />
                    Nome completo
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--dark-border)',
                      borderRadius: '10px',
                      padding: '11px 14px',
                      color: 'var(--white)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.border = '1px solid var(--primary)')}
                    onBlur={(e) => (e.target.style.border = '1px solid var(--dark-border)')}
                  />
                </div>

                {/* campo email */}
                <div className="mb-3">
                  <label style={{ color: 'var(--text-light)', fontSize: '0.88rem', marginBottom: '6px', display: 'block' }}>
                    <Mail size={13} style={{ marginRight: '6px', opacity: 0.6 }} />
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--dark-border)',
                      borderRadius: '10px',
                      padding: '11px 14px',
                      color: 'var(--white)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.border = '1px solid var(--primary)')}
                    onBlur={(e) => (e.target.style.border = '1px solid var(--dark-border)')}
                  />
                </div>

                {/* campo mensagem */}
                <div className="mb-3">
                  <label style={{ color: 'var(--text-light)', fontSize: '0.88rem', marginBottom: '6px', display: 'block' }}>
                    <MessageSquare size={13} style={{ marginRight: '6px', opacity: 0.6 }} />
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--dark-border)',
                      borderRadius: '10px',
                      padding: '11px 14px',
                      color: 'var(--white)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.border = '1px solid var(--primary)')}
                    onBlur={(e) => (e.target.style.border = '1px solid var(--dark-border)')}
                  />
                </div>

                {/* mensagem de erro */}
                {erro && (
                  <p
                    style={{
                      color: '#f87171',
                      fontSize: '0.85rem',
                      marginBottom: '12px',
                      padding: '10px 14px',
                      background: 'rgba(248,113,113,0.08)',
                      borderRadius: '8px',
                      border: '1px solid rgba(248,113,113,0.2)',
                    }}
                  >
                    {erro}
                  </p>
                )}

                <button
                  onClick={handleEnviar}
                  className="btn-primary-custom w-100 d-flex align-items-center justify-content-center gap-2"
                  style={{ width: '100%' }}
                >
                  <Send size={15} />
                  Enviar mensagem
                </button>
              </>
            ) : (
              /* tela de confirmação depois de enviar */
              <div className="text-center py-3">
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'rgba(52,211,153,0.12)',
                    border: '1px solid rgba(52,211,153,0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <CheckCircle size={32} color="#34d399" />
                </div>
                <h4
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 700,
                    color: 'var(--white)',
                    marginBottom: '8px',
                  }}
                >
                  Mensagem enviada!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Obrigado, <strong style={{ color: 'var(--white)' }}>{form.nome}</strong>. Retornaremos no seu e-mail em breve.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ContatoSection