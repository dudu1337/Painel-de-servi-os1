import { useState } from 'react'
import { X, Send, CheckCircle, Mail, User, MessageSquare, ArrowRight } from 'lucide-react'

function ContatoSection({ aberto, fechar, abrirContato }) {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErro('')
  }

  function handleEnviar() {
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      setErro('Por favor, preencha todos os campos antes de enviar.')
      return
    }
    if (!form.email.includes('@')) {
      setErro('Digite um e-mail válido.')
      return
    }
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
      <section
        id="sobre"
        style={{
          background: 'var(--bg-light)',
          paddingTop: '80px',
          paddingBottom: '120px',
        }}
      >
        <div className="container">
          <div
            style={{
              background: 'var(--gradient-primary)',
              borderRadius: '40px',
              padding: 'clamp(40px, 8vw, 80px)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(79,70,229,0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            {/* Elementos abstratos de fundo */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
              <span style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8, marginBottom: '20px', display: 'block' }}>
                O próximo passo
              </span>
              <h2
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  lineHeight: '1.1',
                  marginBottom: '1.5rem',
                  letterSpacing: '-1px'
                }}
              >
                Pronto para escalar sua operação digital?
              </h2>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                Junte-se a milhares de empresas que já transformaram suas operações com a Lumina.
              </p>
              
              <button
                onClick={abrirContato}
                style={{
                  background: '#fff',
                  color: 'var(--primary)',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '18px 40px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  fontFamily: 'Outfit, sans-serif',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Falar com consultor <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {aberto && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleFechar()
          }}
        >
          <div
            className="fade-in-up"
            style={{
              background: 'var(--white)',
              borderRadius: '24px',
              padding: '0',
              width: '100%',
              maxWidth: '900px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            }}
          >
            {/* Lado Esquerdo do Modal: Informações */}
            <div style={{ background: 'var(--gradient-primary)', color: '#fff', padding: '40px', width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className="d-none d-md-flex">
              <div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2rem', marginBottom: '1rem' }}>Lumina.</h3>
                <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: 1.6 }}>
                  Preencha o formulário para falar com um especialista. Descubra como podemos customizar a plataforma para o seu cenário.
                </p>
              </div>
              <div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <Mail size={20} opacity={0.8} /> <span>contato@lumina.com</span>
                </div>
              </div>
            </div>

            {/* Lado Direito do Modal: Formulário */}
            <div style={{ padding: '40px', width: '100%', flex: 1, position: 'relative' }}>
              <button
                onClick={handleFechar}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--bg-subtle)',
                  border: 'none',
                  borderRadius: '50%',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#e2e8f0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg-subtle)')}
              >
                <X size={18} />
              </button>

              {!enviado ? (
                <>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--text-dark)', fontSize: '1.8rem', marginBottom: '32px' }}>
                    Enviar mensagem
                  </h3>

                  <div className="mb-4">
                    <label style={{ color: 'var(--text-dark)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', display: 'block' }}>Nome completo</label>
                    <input
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Como gosta de ser chamado?"
                      style={{
                        width: '100%',
                        background: 'var(--bg-light)',
                        border: '1px solid var(--dark-border)',
                        borderRadius: '12px',
                        padding: '14px 16px',
                        color: 'var(--text-dark)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.border = '1px solid var(--primary)')}
                      onBlur={(e) => (e.target.style.border = '1px solid var(--dark-border)')}
                    />
                  </div>

                  <div className="mb-4">
                    <label style={{ color: 'var(--text-dark)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', display: 'block' }}>E-mail profissional</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      style={{
                        width: '100%',
                        background: 'var(--bg-light)',
                        border: '1px solid var(--dark-border)',
                        borderRadius: '12px',
                        padding: '14px 16px',
                        color: 'var(--text-dark)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.border = '1px solid var(--primary)')}
                      onBlur={(e) => (e.target.style.border = '1px solid var(--dark-border)')}
                    />
                  </div>

                  <div className="mb-4">
                    <label style={{ color: 'var(--text-dark)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', display: 'block' }}>Sua mensagem</label>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      placeholder="Conte um pouco sobre sua necessidade..."
                      rows={3}
                      style={{
                        width: '100%',
                        background: 'var(--bg-light)',
                        border: '1px solid var(--dark-border)',
                        borderRadius: '12px',
                        padding: '14px 16px',
                        color: 'var(--text-dark)',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.border = '1px solid var(--primary)')}
                      onBlur={(e) => (e.target.style.border = '1px solid var(--dark-border)')}
                    />
                  </div>

                  {erro && (
                    <p style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '16px', fontWeight: 500 }}>
                      {erro}
                    </p>
                  )}

                  <button
                    onClick={handleEnviar}
                    style={{
                      background: 'var(--text-dark)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '16px',
                      width: '100%',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontFamily: 'Outfit, sans-serif'
                    }}
                  >
                    Enviar solicitação
                  </button>
                </>
              ) : (
                <div className="text-center py-5 d-flex flex-column justify-content-center h-100">
                  <div style={{ margin: '0 auto 20px' }}>
                    <CheckCircle size={64} color="var(--primary)" />
                  </div>
                  <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '16px' }}>
                    Tudo certo!
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    Recebemos sua mensagem, <strong style={{ color: 'var(--text-dark)' }}>{form.nome}</strong>. Nossa equipe entrará em contato em breve.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ContatoSection