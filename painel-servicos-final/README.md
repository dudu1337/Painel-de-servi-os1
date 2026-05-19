# Lumina - Painel de Serviços Digitais

Projeto desenvolvido para a atividade de React com Vite, componentização, responsividade e uso de Design System.

## Dupla

- Kaike Vitor
- Luís Eduardo

## Descrição

O **Lumina** é uma plataforma fictícia de serviços digitais para empresas que desejam centralizar operações, integrações, automações e indicadores em uma interface moderna.

A aplicação apresenta um painel responsivo com banner principal, cards de serviços filtráveis, seção de métricas, diferenciais da solução, modal de contato e footer com newsletter.

## Tecnologias

- React
- Vite
- Bootstrap 5
- Lucide React
- CSS personalizado com variáveis de Design System

## Estrutura

```text
painel-servicos-final/
├── public/
│   └── assets/
│       └── nexahub-mark.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── CardServico.jsx
│   │   ├── ServicosSection.jsx
│   │   ├── DiferenciaisSection.jsx
│   │   ├── ContatoSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Como executar

```bash
npm install
npm run dev
```

Depois acesse o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build
```

## Requisitos atendidos

- Projeto em React com Vite.
- Componentes próprios: `Header`, `HeroSection`, `CardServico`, `ServicosSection`, `DiferenciaisSection`, `ContatoSection` e `Footer`.
- Uso de Bootstrap para grid, layout e responsividade.
- Uso de ícones com Lucide React.
- Conteúdo dinâmico via props no componente `CardServico`.
- No mínimo 4 cards de serviços, com filtros por categoria.
- Seção de destaque com métricas e diferenciais.
- Modal de contato com validação simples.
- Footer com links e newsletter.
- Estilização personalizada com tokens visuais no CSS.
