
"use strict";

/* 1. Les balises sont organisées par famille pour faciliter la recherche. */
const elementGroups = [
    {
        title: "Contenu, texte et structure",
        elements: [
            "h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "span", "br", "hr",
            "header", "nav", "main", "section", "article", "aside", "footer", "address",
            "blockquote", "pre", "code", "strong", "em", "b", "i", "u", "small", "mark",
            "del", "ins", "sub", "sup", "time"
        ]
    },
    {
        title: "Liens, listes et médias",
        elements: [
            "a", "ul", "ol", "li", "dl", "dt", "dd", "figure", "figcaption", "img",
            "picture", "video", "audio", "source", "track", "iframe", "canvas"
        ]
    },
    {
        title: "Formulaires et contrôles",
        elements: [
            "form", "label", "input", "textarea", "button", "select", "option", "optgroup",
            "fieldset", "legend", "datalist", "output", "progress", "meter"
        ]
    },
    {
        title: "Tableaux et éléments interactifs",
        elements: [
            "table", "caption", "colgroup", "col", "thead", "tbody", "tfoot", "tr", "th",
            "td", "details", "summary", "dialog"
        ]
    }
];

const elementDescriptions = {
    h1:"Titre principal de la page.", h2:"Titre de section de deuxième niveau.",
    h3:"Titre de troisième niveau.", h4:"Titre de quatrième niveau.",
    h5:"Titre de cinquième niveau.", h6:"Titre de sixième niveau.",
    p:"Paragraphe de texte.", div:"Conteneur générique de type bloc.",
    span:"Conteneur générique en ligne.", br:"Saut de ligne.",
    hr:"Séparation thématique entre deux contenus.",
    header:"En-tête d'une page ou d'une section.", nav:"Zone contenant les liens de navigation.",
    main:"Contenu principal de la page.", section:"Section thématique d'un document.",
    article:"Contenu autonome, comme un article ou une publication.",
    aside:"Contenu complémentaire ou latéral.", footer:"Pied de page ou de section.",
    address:"Informations de contact d'une personne ou organisation.",
    blockquote:"Citation longue provenant d'une autre source.",
    pre:"Texte préformaté qui conserve les espaces et retours à la ligne.",
    code:"Fragment de code informatique.", strong:"Texte d'importance forte.",
    em:"Texte mis en emphase.", b:"Texte attirant visuellement l'attention.",
    i:"Texte en voix ou ton différent, souvent affiché en italique.",
    u:"Texte annoté ou souligné.", small:"Informations secondaires ou en petits caractères.",
    mark:"Texte surligné ou mis en évidence.", del:"Texte supprimé d'un document.",
    ins:"Texte ajouté à un document.", sub:"Texte en indice.", sup:"Texte en exposant.",
    time:"Date ou heure lisible par une machine.",
    a:"Lien vers une page, une section ou une ressource.", ul:"Liste non ordonnée.",
    ol:"Liste ordonnée.", li:"Élément d'une liste.", dl:"Liste de descriptions.",
    dt:"Terme ou nom dans une liste de descriptions.", dd:"Description associée à un terme.",
    figure:"Contenu autonome illustratif ou média.", figcaption:"Légende d'un élément figure.",
    img:"Image intégrée dans la page.", picture:"Conteneur de sources d'image adaptées à l'écran.",
    video:"Lecteur vidéo intégré.", audio:"Lecteur audio intégré.",
    source:"Source média pour picture, audio ou video.",
    track:"Piste de sous-titres ou de texte pour un média.",
    iframe:"Page ou contenu externe intégré.", canvas:"Zone de dessin pilotée par JavaScript.",
    form:"Formulaire de saisie et d'envoi de données.",
    label:"Libellé associé à un contrôle de formulaire.",
    input:"Champ de saisie de données.", textarea:"Champ de texte multiligne.",
    button:"Bouton permettant de déclencher une action.", select:"Liste déroulante.",
    option:"Option disponible dans une liste select.",
    optgroup:"Groupe d'options dans une liste déroulante.",
    fieldset:"Groupe de contrôles d'un formulaire.", legend:"Légende d'un groupe fieldset.",
    datalist:"Liste de suggestions pour un champ input.",
    output:"Résultat d'un calcul ou d'une action.",
    progress:"Indicateur d'avancement d'une tâche.", meter:"Mesure dans une plage connue.",
    table:"Tableau de données.", caption:"Titre ou légende d'un tableau.",
    colgroup:"Groupe de colonnes d'un tableau.", col:"Colonne ou groupe de colonnes.",
    thead:"Groupe des lignes d'en-tête d'un tableau.",
    tbody:"Groupe des lignes de données d'un tableau.",
    tfoot:"Groupe des lignes de pied d'un tableau.", tr:"Ligne d'un tableau.",
    th:"Cellule d'en-tête d'un tableau.", td:"Cellule de données d'un tableau.",
    details:"Panneau interactif pouvant être ouvert ou fermé.",
    summary:"Titre cliquable d'un élément details.",
    dialog:"Boîte de dialogue ou fenêtre modale native."
};

