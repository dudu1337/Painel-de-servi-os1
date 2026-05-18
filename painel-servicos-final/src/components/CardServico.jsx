import { useState } from 'react'
import { ArrowRight, X, CheckCircle } from 'lucide-react'

// detalhes extras que aparecem no modal de cada serviço
const detalhesExtras = {
  'Analytics Avançado': {
    recursos: ['Dashboards personalizados em tempo real', 'Exportação para PDF e Excel', 'Alertas automáticos por meta', 'Histórico de até 2 anos'],
    ideal: 'Empresas que precisam tomar decisões baseadas em dados.',
  },
  'Cloud Storage': {
    recursos: ['Sincronização automática entre dispositivos', 'Controle de versão de arquivos', 'Compartilhamento com permissões', 'Backup diário automático'],
    ideal: 'Times que trabalham remoto ou com muitos arquivos.',
  },
  'Segurança & Acesso': {
    recursos: ['Autenticação em dois fatores (2FA)', 'Logs de acesso detalhados', 'Bloqueio por IP suspeito', 'Criptografia AES-256'],
    ideal: 'Qualquer empresa que lida com dados sensíveis.',
  },
  'Automação de Fluxos': {
    recursos: ['Editor visual de fluxos sem código', 'Gatilhos por evento ou horário', 'Integração com e-mail e Slack', 'Histórico de execuções'],
    ideal: 'Equipes que repetem muitas tarefas manualmente.',
  },
  'Notificações Smart': {
    recursos: ['Alertas por e-mail, SMS e push', 'Regras personalizadas por usuário', 'Agrupamento de notificações', 'Painel de histórico de alertas'],
    ideal: 'Operações que precisam de resposta rápida a eventos.',
  },
  'API & Integrações': {
    recursos: ['Documentação Swagger completa', 'SDK para JS, Python e PHP', 'Rate limit configurável', 'Webhooks em tempo real'],
    ideal: 'Devs que precisam conectar o NexaHub a outros sistemas.',
  },
  'Gestão de Equipes': {
    recursos: ['Criação de times e departamentos', 'Controle de férias e ponto', 'Avaliações de desempenho', 'Relatórios de produtividade'],
    ideal: 'RH e gestores que querem mais visibilidade do time.',
  },
  'Multi-idioma & Regiões': {
    recursos: ['Suporte a 12 idiomas', 'Fuso horário por usuário', 'Moeda e formato de data local', 'Interface traduzida automaticamente'],
    ideal: 'Empresas com equipes ou clientes em outros países.',
  },
}

function CardServico({ icone: Icone, titulo, descricao, tag, corIcone, delay, abrirContato }) {
  const [modalAberto, setModalAberto] = useState(false)
  const extras = detalhesExtras[titulo] || { recursos: [], ideal: '' }

  return (
    <>
      {/* card principal */}
      <div className={`col-md-6 fade-in-up delay-${delay}`}>
        <div
          style={{
            background: 'var(--gradient-card)',
            border: '1px solid var(--dark-border)',
            borderRadius: 'var(--radius)',
            padding: '32px 28px',
            height: '100%',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '24px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = `1px solid ${corIcone}55`
            e.currentTarget.style.boxShadow = `0 12px 40px ${corIcone}22`
            e.currentTarget.style.transform = 'translateY(-4px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = '1px solid var(--dark-border)'
            e.currentTarget.style.boxShadow = 'var(--shadow-card)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          {/* borda lateral colorida */}
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, bottom: 0,
              width: '4px',
              background: `linear-gradient(180deg, ${corIcone}, transparent)`,
            }}
          />

          {/* ícone na esquerda */}
          <div
            style={{
              width: '64px', height: '64px',
              background: `${corIcone}18`,
              border: `1px solid ${corIcone}35`,
              borderRadius: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Icone size={28} color={corIcone} />
          </div>

          {/* conteúdo na direita */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h3
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: 'var(--text-dark)',
                  margin: 0,
                }}
              >
                {titulo}
              </h3>
              
              <span
                style={{
                  background: `${corIcone}15`,
                  color: corIcone,
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '50px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontFamily: 'Outfit, sans-serif',
                  flexShrink: 0,
                }}
              >
                {tag}
              </span>
            </div>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '20px',
                flex: 1,
              }}
            >
              {descricao}
            </p>

            <button
              onClick={() => setModalAberto(true)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: corIcone,
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'Outfit, sans-serif',
                transition: 'gap 0.2s',
                alignSelf: 'flex-start',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
            >
              Ver detalhes <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* modal de detalhes do serviço */}
      {modalAberto && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setModalAberto(false) }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.78)',
            backdropFilter: 'blur(5px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid var(--dark-border)',
              borderRadius: 'var(--radius)',
              width: '100%',
              maxWidth: '500px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* barra colorida no topo do modal */}
            <div style={{ height: '3px', background: `linear-gradient(90deg, ${corIcone}, transparent)` }} />

            <div style={{ padding: 'clamp(24px, 4vw, 36px)' }}>
              {/* botão fechar */}
              <button
                onClick={() => setModalAberto(false)}
                style={{
                  position: 'absolute',
                  top: '16px', right: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--dark-border)',
                  borderRadius: '8px',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  width: '34px', height: '34px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <X size={16} />
              </button>

              {/* cabeçalho do modal */}
              <div className="d-flex align-items-center gap-3 mb-4" style={{ paddingRight: '40px' }}>
                <div
                  style={{
                    width: '48px', height: '48px',
                    background: `${corIcone}18`,
                    border: `1px solid ${corIcone}35`,
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icone size={22} color={corIcone} />
                </div>
                <div>
                  <span
                    style={{
                      background: `${corIcone}15`,
                      color: corIcone,
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '2px 10px',
                      borderRadius: '50px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontFamily: 'Outfit, sans-serif',
                      display: 'inline-block',
                      marginBottom: '6px',
                    }}
                  >
                    {tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: 'var(--text-dark)',
                      margin: 0,
                    }}
                  >
                    {titulo}
                  </h3>
                </div>
              </div>

              {/* descrição no modal */}
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.92rem',
                  lineHeight: '1.7',
                  marginBottom: '24px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid var(--dark-border)',
                }}
              >
                {descricao}
              </p>

              {/* lista de recursos */}
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  fontSize: '0.9rem',
                  marginBottom: '14px',
                }}
              >
                O que está incluído:
              </p>
              <div className="mb-4">
                {extras.recursos.map((item) => (
                  <div key={item} className="d-flex align-items-start gap-2 mb-2">
                    <CheckCircle size={16} color={corIcone} style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-dark)', fontSize: '0.88rem' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* ideal para */}
              <div
                style={{
                  background: `${corIcone}0d`,
                  border: `1px solid ${corIcone}25`,
                  borderRadius: '10px',
                  padding: '14px 16px',
                  marginBottom: '24px',
                }}
              >
                <span style={{ color: corIcone, fontSize: '0.8rem', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>
                  IDEAL PARA
                </span>
                <p style={{ color: 'var(--text-dark)', fontSize: '0.88rem', margin: '4px 0 0' }}>
                  {extras.ideal}
                </p>
              </div>

              {/* botões do modal */}
              <div className="d-flex gap-2 flex-wrap">
                <button
                  onClick={() => {
                    setModalAberto(false)
                    abrirContato?.()
                  }}
                  className="btn-primary-custom"
                  style={{ flex: 1, textAlign: 'center' }}
                >
                  Quero esse serviço
                </button>
                <button
                  onClick={() => setModalAberto(false)}
                  className="btn-outline-custom"
                  style={{ flexShrink: 0 }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CardServico
