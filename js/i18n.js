(function (root) {
  var KEY = "pm-lang";
  var WA_BASE = "https://wa.me/972586887253?text=";

  var STR = {
    fr: {
      meta: {
        title: "Pinhas Meguideche — Produits web, bots & automatisations",
        description: "Ingénieur full-stack. Sites, bots WhatsApp et Telegram, automatisations — de l’idée à la mise en production. Sans agence."
      },
      skip: "Aller au contenu",
      lang: "Langue",
      nav: {
        work: "Projets",
        services: "Services",
        method: "Méthode",
        contact: "Contact",
        talk: "Discuter",
        menu: "Menu",
        close: "Fermer",
        label: "Navigation principale"
      },
      hero: {
        avail: "Disponible pour un projet",
        availMob: "Disponible",
        titleDesk: "De l’idée au produit,<br><em>sans agence.</em>",
        titleMob: "Idée → produit.",
        leadDesk: "Sites, bots WhatsApp &amp; Telegram, automatisations. Je conçois, développe et mets en ligne — vous me parlez directement.",
        leadMob: "Site, bot ou automatisation. On avance en direct.",
        pillSites: "Sites",
        pillBots: "Bots",
        pillAuto: "Automatisations",
        cta: "Demander un devis",
        work: "Voir les projets",
        proofLive: "produits live",
        proofReply: "pour répondre",
        caption: "Dernier livrable — ",
        live: "En production",
        liveAria: "Sites en production"
      },
      work: {
        eyebrow: "Sélection",
        titleDesk: "En ligne, et d’autres en cours.",
        titleMob: "En ligne, et en cours",
        leadDesk: "Cinq sites live. Ensuite : bots, automatisations et outils métier — le format que je livre, sans inventer de clients.",
        leadMob: "5 sites live, plus bots et flux.",
        open: "Ouvrir le projet",
        aria: "Projets livrés",
        prev: "Projet précédent",
        next: "Projet suivant",
        project: "Projet",
        liveBadge: "Live",
        alsoEyebrow: "Aussi",
        alsoTitle: "Bots, flux, outils métier.",
        alsoLead: "Pas de faux noms. Les briefs restent chez le client. Voici le format que je livre, sur devis.",
        a6t: "06 · Bot",
        a6h: "WhatsApp & Telegram",
        a6p: "FAQ, RDV, commandes, notifications. Le bot répond, vous gardez la main.",
        a6c: "Demander un bot",
        a7t: "07 · Flux",
        a7h: "Automatisations",
        a7p: "Formulaire → CRM → e-mail / Sheets. Les données avancent sans vous.",
        a7c: "Automatiser un flux",
        a8t: "08 · Métier",
        a8h: "CRM & outils internes",
        a8p: "Tableaux, pipelines, accès. Un outil que l’équipe ouvre tous les jours.",
        a8c: "Parler d’un outil",
        foot: "Vous avez un brief du même genre — ",
        footLink: "on le cadre",
        t1: "01 · Produit",
        p1: "Plateforme d’alya : guides, outils IA, forum. Conçue et développée seul, de zéro à la production. FR / EN.",
        r1: "Fondé, conçu et mis en ligne — seul.",
        t2: "02 · Association",
        p2: "Incubateur d’alya : logement, villes, emploi. Site d’association, en production.",
        r2: "Vitrine live — un message, un appel.",
        b2: "Vitrine",
        t3: "03 · Display",
        p3: "Écran synagogue : les noms défilent au bon moment. Outil kiosque, en service.",
        r3: "Produit métier, pas une vitrine.",
        b3: "Kiosque",
        t4: "04 · Commerce",
        p4: "Boutique de pâtisserie cachère — panier FR / hébreu. Commande en ligne.",
        r4: "E-commerce live, deux langues.",
        b4: "Boutique",
        t5: "05 · Simulateur",
        p5: "Calculateur solaire : estimation, simulation d’investissement, capture de leads. HE / EN / FR.",
        r5: "Outil + leads, pas une page figée.",
        b5: "Calculateur"
      },
      offer: {
        eyebrow: "Offre",
        title: "Ce que je livre.",
        lead: "Du site vitrine au bot métier — un interlocuteur, un livrable.",
        h1: "SaaS &amp; plateformes",
        p1: "Espaces membres, outils métier, flux IA. Un produit que les gens utilisent.",
        h2: "Sites vitrines",
        p2: "Page claire, rapide, qui explique l’offre et convertit vers un appel.",
        h3: "Applications web",
        p3: "Interface soignée, backend solide, déploiement. Du brief à la mise en ligne.",
        h4: "CRM &amp; outils internes",
        p4: "Tableaux, formulaires, pipelines. Moins de tableurs, plus de process.",
        h5: "Bots WhatsApp &amp; Telegram",
        p5: "FAQ, RDV, commandes, notifications. Un bot qui répond à votre place.",
        h6: "Automatisations",
        p6: "Formulaires, CRM, e-mails, sheets, APIs. Des flux qui tournent sans vous.",
        stack: "Compétences"
      },
      method: {
        eyebrow: "Méthode",
        title: "Simple, direct, livré.",
        lead: "Pas de comité, pas de junior qui reprend le brief. Un seul interlocuteur.",
        s1: "Cadrer",
        p1: "Objectif, délai, périmètre. On sait ce qui sort, et quand.",
        s2: "Construire",
        p2: "Design, code, itérations. Vous voyez avancer, pas un PowerPoint.",
        s3: "Mettre en ligne",
        p3: "Déploiement, suivi, ajustements. Le produit vit après le jour J.",
        profile: "Profil",
        bio: "Ingénieur full-stack. Je construis des produits qu’on utilise — pas des maquettes.",
        product: "Produit",
        founder: "Fondateur d’<a href=\"https://olimaid.com\" rel=\"noopener noreferrer\" target=\"_blank\">OlimAid</a>",
        eng: "Ingénierie",
        edu: "Formation",
        eduTitle: "Ingénierie logicielle"
      },
      contact: {
        eyebrow: "Contact",
        title: "Parlons de votre projet.",
        lead: "E-mail, téléphone ou WhatsApp. Le formulaire m’arrive directement, et vous recevez un accusé de réception.",
        phone: "Téléphone",
        wa: "Écrire maintenant",
        formTitle: "Demander un devis",
        kicker: "Sans engagement · réponse sous 24 h",
        name: "Nom",
        email: "Email",
        tel: "Téléphone",
        type: "Type de projet",
        message: "Message",
        placeholder: "Contexte, délai, ce que vous voulez obtenir.",
        send: "Envoyer",
        sending: "Envoi…",
        sent: "Envoyé",
        doneTitle: "Demande bien reçue.",
        doneBody: "Un récapitulatif vient de partir sur votre e-mail. Je reviens vers vous au plus vite.",
        error: "Envoi impossible. Écrivez-moi directement : Pinhas.meguideche@gmail.com",
        types: [
          "SaaS / plateforme",
          "Site vitrine",
          "Application web",
          "Bot WhatsApp",
          "Bot Telegram",
          "Automatisations",
          "CRM / outil métier",
          "Autre"
        ]
      },
      wa: {
        label: "Écrire sur WhatsApp",
        text: "Bonjour Pinhas, j’ai un projet (site, bot ou automatisation) et j’aimerais en discuter avec vous."
      },
      page404: {
        title: "Page introuvable — Pinhas Meguideche",
        eyebrow: "Erreur 404",
        h1: "Cette page n’existe pas.",
        lead: "Le lien est faux ou la page a été déplacée.",
        back: "Retour à l’accueil"
      }
    },
    en: {
      meta: {
        title: "Pinhas Meguideche — Web products, bots & automations",
        description: "Full-stack engineer. Websites, WhatsApp and Telegram bots, automations — from idea to production. No agency."
      },
      skip: "Skip to content",
      lang: "Language",
      nav: {
        work: "Work",
        services: "Services",
        method: "Method",
        contact: "Contact",
        talk: "Let’s talk",
        menu: "Menu",
        close: "Close",
        label: "Primary navigation"
      },
      hero: {
        avail: "Available for a project",
        availMob: "Available",
        titleDesk: "From idea to product,<br><em>no agency.</em>",
        titleMob: "Idea → product.",
        leadDesk: "Websites, WhatsApp &amp; Telegram bots, automations. I design, build and ship — you talk to me directly.",
        leadMob: "Site, bot or automation. We work directly.",
        pillSites: "Sites",
        pillBots: "Bots",
        pillAuto: "Automations",
        cta: "Request a quote",
        work: "View work",
        proofLive: "live products",
        proofReply: "to reply",
        caption: "Latest delivery — ",
        live: "In production",
        liveAria: "Live sites"
      },
      work: {
        eyebrow: "Selected",
        titleDesk: "Live, with more underway.",
        titleMob: "Live, and more coming",
        leadDesk: "Five live sites. Then bots, automations and internal tools — the format I ship, no invented clients.",
        leadMob: "5 live sites, plus bots and flows.",
        open: "Open project",
        aria: "Shipped work",
        prev: "Previous project",
        next: "Next project",
        project: "Project",
        liveBadge: "Live",
        alsoEyebrow: "Also",
        alsoTitle: "Bots, flows, internal tools.",
        alsoLead: "No fake names. Briefs stay with the client. This is the format I ship, on request.",
        a6t: "06 · Bot",
        a6h: "WhatsApp & Telegram",
        a6p: "FAQ, bookings, orders, alerts. The bot answers. You stay in control.",
        a6c: "Request a bot",
        a7t: "07 · Flow",
        a7h: "Automations",
        a7p: "Form → CRM → email / Sheets. Data moves without you.",
        a7c: "Automate a flow",
        a8t: "08 · Ops",
        a8h: "CRM & internal tools",
        a8p: "Tables, pipelines, access. A tool the team opens every day.",
        a8c: "Talk about a tool",
        foot: "Got a brief like this — ",
        footLink: "let’s scope it",
        t1: "01 · Product",
        p1: "Alya platform: guides, AI tools, forum. Designed and built solo, from scratch to production. FR / EN.",
        r1: "Founded, designed and shipped — solo.",
        t2: "02 · Nonprofit",
        p2: "Alya incubator: housing, cities, jobs. Association site, live.",
        r2: "Live brochure — one message, one call.",
        b2: "Brochure",
        t3: "03 · Display",
        p3: "Synagogue screen: names appear at the right time. Kiosk tool, in service.",
        r3: "A business tool, not a brochure.",
        b3: "Kiosk",
        t4: "04 · Commerce",
        p4: "Kosher pastry shop — FR / Hebrew cart. Orders online.",
        r4: "Live shop, two languages.",
        b4: "Shop",
        t5: "05 · Simulator",
        p5: "Solar calculator: estimate, investment simulation, lead capture. HE / EN / FR.",
        r5: "A tool plus leads, not a static page.",
        b5: "Calculator"
      },
      offer: {
        eyebrow: "Offer",
        title: "What I ship.",
        lead: "From a brochure site to a business bot — one contact, one deliverable.",
        h1: "SaaS &amp; platforms",
        p1: "Member areas, business tools, AI flows. A product people actually use.",
        h2: "Brochure sites",
        p2: "A clear, fast page that explains the offer and converts to a call.",
        h3: "Web apps",
        p3: "Polished UI, solid backend, deployment. From brief to live.",
        h4: "CRM &amp; internal tools",
        p4: "Tables, forms, pipelines. Fewer spreadsheets, more process.",
        h5: "WhatsApp &amp; Telegram bots",
        p5: "FAQ, bookings, orders, alerts. A bot that answers for you.",
        h6: "Automations",
        p6: "Forms, CRM, email, sheets, APIs. Flows that run without you.",
        stack: "Stack"
      },
      method: {
        eyebrow: "Method",
        title: "Simple, direct, shipped.",
        lead: "No committee. No junior redoing the brief. One person.",
        s1: "Scope",
        p1: "Goal, timeline, perimeter. You know what ships, and when.",
        s2: "Build",
        p2: "Design, code, iterations. You see progress, not a slide deck.",
        s3: "Launch",
        p3: "Deploy, monitor, adjust. The product lives after day one.",
        profile: "Profile",
        bio: "Full-stack engineer. I build products people use — not mockups.",
        product: "Product",
        founder: "Founder of <a href=\"https://olimaid.com\" rel=\"noopener noreferrer\" target=\"_blank\">OlimAid</a>",
        eng: "Engineering",
        edu: "Education",
        eduTitle: "Software engineering"
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s talk about your project.",
        lead: "Email, phone or WhatsApp. The form reaches me directly, and you get a receipt.",
        phone: "Phone",
        wa: "Message now",
        formTitle: "Request a quote",
        kicker: "No commitment · reply within 24h",
        name: "Name",
        email: "Email",
        tel: "Phone",
        type: "Project type",
        message: "Message",
        placeholder: "Context, timeline, what you want out of it.",
        send: "Send",
        sending: "Sending…",
        sent: "Sent",
        doneTitle: "Request received.",
        doneBody: "A recap is on its way to your email. I’ll get back to you shortly.",
        error: "Couldn’t send. Email me directly: Pinhas.meguideche@gmail.com",
        types: [
          "SaaS / platform",
          "Brochure site",
          "Web app",
          "WhatsApp bot",
          "Telegram bot",
          "Automations",
          "CRM / internal tool",
          "Other"
        ]
      },
      wa: {
        label: "Message on WhatsApp",
        text: "Hi Pinhas, I have a project (site, bot or automation) and I’d like to talk."
      },
      page404: {
        title: "Page not found — Pinhas Meguideche",
        eyebrow: "Error 404",
        h1: "This page doesn’t exist.",
        lead: "The link is wrong or the page was moved.",
        back: "Back to home"
      }
    }
  };

  function lookup(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc == null ? acc : acc[key];
    }, obj);
  }

  function readLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var q = params.get("lang");
      if (q === "en" || q === "fr") return q;
      var stored = localStorage.getItem(KEY);
      if (stored === "en" || stored === "fr") return stored;
    } catch (e) {}
    return "fr";
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
  }

  function apply(lang) {
    if (lang !== "en") lang = "fr";
    var t = STR[lang];
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.classList.remove("i18n-pending");
    saveLang(lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = lookup(t, el.getAttribute("data-i18n"));
      if (value != null) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var value = lookup(t, el.getAttribute("data-i18n-html"));
      if (value != null) el.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = lookup(t, el.getAttribute("data-i18n-placeholder"));
      if (value != null) el.setAttribute("placeholder", value);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var value = lookup(t, el.getAttribute("data-i18n-aria"));
      if (value != null) el.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var value = lookup(t, el.getAttribute("data-i18n-alt"));
      if (value != null) el.setAttribute("alt", value);
    });

    var is404 = document.body && document.body.getAttribute("data-page") === "404";
    if (is404 && t.page404) document.title = t.page404.title;
    else if (t.meta && t.meta.title) document.title = t.meta.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc && t.meta && t.meta.description && !is404) desc.setAttribute("content", t.meta.description);
    var ogd = document.querySelector('meta[property="og:description"]');
    if (ogd && t.meta && t.meta.description && !is404) ogd.setAttribute("content", t.meta.description);
    var ogt = document.querySelector('meta[property="og:title"]');
    if (ogt && t.meta && t.meta.title && !is404) ogt.setAttribute("content", t.meta.title);
    var ogl = document.querySelector('meta[property="og:locale"]');
    if (ogl) ogl.setAttribute("content", lang === "en" ? "en_US" : "fr_FR");

    var wa = WA_BASE + encodeURIComponent(t.wa.text);
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (el) {
      el.setAttribute("href", wa);
    });

    var options = document.querySelectorAll("#devis select[name='type'] option");
    if (t.contact && t.contact.types) {
      options.forEach(function (opt, i) {
        if (t.contact.types[i]) {
          opt.textContent = t.contact.types[i];
          opt.value = t.contact.types[i];
        }
      });
    }

    var toggle = document.querySelector(".nav-toggle");
    if (toggle) {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", open ? t.nav.close : t.nav.menu);
      if (window.matchMedia("(max-width: 799px)").matches) {
        toggle.textContent = open ? "×" : "☰";
      } else {
        toggle.textContent = open ? t.nav.close : t.nav.menu;
      }
    }

    var submit = document.getElementById("devis-submit");
    var form = document.getElementById("devis");
    if (submit && form && !form.classList.contains("is-busy") && !form.classList.contains("is-sent")) {
      submit.textContent = t.contact.send;
    }

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-set-lang") === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    var dots = document.querySelectorAll(".work-dot");
    dots.forEach(function (dot, i) {
      dot.setAttribute("aria-label", t.work.project + " " + (i + 1));
    });

    root.PM.lang = lang;
    root.PM.t = t;
  }

  function recap(fields) {
    var t = STR[root.PM.lang] || STR.fr;
    var lang = root.PM.lang;
    if (lang === "en") {
      return [
        "Hi " + fields.nom + ",",
        "",
        "Thanks for reaching out. I’ve received your request and I’ll get back to you as soon as I can.",
        "",
        "Summary of your message:",
        "• Name: " + fields.nom,
        "• Email: " + fields.email,
        "• Phone: " + fields.tel,
        "• Project type: " + fields.type,
        "",
        "Your message:",
        fields.message,
        "",
        "Talk soon,",
        "Pinhas Meguideche",
        "Pinhas.meguideche@gmail.com",
        "+972 58 688 7253"
      ].join("\n");
    }
    return [
      "Bonjour " + fields.nom + ",",
      "",
      "Merci pour votre demande. Je l’ai bien reçue et je reviens vers vous dans les plus brefs délais.",
      "",
      "Récapitulatif de votre message :",
      "• Nom : " + fields.nom,
      "• Email : " + fields.email,
      "• Téléphone : " + fields.tel,
      "• Type de projet : " + fields.type,
      "",
      "Votre message :",
      fields.message,
      "",
      "À très vite,",
      "Pinhas Meguideche",
      "Pinhas.meguideche@gmail.com",
      "+972 58 688 7253"
    ].join("\n");
  }

  root.PM = {
    lang: "fr",
    t: STR.fr,
    str: STR,
    setLang: apply,
    recap: recap
  };

  apply(readLang());

  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-set-lang]");
    if (!btn) return;
    apply(btn.getAttribute("data-set-lang"));
  });
})(window);