/* 2. Catalogue complet des balises disponibles. */
const allTags = [...new Set(elementGroups.flatMap(group => group.elements))];
const palettes = [
    ["#b46e50", "#81472f", "#f5e8df"], ["#467d70", "#28584d", "#e1f0e9"],
    ["#5979a6", "#344e79", "#e7edf6"], ["#a65f78", "#78364f", "#f5e6ec"],
    ["#8a70a5", "#57457f", "#eee8f8"], ["#b08b43", "#775d25", "#f7f0df"],
    ["#3e858f", "#245b62", "#e1f0f1"], ["#687a52", "#435436", "#eaf0df"],
    ["#bd7354", "#88472e", "#f9e9e1"], ["#596b80", "#354354", "#e7edf1"]
];
const styleFamilies = [
    "Éditorial", "Minimaliste", "Encadré", "Contraste", "Doux", "Géométrique",
    "Classique", "Moderne", "Compact", "Accentué"
];
const radiuses = [0, 3, 6, 9, 13, 18, 24, 30, 40, 50];
const shadows = [
    "none", "0 3px 8px #00000010", "0 7px 18px #00000015",
    "0 12px 28px #00000019", "0 2px 5px #0000000d",
    "inset 0 2px 5px #00000012", "0 15px 35px #00000020",
    "0 0 0 3px var(--soft)"
];
const fontFamilies = [
    "Arial, sans-serif", "Georgia, serif", "Verdana, sans-serif",
    "Trebuchet MS, sans-serif", "Tahoma, sans-serif", "'Courier New', monospace"
];

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
    })[char]);
}

