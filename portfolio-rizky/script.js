document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
     1. TAHUN FOOTER
     ========================================================== */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ==========================================================
     2. UMUR OTOMATIS (dari tanggal lahir)
     ========================================================== */
  (function hitungUmur(){
    const lahir = new Date(2006, 11, 19); // 19 Desember 2006 (bulan index 0)
    const now = new Date();
    let umur = now.getFullYear() - lahir.getFullYear();
    const belumUlangTahun =
      now.getMonth() < lahir.getMonth() ||
      (now.getMonth() === lahir.getMonth() && now.getDate() < lahir.getDate());
    if (belumUlangTahun) umur--;
    document.getElementById('ageValue').textContent = umur + ' th';
  })();

  /* ==========================================================
     3. DARK / LIGHT MODE (localStorage)
     ========================================================== */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  }

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });

  /* ==========================================================
     4. MOBILE NAV TOGGLE
     ========================================================== */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ==========================================================
     5. SCROLL PROGRESS BAR
     ========================================================== */
  const progressBar = document.getElementById('progressBar');
  function updateProgress(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ==========================================================
     6. ACTIVE NAV LINK ON SCROLL (Intersection Observer)
     ========================================================== */
  const sections = ['tentang', 'pendidikan', 'organisasi', 'kontak']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(sec => navObserver.observe(sec));

  /* ==========================================================
     7. TABS - ORGANISASI / HOBI
     ========================================================== */
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;

      tabButtons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('is-hidden', panel.id !== targetId);
      });
    });
  });

  /* ==========================================================
     8. SALIN EMAIL
     ========================================================== */
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyLabel = document.getElementById('copyEmailLabel');
  const emailAddress = '251410102106@mail.unej.ac.id';

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch (err) {
      const temp = document.createElement('textarea');
      temp.value = emailAddress;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }
    copyBtn.classList.add('is-copied');
    copyLabel.textContent = 'Email tersalin!';
    setTimeout(() => {
      copyBtn.classList.remove('is-copied');
      copyLabel.textContent = 'Salin email';
    }, 2000);
  });

  /* ==========================================================
     9. VALIDASI FORM KONTAK (tanpa reload)
     ========================================================== */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  function setError(fieldId, message){
    const row = document.getElementById(fieldId).closest('.form-row');
    const errorEl = document.getElementById('err' + fieldId.slice(1).replace(/^./, c => c.toUpperCase()));
    row.classList.toggle('has-error', Boolean(message));
    if (errorEl) errorEl.textContent = message || '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccess.classList.add('is-hidden');

    const name = form.fName.value.trim();
    const email = form.fEmail.value.trim();
    const message = form.fMessage.value.trim();

    let valid = true;

    if (name.length < 3) {
      setError('fName', 'Nama minimal 3 karakter.');
      valid = false;
    } else {
      setError('fName', '');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('fEmail', 'Isi alamat email yang valid.');
      valid = false;
    } else {
      setError('fEmail', '');
    }

    if (message.length < 10) {
      setError('fMessage', 'Pesan minimal 10 karakter.');
      valid = false;
    } else {
      setError('fMessage', '');
    }

    if (valid) {
      formSuccess.classList.remove('is-hidden');
      form.reset();
    }
  });

  /* ==========================================================
     10. BACK TO TOP
     ========================================================== */
  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
