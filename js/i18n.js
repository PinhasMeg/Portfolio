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
        faq: "FAQ",
        contact: "Contact",
        talk: "Discuter",
        menu: "Menu",
        close: "Fermer",
        label: "Navigation principale"
      },
      hero: {
        avail: "Disponible pour un projet",
        availMob: "Disponible",
        titleDesk: "Je construis des produits<br>qu’on utilise.",
        titleMob: "Des produits qu’on utilise.",
        leadDesk: "Je conçois, développe et mets en ligne. Sites, bots WhatsApp &amp; Telegram, automatisations. Vous me parlez directement, en français, anglais ou hébreu.",
        leadMob: "Site, bot ou automatisation. On avance en direct.",
        pillSites: "Sites",
        pillBots: "Bots",
        pillAuto: "Automatisations",
        cta: "Discuter",
        work: "Voir le travail",
        f1: "Ingénieur full-stack",
        f2: "FR · EN · HE",
        f3: "Fondateur d’OlimAid",
        f4: "Réponse sous 24 h",
        proofLive: "produits live",
        proofReply: "pour répondre",
        caption: "Dernier livrable — ",
        live: "En production",
        liveAria: "Sites en production"
      },
      work: {
        eyebrow: "Sélection",
        titleDesk: "Travail sélectionné",
        titleMob: "Travail sélectionné",
        leadDesk: "Cinq produits en ligne. Bots, flux et outils métier se cadrent sur devis — sans inventer de noms.",
        leadMob: "5 sites live, plus bots et flux.",
        open: "Ouvrir",
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
        p3: "Écran synagogue : les noms défilent au bon moment. Outil métier, en service.",
        r3: "Produit métier, pas une vitrine.",
        b3: "Kiosque",
        t4: "04 · Commerce",
        p4: "Pâtisserie cachère — panier FR / hébreu, commande en ligne.",
        r4: "E-commerce live, deux langues.",
        b4: "Boutique",
        t5: "05 · Simulateur",
        p5: "Calculateur solaire : estimation, simulation d’investissement, capture de leads. HE / EN / FR.",
        r5: "Outil + leads, pas une page figée.",
        b5: "Calculateur",
        k1: "Produit",
        k2: "Association",
        k3: "Kiosque",
        k4: "Boutique",
        k5: "Calculateur",
        img1: "Accueil OlimAid : Guide Alya 2026, guides et outils IA.",
        img2: "Accueil Dor Hadash : accompagnement d’alya francophone.",
        img3: "Écran Beth-El : noms de défunts, bougies et date hébraïque.",
        img4: "Accueil ShemTov : pâtisserie, commander maintenant.",
        img5: "Accueil Solar Prime : 0 ₪ d’investissement et toits solaires."
      },
      offer: {
        eyebrow: "Offre",
        title: "Ce que je livre",
        lead: "Du site qui convertit au bot qui répond. Un interlocuteur, un livrable.",
        h1: "SaaS &amp; plateformes",
        p1: "Espaces membres, outils métier, flux IA. Un produit que les gens utilisent.",
        h2: "Sites",
        p2: "Page claire, rapide, qui explique l’offre et mène à un appel.",
        i2a: "Accueil et pages",
        i2b: "Mobile",
        i2c: "Formulaire / WhatsApp",
        i2d: "Mise en ligne",
        h3: "Produits & apps",
        p3: "Espaces membres, outils métier, simulateurs. Un produit qu’on ouvre tous les jours.",
        i3a: "Interface",
        i3b: "Backend",
        i3c: "Comptes et accès",
        i3d: "Déploiement",
        h4: "CRM &amp; outils internes",
        p4: "Tableaux, formulaires, pipelines. Moins de tableurs, plus de process.",
        h5: "Bots WhatsApp &amp; Telegram",
        p5: "FAQ, RDV, commandes, notifications. Le bot répond, vous gardez la main.",
        i5a: "Scénarios",
        i5b: "Notifications",
        i5c: "Lien CRM / Sheets",
        i5d: "Handoff humain",
        h6: "Automatisations",
        p6: "Formulaire → CRM → e-mail / Sheets. Les données avancent sans vous.",
        i6a: "Collecte",
        i6b: "Routage",
        i6c: "E-mails",
        i6d: "APIs",
        stack: "Compétences"
      },
      method: {
        eyebrow: "Méthode",
        title: "Un interlocuteur. Un livrable.",
        lead: "Pas de comité. Pas de junior qui reprend le brief. Design, code et mise en ligne — la même personne.",
        s1: "Cadrer",
        p1: "Objectif, délai, périmètre. On sait ce qui sort, et quand.",
        s2: "Construire",
        p2: "Design, code, itérations. Vous voyez avancer — pas un PowerPoint.",
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
        lead: "Le formulaire m’arrive directement. Vous recevez un accusé de réception. Dites-moi l’objectif, le délai, ce que vous voulez obtenir.",
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
      who: {
        title: "Pour qui",
        h1: "Commerce & TPE",
        p1: "Boutique, prise de RDV, un site qui convertit vers un appel ou une commande.",
        h2: "Associations",
        p2: "Contenu clair, contact simple, outils du quotidien pour une communauté.",
        h3: "Outils internes",
        p3: "Moins de tableurs. Un flux ou un CRM que l’équipe ouvre vraiment."
      },
      faq: {
        title: "Questions fréquentes",
        q1: "Combien de temps pour un projet ?",
        a1: "Ça dépend du périmètre. Un site clair : quelques semaines. Un produit ou un bot : on le cadre d’abord, puis un délai réaliste.",
        q2: "Vous travaillez en français ?",
        a2: "Oui. Français, anglais et hébreu — y compris des sites en hébreu quand il faut.",
        q3: "Pourquoi si peu de projets listés ?",
        a3: "Je n’invente pas de clients. Ici : le travail déjà en ligne. Le reste se discute en privé.",
        q4: "Comment on commence ?",
        a4: "Un message — formulaire, e-mail ou WhatsApp. On cadre. Devis. On construit."
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
        faq: "FAQ",
        contact: "Contact",
        talk: "Let’s talk",
        menu: "Menu",
        close: "Close",
        label: "Primary navigation"
      },
      hero: {
        avail: "Available for a project",
        availMob: "Available",
        titleDesk: "I build products<br>people actually use.",
        titleMob: "Products people use.",
        leadDesk: "I design, build and ship. Websites, WhatsApp &amp; Telegram bots, automations. You talk to me directly, in French, English or Hebrew.",
        leadMob: "Site, bot or automation. We work directly.",
        pillSites: "Sites",
        pillBots: "Bots",
        pillAuto: "Automations",
        cta: "Let’s talk",
        work: "See the work",
        f1: "Full-stack engineer",
        f2: "FR · EN · HE",
        f3: "Founder of OlimAid",
        f4: "Reply within 24h",
        proofLive: "live products",
        proofReply: "to reply",
        caption: "Latest delivery — ",
        live: "In production",
        liveAria: "Live sites"
      },
      work: {
        eyebrow: "Selected",
        titleDesk: "Selected work",
        titleMob: "Selected work",
        leadDesk: "Five live products. Bots, flows and internal tools are scoped on request — no invented names.",
        leadMob: "5 live sites, plus bots and flows.",
        open: "Open",
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
        p3: "Synagogue screen: names appear at the right time. A business tool, in service.",
        r3: "A business tool, not a brochure.",
        b3: "Kiosk",
        t4: "04 · Commerce",
        p4: "Kosher pastry shop — FR / Hebrew cart, orders online.",
        r4: "Live shop, two languages.",
        b4: "Shop",
        t5: "05 · Simulator",
        p5: "Solar calculator: estimate, investment simulation, lead capture. HE / EN / FR.",
        r5: "A tool plus leads, not a static page.",
        b5: "Calculator",
        k1: "Product",
        k2: "Nonprofit",
        k3: "Kiosk",
        k4: "Shop",
        k5: "Calculator",
        img1: "OlimAid home: Aliyah Guide 2026, guides and AI tools.",
        img2: "Dor Hadash home: francophone aliyah support.",
        img3: "Beth-El screen: names of the deceased, candles and Hebrew date.",
        img4: "ShemTov home: pastry shop, Hebrew shop UI.",
        img5: "Solar Prime home: 0 investment and solar roofs."
      },
      offer: {
        eyebrow: "Offer",
        title: "What I ship",
        lead: "From a site that converts to a bot that answers. One contact, one deliverable.",
        h1: "SaaS &amp; platforms",
        p1: "Member areas, business tools, AI flows. A product people actually use.",
        h2: "Sites",
        p2: "A clear, fast page that explains the offer and leads to a call.",
        i2a: "Home and pages",
        i2b: "Mobile",
        i2c: "Form / WhatsApp",
        i2d: "Go live",
        h3: "Products & apps",
        p3: "Member areas, internal tools, simulators. A product people open every day.",
        i3a: "Interface",
        i3b: "Backend",
        i3c: "Accounts and access",
        i3d: "Deploy",
        h4: "CRM &amp; internal tools",
        p4: "Tables, forms, pipelines. Fewer spreadsheets, more process.",
        h5: "WhatsApp &amp; Telegram bots",
        p5: "FAQ, bookings, orders, alerts. The bot answers. You stay in control.",
        i5a: "Flows",
        i5b: "Alerts",
        i5c: "CRM / Sheets link",
        i5d: "Human handoff",
        h6: "Automations",
        p6: "Form → CRM → email / Sheets. Data moves without you.",
        i6a: "Capture",
        i6b: "Routing",
        i6c: "Email",
        i6d: "APIs",
        stack: "Stack"
      },
      method: {
        eyebrow: "Method",
        title: "One contact. One deliverable.",
        lead: "No committee. No junior redoing the brief. Design, code and launch — same person.",
        s1: "Scope",
        p1: "Goal, timeline, perimeter. You know what ships, and when.",
        s2: "Build",
        p2: "Design, code, iterations. You see it move — not a slide deck.",
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
        lead: "The form reaches me directly. You get a receipt. Tell me the goal, the timeline, what you want out of it.",
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
      who: {
        title: "Who it’s for",
        h1: "Shops & small business",
        p1: "Storefront, bookings, a site that converts to a call or an order.",
        h2: "Nonprofits",
        p2: "Clear content, simple contact, everyday tools for a community.",
        h3: "Internal tools",
        p3: "Fewer spreadsheets. A flow or CRM the team actually opens."
      },
      faq: {
        title: "FAQ",
        q1: "How long does a project take?",
        a1: "It depends on scope. A clear site: a few weeks. A product or bot: we scope it first, then a realistic timeline.",
        q2: "Do you work in English?",
        a2: "Yes. French, English and Hebrew — including Hebrew sites when needed.",
        q3: "Why so few projects listed?",
        a3: "I don’t invent clients. What’s here is already live. The rest stays private.",
        q4: "How do we start?",
        a4: "A message — form, email or WhatsApp. We scope. Quote. We build."
      },
      page404: {
        title: "Page not found — Pinhas Meguideche",
        eyebrow: "Error 404",
        h1: "This page doesn’t exist.",
        lead: "The link is wrong or the page was moved.",
        back: "Back to home"
      }
    },
    he: {
      meta: {
        title: "Pinhas Meguideche — מוצרים דיגיטליים, בוטים ואוטומציות",
        description: "מהנדס פול-סטאק. אתרים, בוטים ל-WhatsApp ולטלגרם, אוטומציות — מהרעיון ועד העלייה לאוויר."
      },
      skip: "דלג לתוכן",
      lang: "שפה",
      nav: {
        work: "פרויקטים",
        services: "שירותים",
        method: "שיטה",
        faq: "שאלות",
        contact: "צור קשר",
        talk: "לשיחה",
        menu: "תפריט",
        close: "סגור",
        label: "ניווט ראשי"
      },
      hero: {
        avail: "זמין לפרויקט",
        availMob: "זמין",
        titleDesk: "אני בונה מוצרים<br>שמשתמשים בהם.",
        titleMob: "מוצרים שמשתמשים בהם.",
        leadDesk: "אני מעצב, מפתח ומעלה לאוויר. אתרים, בוטים ל-WhatsApp ולטלגרם, אוטומציות. מדברים איתי ישירות — בעברית, בצרפתית או באנגלית.",
        leadMob: "אתר, בוט או אוטומציה. עובדים ישירות.",
        cta: "לשיחה",
        work: "לעבודה",
        f1: "מהנדס פול-סטאק",
        f2: "FR · EN · HE",
        f3: "מייסד OlimAid",
        f4: "מענה תוך 24 שעות"
      },
      work: {
        titleDesk: "עבודות נבחרות",
        titleMob: "עבודות נבחרות",
        leadDesk: "חמישה מוצרים באוויר. בוטים, תהליכים וכלים פנימיים מגדירים בהצעת מחיר — בלי שמות מומצאים.",
        open: "פתיחה",
        aria: "עבודות שפורסמו",
        prev: "הפרויקט הקודם",
        next: "הפרויקט הבא",
        project: "פרויקט",
        p1: "פלטפורמת עלייה: מדריכים, כלי AI, פורום. תוכנן ופותח לבד, מאפס ועד ייצור. צרפתית / אנגלית.",
        p2: "חממת עלייה: דיור, ערים, תעסוקה. אתר עמותה, באוויר.",
        p3: "מסך בית כנסת: השמות מופיעים בזמן הנכון. כלי מקצועי, פעיל.",
        p4: "קונדיטוריה כשרה — סל צרפתית / עברית, הזמנה אונליין.",
        p5: "מחשבון סולארי: הערכה, סימולציית השקעה, לידים. עברית / אנגלית / צרפתית.",
        k1: "מוצר",
        k2: "עמותה",
        k3: "קיוסק",
        k4: "חנות",
        k5: "מחשבון",
        img1: "עמוד הבית של OlimAid: מדריך עלייה 2026, מדריכים וכלי AI.",
        img2: "עמוד הבית של דור חדש: ליווי עלייה דובר צרפתית.",
        img3: "מסך בית-אל: שמות נפטרים, נרות ותאריך עברי.",
        img4: "עמוד הבית של ShemTov: קונדיטוריה, ממשק עברי.",
        img5: "עמוד הבית של Solar Prime: 0 השקעה וגגות סולאריים."
      },
      offer: {
        title: "מה אני מוסר",
        lead: "מאתר שממיר ועד בוט שעונה. איש קשר אחד, תוצר אחד.",
        h2: "אתרים",
        p2: "עמוד ברור ומהיר, שמסביר את ההצעה ומוביל לשיחה.",
        i2a: "דף הבית ועמודים",
        i2b: "מובייל",
        i2c: "טופס / WhatsApp",
        i2d: "עלייה לאוויר",
        h3: "מוצרים ואפליקציות",
        p3: "אזורי חברים, כלים פנימיים, סימולטורים. מוצר שפותחים כל יום.",
        i3a: "ממשק",
        i3b: "בקאנד",
        i3c: "חשבונות והרשאות",
        i3d: "פריסה",
        h5: "בוטים ל-WhatsApp ולטלגרם",
        p5: "שאלות נפוצות, תורים, הזמנות, התראות. הבוט עונה, השליטה אצלכם.",
        i5a: "תרחישים",
        i5b: "התראות",
        i5c: "חיבור CRM / Sheets",
        i5d: "העברה לאדם",
        h6: "אוטומציות",
        p6: "טופס → CRM → מייל / Sheets. הנתונים זזים בליכם.",
        i6a: "איסוף",
        i6b: "ניתוב",
        i6c: "מיילים",
        i6d: "APIs"
      },
      method: {
        title: "איש קשר אחד. תוצר אחד.",
        lead: "בלי ועדה. בלי ג׳וניור שמחליף את הבריף. עיצוב, קוד והעלאה — אותו אדם.",
        s1: "לאפיין",
        p1: "מטרה, לוח זמנים, היקף. יודעים מה יוצא, ומתי.",
        s2: "לבנות",
        p2: "עיצוב, קוד, איטרציות. רואים התקדמות — לא מצגת.",
        s3: "להעלות",
        p3: "פריסה, מעקב, כיוונון. המוצר חי אחרי היום הראשון.",
        bio: "מהנדס פול-סטאק. אני בונה מוצרים שמשתמשים בהם — לא מוקאפים.",
        product: "מוצר",
        founder: "מייסד <a href=\"https://olimaid.com\" rel=\"noopener noreferrer\" target=\"_blank\">OlimAid</a>",
        eng: "הנדסה",
        edu: "השכלה",
        eduTitle: "הנדסת תוכנה"
      },
      contact: {
        title: "נדבר על הפרויקט.",
        lead: "הטופס מגיע אליי ישירות. מקבלים אישור קבלה. כתבו מטרה, לוח זמנים, מה רוצים להשיג.",
        phone: "טלפון",
        wa: "לכתוב עכשיו",
        formTitle: "לבקש הצעת מחיר",
        kicker: "בלי התחייבות · מענה תוך 24 שעות",
        name: "שם",
        email: "אימייל",
        tel: "טלפון",
        type: "סוג הפרויקט",
        message: "הודעה",
        placeholder: "הקשר, לוח זמנים, מה רוצים להשיג.",
        send: "שליחה",
        sending: "שולח…",
        sent: "נשלח",
        doneTitle: "הבקשה התקבלה.",
        doneBody: "סיכום יצא לאימייל שלכם. אחזור בהקדם.",
        error: "לא ניתן לשלוח. כתבו אליי: Pinhas.meguideche@gmail.com",
        types: [
          "SaaS / פלטפורמה",
          "אתר תדמית",
          "אפליקציית ווב",
          "בוט WhatsApp",
          "בוט טלגרם",
          "אוטומציות",
          "CRM / כלי פנימי",
          "אחר"
        ]
      },
      wa: {
        label: "לכתוב בוואטסאפ",
        text: "שלום פנחס, יש לי פרויקט (אתר, בוט או אוטומציה) ואשמח לדבר."
      },
      who: {
        title: "למי זה",
        h1: "עסקים וחנויות",
        p1: "חנות, קביעת תורים, אתר שממיר לשיחה או להזמנה.",
        h2: "עמותות",
        p2: "תוכן ברור, יצירת קשר פשוטה, כלים יומיומיים לקהילה.",
        h3: "כלים פנימיים",
        p3: "פחות אקסל. תהליך או CRM שהצוות באמת פותח."
      },
      faq: {
        title: "שאלות נפוצות",
        q1: "כמה זמן לוקח פרויקט?",
        a1: "תלוי בהיקף. אתר ברור: כמה שבועות. מוצר או בוט: קודם מאפיינים, אחר כך לוח זמנים ריאלי.",
        q2: "עובדים בעברית?",
        a2: "כן. עברית, צרפתית ואנגלית — ואתרים בעברית כשצריך.",
        q3: "למה כל כך מעט פרויקטים?",
        a3: "אני לא ממציא לקוחות. כאן: מה שכבר באוויר. השאר בשיחה פרטית.",
        q4: "איך מתחילים?",
        a4: "הודעה — טופס, אימייל או וואטסאפ. מאפיינים. הצעת מחיר. בונים."
      },
      page404: {
        title: "העמוד לא נמצא — Pinhas Meguideche",
        eyebrow: "שגיאה 404",
        h1: "העמוד הזה לא קיים.",
        lead: "הקישור שגוי או שהעמוד הועבר.",
        back: "חזרה לדף הבית"
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
      if (q === "en" || q === "fr" || q === "he") return q;
      var stored = localStorage.getItem(KEY);
      if (stored === "en" || stored === "fr" || stored === "he") return stored;
    } catch (e) {}
    return "fr";
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
  }

  function apply(lang) {
    if (lang !== "en" && lang !== "he") lang = "fr";
    var t = STR[lang] || STR.fr;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-lang", lang);
    saveLang(lang);

    var shotKey = lang === "fr" ? "fr" : "en";
    document.querySelectorAll("[data-src-fr]").forEach(function (el) {
      var next = el.getAttribute("data-src-" + shotKey) || el.getAttribute("data-src-fr");
      if (next && el.getAttribute("src") !== next) el.setAttribute("src", next);
    });
    document.querySelectorAll("[data-href-fr]").forEach(function (el) {
      var next = el.getAttribute("data-href-" + shotKey) || el.getAttribute("data-href-fr");
      if (next) el.setAttribute("href", next);
    });

    document.documentElement.classList.remove("i18n-pending");

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
    if (ogl) ogl.setAttribute("content", lang === "en" ? "en_US" : lang === "he" ? "he_IL" : "fr_FR");

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
    if (lang === "he") {
      return [
        "שלום " + fields.nom + ",",
        "",
        "תודה שפנית. קיבלתי את הבקשה ואחזור אליך בהקדם.",
        "",
        "סיכום ההודעה:",
        "• שם: " + fields.nom,
        "• אימייל: " + fields.email,
        "• טלפון: " + fields.tel,
        "• סוג הפרויקט: " + fields.type,
        "",
        "ההודעה:",
        fields.message,
        "",
        "נתראה,",
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
