/* ============================================
   CHAME FÁCIL - JAVASCRIPT PRINCIPAL
   Sistema de Gestão de Filas Inteligente
   ============================================ */

// ============================================
// 1. SISTEMA DE INTERNACIONALIZAÇÃO
// ============================================
const translations = {
  pt: {
    // Header
    nav_how_it_works: 'Como Funciona',
    nav_features: 'Funcionalidades',
    nav_pricing: 'Preços',
    nav_faq: 'Dúvidas',
    nav_partners: 'Parcerias',
    nav_affiliates: 'Afiliados',
    nav_blog: 'Blog',
    nav_demo: 'Solicitar Demo',
    
    // Hero
    hero_badge: 'Sistema líder em gestão de filas',
    hero_title: 'Transforme filas em',
    hero_title_highlight: 'experiências.',
    hero_description: 'Sistema inteligente de gestão de filas que reduz o tempo de espera, aumenta a satisfação dos clientes e otimiza seu atendimento.',
    hero_btn_demo: 'Quero uma Demonstração',
    hero_btn_pricing: 'Ver Preços',
    hero_stat_1_value: '70%',
    hero_stat_1_label: 'Redução no tempo de espera',
    hero_stat_2_value: '98%',
    hero_stat_2_label: 'Satisfação dos clientes',
    hero_stat_3_value: '500+',
    hero_stat_3_label: 'Empresas atendidas',
    
    // Form
    form_title: 'Solicite uma Demonstração',
    form_subtitle: 'Preencha seus dados e entraremos em contato',
    form_name: 'Nome completo',
    form_email: 'E-mail',
    form_phone: 'Telefone',
    form_segment: 'Segmento',
    form_company: 'Nome da empresa',
    form_message: 'Como podemos ajudar?',
    form_submit: 'Solicitar Demo',
    form_send: 'Enviar Mensagem',
    form_trust_1: 'Sem compromisso',
    form_trust_2: '100% gratuito',
    
    // Features
    features_badge: 'Recursos Poderosos',
    features_title: 'Funcionalidades Completas',
    features_subtitle: 'Tudo que você precisa para revolucionar seu atendimento',
    feature_qrcode: 'QR Code',
    feature_qrcode_desc: 'Gere senhas via QR Code sem necessidade de totem físico.',
    feature_virtual: 'Senha Virtual',
    feature_virtual_desc: 'Retire sua senha de qualquer lugar pelo aplicativo.',
    feature_dashboard: 'Dashboard',
    feature_dashboard_desc: 'Acompanhe todas as métricas em tempo real.',
    feature_whatsapp: 'WhatsApp',
    feature_whatsapp_desc: 'Notificações e acompanhamento via WhatsApp.',
    feature_survey: 'Pesquisa de Satisfação',
    feature_survey_desc: 'Avalie a qualidade do atendimento em tempo real.',
    feature_api: 'API Integrada',
    feature_api_desc: 'Integre com seus sistemas existentes facilmente.',
    feature_schedule: 'Agendamento',
    feature_schedule_desc: 'Sistema completo de agendamento online.',
    feature_priority: 'Priorização',
    feature_priority_desc: 'Atendimento prioritário configurável.',
    
    // Pricing
    pricing_badge: 'Planos e Preços',
    pricing_title: 'Escolha o Plano Ideal',
    pricing_subtitle: 'Soluções flexíveis para cada tamanho de negócio',
    pricing_popular: 'Mais Popular',
    pricing_month: '/mês',
    pricing_implant: 'Implant.:',
    pricing_no_implant: 'Sem implantação',
    pricing_consult: 'SOB CONSULTA',
    pricing_hour: 'Hora:',
    pricing_start: 'Começar Agora',
    pricing_quote: 'Orçamento',
    pricing_table_title: 'Comparativo Completo de Funcionalidades',
    pricing_note: 'Hora de Customização:',
    
    // Plans
    plan_bronze: 'Bronze',
    plan_silver: 'Prata',
    plan_gold: 'Ouro',
    plan_diamond: 'Diamante',
    plan_custom: 'Customizável',
    
    // Testimonials
    testimonials_badge: 'Depoimentos',
    testimonials_title: 'O Que Nossos Clientes Dizem',
    testimonials_subtitle: 'Histórias reais de empresas que transformaram seu atendimento',
    
    // FAQ
    faq_badge: 'Dúvidas Frequentes',
    faq_title: 'Perguntas Frequentes',
    faq_subtitle: 'Tire suas dúvidas sobre o Chame Fácil',
    faq_q1: 'Como funciona a implantação do sistema?',
    faq_a1: 'A implantação é feita de forma remota pela nossa equipe técnica. Configuramos todo o sistema, integramos com seus equipamentos e treinamos sua equipe para usar todas as funcionalidades.',
    faq_q2: 'Preciso de equipamentos especiais?',
    faq_a2: 'Não necessariamente. O sistema funciona com QR Code pelo celular, mas também oferecemos totens físicos e painéis de TV para uma experiência completa.',
    faq_q3: 'O sistema integra com meu software atual?',
    faq_a3: 'Sim! Oferecemos API completa para integração com ERPs, CRMs e outros sistemas. Nossa equipe técnica auxilia em todo o processo de integração.',
    faq_q4: 'Qual o suporte oferecido?',
    faq_a4: 'Oferecemos suporte técnico via WhatsApp, telefone e e-mail. Nos planos Ouro e Diamante, o suporte é prioritário com tempo de resposta reduzido.',
    faq_q5: 'Posso testar antes de contratar?',
    faq_a5: 'Sim! Oferecemos demonstração gratuita e período de teste para você conhecer todas as funcionalidades antes de decidir.',
    
    // Clients
    clients_badge: 'Quem Confia em Nós',
    clients_title: 'Nossos Clientes por Segmento',
    clients_subtitle: 'Empresas de diversos setores já transformaram seu atendimento com o Chame Fácil',
    clients_health: 'Saúde',
    clients_retail: 'Varejo',
    clients_food: 'Alimentação',
    clients_public: 'Serviços Públicos',
    
    // CTA
    cta_title: 'Pronto para Transformar seu Atendimento?',
    cta_subtitle: 'Junte-se a mais de 500 empresas que já revolucionaram a experiência dos seus clientes.',
    cta_btn: 'Solicitar Demonstração Gratuita',
    
    // Contact
    contact_badge: 'Fale Conosco',
    contact_title: 'Entre em Contato',
    contact_subtitle: 'Estamos prontos para ajudar você a transformar seu atendimento',
    contact_whatsapp: 'WhatsApp',
    contact_email: 'E-mail',
    contact_phone: 'Telefone',
    contact_location: 'Localização',
    contact_hours: 'Horário',
    contact_hours_value: 'Seg - Sex: 8h às 18h',
    
    // Footer
    footer_description: 'Sistema inteligente de gestão de filas que transforma a experiência de atendimento.',
    footer_links: 'Links Rápidos',
    footer_contact: 'Contato',
    footer_rights: '© 2024 Chame Fácil. Todos os direitos reservados.',
    footer_privacy: 'Política de Privacidade',
    footer_terms: 'Termos de Uso',
    
    // Partners Page
    partners_title: 'Programa de Parcerias',
    partners_subtitle: 'Expanda seus negócios com o sistema líder em gestão de filas',
    partners_benefit_1_title: 'Revenda',
    partners_benefit_1_desc: 'Comercialize o Chame Fácil para seus clientes e ganhe comissões recorrentes.',
    partners_benefit_2_title: 'White Label',
    partners_benefit_2_desc: 'Ofereça o sistema com sua marca e identidade visual.',
    partners_benefit_3_title: 'Integração',
    partners_benefit_3_desc: 'Integre o Chame Fácil ao seu software e agregue valor.',
    
    // Affiliates Page
    affiliates_title: 'Programa de Afiliados',
    affiliates_subtitle: 'Ganhe comissões indicando o Chame Fácil',
    affiliates_stat_1: 'Comissão por venda',
    affiliates_stat_2: 'Pagamento em até',
    affiliates_stat_3: 'Afiliados ativos',
    affiliates_stat_4: 'Comissões pagas',
    
    // Blog
    blog_title: 'Blog',
    blog_subtitle: 'Conteúdos sobre gestão de filas, atendimento ao cliente e tecnologia',
    blog_read_more: 'Ler mais',
    blog_min_read: 'min de leitura'
  },
  
  es: {
    // Header
    nav_how_it_works: 'Cómo Funciona',
    nav_features: 'Funcionalidades',
    nav_pricing: 'Precios',
    nav_faq: 'Preguntas',
    nav_partners: 'Socios',
    nav_affiliates: 'Afiliados',
    nav_blog: 'Blog',
    nav_demo: 'Solicitar Demo',
    
    // Hero
    hero_badge: 'Sistema líder en gestión de colas',
    hero_title: 'Transforma colas en',
    hero_title_highlight: 'experiencias.',
    hero_description: 'Sistema inteligente de gestión de colas que reduce el tiempo de espera, aumenta la satisfacción de los clientes y optimiza tu atención.',
    hero_btn_demo: 'Quiero una Demostración',
    hero_btn_pricing: 'Ver Precios',
    hero_stat_1_value: '70%',
    hero_stat_1_label: 'Reducción en tiempo de espera',
    hero_stat_2_value: '98%',
    hero_stat_2_label: 'Satisfacción de clientes',
    hero_stat_3_value: '500+',
    hero_stat_3_label: 'Empresas atendidas',
    
    // Form
    form_title: 'Solicita una Demostración',
    form_subtitle: 'Completa tus datos y te contactaremos',
    form_name: 'Nombre completo',
    form_email: 'Correo electrónico',
    form_phone: 'Teléfono',
    form_segment: 'Segmento',
    form_company: 'Nombre de la empresa',
    form_message: '¿Cómo podemos ayudarte?',
    form_submit: 'Solicitar Demo',
    form_send: 'Enviar Mensaje',
    form_trust_1: 'Sin compromiso',
    form_trust_2: '100% gratis',
    
    // Features
    features_badge: 'Recursos Poderosos',
    features_title: 'Funcionalidades Completas',
    features_subtitle: 'Todo lo que necesitas para revolucionar tu atención',
    feature_qrcode: 'Código QR',
    feature_qrcode_desc: 'Genera turnos vía QR Code sin necesidad de tótem físico.',
    feature_virtual: 'Turno Virtual',
    feature_virtual_desc: 'Retira tu turno desde cualquier lugar por la aplicación.',
    feature_dashboard: 'Dashboard',
    feature_dashboard_desc: 'Acompaña todas las métricas en tiempo real.',
    feature_whatsapp: 'WhatsApp',
    feature_whatsapp_desc: 'Notificaciones y seguimiento vía WhatsApp.',
    feature_survey: 'Encuesta de Satisfacción',
    feature_survey_desc: 'Evalúa la calidad de la atención en tiempo real.',
    feature_api: 'API Integrada',
    feature_api_desc: 'Integra con tus sistemas existentes fácilmente.',
    feature_schedule: 'Agendamiento',
    feature_schedule_desc: 'Sistema completo de agendamiento online.',
    feature_priority: 'Priorización',
    feature_priority_desc: 'Atención prioritaria configurable.',
    
    // Pricing
    pricing_badge: 'Planes y Precios',
    pricing_title: 'Elige el Plan Ideal',
    pricing_subtitle: 'Soluciones flexibles para cada tamaño de negocio',
    pricing_popular: 'Más Popular',
    pricing_month: '/mes',
    pricing_implant: 'Implant.:',
    pricing_no_implant: 'Sin implantación',
    pricing_consult: 'CONSULTAR',
    pricing_hour: 'Hora:',
    pricing_start: 'Comenzar Ahora',
    pricing_quote: 'Presupuesto',
    pricing_table_title: 'Comparativo Completo de Funcionalidades',
    pricing_note: 'Hora de Personalización:',
    
    // Plans
    plan_bronze: 'Bronce',
    plan_silver: 'Plata',
    plan_gold: 'Oro',
    plan_diamond: 'Diamante',
    plan_custom: 'Personalizable',
    
    // Testimonials
    testimonials_badge: 'Testimonios',
    testimonials_title: 'Lo Que Dicen Nuestros Clientes',
    testimonials_subtitle: 'Historias reales de empresas que transformaron su atención',
    
    // FAQ
    faq_badge: 'Preguntas Frecuentes',
    faq_title: 'Preguntas Frecuentes',
    faq_subtitle: 'Resuelve tus dudas sobre Chame Fácil',
    faq_q1: '¿Cómo funciona la implantación del sistema?',
    faq_a1: 'La implantación se realiza de forma remota por nuestro equipo técnico. Configuramos todo el sistema, integramos con tus equipos y entrenamos a tu equipo para usar todas las funcionalidades.',
    faq_q2: '¿Necesito equipos especiales?',
    faq_a2: 'No necesariamente. El sistema funciona con código QR por el celular, pero también ofrecemos tótems físicos y paneles de TV para una experiencia completa.',
    faq_q3: '¿El sistema se integra con mi software actual?',
    faq_a3: '¡Sí! Ofrecemos API completa para integración con ERPs, CRMs y otros sistemas. Nuestro equipo técnico ayuda en todo el proceso de integración.',
    faq_q4: '¿Cuál es el soporte ofrecido?',
    faq_a4: 'Ofrecemos soporte técnico vía WhatsApp, teléfono y correo electrónico. En los planes Oro y Diamante, el soporte es prioritario con tiempo de respuesta reducido.',
    faq_q5: '¿Puedo probar antes de contratar?',
    faq_a5: '¡Sí! Ofrecemos demostración gratuita y período de prueba para que conozcas todas las funcionalidades antes de decidir.',
    
    // Clients
    clients_badge: 'Quienes Confían en Nosotros',
    clients_title: 'Nuestros Clientes por Segmento',
    clients_subtitle: 'Empresas de diversos sectores ya transformaron su atención con Chame Fácil',
    clients_health: 'Salud',
    clients_retail: 'Retail',
    clients_food: 'Alimentación',
    clients_public: 'Servicios Públicos',
    
    // CTA
    cta_title: '¿Listo para Transformar tu Atención?',
    cta_subtitle: 'Únete a más de 500 empresas que ya revolucionaron la experiencia de sus clientes.',
    cta_btn: 'Solicitar Demostración Gratuita',
    
    // Contact
    contact_badge: 'Contáctanos',
    contact_title: 'Entra en Contacto',
    contact_subtitle: 'Estamos listos para ayudarte a transformar tu atención',
    contact_whatsapp: 'WhatsApp',
    contact_email: 'Correo',
    contact_phone: 'Teléfono',
    contact_location: 'Ubicación',
    contact_hours: 'Horario',
    contact_hours_value: 'Lun - Vie: 8h a 18h',
    
    // Footer
    footer_description: 'Sistema inteligente de gestión de colas que transforma la experiencia de atención.',
    footer_links: 'Enlaces Rápidos',
    footer_contact: 'Contacto',
    footer_rights: '© 2024 Chame Fácil. Todos los derechos reservados.',
    footer_privacy: 'Política de Privacidad',
    footer_terms: 'Términos de Uso',
    
    // Partners Page
    partners_title: 'Programa de Socios',
    partners_subtitle: 'Expande tus negocios con el sistema líder en gestión de colas',
    partners_benefit_1_title: 'Reventa',
    partners_benefit_1_desc: 'Comercializa Chame Fácil para tus clientes y gana comisiones recurrentes.',
    partners_benefit_2_title: 'White Label',
    partners_benefit_2_desc: 'Ofrece el sistema con tu marca e identidad visual.',
    partners_benefit_3_title: 'Integración',
    partners_benefit_3_desc: 'Integra Chame Fácil a tu software y agrega valor.',
    
    // Affiliates Page
    affiliates_title: 'Programa de Afiliados',
    affiliates_subtitle: 'Gana comisiones recomendando Chame Fácil',
    affiliates_stat_1: 'Comisión por venta',
    affiliates_stat_2: 'Pago en hasta',
    affiliates_stat_3: 'Afiliados activos',
    affiliates_stat_4: 'Comisiones pagadas',
    
    // Blog
    blog_title: 'Blog',
    blog_subtitle: 'Contenidos sobre gestión de colas, atención al cliente y tecnología',
    blog_read_more: 'Leer más',
    blog_min_read: 'min de lectura'
  },
  
  en: {
    // Header
    nav_how_it_works: 'How It Works',
    nav_features: 'Features',
    nav_pricing: 'Pricing',
    nav_faq: 'FAQ',
    nav_partners: 'Partners',
    nav_affiliates: 'Affiliates',
    nav_blog: 'Blog',
    nav_demo: 'Request Demo',
    
    // Hero
    hero_badge: 'Leading queue management system',
    hero_title: 'Transform queues into',
    hero_title_highlight: 'experiences.',
    hero_description: 'Intelligent queue management system that reduces wait time, increases customer satisfaction and optimizes your service.',
    hero_btn_demo: 'Request a Demo',
    hero_btn_pricing: 'View Pricing',
    hero_stat_1_value: '70%',
    hero_stat_1_label: 'Reduction in wait time',
    hero_stat_2_value: '98%',
    hero_stat_2_label: 'Customer satisfaction',
    hero_stat_3_value: '500+',
    hero_stat_3_label: 'Companies served',
    
    // Form
    form_title: 'Request a Demo',
    form_subtitle: 'Fill in your details and we will contact you',
    form_name: 'Full name',
    form_email: 'Email',
    form_phone: 'Phone',
    form_segment: 'Segment',
    form_company: 'Company name',
    form_message: 'How can we help you?',
    form_submit: 'Request Demo',
    form_send: 'Send Message',
    form_trust_1: 'No commitment',
    form_trust_2: '100% free',
    
    // Features
    features_badge: 'Powerful Features',
    features_title: 'Complete Features',
    features_subtitle: 'Everything you need to revolutionize your service',
    feature_qrcode: 'QR Code',
    feature_qrcode_desc: 'Generate tickets via QR Code without the need for a physical kiosk.',
    feature_virtual: 'Virtual Ticket',
    feature_virtual_desc: 'Get your ticket from anywhere using the app.',
    feature_dashboard: 'Dashboard',
    feature_dashboard_desc: 'Track all metrics in real time.',
    feature_whatsapp: 'WhatsApp',
    feature_whatsapp_desc: 'Notifications and tracking via WhatsApp.',
    feature_survey: 'Satisfaction Survey',
    feature_survey_desc: 'Evaluate service quality in real time.',
    feature_api: 'Integrated API',
    feature_api_desc: 'Easily integrate with your existing systems.',
    feature_schedule: 'Scheduling',
    feature_schedule_desc: 'Complete online scheduling system.',
    feature_priority: 'Prioritization',
    feature_priority_desc: 'Configurable priority service.',
    
    // Pricing
    pricing_badge: 'Plans & Pricing',
    pricing_title: 'Choose the Ideal Plan',
    pricing_subtitle: 'Flexible solutions for every business size',
    pricing_popular: 'Most Popular',
    pricing_month: '/month',
    pricing_implant: 'Setup:',
    pricing_no_implant: 'No setup fee',
    pricing_consult: 'CONTACT US',
    pricing_hour: 'Hour:',
    pricing_start: 'Get Started',
    pricing_quote: 'Get Quote',
    pricing_table_title: 'Complete Feature Comparison',
    pricing_note: 'Customization Hour:',
    
    // Plans
    plan_bronze: 'Bronze',
    plan_silver: 'Silver',
    plan_gold: 'Gold',
    plan_diamond: 'Diamond',
    plan_custom: 'Custom',
    
    // Testimonials
    testimonials_badge: 'Testimonials',
    testimonials_title: 'What Our Customers Say',
    testimonials_subtitle: 'Real stories from companies that transformed their service',
    
    // FAQ
    faq_badge: 'Frequently Asked Questions',
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Get your questions about Chame Fácil answered',
    faq_q1: 'How does the system implementation work?',
    faq_a1: 'Implementation is done remotely by our technical team. We configure the entire system, integrate with your equipment and train your team to use all features.',
    faq_q2: 'Do I need special equipment?',
    faq_a2: 'Not necessarily. The system works with QR Code via mobile, but we also offer physical kiosks and TV panels for a complete experience.',
    faq_q3: 'Does the system integrate with my current software?',
    faq_a3: 'Yes! We offer a complete API for integration with ERPs, CRMs and other systems. Our technical team assists throughout the integration process.',
    faq_q4: 'What support is offered?',
    faq_a4: 'We offer technical support via WhatsApp, phone and email. In Gold and Diamond plans, support is priority with reduced response time.',
    faq_q5: 'Can I test before hiring?',
    faq_a5: 'Yes! We offer free demonstration and trial period for you to know all features before deciding.',
    
    // Clients
    clients_badge: 'Who Trusts Us',
    clients_title: 'Our Clients by Segment',
    clients_subtitle: 'Companies from various sectors have already transformed their service with Chame Fácil',
    clients_health: 'Healthcare',
    clients_retail: 'Retail',
    clients_food: 'Food Service',
    clients_public: 'Public Services',
    
    // CTA
    cta_title: 'Ready to Transform Your Service?',
    cta_subtitle: 'Join over 500 companies that have already revolutionized their customer experience.',
    cta_btn: 'Request Free Demo',
    
    // Contact
    contact_badge: 'Contact Us',
    contact_title: 'Get in Touch',
    contact_subtitle: 'We are ready to help you transform your service',
    contact_whatsapp: 'WhatsApp',
    contact_email: 'Email',
    contact_phone: 'Phone',
    contact_location: 'Location',
    contact_hours: 'Hours',
    contact_hours_value: 'Mon - Fri: 8am to 6pm',
    
    // Footer
    footer_description: 'Intelligent queue management system that transforms the service experience.',
    footer_links: 'Quick Links',
    footer_contact: 'Contact',
    footer_rights: '© 2024 Chame Fácil. All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Use',
    
    // Partners Page
    partners_title: 'Partner Program',
    partners_subtitle: 'Expand your business with the leading queue management system',
    partners_benefit_1_title: 'Resale',
    partners_benefit_1_desc: 'Sell Chame Fácil to your customers and earn recurring commissions.',
    partners_benefit_2_title: 'White Label',
    partners_benefit_2_desc: 'Offer the system with your brand and visual identity.',
    partners_benefit_3_title: 'Integration',
    partners_benefit_3_desc: 'Integrate Chame Fácil into your software and add value.',
    
    // Affiliates Page
    affiliates_title: 'Affiliate Program',
    affiliates_subtitle: 'Earn commissions by recommending Chame Fácil',
    affiliates_stat_1: 'Commission per sale',
    affiliates_stat_2: 'Payment within',
    affiliates_stat_3: 'Active affiliates',
    affiliates_stat_4: 'Commissions paid',
    
    // Blog
    blog_title: 'Blog',
    blog_subtitle: 'Content about queue management, customer service and technology',
    blog_read_more: 'Read more',
    blog_min_read: 'min read'
  }
};

