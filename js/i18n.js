(function (root) {
  var KEY = "pm-lang";
  var WA_BASE = "https://wa.me/972586887253?text=";

  var STR = {
    fr: {
      meta: {
        title: "Pinhas Meguideche — Produits web, bots & automatisations",
        description: "Ingénieur full-stack. Sites, bots WhatsApp et Telegram, automatisations — du besoin jusqu’à la mise en production. Un interlocuteur, sans agence."
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
        leadDesk: "Ingénieur full-stack. Un site, un bot WhatsApp ou Telegram, une automatisation : je le conçois, je le développe et je le mets en ligne. On se parle directement, en français, en anglais ou en hébreu.",
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
        photoAlt: "Pinhas Meguideche",
        proofLive: "produits live",
        proofReply: "pour répondre",
        caption: "Dernier livrable — ",
        live: "En production",
        liveAria: "Sites en production"
      },
      work: {
        eyebrow: "Sélection",
        titleDesk: "Projets en ligne",
        titleMob: "Projets en ligne",
        leadDesk: "Une sélection de produits déjà utilisés. Bots, automatisations et outils internes se cadrent au cas par cas — sans inventer de clients.",
        leadMob: "Des produits live, plus bots et flux.",
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
        p1: "Plateforme d’alya : guides, outils d’IA et forum. Conçue et développée seul, de zéro jusqu’à la mise en production. Français et anglais.",
        r1: "Fondé, conçu et mis en ligne — seul.",
        t2: "02 · Association",
        p2: "Site d’un incubateur d’alya : logement, villes, emploi. Une vitrine claire, en production, pour une association francophone.",
        r2: "Vitrine live — un message, un appel.",
        b2: "Vitrine",
        t3: "03 · Display",
        p3: "Écran pour synagogue : les noms des défunts s’affichent au bon moment, avec la date hébraïque. Un outil métier, déjà en service.",
        r3: "Produit métier, pas une vitrine.",
        b3: "Kiosque",
        t4: "04 · Commerce",
        p4: "Boutique en ligne d’une pâtisserie cachère. Panier et commandes en français et en hébreu.",
        r4: "E-commerce live, deux langues.",
        b4: "Boutique",
        t5: "05 · Simulateur",
        p5: "Calculateur solaire : estimation, simulation d’investissement et prise de contact. Hébreu, anglais et français.",
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
        title: "Ce que je peux construire",
        lead: "Un site, un produit, un bot ou un flux. Je m’occupe du design, du code et de la mise en ligne.",
        h1: "SaaS &amp; plateformes",
        p1: "Espaces membres, outils métier, flux IA. Un produit que les gens utilisent.",
        h2: "Sites",
        p2: "Un site lisible, rapide, pensé pour le téléphone. Il explique ce que vous faites et mène à un message, un appel ou une commande.",
        i2a: "Pages et contenu",
        i2b: "Version mobile",
        i2c: "Formulaire, e-mail, WhatsApp",
        i2d: "Hébergement et mise en ligne",
        h3: "Produits & apps",
        p3: "Espaces membres, simulateurs, outils métier. Un produit que les gens ouvrent vraiment — pas une maquette.",
        i3a: "Interface",
        i3b: "Backend et données",
        i3c: "Comptes et droits d’accès",
        i3d: "Mise en production",
        h4: "CRM &amp; outils internes",
        p4: "Tableaux, formulaires, pipelines. Moins de tableurs, plus de process.",
        h5: "Bots WhatsApp &amp; Telegram",
        p5: "Le bot répond aux questions, prend un rendez-vous ou suit une commande. Vous restez joignable dès que c’est trop complexe.",
        i5a: "Scénarios et réponses",
        i5b: "Notifications",
        i5c: "Lien avec un tableur ou un CRM",
        i5d: "Passage à un humain",
        h6: "Automatisations",
        p6: "Un formulaire, une commande ou un message déclenche la suite : e-mail, tableur, CRM. Moins de copier-coller au quotidien.",
        i6a: "Collecte des données",
        i6b: "Routage",
        i6c: "E-mails automatiques",
        i6d: "Connexions API",
        stack: "Compétences"
      },
      method: {
        eyebrow: "Méthode",
        title: "Vous parlez à celui qui construit.",
        lead: "Pas d’agence entre nous. Je cadre, je conçois, je développe et je mets en ligne — du premier message jusqu’au lancement.",
        s1: "Cadrer",
        p1: "On pose l’objectif, le délai et le périmètre. Vous savez ce qui sort, et à quelle date.",
        s2: "Construire",
        p2: "Design et code, par étapes. Vous voyez le produit avancer — pas une présentation.",
        s3: "Mettre en ligne",
        p3: "Déploiement, tests, ajustements. Je reste disponible après le lancement.",
        profile: "Profil",
        bio: "Ingénieur full-stack. Je livre des produits en production — pas des maquettes qui restent dans un dossier.",
        product: "Produit",
        founder: "Fondateur d’<a href=\"https://olimaid.com\" rel=\"noopener noreferrer\" target=\"_blank\">OlimAid</a>",
        eng: "Ingénierie",
        edu: "Formation",
        eduTitle: "Ingénierie logicielle"
      },
      contact: {
        eyebrow: "Contact",
        title: "Parlons de votre projet.",
        lead: "Décrivez l’objectif, le délai et ce que vous attendez. Le message m’arrive directement ; vous recevez un accusé de réception.",
        phone: "Téléphone",
        wa: "Écrire maintenant",
        formTitle: "Demander un devis",
        kicker: "Sans engagement. Réponse sous 24 h.",
        name: "Nom",
        email: "Email",
        tel: "Téléphone",
        type: "Type de projet",
        message: "Message",
        placeholder: "Qui vous êtes, ce dont vous avez besoin, et pour quand.",
        send: "Envoyer",
        sending: "Envoi…",
        sent: "Envoyé",
        doneTitle: "Demande bien reçue.",
        doneBody: "Un récapitulatif vient de partir sur votre e-mail. Je vous réponds au plus vite.",
        error: "Envoi impossible. Écrivez-moi directement : Pinhas.meguideche@gmail.com",
        types: [
          "SaaS / plateforme",
          "Site",
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
        text: "Bonjour Pinhas, j’ai un projet (site, bot ou automatisation) et j’aimerais en discuter."
      },
      who: {
        title: "Pour qui",
        lead: "Particuliers, indépendants, commerces, associations, équipes. Si le besoin est réel, on peut le construire.",
        h1: "Particuliers",
        p1: "Un site personnel, une page pour un projet, un bot qui répond à votre place. Pas besoin d’être une entreprise.",
        h2: "Indépendants & commerces",
        p2: "Boutique, prise de rendez-vous, page qui mène à un appel ou une commande. Un outil simple, en ligne, qui travaille pour vous.",
        h3: "Associations & communautés",
        p3: "Contenu clair, contact facile, outils du quotidien pour les membres. Une présence nette, sans jargon.",
        h4: "Entreprises & équipes",
        p4: "Automatisations, CRM, outils internes. Moins de tableurs, un flux que l’équipe ouvre vraiment."
      },
      quotes: {
        title: "Ils en parlent",
        q1: "Le travail fourni est solide, et la communication a été claire tout au long du développement. On savait où on en était, à chaque étape.",
        n1: "Patricia H.",
        q2: "Très content du résultat. Pinhas a compris le besoin rapidement, et le suivi a été simple du début à la mise en ligne.",
        n2: "Benjamin M."
      },
      faq: {
        title: "Questions fréquentes",
        q1: "Combien de temps faut-il ?",
        a1: "Selon le périmètre. Un site simple : quelques semaines. Un produit ou un bot : on le cadre d’abord, puis on fixe un délai réaliste.",
        q2: "Vous travaillez aussi avec des particuliers ?",
        a2: "Oui. Particuliers, indépendants, associations, entreprises. Le format s’adapte au besoin, pas à un type de client.",
        q3: "En quelles langues travaillez-vous ?",
        a3: "Français, anglais et hébreu — y compris des sites en hébreu quand il le faut. On se parle dans la langue qui vous convient.",
        q4: "Comment on commence ?",
        a4: "Un message — formulaire, e-mail ou WhatsApp. On clarifie le besoin, je propose un devis, puis on construit."
      },
      page404: {
        title: "Page introuvable — Pinhas Meguideche",
        eyebrow: "Erreur 404",
        h1: "Cette page n’existe pas.",
        lead: "Le lien est incorrect, ou la page a été déplacée.",
        back: "Retour à l’accueil"
      }
    },
    en: {
      meta: {
        title: "Pinhas Meguideche — Web products, bots & automations",
        description: "Full-stack engineer. Websites, WhatsApp and Telegram bots, automations — from the brief through to production. One contact, no agency."
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
        leadDesk: "Full-stack engineer. A website, a WhatsApp or Telegram bot, an automation: I design it, build it and put it live. You talk to me directly, in French, English or Hebrew.",
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
        photoAlt: "Pinhas Meguideche",
        proofLive: "live products",
        proofReply: "to reply",
        caption: "Latest delivery — ",
        live: "In production",
        liveAria: "Live sites"
      },
      work: {
        eyebrow: "Selected",
        titleDesk: "Live work",
        titleMob: "Live work",
        leadDesk: "A selection of products people already use. Bots, automations and internal tools are scoped case by case — no invented clients.",
        leadMob: "Live products, plus bots and flows.",
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
        p1: "Aliyah platform: guides, AI tools and a forum. Designed and built solo, from scratch through to production. French and English.",
        r1: "Founded, designed and shipped — solo.",
        t2: "02 · Nonprofit",
        p2: "Aliyah incubator site: housing, cities, jobs. A clear association site, live, for a francophone community.",
        r2: "Live brochure — one message, one call.",
        b2: "Brochure",
        t3: "03 · Display",
        p3: "Synagogue screen: names of the deceased appear at the right time, with the Hebrew date. A business tool, already in service.",
        r3: "A business tool, not a brochure.",
        b3: "Kiosk",
        t4: "04 · Commerce",
        p4: "Online shop for a kosher pastry. Cart and orders in French and Hebrew.",
        r4: "Live shop, two languages.",
        b4: "Shop",
        t5: "05 · Simulator",
        p5: "Solar calculator: estimate, investment simulation and contact capture. Hebrew, English and French.",
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
        title: "What I can build",
        lead: "A site, a product, a bot or a flow. I handle the design, the code and the launch.",
        h1: "SaaS &amp; platforms",
        p1: "Member areas, business tools, AI flows. A product people actually use.",
        h2: "Sites",
        p2: "A readable, fast site, built for the phone. It explains what you do and leads to a message, a call or an order.",
        i2a: "Pages and content",
        i2b: "Mobile version",
        i2c: "Form, email, WhatsApp",
        i2d: "Hosting and go-live",
        h3: "Products & apps",
        p3: "Member areas, simulators, internal tools. A product people actually open — not a mockup.",
        i3a: "Interface",
        i3b: "Backend and data",
        i3c: "Accounts and permissions",
        i3d: "Go live",
        h4: "CRM &amp; internal tools",
        p4: "Tables, forms, pipelines. Fewer spreadsheets, more process.",
        h5: "WhatsApp &amp; Telegram bots",
        p5: "The bot answers questions, books a slot or tracks an order. You stay reachable when it gets too complex.",
        i5a: "Flows and replies",
        i5b: "Alerts",
        i5c: "Link to a spreadsheet or CRM",
        i5d: "Handoff to a person",
        h6: "Automations",
        p6: "A form, an order or a message triggers what comes next: email, spreadsheet, CRM. Less copy-paste.",
        i6a: "Data capture",
        i6b: "Routing",
        i6c: "Automated email",
        i6d: "API connections",
        stack: "Stack"
      },
      method: {
        eyebrow: "Method",
        title: "You talk to the person who builds it.",
        lead: "No agency in between. I scope, design, develop and launch — from the first message through to go-live.",
        s1: "Scope",
        p1: "We set the goal, the timeline and the perimeter. You know what ships, and on which date.",
        s2: "Build",
        p2: "Design and code, in steps. You see the product move — not a slide deck.",
        s3: "Launch",
        p3: "Deploy, test, adjust. I stay available after launch.",
        profile: "Profile",
        bio: "Full-stack engineer. I ship products in production — not mockups that sit in a folder.",
        product: "Product",
        founder: "Founder of <a href=\"https://olimaid.com\" rel=\"noopener noreferrer\" target=\"_blank\">OlimAid</a>",
        eng: "Engineering",
        edu: "Education",
        eduTitle: "Software engineering"
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s talk about your project.",
        lead: "Tell me the goal, the timeline and what you need. The message reaches me directly; you get a receipt.",
        phone: "Phone",
        wa: "Message now",
        formTitle: "Request a quote",
        kicker: "No commitment. Reply within 24h.",
        name: "Name",
        email: "Email",
        tel: "Phone",
        type: "Project type",
        message: "Message",
        placeholder: "Who you are, what you need, and by when.",
        send: "Send",
        sending: "Sending…",
        sent: "Sent",
        doneTitle: "Request received.",
        doneBody: "A recap is on its way to your email. I’ll get back to you shortly.",
        error: "Couldn’t send. Email me directly: Pinhas.meguideche@gmail.com",
        types: [
          "SaaS / platform",
          "Website",
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
        lead: "Individuals, freelancers, shops, nonprofits, teams. If the need is real, we can build it.",
        h1: "Individuals",
        p1: "A personal site, a page for a project, a bot that answers for you. You don’t need to be a company.",
        h2: "Freelancers & shops",
        p2: "Storefront, bookings, a page that leads to a call or an order. A simple live tool that works for you.",
        h3: "Nonprofits & communities",
        p3: "Clear content, easy contact, everyday tools for members. A clean presence, without jargon.",
        h4: "Companies & teams",
        p4: "Automations, CRM, internal tools. Fewer spreadsheets, a flow the team actually opens."
      },
      quotes: {
        title: "What they say",
        q1: "The work delivered is solid, and communication stayed clear throughout development. We always knew where things stood.",
        n1: "Patricia H.",
        q2: "Very happy with the result. Pinhas understood the need quickly, and follow-up was straightforward from start to launch.",
        n2: "Benjamin M."
      },
      faq: {
        title: "FAQ",
        q1: "How long does it take?",
        a1: "It depends on scope. A simple site: a few weeks. A product or bot: we scope it first, then we set a realistic timeline.",
        q2: "Do you work with individuals too?",
        a2: "Yes. Individuals, freelancers, nonprofits, companies. The format follows the need, not a type of client.",
        q3: "Which languages do you work in?",
        a3: "French, English and Hebrew — including Hebrew sites when needed. We talk in whichever language suits you.",
        q4: "How do we start?",
        a4: "A message — form, email or WhatsApp. We clarify the need, I send a quote, then we build."
      },
      page404: {
        title: "Page not found — Pinhas Meguideche",
        eyebrow: "Error 404",
        h1: "This page doesn’t exist.",
        lead: "The link is wrong, or the page was moved.",
        back: "Back to home"
      }
    },
    he: {
      meta: {
        title: "Pinhas Meguideche — מוצרים דיגיטליים, בוטים ואוטומציות",
        description: "מהנדס פול-סטאק. אתרים, בוטים ל-WhatsApp ולטלגרם, אוטומציות — מהצורך ועד העלייה לאוויר. איש קשר אחד, בלי סוכנות."
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
        leadDesk: "מהנדס פול-סטאק. אתר, בוט ל-WhatsApp או לטלגרם, אוטומציה: אני מעצב, מפתח ומעלה לאוויר. מדברים איתי ישירות — בעברית, בצרפתית או באנגלית.",
        leadMob: "אתר, בוט או אוטומציה. עובדים ישירות.",
        cta: "לשיחה",
        work: "לעבודה",
        f1: "מהנדס פול-סטאק",
        f2: "FR · EN · HE",
        f3: "מייסד OlimAid",
        f4: "מענה תוך 24 שעות",
        photoAlt: "Pinhas Meguideche"
      },
      work: {
        titleDesk: "פרויקטים באוויר",
        titleMob: "פרויקטים באוויר",
        leadDesk: "מבחר מוצרים שכבר בשימוש. בוטים, אוטומציות וכלים פנימיים מגדירים לפי הצורך — בלי להמציא לקוחות.",
        open: "פתיחה",
        aria: "עבודות שפורסמו",
        prev: "הפרויקט הקודם",
        next: "הפרויקט הבא",
        project: "פרויקט",
        p1: "פלטפורמת עלייה: מדריכים, כלי AI ופורום. תוכנן ופותח לבד, מאפס ועד עלייה לאוויר. צרפתית ואנגלית.",
        p2: "אתר חממת עלייה: דיור, ערים, תעסוקה. אתר עמותה ברור, באוויר, לקהילה דוברת צרפתית.",
        p3: "מסך לבית כנסת: שמות הנפטרים מופיעים בזמן הנכון, עם התאריך העברי. כלי מקצועי, כבר בשימוש.",
        p4: "חנות אונליין לקונדיטוריה כשרה. סל והזמנות בצרפתית ובעברית.",
        p5: "מחשבון סולארי: הערכה, סימולציית השקעה ויצירת קשר. עברית, אנגלית וצרפתית.",
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
        title: "מה אפשר לבנות",
        lead: "אתר, מוצר, בוט או תהליך. אני מטפל בעיצוב, בקוד ובהעלאה לאוויר.",
        h2: "אתרים",
        p2: "אתר קריא ומהיר, מותאם לטלפון. מסביר מה אתם עושים ומוביל להודעה, לשיחה או להזמנה.",
        i2a: "עמודים ותוכן",
        i2b: "גרסת מובייל",
        i2c: "טופס, מייל, WhatsApp",
        i2d: "אחסון והעלאה לאוויר",
        h3: "מוצרים ואפליקציות",
        p3: "אזורי חברים, סימולטורים, כלים פנימיים. מוצר שפותחים באמת — לא מוקאפ.",
        i3a: "ממשק",
        i3b: "בקאנד ונתונים",
        i3c: "חשבונות והרשאות",
        i3d: "עלייה לאוויר",
        h5: "בוטים ל-WhatsApp ולטלגרם",
        p5: "הבוט עונה לשאלות, קובע תור או עוקב אחרי הזמנה. נשארים זמינים כשזה מסתבך.",
        i5a: "תרחישים ותשובות",
        i5b: "התראות",
        i5c: "חיבור לגיליון או ל-CRM",
        i5d: "העברה לאדם",
        h6: "אוטומציות",
        p6: "טופס, הזמנה או הודעה מפעילים את ההמשך: מייל, גיליון, CRM. פחות העתק-הדבק.",
        i6a: "איסוף נתונים",
        i6b: "ניתוב",
        i6c: "מיילים אוטומטיים",
        i6d: "חיבורי API"
      },
      method: {
        title: "מדברים עם מי שבונה.",
        lead: "בלי סוכנות באמצע. אני מאפיין, מעצב, מפתח ומעלה לאוויר — מההודעה הראשונה ועד ההשקה.",
        s1: "לאפיין",
        p1: "מגדירים מטרה, לוח זמנים והיקף. יודעים מה יוצא, ובאיזה תאריך.",
        s2: "לבנות",
        p2: "עיצוב וקוד, בשלבים. רואים את המוצר מתקדם — לא מצגת.",
        s3: "להעלות",
        p3: "פריסה, בדיקות, כיוונון. נשארים זמינים אחרי ההשקה.",
        bio: "מהנדס פול-סטאק. אני מעלה מוצרים לאוויר — לא מוקאפים שנשארים בתיקייה.",
        product: "מוצר",
        founder: "מייסד <a href=\"https://olimaid.com\" rel=\"noopener noreferrer\" target=\"_blank\">OlimAid</a>",
        eng: "הנדסה",
        edu: "השכלה",
        eduTitle: "הנדסת תוכנה"
      },
      contact: {
        title: "נדבר על הפרויקט.",
        lead: "כתבו מטרה, לוח זמנים ומה מצפים. ההודעה מגיעה אליי ישירות; מקבלים אישור קבלה.",
        phone: "טלפון",
        wa: "לכתוב עכשיו",
        formTitle: "לבקש הצעת מחיר",
        kicker: "בלי התחייבות. מענה תוך 24 שעות.",
        name: "שם",
        email: "אימייל",
        tel: "טלפון",
        type: "סוג הפרויקט",
        message: "הודעה",
        placeholder: "מי אתם, מה צריך, ועד מתי.",
        send: "שליחה",
        sending: "שולח…",
        sent: "נשלח",
        doneTitle: "הבקשה התקבלה.",
        doneBody: "סיכום יצא לאימייל שלכם. אחזור בהקדם.",
        error: "לא ניתן לשלוח. כתבו אליי: Pinhas.meguideche@gmail.com",
        types: [
          "SaaS / פלטפורמה",
          "אתר",
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
        lead: "אנשים פרטיים, עצמאיים, חנויות, עמותות, צוותים. אם הצורך אמיתי — אפשר לבנות.",
        h1: "אנשים פרטיים",
        p1: "אתר אישי, עמוד לפרויקט, בוט שעונה במקומכם. לא חייבים להיות חברה.",
        h2: "עצמאיים וחנויות",
        p2: "חנות, קביעת תורים, עמוד שמוביל לשיחה או להזמנה. כלי פשוט, באוויר, שעובד בשבילכם.",
        h3: "עמותות וקהילות",
        p3: "תוכן ברור, יצירת קשר קלה, כלים יומיומיים לחברים. נוכחות נקייה, בלי ז׳רגון.",
        h4: "חברות וצוותים",
        p4: "אוטומציות, CRM, כלים פנימיים. פחות אקסל, תהליך שהצוות באמת פותח."
      },
      quotes: {
        title: "מה אומרים",
        q1: "העבודה שנמסרה רצינית, והתקשורת הייתה ברורה לאורך כל הפיתוח. תמיד ידענו איפה עומדים.",
        n1: "Patricia H.",
        q2: "מאוד מרוצה מהתוצאה. פנחס הבין מהר את הצורך, והמעקב היה פשוט מההתחלה ועד העלייה לאוויר.",
        n2: "Benjamin M."
      },
      faq: {
        title: "שאלות נפוצות",
        q1: "כמה זמן זה לוקח?",
        a1: "תלוי בהיקף. אתר פשוט: כמה שבועות. מוצר או בוט: קודם מאפיינים, אחר כך קובעים לוח זמנים ריאלי.",
        q2: "עובדים גם עם אנשים פרטיים?",
        a2: "כן. אנשים פרטיים, עצמאיים, עמותות, חברות. הפורמט מתאים לצורך, לא לסוג לקוח.",
        q3: "באילו שפות עובדים?",
        a3: "עברית, צרפתית ואנגלית — כולל אתרים בעברית כשצריך. מדברים בשפה שנוחה לכם.",
        q4: "איך מתחילים?",
        a4: "הודעה — טופס, אימייל או וואטסאפ. מבהירים את הצורך, שולח הצעת מחיר, ואז בונים."
      },
      page404: {
        title: "העמוד לא נמצא — Pinhas Meguideche",
        eyebrow: "שגיאה 404",
        h1: "העמוד הזה לא קיים.",
        lead: "הקישור שגוי, או שהעמוד הועבר.",
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
