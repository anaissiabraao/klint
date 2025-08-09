// === KLINT - PANOS MULTIUSO ===
// JavaScript principal para animações e interações

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animação de entrada dos elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação (excluindo elementos de preço que têm animações CSS próprias)
    document.querySelectorAll('.feature-card, .product-container > div:not(.price), .benefit').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Garantir que as animações de preço sejam ativadas
    const priceAnimationElements = document.querySelectorAll('.price, .price-original, .price-current, .price-discount');
    priceAnimationElements.forEach(el => {
        // Forçar reflow para garantir que as animações sejam aplicadas
        el.style.animation = 'none';
        el.offsetHeight; // Trigger reflow
        el.style.animation = null;
        
        // Adicionar classe para garantir visibilidade
        el.style.opacity = '1';
        el.style.visibility = 'visible';
    });



    // Header auto-hide behavior
    let headerTimeout;
    const header = document.querySelector('.header');
    
    // Função para esconder o header
    function hideHeader() {
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease';
    }
    
    // Função para mostrar o header
    function showHeader() {
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease';
    }
    
    // Esconder header após 3 segundos de inatividade
    function startHeaderTimer() {
        clearTimeout(headerTimeout);
        headerTimeout = setTimeout(hideHeader, 3000);
    }
    
    // Mostrar header quando mouse passar por cima
    header.addEventListener('mouseenter', () => {
        clearTimeout(headerTimeout);
        showHeader();
    });
    
    // Iniciar timer quando mouse sair do header
    header.addEventListener('mouseleave', startHeaderTimer);
    
    // Mostrar header quando scrollar para cima
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Mostrar header quando scrollar para cima
        if (currentScrollY < lastScrollY && currentScrollY > 100) {
            showHeader();
            startHeaderTimer();
        }
        
        // Esconder header quando scrollar para baixo
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            hideHeader();
        }
        
        lastScrollY = currentScrollY;
        
        // Efeito de transparência no scroll
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Iniciar timer quando a página carregar
    startHeaderTimer();

    // Formulário de contato
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            fetch('/api/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    this.reset();
                } else {
                    alert('Erro: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao enviar mensagem. Tente novamente.');
            });
        });
    }

    // Formulário de pedido
    const orderForm = document.querySelector('#order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            fetch('/api/pedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    this.reset();
                } else {
                    alert('Erro: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao processar pedido. Tente novamente.');
            });
        });
    }

    // Removido contador que sobrescrevia o HTML do preço

    // Efeito parallax suave
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Lazy loading para imagens
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Menu mobile toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Fechar menu mobile ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Adicionar classe active ao link da navegação atual
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Efeito de hover nos cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animar números quando visíveis
    function animateNumbers() {
        const numberElements = document.querySelectorAll('.animate-number');
        
        numberElements.forEach(element => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = parseInt(element.getAttribute('data-target'));
                        const duration = 2000;
                        animateCounter(element, target, duration);
                        observer.unobserve(element);
                    }
                });
            });
            observer.observe(element);
        });
    }

    animateNumbers();

    // Adicionar loading state aos botões
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
                
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.innerHTML = '<i class="fab fa-whatsapp"></i> Comprar Agora';
                }, 2000);
            }
        });
    });

    // Image Gallery Functionality
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Update main image
                const newImageSrc = this.getAttribute('data-image');
                if (newImageSrc) {
                    mainImage.style.opacity = '0';
                    setTimeout(() => {
                        mainImage.src = newImageSrc;
                        mainImage.alt = this.alt;
                        mainImage.style.opacity = '1';
                    }, 150);
                }
            });
        });
    }
});

// Função para formatar preços
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Função para validar telefone
function validatePhone(phone) {
    const phoneRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Função para validar email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para mostrar notificação
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
