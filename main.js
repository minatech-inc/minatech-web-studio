(() => {
  // ============ Hero load animation ============
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('load', () => {
      setTimeout(() => hero.classList.add('loaded'), 80);
    });
  }

  // ============ Header scroll state ============
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ============ Mobile nav ============
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  // ============ Scroll reveal ============
  const revealTargets = document.querySelectorAll('.reveal');
  const revealSplits = document.querySelectorAll('.reveal-split');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(el => io.observe(el));
    revealSplits.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in'));
    revealSplits.forEach(el => el.classList.add('in'));
  }

  // ============ Stat counters ============
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const duration = 1800;
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          el.textContent = decimals > 0
            ? current.toFixed(decimals)
            : Math.floor(current).toLocaleString('ja-JP');
          if (progress < 1) requestAnimationFrame(tick);
          else {
            el.textContent = decimals > 0
              ? target.toFixed(decimals)
              : target.toLocaleString('ja-JP');
          }
        };
        requestAnimationFrame(tick);
        countIO.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(el => countIO.observe(el));
  }

  // ============ Smooth in-page anchors ============
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerH = header ? header.offsetHeight : 80;
          const y = target.getBoundingClientRect().top + window.scrollY - headerH - 10;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });

  // ============ Plan query (contact page) ============
  const params = new URLSearchParams(window.location.search);
  const plan = params.get('plan');
  if (plan) {
    const sel = document.querySelector('select[name="plan"]');
    if (sel) sel.value = plan;
  }
})();
