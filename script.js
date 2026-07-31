(() => {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav__toggle");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll(".nav__links a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* —— Demo cart (local UI only) —— */
  const cart = new Map();
  const cartPanel = document.getElementById("cart-panel");
  const cartBackdrop = document.getElementById("cart-backdrop");
  const cartToggle = document.getElementById("cart-toggle");
  const cartClose = document.getElementById("cart-close");
  const cartCount = document.getElementById("cart-count");
  const cartList = document.getElementById("cart-list");
  const cartEmpty = document.getElementById("cart-empty");
  const cartTotalQty = document.getElementById("cart-total-qty");
  const checkoutSummary = document.getElementById("checkout-summary");
  const checkoutEmpty = document.getElementById("checkout-empty");
  const checkoutTotal = document.getElementById("checkout-total");

  const openCart = () => {
    cartPanel?.classList.add("is-open");
    cartPanel?.setAttribute("aria-hidden", "false");
    cartToggle?.setAttribute("aria-expanded", "true");
    if (cartBackdrop) cartBackdrop.hidden = false;
    document.body.classList.add("cart-open");
  };

  const closeCart = () => {
    cartPanel?.classList.remove("is-open");
    cartPanel?.setAttribute("aria-hidden", "true");
    cartToggle?.setAttribute("aria-expanded", "false");
    if (cartBackdrop) cartBackdrop.hidden = true;
    document.body.classList.remove("cart-open");
  };

  const renderCart = () => {
    if (!cartList) return;

    cartList.innerHTML = "";
    let qty = 0;
    let total = 0;

    cart.forEach((item) => {
      qty += item.qty;
      total += item.qty * item.price;

      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <span>$${item.price} · 16 FL OZ</span>
        </div>
        <div class="cart-item__controls">
          <button type="button" data-dec="${item.id}" aria-label="Decrease ${item.name}">−</button>
          <span>${item.qty}</span>
          <button type="button" data-inc="${item.id}" aria-label="Increase ${item.name}">+</button>
          <button type="button" class="cart-item__remove" data-remove="${item.id}">Remove</button>
        </div>
      `;
      cartList.appendChild(li);
    });

    if (cartCount) cartCount.textContent = String(qty);
    if (cartTotalQty) cartTotalQty.textContent = String(qty);
    if (cartEmpty) cartEmpty.hidden = qty > 0;
    if (cartList) cartList.hidden = qty === 0;

    if (checkoutSummary) {
      checkoutSummary.innerHTML = "";
      cart.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${item.qty}× ${item.name}</span><span>$${item.qty * item.price}</span>`;
        checkoutSummary.appendChild(li);
      });
    }
    if (checkoutEmpty) checkoutEmpty.hidden = qty > 0;
    if (checkoutSummary) checkoutSummary.hidden = qty === 0;
    if (checkoutTotal) checkoutTotal.textContent = `$${total}`;
  };

  const addItem = (id, name, price) => {
    const existing = cart.get(id);
    if (existing) existing.qty += 1;
    else cart.set(id, { id, name, price, qty: 1 });
    renderCart();
  };

  document.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest("[data-id]");
      if (!row) return;
      addItem(row.dataset.id, row.dataset.name, Number(row.dataset.price) || 0);
      btn.textContent = "Added";
      window.setTimeout(() => {
        btn.textContent = "Add to cart";
      }, 900);
      openCart();
    });
  });

  cartList?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const inc = target.getAttribute("data-inc");
    const dec = target.getAttribute("data-dec");
    const remove = target.getAttribute("data-remove");

    if (inc && cart.has(inc)) {
      cart.get(inc).qty += 1;
      renderCart();
    }
    if (dec && cart.has(dec)) {
      const item = cart.get(dec);
      item.qty -= 1;
      if (item.qty <= 0) cart.delete(dec);
      renderCart();
    }
    if (remove) {
      cart.delete(remove);
      renderCart();
    }
  });

  cartToggle?.addEventListener("click", () => {
    if (cartPanel?.classList.contains("is-open")) closeCart();
    else openCart();
  });
  cartClose?.addEventListener("click", closeCart);
  cartBackdrop?.addEventListener("click", closeCart);

  document.querySelector(".cart-panel__checkout")?.addEventListener("click", () => {
    closeCart();
  });

  /* —— Demo forms (no network) —— */
  const wireDemoForm = (formId, successId) => {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (success) {
        success.hidden = false;
        success.focus?.();
      }
      form.reset();
    });
  };

  wireDemoForm("pickup-form", "pickup-success");
  wireDemoForm("checkout-form", "checkout-success");

  renderCart();
})();
