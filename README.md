# Klint - Panos Multiuso

Website de vendas online para os panos multiuso Klint, desenvolvido com Flask e design moderno.

## 🚀 Sobre o Projeto

O Klint é uma marca especializada em produtos de limpeza têxtil, oferecendo panos multiuso com tecnologia avançada para limpeza eficiente e duradoura.

### Características Principais

- **Design Responsivo**: Interface moderna e adaptável para todos os dispositivos
- **Animações CSS**: Efeitos visuais suaves e profissionais
- **Integração WhatsApp**: Botão de contato direto para vendas
- **SEO Otimizado**: Meta tags e estrutura para melhor indexação
- **Performance**: Carregamento rápido e otimizado

## 🛠️ Tecnologias Utilizadas

- **Backend**: Python 3.9, Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Deploy**: Render
- **Design**: CSS Grid, Flexbox, Animações CSS
- **Ícones**: Font Awesome
- **Fontes**: Inter (Google Fonts)

## 📁 Estrutura do Projeto

```
klint-website/
├── app.py                 # Aplicação principal Flask
├── requirements.txt       # Dependências Python
├── Procfile              # Configuração para Render
├── runtime.txt           # Versão do Python
├── README.md             # Documentação
├── static/               # Arquivos estáticos
│   ├── css/
│   │   └── style.css     # Estilos principais
│   ├── js/
│   │   └── main.js       # JavaScript principal
│   └── images/           # Imagens do projeto
│       ├── klint.png     # Logo da marca
│       └── panos-klint.jpg # Imagem do produto
├── templates/            # Templates HTML
│   ├── base.html         # Template base
│   ├── index.html        # Página principal
│   ├── produto.html      # Página do produto
│   ├── sobre.html        # Página sobre
│   └── contato.html      # Página de contato
└── .gitignore           # Arquivos ignorados pelo Git
```

## 🚀 Como Executar

### Pré-requisitos

- Python 3.9+
- pip (gerenciador de pacotes Python)

### Instalação Local

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/klint-website.git
cd klint-website
```

2. **Crie um ambiente virtual**
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate     # Windows
```

3. **Instale as dependências**
```bash
pip install -r requirements.txt
```

4. **Execute a aplicação**
```bash
python app.py
```

5. **Acesse o site**
```
http://localhost:5000
```

## 🌐 Deploy no Render

### Configuração Automática

1. **Conecte o repositório**
   - Faça login no [Render](https://render.com)
   - Clique em "New +" > "Web Service"
   - Conecte seu repositório GitHub

2. **Configure o serviço**
   - **Name**: klint-panos
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`

3. **Variáveis de Ambiente**
   - `SECRET_KEY`: Chave secreta para a aplicação

### Deploy Manual

1. **Push para o GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Configurar no Render**
   - Siga os passos acima para configuração automática
   - O deploy será feito automaticamente após push

## 📱 Funcionalidades

### Páginas Principais

- **Home**: Apresentação do produto e benefícios
- **Produto**: Detalhes técnicos e especificações
- **Sobre**: História da empresa e missão
- **Contato**: Formulário de contato e informações

### Recursos

- **Responsivo**: Adaptável a mobile, tablet e desktop
- **Animações**: Efeitos visuais suaves
- **SEO**: Meta tags otimizadas
- **Performance**: Carregamento otimizado
- **Acessibilidade**: Design inclusivo

## 🎨 Design System

### Cores Principais

- **Primária**: #1a1a1a (Preto)
- **Secundária**: #4a90e2 (Azul)
- **Accent**: #25d366 (Verde WhatsApp)

### Tipografia

- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800

## 📞 Contato

- **WhatsApp**: (47) 99980-9687
- **Instagram**: @klint_panos
- **Email**: contato@klint.com.br

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📈 Roadmap

- [ ] Sistema de pedidos online
- [ ] Integração com e-commerce
- [ ] Blog com dicas de limpeza
- [ ] Área do cliente
- [ ] Sistema de avaliações
- [ ] Integração com redes sociais

## 🐛 Problemas Conhecidos

- Nenhum problema conhecido no momento

## 📝 Changelog

### v1.0.0 (2024-01-01)
- Lançamento inicial do website
- Design responsivo completo
- Integração com WhatsApp
- Páginas principais implementadas

---

**Desenvolvido com ❤️ pela equipe Klint**
