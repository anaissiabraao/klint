from flask import Flask, render_template, request, jsonify, redirect, url_for
import os
from datetime import datetime
import json

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'klint-secret-key-2024')

# Configurações
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['DEBUG'] = True

# Rotas principais
@app.route('/')
def index():
    """Página principal do site Klint"""
    return render_template('index.html')

@app.route('/produto')
def produto():
    """Página detalhada do produto"""
    return render_template('produto.html')

@app.route('/sobre')
def sobre():
    """Página sobre a empresa"""
    return render_template('sobre.html')

@app.route('/contato')
def contato():
    """Página de contato"""
    return render_template('contato.html')

@app.route('/api/contato', methods=['POST'])
def api_contato():
    """API para receber mensagens de contato"""
    try:
        data = request.get_json()
        nome = data.get('nome', '')
        email = data.get('email', '')
        telefone = data.get('telefone', '')
        mensagem = data.get('mensagem', '')
        
        # Aqui você pode adicionar lógica para salvar no banco de dados
        # Por enquanto, vamos apenas retornar sucesso
        return jsonify({
            'success': True,
            'message': 'Mensagem recebida com sucesso! Entraremos em contato em breve.'
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Erro ao processar mensagem. Tente novamente.'
        }), 500

@app.route('/api/pedido', methods=['POST'])
def api_pedido():
    """API para processar pedidos"""
    try:
        data = request.get_json()
        nome = data.get('nome', '')
        telefone = data.get('telefone', '')
        quantidade = data.get('quantidade', 1)
        endereco = data.get('endereco', '')
        
        # Aqui você pode adicionar lógica para processar o pedido
        # Por enquanto, vamos apenas retornar sucesso
        return jsonify({
            'success': True,
            'message': 'Pedido recebido! Entraremos em contato para confirmar.',
            'pedido_id': f"KLINT-{datetime.now().strftime('%Y%m%d%H%M%S')}"
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Erro ao processar pedido. Tente novamente.'
        }), 500

@app.route('/robots.txt')
def robots():
    """Robots.txt para SEO"""
    return """User-agent: *
Allow: /
Sitemap: https://klint-panos.onrender.com/sitemap.xml"""

@app.route('/sitemap.xml')
def sitemap():
    """Sitemap XML para SEO"""
    sitemap_xml = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://klint-panos.onrender.com/</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://klint-panos.onrender.com/produto</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://klint-panos.onrender.com/sobre</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    <url>
        <loc>https://klint-panos.onrender.com/contato</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
</urlset>"""
    return app.response_class(sitemap_xml, mimetype='application/xml')

@app.errorhandler(404)
def not_found(error):
    """Página 404 personalizada"""
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    """Página 500 personalizada"""
    return render_template('500.html'), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
