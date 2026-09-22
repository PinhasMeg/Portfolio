(function () {
  var year = document.getElementById("annee");
  if (year) year.textContent = String(new Date().getFullYear());

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-principale");

  if (toggle && nav) {
    function setOpen(open) {
      var t = window.PM && window.PM.t;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      var label = open
        ? (t && t.nav.close) || "Fermer"
        : (t && t.nav.menu) || "Menu";
      toggle.setAttribute("aria-label", label);
      toggle.textContent = window.matchMedia("(max-width: 799px)").matches
        ? (open ? "×" : "☰")
        : label;
      nav.classList.toggle("is-open", open);
    }
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var nodes = document.querySelectorAll(".reveal");

  nodes.forEach(function (el, i) {
    el.style.setProperty("--reveal-delay", ((i % 6) * 60) + "ms");
  });

  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    nodes.forEach(function (el) { io.observe(el); });
  }

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
  var spySections = ["projets", "services", "methode", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function setCurrent(id) {
    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      var on = href === "#" + id && !link.classList.contains("nav-cta");
      link.classList.toggle("is-current", on);
    });
  }

  function spy() {
    var y = window.scrollY + 120;
    var current = "";
    spySections.forEach(function (section) {
      if (section.offsetTop <= y) current = section.id;
    });
    setCurrent(current);
  }

  if (navLinks.length && spySections.length) {
    spy();
    window.addEventListener("scroll", spy, { passive: true });
  }

  var track = document.getElementById("work-track");
  var cards = track ? track.querySelectorAll(".work-card") : [];
  var dotsWrap = document.getElementById("work-dots");
  var prevBtn = document.querySelector('[data-work="prev"]');
  var nextBtn = document.querySelector('[data-work="next"]');

  if (track && cards.length) {
    function cardIndex() {
      var best = 0;
      var bestDist = Infinity;
      var left = track.scrollLeft;
      for (var i = 0; i < cards.length; i++) {
        var dist = Math.abs(cards[i].offsetLeft - cards[0].offsetLeft - left);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      }
      return best;
    }

    function go(index) {
      var idx = Math.max(0, Math.min(cards.length - 1, index));
      track.scrollTo({
        left: cards[idx].offsetLeft - cards[0].offsetLeft,
        behavior: reduce ? "auto" : "smooth"
      });
    }

    if (dotsWrap) {
      cards.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "work-dot";
        var label = (window.PM && window.PM.t && window.PM.t.work.project) || "Projet";
        dot.setAttribute("aria-label", label + " " + (i + 1));
        dot.addEventListener("click", function () { go(i); });
        dotsWrap.appendChild(dot);
      });
    }

    function sync() {
      var i = cardIndex();
      if (dotsWrap) {
        Array.prototype.forEach.call(dotsWrap.children, function (dot, di) {
          dot.classList.toggle("is-on", di === i);
          dot.setAttribute("aria-current", di === i ? "true" : "false");
        });
      }
      if (prevBtn) prevBtn.disabled = i === 0;
      if (nextBtn) nextBtn.disabled = i === cards.length - 1;
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { go(cardIndex() - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { go(cardIndex() + 1); });
    track.addEventListener("scroll", sync, { passive: true });
    track.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(cardIndex() - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        go(cardIndex() + 1);
      }
    });
    window.addEventListener("resize", sync);
    sync();
  }

  var form = document.getElementById("devis");
  var note = document.getElementById("form-note");
  var err = document.getElementById("form-error");
  var submit = document.getElementById("devis-submit");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (form.classList.contains("is-busy") || form.classList.contains("is-sent")) return;
      var pack = window.PM && window.PM.t && window.PM.t.contact;
      form.classList.add("is-busy");
      if (err) err.hidden = true;
      if (submit) {
        submit.disabled = true;
        submit.textContent = (pack && pack.sending) || "Envoi…";
      }
      var data = new FormData(form);
      var nom = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var tel = String(data.get("telephone") || "").trim();
      var type = String(data.get("type") || "").trim();
      var message = String(data.get("message") || "").trim();
      var lang = (window.PM && window.PM.lang) || "fr";
      var recap = window.PM && window.PM.recap
        ? window.PM.recap({ nom: nom, email: email, tel: tel, type: type, message: message })
        : "";
      var payload = {
        Nom: nom,
        email: email,
        Telephone: tel,
        Projet: type,
        Message: message,
        Langue: lang === "en" ? "English" : "Français",
        _subject: (lang === "en" ? "Quote — " : "Devis — ") + type + " — " + nom,
        _template: "table",
        _captcha: "false",
        _autoresponse: recap
      };
      fetch("https://formsubmit.co/ajax/Pinhas.meguideche@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(function (response) {
          if (!response.ok) throw new Error("send");
          return response.json();
        })
        .then(function () {
          form.classList.remove("is-busy");
          form.classList.add("is-sent");
          if (note) note.hidden = false;
          if (submit) submit.textContent = (pack && pack.sent) || "Envoyé";
        })
        .catch(function () {
          form.classList.remove("is-busy");
          if (submit) {
            submit.disabled = false;
            submit.textContent = (pack && pack.send) || "Envoyer";
          }
          if (err) err.hidden = false;
        });
    });
  }
})();
