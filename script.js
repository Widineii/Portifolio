(() => {
  'use strict';

  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });

  const animatedSelectors = [
    '.service-card',
    '.portfolio-card',
    '.testimonial',
    '.section-header',
    '.about-content',
    '.about-image',
    '.process-step',
    '.pricing-card',
    '.faq-item',
    '.contact-info',
    '.contact-form',
  ];

  const animated = document.querySelectorAll(animatedSelectors.join(','));
  animated.forEach((el) => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  animated.forEach((el) => observer.observe(el));

  const counters = document.querySelectorAll('.stat strong');
  const animateCounter = (el) => {
    const text = el.textContent.trim();
    const match = text.match(/^(\d+)(.*)$/);
    if (!match) return;

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 1500;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const update = () => {
      current += increment;
      if (current >= target) {
        el.textContent = target + suffix;
        return;
      }
      el.textContent = Math.floor(current) + suffix;
      requestAnimationFrame(update);
    };

    update();
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => counterObserver.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

  const form = document.getElementById('contactForm');
  if (form) {
    const WHATSAPP_NUMBER = '55370998550994';

    const tipoLabels = {
      'site': 'Site / Landing Page',
      'sistema-desktop': 'Sistema Desktop (Java)',
      'sistema-web': 'Sistema Web (Spring Boot / Node)',
      'api': 'API REST',
      'manutencao': 'Manutenção em sistema existente',
      'outro': 'Outro / Não sei dizer',
    };

    const orcamentoLabels = {
      'ate-1000': 'Até R$ 1.000',
      '1000-2500': 'R$ 1.000 a R$ 2.500',
      '2500-5000': 'R$ 2.500 a R$ 5.000',
      'acima-5000': 'Acima de R$ 5.000',
      'nao-sei': 'Não sei dizer ainda',
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = form.querySelector('#nome').value.trim();
      const email = form.querySelector('#email').value.trim();
      const telefone = form.querySelector('#telefone').value.trim();
      const tipoVal = form.querySelector('#tipo').value;
      const orcamentoVal = form.querySelector('#orcamento').value;
      const mensagem = form.querySelector('#mensagem').value.trim();

      if (!nome || !email || !telefone || !tipoVal || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      const tipo = tipoLabels[tipoVal] || tipoVal;
      const orcamento = orcamentoLabels[orcamentoVal] || 'Não informado';

      const text =
        `Olá, Widinei! Vim pelo seu portfólio.\n\n` +
        `*Nome:* ${nome}\n` +
        `*E-mail:* ${email}\n` +
        `*WhatsApp:* ${telefone}\n` +
        `*Tipo de projeto:* ${tipo}\n` +
        `*Orçamento estimado:* ${orcamento}\n\n` +
        `*Mensagem:*\n${mensagem}`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }
})();