// Idioma atual
let currentLanguage = localStorage.getItem('language') || 'pt';

// Função para traduzir elementos
function translatePage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Atualizar todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Atualizar placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
  
  // Atualizar botão de idioma
  updateLanguageButton(lang);
}

// Atualizar botão de idioma
function updateLanguageButton(lang) {
  const langBtn = document.querySelector('.language-btn');
  if (langBtn) {
    const flags = { pt: '🇧🇷', es: '🇪🇸', en: '🇺🇸' };
    const names = { pt: 'PT', es: 'ES', en: 'EN' };
    langBtn.innerHTML = `<span class="lang-globe">🌐</span> ${flags[lang]} ${names[lang]} <span class="lang-arrow">▼</span>`;
  }
  
  // Atualizar opções ativas
  document.querySelectorAll('.language-option').forEach(option => {
    option.classList.remove('active');
    if (option.getAttribute('data-lang') === lang) {
      option.classList.add('active');
    }
  });
}

// ============================================
// 2. NAVEGAÇÃO E HEADER
// ============================================
function initHeader() {
  const header = document.querySelector('.header');
  
  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
      });
    });
  }
}

// ============================================
// 3. SELETOR DE IDIOMA
// ============================================
function initLanguageSelector() {
  const selector = document.querySelector('.language-selector');
  const btn = document.querySelector('.language-btn');
  const options = document.querySelectorAll('.language-option');
  
  if (btn && selector) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selector.classList.toggle('active');
    });
    
    options.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        translatePage(lang);
        selector.classList.remove('active');
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      selector.classList.remove('active');
    });
  }
  
  // Aplicar idioma salvo
  translatePage(currentLanguage);
}

