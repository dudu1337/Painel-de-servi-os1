import { useState } from 'react'
import {
  BarChart2, Cloud, Lock, Zap,
  Bell, Code2, Users, Globe,
} from 'lucide-react'
import CardServico from './CardServico'

const todosServicos = [
  {
    icone: BarChart2,
    titulo: 'Analytics Avançado',
    descricao: 'Dashboards em tempo real com indicadores personalizados e geração automática de relatórios.',
    tag: 'Dados',
    corIcone: '#0f6fff',
    categoria: 'dados',
  },
  {
    icone: Cloud,
    titulo: 'Cloud Storage',
    descricao: 'Armazenamento na nuvem com sincronização automática entre todos os dispositivos da equipe.',
    tag: 'Infraestrutura',
    corIcone: '#00e0c6',
    categoria: 'infra',
  },
  {
    icone: Lock,
    titulo: 'Segurança & Acesso',
    descricao: 'Autenticação multifator, controle de permissões e criptografia de ponta a ponta.',
    tag: 'Segurança',
    corIcone: '#a78bfa',
    categoria: 'seguranca',
  },
  {
    icone: Zap,
    titulo: 'Automação de Fluxos',
    descricao: 'Crie regras e gatilhos para automatizar tarefas repetitivas sem precisar escrever código.',
    tag: 'Automação',
    corIcone: '#f59e0b',
    categoria: 'automacao',
  },
  {
    icone: Bell,
    titulo: 'Notificações Smart',
    descricao: 'Alertas inteligentes por e-mail, SMS ou push com base em eventos e métricas configuradas.',
    tag: 'Comunicação',
    corIcone: '#f472b6',
    categoria: 'automacao',
  },
  {
    icone: Code2,
    titulo: 'API & Integrações',
    descricao: 'Conecte com mais de 150 plataformas usando API REST ou webhooks personalizados.',
    tag: 'Dev',
    corIcone: '#34d399',
    categoria: 'infra',
  },
  {
    icone: Users,
    titulo: 'Gestão de Equipes',
    descricao: 'Organize colaboradores, defina funções e acompanhe o desempenho de cada membro.',
    tag: 'RH & Times',
    corIcone: '#60a5fa',
    categoria: 'dados',
  },
  {
    icone: Globe,
    titulo: 'Multi-idioma & Regiões',
    descricao: 'Suporte a vários idiomas e configurações regionais para equipes espalhadas pelo mundo.',
    tag: 'Global',
    corIcone: '#fb923c',
    categoria: 'infra',
  },
]

const categorias = [
  { valor: 'todos', label: 'Todos' },
  { valor: 'dados', label: 'Dados' },
  { valor: 'infra', label: 'Infraestrutura' },
  { valor: 'automacao', label: 'Automação' },
  { valor: 'seguranca', label: 'Segurança' },
]

function ServicosSection() {
  const [filtro, setFiltro] = useState('todos')

  const servicosFiltrados =
    filtro === 'todos'
      ? todosServicos
      : todosServicos.filter((s) => s.categoria === filtro)

  return (
    <section id="servicos" style={{ background: 'var(--dark)' }}>
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge-custom mb-3 d-inline-block">Serviços</span>
          <h2 className="section-title text-white">
            Tudo que sua operação{' '}
            <span
              style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              precisa
            </span>
          </h2>
          <p className="section-subtitle">
            Um conjunto completo de ferramentas digitais para empresas que querem crescer com eficiência e segurança.
          </p>
        </div>

        {/* filtros de categoria - botões funcionando */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categorias.map((cat) => (
            <button
              key={cat.valor}
              onClick={() => setFiltro(cat.valor)}
              style={{
                background: filtro === cat.valor ? 'var(--primary)' : 'transparent',
                border: filtro === cat.valor
                  ? '1.5px solid var(--primary)'
                  : '1.5px solid var(--dark-border)',
                color: filtro === cat.valor ? 'var(--white)' : 'var(--text-muted)',
                borderRadius: '50px',
                padding: '8px 20px',
                fontSize: '0.88rem',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {servicosFiltrados.map((servico, index) => (
            <CardServico
              key={servico.titulo}
              {...servico}
              delay={(index % 4) + 1}
            />
          ))}
        </div>

        {servicosFiltrados.length === 0 && (
          <div className="text-center py-5">
            <p style={{ color: 'var(--text-muted)' }}>Nenhum serviço nessa categoria ainda.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicosSection
