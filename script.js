/* =============================
   DADOS DO CARDÁPIO
============================= */
const menuItems = [
  // Pratos Principais
  {
    nome: "Carne de Sol com Macaxeira",
    desc: "Carne de sol grelhada na perfeição, acompanhada de macaxeira cremosa e manteiga de garrafa",
    preco: "R$ 45,90",
    emoji: "🥩",
    cor: "linear-gradient(135deg, #E67E22, #a04010)",
    categoria: "pratos"
  },
  {
    nome: "Baião de Dois",
    desc: "O clássico nordestino com feijão verde, arroz, queijo coalho e charque",
    preco: "R$ 38,90",
    emoji: "🍚",
    cor: "linear-gradient(135deg, #F4D03F, #c9a800)",
    categoria: "pratos"
  },
  {
    nome: "Galinha Caipira",
    desc: "Galinha caipira ao molho de leite de coco com temperos regionais",
    preco: "R$ 42,90",
    emoji: "🍗",
    cor: "linear-gradient(135deg, #f0a500, #c07800)",
    categoria: "pratos"
  },
  {
    nome: "Cabrito Assado",
    desc: "Cabrito assado lentamente com ervas aromáticas do sertão",
    preco: "R$ 55,90",
    emoji: "🍖",
    cor: "linear-gradient(135deg, #8B3A00, #5a2400)",
    categoria: "pratos"
  },
  // Acompanhamentos
  {
    nome: "Macaxeira Frita",
    desc: "Macaxeira crocante por fora, macia por dentro",
    preco: "R$ 15,90",
    emoji: "🥔",
    cor: "linear-gradient(135deg, #d4a017, #a07010)",
    categoria: "acompanhamentos"
  },
  {
    nome: "Arroz de Cuxá",
    desc: "Arroz temperado com vinagreira e camarão seco",
    preco: "R$ 12,90",
    emoji: "🍛",
    cor: "linear-gradient(135deg, #e8b84b, #b08030)",
    categoria: "acompanhamentos"
  },
  {
    nome: "Feijão Verde",
    desc: "Feijão verde cozido com temperos nordestinos",
    preco: "R$ 10,90",
    emoji: "🫘",
    cor: "linear-gradient(135deg, #4ade80, #15803d)",
    categoria: "acompanhamentos"
  },
  {
    nome: "Paçoca de Carne",
    desc: "Carne seca pilada com farinha de mandioca",
    preco: "R$ 14,90",
    emoji: "🥣",
    cor: "linear-gradient(135deg, #c47a3a, #8B3A00)",
    categoria: "acompanhamentos"
  },
  // Bebidas
  {
    nome: "Suco de Umbu",
    desc: "Suco natural da fruta símbolo do sertão",
    preco: "R$ 8,90",
    emoji: "🥤",
    cor: "linear-gradient(135deg, #84cc16, #4d7c0f)",
    categoria: "bebidas"
  },
  {
    nome: "Cajuína",
    desc: "A famosa bebida de caju filtrada e adoçada",
    preco: "R$ 6,90",
    emoji: "🍊",
    cor: "linear-gradient(135deg, #fb923c, #c2410c)",
    categoria: "bebidas"
  },
  {
    nome: "Água de Coco",
    desc: "Água de coco fresca e natural",
    preco: "R$ 7,90",
    emoji: "🥥",
    cor: "linear-gradient(135deg, #6ee7b7, #059669)",
    categoria: "bebidas"
  },
  {
    nome: "Mocotó",
    desc: "Caldo nutritivo de mocotó com especiarias",
    preco: "R$ 9,90",
    emoji: "🍵",
    cor: "linear-gradient(135deg, #a3722a, #6E2C00)",
    categoria: "bebidas"
  },
  // Sobremesas
  {
    nome: "Cartola",
    desc: "Banana frita com queijo coalho derretido e canela",
    preco: "R$ 14,90",
    emoji: "🍌",
    cor: "linear-gradient(135deg, #fbbf24, #d97706)",
    categoria: "sobremesas"
  },
  {
    nome: "Mungunzá",
    desc: "Canjica de milho branco cremosa com leite de coco",
    preco: "R$ 12,90",
    emoji: "🌽",
    cor: "linear-gradient(135deg, #fde68a, #b45309)",
    categoria: "sobremesas"
  },
  {
    nome: "Bolo de Rolo",
    desc: "Tradicional bolo de rolo com goiabada",
    preco: "R$ 10,90",
    emoji: "🎂",
    cor: "linear-gradient(135deg, #f87171, #b91c1c)",
    categoria: "sobremesas"
  },
  {
    nome: "Cuscuz Doce",
    desc: "Cuscuz com leite condensado e coco ralado",
    preco: "R$ 8,90",
    emoji: "🍮",
    cor: "linear-gradient(135deg, #fcd34d, #92400e)",
    categoria: "sobremesas"
  }
];

