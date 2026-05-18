# NexaHub – Painel de Serviços Digitais

> Projeto desenvolvido para a disciplina **Criatividade e Inovação** — Atividade de Design System com React + Bootstrap.

---

## 👥 Dupla

- **Kaike Vitor**
- **Luís Eduardo**

---

## 📋 Descrição do projeto

O **NexaHub** é uma plataforma fictícia de serviços digitais criada como trabalho avaliativo. A interface representa um painel moderno voltado a empresas que precisam centralizar suas operações digitais em um único lugar.

A aplicação conta com uma página de apresentação completa, exibindo serviços disponíveis, métricas da plataforma e diferenciais competitivos — tudo dentro de uma identidade visual coesa e responsiva.

---

## 🛠 Tecnologias utilizadas

| Tecnologia | Função |
|---|---|
| [React](https://react.dev/) | Biblioteca principal de UI |
| [Vite](https://vitejs.dev/) | Bundler e ambiente de desenvolvimento |
| [Bootstrap 5](https://getbootstrap.com/) | Grid, layout e responsividade (Trilha 1) |
| [Lucide React](https://lucide.dev/) | Biblioteca de ícones |
| CSS personalizado | Design System próprio com variáveis CSS |

---

## 📁 Estrutura do projeto

```
painel-servicos/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Navbar fixa com menu responsivo e scroll suave
│   │   ├── HeroSection.jsx       # Banner principal com botões funcionando
│   │   ├── CardServico.jsx       # Card reutilizável (dados via props)
│   │   ├── ServicosSection.jsx   # Área de cards com filtro por categoria
│   │   ├── DiferenciaisSection.jsx  # Métricas e diferenciais
│   │   ├── ContatoSection.jsx    # Seção CTA + modal de contato funcional (5º componente)
│   │   └── Footer.jsx            # Rodapé com newsletter funcional e links
│   ├── App.jsx                   # Componente raiz com estado do modal
│   ├── main.jsx                  # Ponto de entrada
│   └── index.css                 # Design tokens e estilos globais
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Como executar o projeto

**Pré-requisito:** Node.js instalado (versão 18 ou superior recomendada).

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/painel-servicos-digitais.git

# 2. Acesse a pasta do projeto
cd painel-servicos-digitais

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build
```

---

## ✅ Requisitos atendidos

- [x] Projeto criado com **Vite + React**
- [x] 5 componentes próprios: `Header`, `HeroSection`, `CardServico`, `ServicosSection`, `DiferenciaisSection`, `ContatoSection`, `Footer`
- [x] Uso de **Bootstrap 5** para grid e responsividade (Trilha 1)
- [x] Ícones com **Lucide React**
- [x] Interface responsiva (mobile, tablet e desktop)
- [x] `CardServico` recebe dados via **props** (ícone, título, descrição, tag, cor, delay)
- [x] Design System próprio com variáveis CSS
- [x] Mínimo de 4 cards (8 implementados com filtro por categoria)
- [x] **Todos os botões funcionando:** scroll suave, modal de contato, filtro de cards, newsletter com validação
- [x] Modal de contato com validação de campos e feedback visual
- [x] Newsletter com confirmação de inscrição
- [x] Seção de destaque com métricas e diferenciais
- [x] Header com navegação e botão de ação
- [x] Footer com links, redes sociais e newsletter
- [x] `ContatoSection` como 5º componente próprio com estado interno
