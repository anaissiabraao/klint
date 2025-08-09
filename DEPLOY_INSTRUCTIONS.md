# 🚀 Instruções de Deploy - Klint Website

## 📋 Pré-requisitos

1. **Conta no GitHub**
   - Crie uma conta em [github.com](https://github.com)
   - Crie um novo repositório chamado `klint-website`

2. **Conta no Render**
   - Crie uma conta em [render.com](https://render.com)
   - Conecte sua conta GitHub

## 🔄 Passos para Deploy

### 1. Preparar o Repositório

```bash
# Clone o repositório (se ainda não tiver)
git clone https://github.com/seu-usuario/klint-website.git
cd klint-website

# Adicione todos os arquivos
git add .

# Faça o commit inicial
git commit -m "Initial commit - Klint website"

# Push para o GitHub
git push origin main
```

### 2. Configurar no Render

1. **Acesse o Render**
   - Faça login em [render.com](https://render.com)
   - Clique em "New +" > "Web Service"

2. **Conecte o Repositório**
   - Clique em "Connect a repository"
   - Selecione seu repositório `klint-website`
   - Clique em "Connect"

3. **Configure o Serviço**
   - **Name**: `klint-panos`
   - **Environment**: `Python 3`
   - **Region**: Escolha a mais próxima (ex: Frankfurt)
   - **Branch**: `main`
   - **Root Directory**: Deixe vazio (raiz do projeto)
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`

4. **Variáveis de Ambiente**
   - Clique em "Environment"
   - Adicione:
     - `SECRET_KEY`: `klint-secret-key-2024-production`
     - `PYTHON_VERSION`: `3.9.18`

5. **Deploy**
   - Clique em "Create Web Service"
   - Aguarde o deploy automático (2-3 minutos)

### 3. Verificar o Deploy

1. **Acesse o site**
   - O Render fornecerá uma URL (ex: `https://klint-panos.onrender.com`)
   - Teste todas as páginas:
     - Home: `/`
     - Produto: `/produto`
     - Sobre: `/sobre`
     - Contato: `/contato`

2. **Teste as funcionalidades**
   - Botão WhatsApp
   - Formulário de contato
   - Navegação entre páginas
   - Design responsivo

## 🔧 Configurações Adicionais

### Domínio Personalizado (Opcional)

1. **Compre um domínio**
   - Recomendado: `klint-panos.com.br` ou similar

2. **Configure no Render**
   - Vá em "Settings" > "Custom Domains"
   - Adicione seu domínio
   - Siga as instruções para configurar DNS

### SSL/HTTPS

- O Render fornece SSL automático
- Não é necessário configuração adicional

## 📊 Monitoramento

### Logs
- Acesse "Logs" no painel do Render
- Monitore erros e performance

### Métricas
- "Metrics" mostra uso de recursos
- Monitore CPU, memória e requisições

## 🐛 Troubleshooting

### Problemas Comuns

1. **Build falha**
   - Verifique `requirements.txt`
   - Confirme versão do Python
   - Teste localmente primeiro

2. **Aplicação não inicia**
   - Verifique logs no Render
   - Confirme `startCommand` correto
   - Teste localmente

3. **Imagens não carregam**
   - Verifique se estão em `static/images/`
   - Confirme nomes dos arquivos
   - Teste URLs das imagens

### Comandos Úteis

```bash
# Teste local
python app.py

# Teste com gunicorn
gunicorn app:app

# Verifique dependências
pip list

# Teste importações
python -c "from app import app; print('OK')"
```

## 📞 Suporte

### Recursos Úteis

- [Documentação Render](https://render.com/docs)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [GitHub Help](https://help.github.com/)

### Contato

- **WhatsApp**: (47) 99980-9687
- **Email**: contato@klint.com.br
- **GitHub Issues**: Reporte problemas no repositório

## ✅ Checklist de Deploy

- [ ] Repositório criado no GitHub
- [ ] Código enviado para GitHub
- [ ] Serviço criado no Render
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy realizado com sucesso
- [ ] Site acessível via URL do Render
- [ ] Todas as páginas funcionando
- [ ] Botão WhatsApp funcionando
- [ ] Formulário de contato funcionando
- [ ] Design responsivo testado
- [ ] SSL/HTTPS funcionando
- [ ] Logs verificados
- [ ] Performance testada

## 🎉 Deploy Concluído!

Seu site está no ar em: `https://klint-panos.onrender.com`

**Próximos passos:**
1. Configure domínio personalizado (opcional)
2. Configure analytics (Google Analytics)
3. Configure monitoramento
4. Configure backups
5. Configure CI/CD para atualizações automáticas

---

**Boa sorte com o deploy! 🚀**
