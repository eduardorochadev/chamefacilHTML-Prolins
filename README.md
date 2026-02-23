# 🟢 Chame Fácil - Sistema de Gestão de Filas Inteligente

<p align="center">
  <strong>Transforme filas em experiências.</strong><br>
  Sistema inteligente de gestão de filas que reduz o tempo de espera, aumenta a satisfação dos clientes e otimiza o atendimento.
</p>

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-páginas">Páginas</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-internacionalização">i18n</a>
</p>

---

## 📋 Sobre o Projeto

O **Chame Fácil** é uma landing page profissional para um sistema de gestão de filas, desenvolvida com HTML, CSS e JavaScript puros. O site apresenta o produto, seus planos, funcionalidades e permite que potenciais clientes solicitem demonstrações.

### Principais Destaques

- 🎨 **Design moderno** com tema escuro e gradientes em verde/turquesa
- 🌐 **Multilíngue** — suporte completo a Português, Espanhol e Inglês
- 📱 **Responsivo** — adaptado para mobile, tablet e desktop
- ⚡ **Sem dependências** — HTML, CSS e JS puros, sem frameworks
- 🎯 **Focado em conversão** — formulários estratégicos e CTAs claros

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---------|-----------|
| 📱 QR Code | Geração de senhas via QR Code |
| 🎫 Senha Virtual | Retirada de senha pelo aplicativo |
| 📊 Dashboard | Métricas em tempo real |
| 💬 WhatsApp | Notificações e acompanhamento |
| ⭐ Pesquisa de Satisfação | Avaliação do atendimento |
| 🔗 API Integrada | Integração com sistemas existentes |
| 📅 Agendamento | Sistema de agendamento online |
| ⚡ Priorização | Atendimento prioritário configurável |

---

## 📁 Estrutura do Projeto

```
chamefacil-tradicional/
├── index.html              # Página principal (landing page)
├── favicon.svg             # Ícone do site
├── README.md               # Documentação
├── css/
│   └── styles.css          # Estilos globais (1680+ linhas)
├── js/
│   └── main.js             # JavaScript principal (i18n, interações)
├── images/
│   ├── hero-bg.png         # Background do hero
│   ├── dashboard-mockup.png
│   ├── mobile-app.png
│   ├── totem-qrcode.png
│   └── happy-customers.png
└── pages/
    ├── parcerias.html      # Programa de Parcerias
    ├── afiliados.html      # Programa de Afiliados
    ├── blog.html           # Listagem do Blog
    └── blog-post.html      # Template de artigo
```

---

## 🚀 Como Executar

O projeto é 100% estático — basta abrir em um navegador.

### Opção 1: Abrir diretamente
```bash
# Abra o index.html no navegador
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### Opção 2: Servidor local (recomendado)
```bash
# Com Python
python -m http.server 8000

# Com Node.js (npx)
npx serve .

# Com VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

Acesse: `http://localhost:8000`

---

## 📄 Páginas

### 🏠 Página Principal (`index.html`)
- **Hero** com formulário de demonstração
- **Como Funciona** — 4 passos do sistema
- **Funcionalidades** — 8 recursos em grid
- **Preços** — 5 planos (Bronze a Customizável) + tabela comparativa
- **Clientes** — Segmentados por Saúde, Varejo, Alimentação e Serviços Públicos
- **Depoimentos** — 3 cases de sucesso
- **FAQ** — 5 perguntas com accordion
- **CTA** — Chamada para ação
- **Contato** — Formulário + informações de contato

### 🤝 Parcerias (`pages/parcerias.html`)
- Benefícios da parceria
- Modelos: Revenda, White Label e Integração
- Cases de parceiros
- Formulário de cadastro

### 💰 Afiliados (`pages/afiliados.html`)
- Estatísticas do programa (30% comissão, 200+ afiliados)
- Como funciona em 3 passos
- Tabela de comissões progressivas (Bronze → Diamante)
- Benefícios e depoimentos
- Formulário de inscrição

### 📝 Blog (`pages/blog.html`)
- Grid com 10 artigos
- Categorias: Gestão, Saúde, Varejo, Tecnologia, Analytics, etc.
- Newsletter

### 📖 Artigo (`pages/blog-post.html`)
- Template de artigo completo
- Compartilhamento social
- Artigos relacionados

---

## 🛠 Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| **HTML5** | Estrutura semântica |
| **CSS3** | Estilos com variáveis CSS (custom properties) |
| **JavaScript ES6+** | Interações, i18n, animações |
| **Google Fonts** | Inter + Space Grotesk |
| **Intersection Observer API** | Animações de scroll |

### CSS — Arquitetura

O CSS utiliza **variáveis CSS** para design tokens:

```css
:root {
  --primary: #00D4AA;        /* Verde principal */
  --secondary: #FF6B35;      /* Laranja de destaque */
  --bg-dark: #0A1628;        /* Fundo escuro */
  --bg-card: #0F2137;        /* Cards */
  --font-display: 'Space Grotesk';
  --font-body: 'Inter';
}
```

---

## 🌐 Internacionalização

O site oferece suporte a **3 idiomas** com sistema próprio de i18n:

- 🇧🇷 **Português** (padrão)
- 🇪🇸 **Español**
- 🇺🇸 **English**

O idioma selecionado é salvo no `localStorage` e persistido entre sessões. A troca é feita via seletor no header, traduzindo textos (`data-i18n`) e placeholders (`data-i18n-placeholder`).

---

## 💼 Planos e Preços

| Plano | Mensal | Implantação | Usuários | Totens |
|-------|--------|-------------|----------|--------|
| 🥉 Bronze | R$ 125,90 | Grátis | 3 | 1 |
| 🥈 Prata | R$ 350,00 | R$ 800 | 5 | 1 |
| 🥇 Ouro | R$ 550,00 | R$ 1.600 | 10 | 2 |
| 💎 Diamante | R$ 850,00 | R$ 2.400 | 15 | 3 |
| ⚙️ Customizável | Sob consulta | Sob consulta | Ilimitados | N/A |

---

## 📞 Contato

- 📱 **WhatsApp**: [(85) 99857-0031](https://wa.me/5585998570031)
- 📞 **Telefone**: (85) 3103-3130 | (11) 2124-3417
- 📧 **E-mail**: contato@chamefacil.com.br
- 📍 **Localização**: Fortaleza, CE - Brasil

---

## 📄 Licença

Este projeto é proprietário. Todos os direitos reservados © 2026 Chame Fácil.