// ============================================
// 4. FAQ ACCORDION
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
}

// ============================================
// 5. SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// 6. FORMULÁRIOS
// ============================================
function initForms() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      
      // Remover mensagem anterior se existir
      const oldMsg = form.parentElement.querySelector('.form-message');
      if (oldMsg) oldMsg.remove();
      
      setTimeout(() => {
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        
        // Feedback visual inline
        const msg = document.createElement('div');
        msg.className = 'form-message form-message-success';
        msg.innerHTML = '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.';
        form.parentElement.insertBefore(msg, form.nextSibling);
        
        setTimeout(() => msg.remove(), 6000);
      }, 1500);
    });
  });
}

// ============================================
// 7. ANIMAÇÕES DE SCROLL
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slideUp');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observar elementos
  document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card, .step-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ============================================
// 8. CONTADOR ANIMADO
// ============================================
function animateCounters() {
  const counters = document.querySelectorAll('.hero-stat-value, .affiliate-stat-value');
  
  counters.forEach(counter => {
    const target = counter.textContent;
    const isPercentage = target.includes('%');
    const hasPlus = target.includes('+');
    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    
    if (isNaN(numericValue)) return;
    
    let current = 0;
    const increment = numericValue / 50;
    const duration = 1500;
    const stepTime = duration / 50;
    
    const updateCounter = () => {
      current += increment;
      if (current < numericValue) {
        counter.textContent = Math.floor(current) + (isPercentage ? '%' : '') + (hasPlus ? '+' : '');
        setTimeout(updateCounter, stepTime);
      } else {
        counter.textContent = target;
      }
    };
    
    // Iniciar quando visível
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCounter();
        observer.disconnect();
      }
    });
    
    observer.observe(counter);
  });
}

