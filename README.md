# Portfólio Profissional - Desenvolvedor WordPress

Site estático moderno, otimizado para deploy no Netlify.
**100% pronto para captar clientes** — pacotes, formulário, FAQ e tudo o que um cliente precisa para fechar com você.

## ✨ O que tem no portfólio

- **Hero** com mockup animado de browser + cards flutuantes (estatísticas)
- **6 serviços** explicados com ícones
- **6 projetos** no portfólio com mockups visuais realistas
- **Processo em 4 etapas** (Como trabalho)
- **3 pacotes de preço** (Essencial, Profissional, Premium)
- **Sobre mim**
- **3 depoimentos** com avaliação 5 estrelas
- **FAQ** com 7 perguntas (acordeão)
- **Formulário de contato funcional** (Netlify Forms - você recebe no e-mail)
- **WhatsApp flutuante** que pulsa
- **Página 404** customizada
- **SEO completo** (meta tags, JSON-LD, sitemap, robots.txt)
- **PWA-ready** (manifest.json)
- **100% responsivo**

## 📁 Estrutura

```
portfolio/
├── index.html          ← Página principal
├── styles.css          ← Estilos completos
├── script.js           ← Animações e interações
├── 404.html            ← Página de erro
├── favicon.svg         ← Ícone do site
├── site.webmanifest    ← Configuração PWA
├── robots.txt          ← Configuração para Google
├── sitemap.xml         ← Mapa do site para Google
├── netlify.toml        ← Configuração de deploy
└── README.md
```

## ✏️ ANTES de fazer deploy — EDITE estes placeholders

Abra cada arquivo no Bloco de Notas / VS Code e use **Ctrl+H** (substituir):

### Em TODOS os arquivos:

| Substituir | Por |
|---|---|
| `[SEU NOME]` | Seu nome completo (ex: João Silva) |
| `[SEU EMAIL]` | Seu e-mail (ex: joaosilva@gmail.com) |
| `55SEUNUMERO` | Seu WhatsApp com DDD e código do país (ex: `5511999998888`) |
| `[SEU-SITE]` | O nome do seu site no Netlify (ex: `joaosilva-dev`) |

### Arquivos que precisam edição:
- `index.html` (principal — todos os placeholders)
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`

### Personalizando o portfólio
Na seção `<!-- PORTFÓLIO -->` do `index.html`, edite cada `<article class="portfolio-card">` com seus projetos reais (título, descrição e tecnologias).

### Personalizando os preços
Se quiser ajustar os valores, procure no `index.html` por `<!-- PREÇOS -->` e edite os valores em `<span class="price-value">`.

### Trocando os depoimentos
Edite os 3 cards na seção `<!-- DEPOIMENTOS -->` conforme você for ganhando clientes reais.

## 🚀 Como fazer deploy no Netlify (GRÁTIS)

### Opção 1: Arrastar e soltar (mais fácil - 30 segundos)

1. Acesse https://app.netlify.com/drop
2. Faça login (use Google ou GitHub)
3. **Arraste a pasta `portfolio` inteira** para o quadrado da página
4. Pronto! Netlify gera uma URL tipo `https://nome-aleatorio.netlify.app`
5. Troque o subdomínio em **Site settings → Change site name** (ex: `joaosilva-dev.netlify.app`)

### Opção 2: Via GitHub (atualiza sozinho quando você editar)

1. Crie uma conta no GitHub (github.com)
2. Crie um repositório público chamado `portfolio`
3. Faça upload dos arquivos da pasta `portfolio`
4. No Netlify: **Add new site → Import from Git**
5. Selecione o repositório e clique **Deploy site**

## 📧 Como o formulário funciona

O formulário usa **Netlify Forms** (já configurado no código). Funciona assim:

1. Cliente preenche o formulário e clica em "Enviar"
2. Netlify recebe e armazena a mensagem
3. Você é notificado por e-mail automaticamente
4. Pode ver todas as mensagens em **Forms** no painel do Netlify

### Ativando notificação por e-mail:
1. No painel do Netlify, vá em **Site settings → Forms → Form notifications**
2. Clique em **Add notification → Email notification**
3. Coloque seu e-mail e salve
4. Pronto! Toda mensagem que chegar vai pro seu e-mail.

## 🎨 Personalizando cores

Abra `styles.css` e edite no topo (`:root`):

```css
--accent-1: #8b5cf6;  /* Roxo principal */
--accent-2: #3b82f6;  /* Azul secundário */
--accent-3: #ec4899;  /* Rosa de destaque */
--bg-primary: #0a0a0f;  /* Fundo escuro */
```

## 📱 Testando localmente

Basta abrir `index.html` no navegador (clique duas vezes no arquivo).

Para testar como se fosse online:
```bash
npx serve .
```
Depois acesse `http://localhost:3000`.

## ✅ Checklist completo antes de divulgar

- [ ] Substituí todos os `[SEU NOME]`
- [ ] Coloquei meu WhatsApp correto (`5511...`)
- [ ] Coloquei meu email correto
- [ ] Substituí `[SEU-SITE]` pelo subdomínio do Netlify
- [ ] Editei os 6 projetos do portfólio
- [ ] Ajustei os valores dos pacotes (se quiser)
- [ ] Testei no celular (responsivo)
- [ ] Testei o link do WhatsApp
- [ ] Testei o formulário (enviei uma mensagem teste)
- [ ] Ativei a notificação por e-mail no Netlify Forms
- [ ] Configurei o subdomínio bonito no Netlify
- [ ] Comprei domínio próprio (opcional - `nomeexemplo.com.br`)

## 💡 Como usar o portfólio nas suas propostas

Cole isso no final de cada proposta que você enviar:

```text
📂 Veja meus trabalhos, pacotes e depoimentos completos em:
https://seunome-dev.netlify.app

Estou disponível para conversar pelo WhatsApp também!
```

## 🚀 Próximos passos para vender mais

1. **Crie 2-3 blogs DEMO de verdade** (use hospedagem grátis tipo InfinityFree) e coloque os links nos cards do portfólio. Ter "prova" muda tudo.
2. **Peça depoimentos** para cada cliente que fechar (mesmo que tenha pago pouco).
3. **Compre domínio próprio** (`seunome.com.br` ~R$ 40/ano) — passa muito mais credibilidade.
4. **Adicione Google Analytics** depois para ver quantas pessoas visitam.

Bom trabalho! 🎯