function escapeAttribute(value) {
    return String(value).replace(/&/g,"&amp;").replace(/"/g,"&quot;")
        .replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

/* 3. HTML de démonstration adapté à la balise choisie. */
function getTagMarkup(tag, index) {
    const title = ["Créer avec méthode", "Une interface claire", "Explorer les possibilités", "Design et structure", "Construire autrement"][index % 5];
    const text = "Un exemple de contenu pour découvrir les possibilités de style CSS.";
    const safeTitle = escapeHTML(title);
    const safeText = escapeHTML(text);
    const svg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='150'%3E%3Crect width='320' height='150' fill='%23e1f0e9'/%3E%3Ccircle cx='160' cy='58' r='30' fill='%23467d70'/%3E%3Cpath d='M65 150 L135 90 L190 130 L240 85 L290 150' fill='%23467d70'/%3E%3C/svg%3E";

    if (/^h[1-6]$/.test(tag)) return `<${tag} class="demo">${safeTitle}</${tag}>`;
    if (tag === "p") return `<p class="demo">${safeText} ${safeTitle}.</p>`;
    if (tag === "div" || ["header","nav","main","section","article","aside","footer","address"].includes(tag)) {
        return `<${tag} class="demo"><strong>${safeTitle}</strong><p>${safeText}</p></${tag}>`;
    }
    if (tag === "span" || ["strong","em","b","i","u","small","mark","del","ins","sub","sup"].includes(tag)) {
        const content = tag === "sub" ? "H₂O" : tag === "sup" ? "x²" : safeTitle;
        return `<p>Texte avant <${tag} class="demo">${content}</${tag}> texte après.</p>`;
    }
    if (tag === "br") return `<div class="sample-context">Première ligne<br class="demo">Deuxième ligne</div>`;
    if (tag === "hr") return `<div class="sample-context">Première partie<hr class="demo">Deuxième partie</div>`;
    if (tag === "blockquote") return `<blockquote class="demo">« ${safeText} »<footer>— DesignLab</footer></blockquote>`;
    if (tag === "pre") return `<pre class="demo"><code>const message = "Bonjour";\nconsole.log(message);</code></pre>`;
    if (tag === "code") return `<p>Exemple : <code class="demo">const total = 10;</code></p>`;
    if (tag === "time") return `<time class="demo" datetime="2026-11-11">11 novembre 2026</time>`;
    if (tag === "a") return `<a class="demo" href="#demo" onclick="return false">${safeTitle} →</a>`;
    if (tag === "ul" || tag === "ol") return `<${tag} class="demo"><li>Structure HTML</li><li>Styles CSS</li><li>Résultat final</li></${tag}>`;
    if (tag === "li") return `<ul class="sample-context"><li class="demo">Élément de liste personnalisé</li><li>Deuxième élément</li></ul>`;
    if (tag === "dl") return `<dl class="demo"><dt>HTML</dt><dd>Structure du document</dd><dt>CSS</dt><dd>Présentation visuelle</dd></dl>`;
    if (tag === "dt") return `<dl class="sample-context"><dt class="demo">HTML</dt><dd>Langage de structure</dd></dl>`;
    if (tag === "dd") return `<dl class="sample-context"><dt>HTML</dt><dd class="demo">Langage de structure</dd></dl>`;
    if (tag === "figure") return `<figure class="demo"><img alt="Illustration" src="${svg}"><figcaption>Illustration — ${safeTitle}</figcaption></figure>`;
    if (tag === "figcaption") return `<figure class="sample-context"><img alt="Illustration" src="${svg}"><figcaption class="demo">${safeTitle}</figcaption></figure>`;
    if (tag === "img") return `<img class="demo" alt="Illustration" src="${svg}">`;
    if (tag === "picture") return `<picture class="demo"><img alt="Illustration" src="${svg}"></picture>`;
    if (tag === "video") return `<video class="demo" controls poster="${svg}">Votre navigateur ne prend pas en charge la vidéo.</video>`;
    if (tag === "audio") return `<audio class="demo" controls>Votre navigateur ne prend pas en charge l'audio.</audio>`;
    if (tag === "source") return `<div class="sample-context"><video controls><source class="demo" src="" type="video/mp4"></video><div class="demo">source — ressource vidéo</div></div>`;
    if (tag === "track") return `<div class="sample-context"><video controls><track class="demo" kind="captions" srclang="fr" label="Français"></video><div class="demo">track — piste de sous-titres</div></div>`;
    if (tag === "iframe") return `<iframe class="demo" title="Exemple intégré" srcdoc="&lt;p&gt;Contenu intégré&lt;/p&gt;"></iframe>`;
    if (tag === "canvas") return `<canvas class="demo" width="260" height="100">Zone de dessin</canvas>`;
    if (tag === "form") return `<form class="demo" onsubmit="return false"><label>Adresse e-mail</label><input type="email" placeholder="nom@exemple.com"><button type="submit">Envoyer</button></form>`;
    if (tag === "label") return `<div class="sample-context"><label class="demo" for="field-${index}">Votre adresse e-mail</label><input id="field-${index}" type="email" placeholder="nom@exemple.com"></div>`;
    if (tag === "input") return `<input class="demo" type="text" placeholder="Écrivez quelque chose..." aria-label="Champ de démonstration">`;
    if (tag === "textarea") return `<textarea class="demo" rows="3" placeholder="Écrivez votre message..."></textarea>`;
    if (tag === "button") return `<button class="demo" type="button">${safeTitle} →</button>`;
    if (tag === "select") return `<select class="demo"><option>Choisissez une option</option><option>Option 1</option><option>Option 2</option></select>`;
    if (tag === "option") return `<select class="sample-context"><option>Choisissez une option</option><option class="demo" selected>Option personnalisée</option></select>`;
    if (tag === "optgroup") return `<select class="sample-context"><optgroup class="demo" label="Groupe d'options"><option>Option 1</option><option>Option 2</option></optgroup></select>`;
    if (tag === "fieldset") return `<fieldset class="demo"><legend>Informations</legend><label>Nom</label><input placeholder="Votre nom"></fieldset>`;
    if (tag === "legend") return `<fieldset class="sample-context"><legend class="demo">Informations personnelles</legend><label>Nom</label><input placeholder="Votre nom"></fieldset>`;
    if (tag === "datalist") return `<div class="sample-context"><label for="suggest-${index}">Choisissez un navigateur</label><input id="suggest-${index}" list="choices-${index}" placeholder="Commencez à écrire"><datalist id="choices-${index}" class="demo"><option value="Firefox"><option value="Chrome"><option value="Safari"></datalist><div class="demo">datalist — suggestions : Firefox, Chrome, Safari</div></div>`;
    if (tag === "output") return `<form class="sample-context" onsubmit="return false"><label>Résultat du calcul :</label><output class="demo">42</output></form>`;
    if (tag === "progress") return `<div class="sample-context"><label>Progression du projet</label><progress class="demo" value="68" max="100">68%</progress></div>`;
    if (tag === "meter") return `<div class="sample-context"><label>Niveau de capacité</label><meter class="demo" min="0" max="100" value="72">72%</meter></div>`;
    if (tag === "table") return `<table class="demo"><caption>Suivi des projets</caption><thead><tr><th>Projet</th><th>Statut</th></tr></thead><tbody><tr><td>Site web</td><td>Actif</td></tr><tr><td>Application</td><td>En cours</td></tr></tbody></table>`;
    if (tag === "caption") return `<table class="sample-context"><caption class="demo">Suivi des projets</caption><tbody><tr><td>Site web</td><td>Actif</td></tr></tbody></table>`;
    if (tag === "colgroup") return `<table class="sample-context"><colgroup class="demo"><col><col></colgroup><tbody><tr><td>Projet</td><td>Actif</td></tr></tbody></table>`;
    if (tag === "col") return `<table class="sample-context"><colgroup><col class="demo"><col></colgroup><tbody><tr><td>Projet</td><td>Actif</td></tr></tbody></table>`;
    if (tag === "thead") return `<table class="sample-context"><thead class="demo"><tr><th>Projet</th><th>Statut</th></tr></thead><tbody><tr><td>Site web</td><td>Actif</td></tr></tbody></table>`;
    if (tag === "tbody") return `<table class="sample-context"><thead><tr><th>Projet</th><th>Statut</th></tr></thead><tbody class="demo"><tr><td>Site web</td><td>Actif</td></tr><tr><td>Application</td><td>En cours</td></tr></tbody></table>`;
    if (tag === "tfoot") return `<table class="sample-context"><tbody><tr><td>Site web</td><td>Actif</td></tr></tbody><tfoot class="demo"><tr><td>Total</td><td>2 projets</td></tr></tfoot></table>`;
    if (tag === "tr") return `<table class="sample-context"><tbody><tr class="demo"><td>Site web</td><td>Actif</td></tr><tr><td>Application</td><td>En cours</td></tr></tbody></table>`;
    if (tag === "th") return `<table class="sample-context"><thead><tr><th class="demo">Projet</th><th>Statut</th></tr></thead></table>`;
    if (tag === "td") return `<table class="sample-context"><tbody><tr><td class="demo">Site web</td><td>Actif</td></tr></tbody></table>`;
    if (tag === "details") return `<details class="demo" open><summary>Afficher les détails</summary><p>${safeText}</p></details>`;
    if (tag === "summary") return `<details class="sample-context" open><summary class="demo">Afficher les détails</summary><p>${safeText}</p></details>`;
    if (tag === "dialog") return `<dialog class="demo" open><h3>Fenêtre de dialogue</h3><p>${safeText}</p><button type="button">Fermer</button></dialog>`;

    return `<${tag} class="demo">${safeTitle}</${tag}>`;
}

/* 4. Génération de 60 styles distincts pour chaque balise. */
function getCSS(tag, index, tagIndex) {
    const palette = palettes[(index * 3 + tagIndex * 7) % palettes.length];
    const [accent, dark, soft] = palette;
    const family = Math.floor(index / 10);
    const radius = radiuses[(index + tagIndex * 2) % radiuses.length];
    const shadow = shadows[(index * 3 + tagIndex) % shadows.length];
    const font = fontFamilies[(index + tagIndex) % fontFamilies.length];
    const size = 11 + ((index * 3 + tagIndex) % 11);
    const weight = [400, 500, 600, 700, 800][(index + tagIndex) % 5];
    const paddingY = 6 + ((index * 2 + tagIndex) % 13);
    const paddingX = 8 + ((index * 5 + tagIndex) % 19);
    const borderWidth = 1 + ((index + tagIndex) % 4);
    const borderStyle = ["solid", "dashed", "dotted", "double"][Math.floor(index / 3 + tagIndex) % 4];
    const align = ["left", "center", "right"][Math.floor(index / 2 + tagIndex) % 3];
    const transform = ["none", "none", "uppercase", "capitalize"][Math.floor(index / 4 + tagIndex) % 4];
    const backgrounds = [
        "white", soft, `linear-gradient(135deg, ${soft}, white)`,
        `linear-gradient(120deg, ${accent}, ${dark})`, "transparent", `linear-gradient(90deg, ${soft}, ${accent}22)`
    ];
    const background = backgrounds[(family + tagIndex) % backgrounds.length];
    const foreground = background.includes(dark) && background.includes(accent) ? "#fff" : dark;
    const display = ["inline-block", "block", "inline-flex", "block", "inline-block", "flex"][family];

    let css = `/* Balise <${tag}> — proposition ${String(index + 1).padStart(2,"0")} */
.demo {
    --accent: ${accent};
    --dark: ${dark};
    --soft: ${soft};
    display: ${display};
    max-width: 100%;
    padding: ${paddingY}px ${paddingX}px;
    color: ${foreground};
    background: ${background};
    border: ${borderWidth}px ${borderStyle} ${accent};
    border-radius: ${radius}px;
    box-shadow: ${shadow};
    font-family: ${font};
    font-size: ${size}px;
    font-weight: ${weight};
    line-height: ${[1.25,1.4,1.55,1.7,1.85,1.35][family]};
    letter-spacing: ${((index + tagIndex) % 6) * .25}px;
    text-align: ${align};
    text-transform: ${transform};
    transition: color .2s ease, background .2s ease, transform .2s ease, box-shadow .2s ease;
}
.demo:hover { filter: brightness(.97); }
`;

    if (/^h[1-6]$/.test(tag)) {
        css += `.demo { width: 100%; margin: 0; font-family: ${family % 2 ? "Georgia,serif" : font}; font-size: ${size + 5}px; font-weight: ${weight}; line-height: 1.15; border-left: ${borderWidth + 2}px ${borderStyle} ${accent}; }\n`;
    }
    if (["p","address","figcaption","dd"].includes(tag)) {
        css += `.demo { max-width: 340px; text-align: ${family % 2 ? "justify" : align}; text-indent: ${index % 5 * 4}px; }\n`;
    }
    if (tag === "a") {
        css += `.demo { text-decoration: ${["none","underline","overline","underline dotted","underline wavy","none"][family]}; text-underline-offset: 4px; cursor: pointer; } .demo:hover { color: ${accent}; transform: translateY(-2px); }\n`;
    }
    if (["div","header","nav","main","section","article","aside","footer","figure","form","fieldset","dialog"].includes(tag)) {
        css += `.demo { width: 100%; max-width: 340px; display: flex; flex-direction: column; align-items: ${["stretch","flex-start","center"][family % 3]}; gap: ${8 + index % 10}px; }\n`;
    }
    if (["span","strong","em","b","i","u","small","mark","del","ins","sub","sup","time","code"].includes(tag)) {
        css += `.demo { width: fit-content; font-style: ${tag === "em" || tag === "i" ? "italic" : "normal"}; font-weight: ${tag === "strong" || tag === "b" ? 800 : weight}; }\n`;
    }
    if (["ul","ol","li","dl","dt"].includes(tag)) {
        css += `.demo { width: 100%; max-width: 320px; padding-left: ${tag === "li" || tag === "dt" ? 12 : 25}px; } .demo li { padding: ${5 + index % 8}px; margin-bottom: ${index % 5}px; border-bottom: 1px ${borderStyle} ${soft}; }\n`;
    }
    if (["img","video","iframe","canvas"].includes(tag)) {
        css += `.demo { display: block; width: ${Math.min(100, 55 + (index % 5) * 9)}%; height: ${65 + (index % 4) * 18}px; object-fit: ${["cover","contain","fill"][family % 3]}; }\n`;
    }
    if (tag === "br") {
        css += `.sample-context { display: flex; flex-direction: column; align-items: center; gap: ${index % 8}px; color: ${dark}; font: ${size}px ${font}; } .demo { display: block; width: ${40 + index % 6 * 10}px; height: ${1 + index % 4}px; padding: 0; border: 0; background: ${accent}; }\n`;
    }
    if (tag === "hr") {
        css += `.demo { display: block; width: ${40 + index % 7 * 10}%; height: 0; padding: 0; border: 0; border-top: ${borderWidth}px ${borderStyle} ${accent}; }\n`;
    }
    if (["table","caption","colgroup","col","thead","tbody","tfoot","tr","th","td"].includes(tag)) {
        css += `.sample-context, .demo { border-collapse: ${index % 2 ? "collapse" : "separate"}; border-spacing: ${index % 4}px; } .demo th, .demo td, .sample-context th, .sample-context td { padding: ${5 + index % 9}px; border: 1px ${borderStyle} ${accent}; } .demo th, .sample-context th { color: ${dark}; background: ${soft}; } .demo tr:nth-child(even), .sample-context tr:nth-child(even) { background: ${soft}; }\n`;
    }
    if (["input","textarea","select","option","label","output","progress","meter","datalist"].includes(tag)) {
        css += `.demo, .sample-context input, .sample-context select, .sample-context textarea { width: 100%; max-width: 300px; min-height: 34px; padding: ${7 + index % 7}px; border: ${borderWidth}px ${borderStyle} ${accent}; border-radius: ${radius}px; outline: none; background: ${background === "transparent" ? "white" : background}; } .demo:focus, .sample-context input:focus { outline: 3px solid ${soft}; outline-offset: 2px; }\n`;
    }
    if (tag === "button") {
        css += `.demo { min-width: ${105 + index % 5 * 16}px; cursor: pointer; } .demo:hover { transform: translateY(-3px); filter: brightness(.94); box-shadow: 0 8px 18px #00000020; } .demo:active { transform: scale(.97); }\n`;
    }
    if (["progress","meter"].includes(tag)) {
        css += `.demo { accent-color: ${accent}; height: ${8 + index % 8}px; }\n`;
    }
    if (tag === "details" || tag === "summary") {
        css += `.demo { cursor: pointer; } .demo p { margin-top: 10px; }\n`;
    }
    if (tag === "dialog") {
        css += `.demo { position: relative; inset: auto; margin: auto; }\n`;
    }
    return css;
}

/* 5. Préparation des 60 exemples pour chacune des balises. */
const libraries = allTags.map((tag, tagIndex) => ({
    name: tag,
    title: `Balise <${tag}>`,
    description: elementDescriptions[tag],
    items: Array.from({length: 60}, (_, index) => index + 1),
    tagIndex
}));

const examplesByTag = Object.fromEntries(libraries.map(library => [library.name,
    library.items.map((number, index) => ({
        number,
        tag: library.name,
        name: `${styleFamilies[Math.floor(index / 6) % styleFamilies.length]} — variante ${String(index + 1).padStart(2,"0")}`,
        description: `${elementDescriptions[library.name]} Proposition CSS ${number} sur 60.`,
        html: getTagMarkup(library.name, index),
        css: getCSS(library.name, index, library.tagIndex)
    }))
]));

/* 6. Éléments de la page et recherche dans la bibliothèque de gauche. */
const elementLibrary = document.getElementById("elementLibrary");
const examplesGrid = document.getElementById("examplesGrid");
const elementSearch = document.getElementById("elementSearch");
const exampleSearch = document.getElementById("exampleSearch");
let selectedElement = null;
let activeExample = null;
let activeState = "normal";
let activeCodeMode = "both";

function renderElementLibrary(search = "") {
    const query = search.trim().toLowerCase();
    const groupsHTML = elementGroups.map(group => {
        const matching = group.elements.filter(tag =>
            tag.toLowerCase().includes(query) || elementDescriptions[tag].toLowerCase().includes(query)
        );
        if (!matching.length) return "";
        return `<div class="element-group">
            <div class="element-group-title">${group.title}</div>
            ${matching.map(tag => `<button class="element-btn ${selectedElement === tag ? "active" : ""}" type="button" data-element="${tag}" aria-pressed="${selectedElement === tag}">
                <span>&lt;${tag}&gt;</span><small>60 CSS</small>
            </button>`).join("")}
        </div>`;
    }).join("");

    elementLibrary.innerHTML = groupsHTML || `<div class="element-empty">Aucune balise ne correspond à votre recherche.</div>`;
    elementLibrary.querySelectorAll("[data-element]").forEach(button => {
        button.addEventListener("click", () => selectElement(button.dataset.element));
    });
}

function selectElement(tag) {
    selectedElement = tag;
    activeExample = null;
    exampleSearch.value = "";
    document.getElementById("examplesTitle").textContent = `Exemples CSS pour <${tag}>`;
    document.getElementById("examplesDescription").textContent = `${elementDescriptions[tag]} Découvrez les 60 propositions CSS créées pour cette balise.`;
    document.getElementById("selectedTagLabel").textContent = `<${tag}> sélectionnée`;
    document.getElementById("categoryFilters").innerHTML = `<span class="filter-label">60 propositions CSS pour &lt;${tag}&gt;</span>`;
    renderElementLibrary(elementSearch.value);
    renderExamples();
    closeSidebar();
}

/* 7. Document isolé utilisé par les aperçus iframe. */
function makePreviewDocument(example, state = "normal") {
    const stateCSS = `
body[data-state="hover"] .demo { transform: translateY(-4px); box-shadow: 0 12px 28px #00000025; filter: brightness(.95); }
body[data-state="click"] .demo { transform: scale(.96); filter: brightness(.88); box-shadow: inset 0 3px 8px #00000020; }
body[data-state="focus"] .demo { outline: 3px solid ${palettes[(example.number * 3 + libraries.find(item => item.name === example.tag).tagIndex * 7) % palettes.length][0]}; outline-offset: 5px; }
`;
    return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
*{box-sizing:border-box}html,body{margin:0;min-height:100%}body{min-height:100vh;padding:14px;display:flex;justify-content:center;align-items:center;overflow:auto;background:#f8f7f3;font-family:Arial,sans-serif}.sample-context{max-width:100%;font:12px/1.5 Arial,sans-serif;color:#454b46}.sample-context img{max-width:100%}.sample-context table{width:100%;font-size:10px}.sample-context input{padding:7px;border:1px solid #bbb}.sample-context label{display:block;margin-bottom:5px}.sample-context video{max-width:100%;height:80px}.sample-context iframe{max-width:100%}.demo{box-sizing:border-box}
${example.css}
${stateCSS}
</style></head><body data-state="${state}">${example.html}<script>
document.querySelectorAll('.demo').forEach(element=>element.addEventListener('click',()=>element.classList.toggle('is-clicked')));
<\/script></body></html>`;
}

/* 8. Affichage : une balise sélectionnée = exactement 60 exemples. */
function renderExamples() {
    if (!selectedElement) {
        document.getElementById("resultCount").textContent = "Sélectionnez une balise";
        document.getElementById("emptyState").textContent = "Choisissez une balise HTML dans la bibliothèque à gauche pour afficher ses 60 exemples CSS.";
        document.getElementById("emptyState").style.display = "block";
        examplesGrid.innerHTML = "";
        return;
    }

    const query = exampleSearch.value.trim().toLowerCase();
    const allExamples = examplesByTag[selectedElement];
    const filtered = allExamples.filter(example =>
        example.name.toLowerCase().includes(query) ||
        example.description.toLowerCase().includes(query) ||
        example.css.toLowerCase().includes(query)
    );

    document.getElementById("resultCount").textContent = `${filtered.length} / 60 exemples`;
    document.getElementById("emptyState").style.display = filtered.length ? "none" : "block";
    document.getElementById("emptyState").textContent = "Aucun exemple ne correspond à votre recherche.";

    examplesGrid.innerHTML = filtered.map(example => `<article class="example-card">
        <div class="example-preview">
            <iframe loading="lazy" title="${escapeAttribute(example.name)}" sandbox="allow-scripts" srcdoc="${escapeAttribute(makePreviewDocument(example))}"></iframe>
        </div>
        <div class="example-info">
            <span class="example-type">&lt;${example.tag}&gt;</span>
            <h3>${escapeHTML(example.name)}</h3>
            <p>${escapeHTML(example.description)}</p>
            <div class="example-actions">
                <button class="btn primary" type="button" data-open="${example.number}">Explorer</button>
                <button class="btn" type="button" data-copy="${example.number}">Copier le CSS</button>
            </div>
        </div>
    </article>`).join("");

    examplesGrid.querySelectorAll("[data-open]").forEach(button => {
        button.addEventListener("click", () => {
            const example = allExamples.find(item => item.number === Number(button.dataset.open));
            openExample(example);
        });
    });
    examplesGrid.querySelectorAll("[data-copy]").forEach(button => {
        button.addEventListener("click", async () => {
            const example = allExamples.find(item => item.number === Number(button.dataset.copy));
            await copyText(example.css, button);
        });
    });
}

/* 9. Explorateur : aperçu, états, HTML et CSS. */
const modal = document.getElementById("exampleModal");
function createCombinedCode(example) {
    return `<!-- HTML -->\n${example.html.trim()}\n\n<!-- CSS -->\n<style>\n${example.css.trim()}\n</style>`;
}
function getDisplayedCode() {
    if (!activeExample) return "";
    if (activeCodeMode === "html") return activeExample.html.trim();
    if (activeCodeMode === "css") return activeExample.css.trim();
    return createCombinedCode(activeExample);
}
function updateModal() {
    if (!activeExample) return;
    document.getElementById("previewFrame").srcdoc = makePreviewDocument(activeExample, activeState);
    document.getElementById("codeOutput").textContent = getDisplayedCode();
}
function openExample(example) {
    activeExample = example;
    activeState = "normal";
    activeCodeMode = "both";
    document.getElementById("modalTitle").textContent = `<${example.tag}> — ${example.name}`;
    document.getElementById("modalDescription").textContent = example.description;
    document.querySelectorAll(".state-btn").forEach(button => button.classList.toggle("active", button.dataset.state === "normal"));
    document.querySelectorAll(".code-btn").forEach(button => button.classList.toggle("active", button.dataset.code === "both"));
    modal.classList.add("open");
    updateModal();
}
document.querySelectorAll(".state-btn").forEach(button => button.addEventListener("click", () => {
    activeState = button.dataset.state;
    document.querySelectorAll(".state-btn").forEach(item => item.classList.toggle("active", item === button));
    updateModal();
}));
document.querySelectorAll(".code-btn").forEach(button => button.addEventListener("click", () => {
    activeCodeMode = button.dataset.code;
    document.querySelectorAll(".code-btn").forEach(item => item.classList.toggle("active", item === button));
    updateModal();
}));
function closeModal() {
    modal.classList.remove("open");
    document.getElementById("previewFrame").srcdoc = "";
    activeExample = null;
}
document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });

/* 10. Copie du code avec solution de secours si Clipboard API est indisponible. */
async function copyText(text, button) {
    const original = button.textContent;
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            throw new Error("Clipboard API indisponible");
        }
    } catch (error) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        textarea.remove();
        if (!copied) {
            button.textContent = "Copie impossible";
            setTimeout(() => button.textContent = original, 1500);
            return;
        }
    }
    button.textContent = "Copié !";
    setTimeout(() => button.textContent = original, 1300);
}
document.getElementById("copyCode").addEventListener("click", () => {
    if (activeExample) copyText(getDisplayedCode(), document.getElementById("copyCode"));
});

/* 11. Recherche des balises et des exemples. */
elementSearch.addEventListener("input", event => renderElementLibrary(event.target.value));
exampleSearch.addEventListener("input", renderExamples);

/* 12. Menu latéral sur mobile. Sur ordinateur, la bibliothèque reste fixe à gauche. */
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
function openSidebar() { sidebar.classList.add("open"); sidebarOverlay.classList.add("show"); }
function closeSidebar() { sidebar.classList.remove("open"); sidebarOverlay.classList.remove("show"); }
document.getElementById("menuToggle").addEventListener("click", openSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

/* 13. Initialisation et vérification du nombre d'exemples. */
const totalExamples = libraries.length * 60;
document.getElementById("elementCount").textContent = libraries.length;
document.getElementById("libraryCount").textContent = libraries.length;
document.getElementById("exampleCount").textContent = totalExamples.toLocaleString("fr-FR");
renderElementLibrary();
renderExamples();