/* =============================
   RENDERIZAÇÃO DO CARDÁPIO
============================= */
function renderizarCardapio(filtro) {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = "";

  const itensFiltrados = filtro === "todos"
    ? menuItems
    : menuItems.filter(item => item.categoria === filtro);

  itensFiltrados.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.style.animationDelay = `${i * 40}ms`;
    card.innerHTML = `
      <div class="menu-card-img" style="background: ${item.cor}">
        <span>${item.emoji}</span>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.nome}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">${item.preco}</span>
          <a href="https://wa.me/5585999999999" target="_blank" class="menu-card-btn">Pedir</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // fade-in dos cards
  requestAnimationFrame(() => {
    grid.querySelectorAll(".menu-card").forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(16px)";
      setTimeout(() => {
        card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, i * 50);
    });
  });
}

/* =============================
   FILTROS
============================= */
function inicializarFiltros() {
  const botoes = document.querySelectorAll(".filtro-btn");
  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      botoes.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderizarCardapio(btn.dataset.categoria);
    });
  });
}

/* =============================
   MENU MOBILE (HAMBÚRGUER)
============================= */
function inicializarMenuMobile() {
  const menuBtn  = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    const aberto = !mobileMenu.classList.contains("hidden");
    if (aberto) {
      mobileMenu.classList.add("hidden");
      menuBtn.classList.remove("open");
    } else {
      mobileMenu.classList.remove("hidden");
      menuBtn.classList.add("open");
    }
  });

  // Fechar ao clicar em link
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.classList.remove("open");
    });
  });
}

/* =============================
   TABS DO CARDÁPIO
============================= */
function inicializarTabsSemana() {
  const tabs = document.querySelectorAll(".menu-week-tab");
  const cards = document.querySelectorAll(".day-card");

  function mostrarDia(dia) {
    tabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.day === dia);
    });
    cards.forEach(card => {
      const ativo = card.id === dia;
      card.classList.toggle("active", ativo);
      card.classList.toggle("hidden", !ativo);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();
      mostrarDia(tab.dataset.day);
      // micro-interaction: pressed animation class
      tab.classList.add('tab-pressed');
      setTimeout(() => tab.classList.remove('tab-pressed'), 260);
      document.getElementById("cardapio").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  mostrarDia("quarta");
}

/* =============================
   HEADER SCROLL
============================= */
function inicializarHeaderScroll() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* =============================
   SCROLL REVEAL
============================= */
function inicializarScrollReveal() {
  const targets = Array.from(document.querySelectorAll('.section-reveal, .reveal, .menu-card, .day-card, .about-image-box'));
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const idx = targets.indexOf(el);
      const delay = parseInt(el.dataset.revealDelay) || (idx * 60);
      setTimeout(() => el.classList.add('reveal-visible'), delay);
      obs.unobserve(el);
    });
  }, { threshold: 0.12 });

  targets.forEach((el, i) => {
    if (!el.dataset.revealDelay) el.style.transitionDelay = `${i * 40}ms`;
    observer.observe(el);
  });
}

/* =============================
   SCROLL SUAVE (links internos)
============================= */
function inicializarScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const id = link.getAttribute("href").slice(1);
      const destino = document.getElementById(id);
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* =============================
   FORMULÁRIO DE CONTATO
============================= */
function inicializarFormContato() {
  const form = document.getElementById("contatoForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    mostrarToast("✅ Mensagem enviada! Em breve entraremos em contato.");
    form.reset();
  });
}

/* =============================
   TOAST
============================= */
function mostrarToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

/* =============================
   INIT
============================= */
document.addEventListener("DOMContentLoaded", () => {
  inicializarTabsSemana();
  inicializarMenuMobile();
  inicializarHeaderScroll();
  inicializarScrollReveal();
  inicializarScrollSuave();
  inicializarFormContato();
});