// ============================================
// 9. COPYRIGHT DINÂMICO
// ============================================
function updateCopyright() {
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-i18n="footer_rights"]').forEach(el => {
    el.textContent = el.textContent.replace(/© \d{4}/, `© ${year}`);
  });
  // Páginas internas sem data-i18n
  document.querySelectorAll('.footer-bottom p').forEach(el => {
    if (!el.getAttribute('data-i18n')) {
      el.textContent = el.textContent.replace(/© \d{4}/, `© ${year}`);
    }
  });
}

// ============================================
// 10. BOTÃO WHATSAPP FLUTUANTE
// ============================================
function initWhatsAppButton() {
  const btn = document.createElement('a');
  btn.href = 'https://wa.me/5585998570031';
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.className = 'whatsapp-float';
  btn.setAttribute('aria-label', 'Fale conosco pelo WhatsApp');
  btn.innerHTML = `<svg viewBox="0 0 32 32" width="28" height="28" fill="#fff"><path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.928 15.928 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.262 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.322-5.656-1.216-4.746-1.966-7.804-6.778-8.038-7.092-.226-.314-1.886-2.512-1.886-4.794 0-2.28 1.194-3.404 1.618-3.868.39-.426.916-.594 1.216-.594.152 0 .286.008.408.014.39.016.586.038.844.652.322.764 1.1 2.688 1.194 2.884.098.194.194.46.06.734-.128.278-.194.452-.39.694-.194.244-.408.542-.586.73-.194.206-.398.428-.172.838.228.408 1.008 1.664 2.166 2.696 1.488 1.326 2.742 1.736 3.132 1.93.39.194.616.166.844-.098.234-.27.994-1.156 1.26-1.554.26-.398.524-.332.884-.194.364.132 2.286 1.078 2.676 1.274.39.194.648.292.744.458.098.16.098.934-.292 2.034z"/></svg>`;
  document.body.appendChild(btn);
}

// ============================================
// 11. BOTÃO VOLTAR AO TOPO
// ============================================
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Voltar ao topo');
  btn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// 12. INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initLanguageSelector();
  initFAQ();
  initSmoothScroll();
  initForms();
  initScrollAnimations();
  animateCounters();
  updateCopyright();
  initWhatsAppButton();
  initBackToTop();
});
