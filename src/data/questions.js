export const themes = [
  { id: 'fundamentals', name: 'Fondamentaux & Définitions', icon: 'Book' },
  { id: 'material', name: 'L\'Élément Matériel (Pratique)', icon: 'Globe' },
  { id: 'psychological', name: 'L\'Élément Psychologique (Opinio Juris)', icon: 'Brain' },
  { id: 'jurisprudence', name: 'Jurisprudence de la CIJ', icon: 'Scale' },
  { id: 'doctrine', name: 'Doctrine & Auteurs', icon: 'Users' },
  { id: 'transversal', name: 'Nuances & Questions Transversales', icon: 'Network' }
];

export const questions = [
  // --- THÈME 1: FONDAMENTAUX (20 questions) ---
  {
    id: 1,
    theme: 'fundamentals',
    text: "L'article 38 du Statut de la CIJ définit la coutume comme 'la preuve d'une pratique générale acceptée comme étant le droit'. Quelle critique majeure la doctrine adresse-t-elle à cette formulation ?",
    options: [
      "Elle suggère que la coutume précède la pratique, ce qui est logiquement impossible.",
      "Elle confond la règle de droit avec sa preuve (logique inversée).",
      "Elle ignore le rôle des organisations internationales dans la formation coutumière.",
      "Elle place la coutume au-dessus des traités dans la hiérarchie des sources."
    ],
    correctIndex: 1,
    explanation: "La formulation de l'Art. 38 §1 b) est critiquée car elle inverse l'ordre logique : c'est la pratique acceptée comme le droit qui constitue la coutume, et non la coutume qui prouve la pratique. Comme le dit Daillier-Pellet, c'est une 'maladresse rédactionnelle'."
  },
  {
    id: 2,
    theme: 'fundamentals',
    text: "Le droit international coutumier fait partie du 'droit international général'. Que signifie généralement cette appellation ?",
    options: [
      "Il ne s'applique qu'aux principes humanitaires universels.",
      "Il lie tous les États de la communauté internationale sans exception.",
      "Il s'oppose au droit conventionnel qui est par nature spécialisé.",
      "Il est supérieur aux résolutions du Conseil de sécurité."
    ],
    correctIndex: 1,
    explanation: "Le droit international général désigne les règles s'appliquant à l'ensemble des sujets de droit international de façon automatique, par opposition au droit conventionnel qui ne lie que les parties signataires."
  },
  {
    id: 3,
    theme: 'fundamentals',
    text: "Quelle est la principale caractéristique du mode de formation de la coutume internationale ?",
    options: [
      "Il est écrit et solennel.",
      "Il est spontané et non écrit.",
      "Il nécessite une ratification par 1/3 des États membres de l'ONU.",
      "Il dépend exclusivement de la volonté du juge international."
    ],
    correctIndex: 1,
    explanation: "Contrairement au traité, la coutume est une source non écrite (sauf codification ultérieure) issue de la pratique répétée et de la conviction juridique (Processus décentralisé et spontané)."
  },
  {
    id: 4,
    theme: 'fundamentals',
    text: "Dans la hiérarchie des sources de l'article 38, quelle place occupe la coutume par rapport aux traités ?",
    options: [
      "Elle est inférieure (lex scripta prior).",
      "Elle est supérieure (fondement du droit).",
      "Il n'existe pas de hiérarchie formelle entre les deux.",
      "La coutume ne s'applique que si aucun traité n'existe sur le sujet."
    ],
    correctIndex: 2,
    explanation: "Il n'y a pas de hiérarchie 'organique' entre les sources mentionnées à l'art. 38. Un traité peut modifier une coutume et inversement (principe de l'équivalence des sources)."
  },
  {
    id: 5,
    theme: 'fundamentals',
    text: "Quelle distinction fondamentale Paul Reuter opérait-il entre le traité et la coutume ?",
    options: [
      "Le traité est une norme, la coutume est un fait.",
      "Le traité est une source d'obligations, la coutume une source de droits.",
      "Le traité est un acte juridique, la coutume un processus normatif.",
      "Il considérait que la coutume n'existait que par délégation des traités."
    ],
    correctIndex: 2,
    explanation: "Paul Reuter soulignait que le traité est un acte volontaire et localisé dans le temps, tandis que la coutume est un processus long, diffus et collectif dont on constate l'aboutissement."
  },
  {
    id: 6,
    theme: 'fundamentals',
    text: "Le concept de 'coutume sauvage' (ou spontanée) a été théorisé par quel auteur ?",
    options: [
      "Charles Rousseau",
      "René-Jean Dupuy",
      "Serge Sur",
      "Alain Pellet"
    ],
    correctIndex: 1,
    explanation: "René-Jean Dupuy a théorisé la 'coutume sauvage' pour décrire la formation rapide de règles (ex: plateau continental) sous la pression des besoins économiques ou politiques, par opposition à la coutume 'sage' et lente."
  },
  {
    id: 7,
    theme: 'fundamentals',
    text: "Laquelle de ces sources n'est PAS mentionnée à l'Article 38 du Statut de la CIJ ?",
    options: [
      "Les principes généraux de droit",
      "La doctrine des publicistes les plus qualifiés",
      "Les actes unilatéraux des États",
      "La jurisprudence"
    ],
    correctIndex: 2,
    explanation: "Bien que cruciaux en DIP, les actes unilatéraux des États ne sont pas listés à l'Art. 38, contrairement aux PGD, à la doctrine et à la jurisprudence (moyens auxiliaires)."
  },
  {
    id: 8,
    theme: 'fundamentals',
    text: "La coutume peut-elle être 'particulière' ou 'locale' ?",
    options: [
      "Non, elle est par définition universelle.",
      "Oui, mais seulement si elle est codifiée par un traité régional.",
      "Oui, elle peut lier un cercle restreint d'États (ex: régionale ou bilatérale).",
      "Non, une coutume locale est juridiquement qualifiée d'usage."
    ],
    correctIndex: 2,
    explanation: "La CIJ a reconnu la coutume régionale (Droit d'asile, 1950) et bilatérale (Droit de passage sur territoire indien, 1960). Elle nécessite cependant une preuve plus stricte de l'acceptation par toutes les parties."
  },
  {
    id: 9,
    theme: 'fundamentals',
    text: "Quel terme latin désigne l'élément matériel de la coutume ?",
    options: [
      "Opinio juris",
      "Consuetudo",
      "Jus cogens",
      "Pacta sunt servanda"
    ],
    correctIndex: 1,
    explanation: "La 'consuetudo' désigne la pratique, l'élément matériel. L'opinio juris est l'élément psychologique."
  },
  {
    id: 10,
    theme: 'fundamentals',
    text: "Selon la théorie dominante, le silence d'un État face à une pratique émergente vaut généralement...",
    options: [
      "Opposition (qui ne dit mot refuse).",
      "Acceptation (qui ne dit mot consent).",
      "Nullité de la règle.",
      "Indifférence juridique sans conséquence."
    ],
    correctIndex: 1,
    explanation: "En DIP, l'absence de protestation face à une pratique générale est interprétée comme un acquiescement. C'est le fondement de l'opposabilité de la coutume aux États tiers."
  },
  {
    id: 11,
    theme: 'fundamentals',
    text: "Que signifie l'immuabilité de la coutume dans le temps ?",
    options: [
      "Une coutume ne peut jamais être modifiée une fois cristallisée.",
      "C'est un mythe : elle évolue constamment par la pratique contraire.",
      "Elle n'est immuable que si elle devient du jus cogens.",
      "Elle est immuable pendant 99 ans après sa reconnaissance."
    ],
    correctIndex: 1,
    explanation: "La coutume est de nature évolutive. Une pratique contraire répétée finit par créer une nouvelle coutume qui abroge la précédente (desuetudo)."
  },
  {
    id: 12,
    theme: 'fundamentals',
    text: "L'expression 'jus non scriptum' désigne...",
    options: [
      "Le droit écrit.",
      "Le droit qui n'est pas encore entré en vigueur.",
      "Le droit non écrit (comme la coutume).",
      "La doctrine uniquement."
    ],
    correctIndex: 2,
    explanation: "La coutume est qualifiée de 'jus non scriptum' car elle émane du comportement et de la conviction, et non d'un texte formel original."
  },
  {
    id: 13,
    theme: 'fundamentals',
    text: "Le rapport entre coutume et traité est souvent décrit comme un rapport de...",
    options: [
      "Substitution.",
      "Complémentarité et osmose.",
      "Confrontation systématique.",
      "Subordination du traité à la coutume."
    ],
    correctIndex: 1,
    explanation: "Les deux sources s'influencent mutuellement (cristallisation, codification, interprétation). Un traité peut même être l'origine d'une future coutume."
  },
  {
    id: 14,
    theme: 'fundamentals',
    text: "Qui est le destinataire des règles coutumières ?",
    options: [
      "Seulement les États ayant voté pour la règle à l'ONU.",
      "Tous les sujets de droit international (États, OI, etc.) concernés.",
      "Seulement les membres du Conseil de sécurité.",
      "Les individus directement."
    ],
    correctIndex: 1,
    explanation: "La coutume lie tous les États et, dans certains cas, les organisations internationales, dès lors qu'ils entrent dans son champ d'application (sauf objection persistante)."
  },
  {
    id: 15,
    theme: 'fundamentals',
    text: "Qu'est-ce que la 'cristallisation' d'une coutume ?",
    options: [
      "Le passage de la règle dans un traité de codification.",
      "Le moment où une pratique encore hésitante devient officiellement une règle par une décision de justice.",
      "La fin d'une pratique qui tombe en désuétude.",
      "Le gel d'une pratique qui ne peut plus évoluer."
    ],
    correctIndex: 1,
    explanation: "La cristallisation intervient lorsqu'un acte (souvent un traité de codification ou un arrêt) formalise une coutume qui était en train de se former, achevant d'un coup le processus."
  },
  {
    id: 16,
    theme: 'fundamentals',
    text: "Le principe 'Pacta sunt servanda' est lui-même d'origine...",
    options: [
      "Conventionnelle (Vienne 1969).",
      "Coutumière.",
      "Une invention pure de la doctrine.",
      "N'a pas de valeur juridique, c'est une règle morale."
    ],
    correctIndex: 1,
    explanation: "Bien que codifié dans la Convention de Vienne, le principe selon lequel les traités doivent être respectés est une règle coutumière fondamentale indispensable à l'existence même du DIP."
  },
  {
    id: 17,
    theme: 'fundamentals',
    text: "Dans quel domaine la coutume est-elle encore aujourd'hui la source ultra-dominante ?",
    options: [
      "Le droit de la mer.",
      "Le droit de l'espace.",
      "La responsabilité internationale des États.",
      "Le droit commercial international."
    ],
    correctIndex: 2,
    explanation: "Si le droit de la mer a été largement codifié (Montego Bay), la responsabilité internationale repose encore massivement sur la coutume (les Articles de la CDI n'étant pas un traité)."
  },
  {
    id: 18,
    theme: 'fundamentals',
    text: "L'adage 'consuetudo est optima legum interpres' signifie :",
    options: [
      "La coutume est supérieure à la loi.",
      "La coutume est la meilleure interprète de la loi.",
      "La loi doit toujours être écrite.",
      "L'interprétation appartient au juge."
    ],
    correctIndex: 1,
    explanation: "Cet adage souligne que la pratique effective des États permet souvent d'éclairer le sens réel d'un traité ou d'une règle écrite ambigüe."
  },
  {
    id: 19,
    theme: 'fundamentals',
    text: "Pourquoi dit-on que la coutume est un processus décentralisé ?",
    options: [
      "Parce qu'elle naît dans les régions et non au sommet de l'ONU.",
      "Parce qu'elle ne nécessite pas d'autorité législative supérieure (Parlement mondial).",
      "Parce que chaque État décide de sa propre coutume pour lui-même.",
      "Parce qu'elle n'est appliquée que par les tribunaux nationaux."
    ],
    correctIndex: 1,
    explanation: "Le DIP n'ayant pas de législateur mondial, les États créent le droit eux-mêmes par leurs actions et leurs convictions. Les auteurs sont les destinataires (dédoublement fonctionnel)."
  },
  {
    id: 20,
    theme: 'fundamentals',
    text: "Quel est le risque principal lié à l'absence de support écrit de la coutume ?",
    options: [
      "Sa disparition facile.",
      "L'incertitude sur son contenu et sa portée (problème d'accessibilité).",
      "Son coût de formation élevé.",
      "Son inopposabilité devant la CIJ."
    ],
    correctIndex: 1,
    explanation: "C'est l''insécurité juridique' : il est parfois difficile de prouver avec exactitude quand la règle est née et quelles sont ses limites précises sans texte."
  },

  // --- THÈME 2: PRATIQUE (20 questions) ---
  {
    id: 21,
    theme: 'material',
    text: "Pour constituer une coutume, la pratique doit être 'générale'. Cela signifie-t-il que TOUS les États doivent y participer ?",
    options: [
      "Oui, l'unanimité est requise.",
      "Non, une pratique 'quasi-générale' incluant les États 'particulièrement intéressés' suffit.",
      "Oui, mais seulement les membres de l'ONU.",
      "Non, la pratique des 5 membres permanents du Conseil de sécurité suffit."
    ],
    correctIndex: 1,
    explanation: "Dans l'arrêt Mer du Nord (1969), la CIJ précise qu'une participation très large et représentative suffit, surtout si elle inclut les États directement concernés par la règle."
  },
  {
    id: 22,
    theme: 'material',
    text: "Une simple abstention (omission) peut-elle constituer une pratique au sens coutumier ?",
    options: [
      "Non, seuls les actes positifs comptent.",
      "Oui, si l'abstention est motivée par la conscience d'un devoir d'abstention.",
      "Oui, mais seulement dans le droit de la guerre.",
      "Non, l'abstention est considérée comme un vide juridique."
    ],
    correctIndex: 1,
    explanation: "L'affaire du Lotus (1927) a posé que l'abstention ne vaut pratique que si elle est accompagnée de la conscience qu'on a le devoir de s'abstenir (opinio juris d'abstention)."
  },
  {
    id: 23,
    theme: 'material',
    text: "Quelle condition de la pratique a été 'concrètement assouplie' depuis le milieu du XXe siècle ?",
    options: [
      "La condition d'uniformité.",
      "La condition de généralité.",
      "La condition de durée (ancienneté).",
      "La condition de représentativité."
    ],
    correctIndex: 2,
    explanation: "L'exigence d'une pratique 'immémoriale' a disparu. La CIJ (Mer du Nord, 1969) admet que même sur une période brève, une pratique peut créer une coutume."
  },
  {
    id: 24,
    theme: 'material',
    text: "Que signifie l'exigence d'une pratique 'uniforme' ?",
    options: [
      "Les États doivent agir exactement de la même manière au même moment.",
      "Les comportements doivent être substantiellement cohérents entre eux.",
      "Le droit interne des États doit être identique.",
      "La pratique ne doit jamais être contredite, même par une erreur."
    ],
    correctIndex: 1,
    explanation: "L'uniformité n'est pas une identité absolue. Dans l'affaire Nicaragua (1986), la CIJ dit qu'il suffit que les États agissent de manière 'généralement compatible' avec la règle."
  },
  {
    id: 25,
    theme: 'material',
    text: "Les actes d'un État au sein de son propre territoire (lois, jugements) peuvent-ils être source de pratique internationale ?",
    options: [
      "Non, ce sont des actes de droit interne sans valeur internationale.",
      "Oui, on parle de 'pratique interne' constitutive de coutume internationale.",
      "Uniquement si l'ONU les valide.",
      "Seulement en matière pénale."
    ],
    correctIndex: 1,
    explanation: "Les lois nationales et les décisions des tribunaux internes sont des éléments de preuve majeurs de la pratique et de l'opinio juris d'un État (Conclusion 5 de la CDI 2018)."
  },
  {
    id: 26,
    theme: 'material',
    text: "Si un État agit contrairement à une règle coutumière établie mais justifie son acte comme une exception à cette règle, quel effet cela a-t-il sur la règle ?",
    options: [
      "Cela détruit la règle immédiatement.",
      "Cela confirme la règle (paradoxalement).",
      "Cela crée une nouvelle règle.",
      "Cela suspend l'application de la règle pour 10 ans."
    ],
    correctIndex: 1,
    explanation: "Selon l'arrêt Nicaragua (1986), justifier une violation par une exception confirme l'existence et la validité de la règle générale (Hommage du vice à la vertu)."
  },
  {
    id: 27,
    theme: 'material',
    text: "Dans l'affaire des Pêcheries (1951), pourquoi la pratique de la Norvège était-elle valide ?",
    options: [
      "Parce qu'elle était secrète.",
      "Parce qu'elle était constante, publique et n'avait pas suscité de protestations immédiates.",
      "Parce que la Norvège est un État puissant.",
      "Parce qu'elle avait signé un traité avec le Royaume-Uni."
    ],
    correctIndex: 1,
    explanation: "La Cour a souligné que le système norvégien était appliqué de longue date et sans contestation notable des autres États, validant ainsi son opposabilité."
  },
  {
    id: 28,
    theme: 'material',
    text: "Le 'comportement des agents diplomatiques' d'un État fait partie de :",
    options: [
      "La doctrine.",
      "La pratique internationale de l'État.",
      "Du jus cogens.",
      "Des principes généraux de droit."
    ],
    correctIndex: 1,
    explanation: "Les notes diplomatiques, déclarations en conférence et actions des diplomates sont des expressions directes de la pratique de l'État."
  },
  {
    id: 29,
    theme: 'material',
    text: "Quelle institution a reçu pour mission de favoriser 'le développement progressif du droit international et sa codification' ?",
    options: [
      "La Cour internationale de Justice.",
      "L'Assemblée générale de l'ONU via la Commission du droit international (CDI).",
      "Le Conseil de sécurité.",
      "Le Parlement européen."
    ],
    correctIndex: 1,
    explanation: "C'est la Commission du Droit International (CDI), créée en 1947, qui analyse la pratique pour rédiger des projets de traités ou de conclusions."
  },
  {
    id: 30,
    theme: 'material',
    text: "La pratique des 'Organisations Internationales' peut-elle contribuer à la coutume ?",
    options: [
      "Jamais, seuls les États comptent.",
      "Oui, dans certains domaines comme les traités ou leur fonctionnement interne.",
      "Oui, mais seulement si elles sont basées à New York.",
      "Seulement si elles ont plus de 100 membres."
    ],
    correctIndex: 1,
    explanation: "La CDI reconnaît que dans certains cas, la pratique des OI (négociation de traités, résolutions) contribue aussi à la formation coutumière (Conclusion 4)."
  },
  {
    id: 31,
    theme: 'material',
    text: "Que signifie l'expression 'États particulièrement intéressés' ?",
    options: [
      "Les États qui aiment beaucoup le droit international.",
      "Les États dont les intérêts sont les plus touchés par la règle (ex: États côtiers pour la mer).",
      "Les membres du G20.",
      "Les États ayant un litige devant la Cour."
    ],
    correctIndex: 1,
    explanation: "C'est une notion de l'arrêt Mer du Nord (1969) : l'assentiment d'un État côtier pèse plus lourd dans la formation d'une règle maritime que celui d'un État sans littoral."
  },
  {
    id: 32,
    theme: 'material',
    text: "La répétition est-elle suffisante pour créer une pratique coutumière ?",
    options: [
      "Oui, c'est le seul critère.",
      "Non, elle doit être accompagnée de l'opinio juris (conviction juridique).",
      "Non, elle doit durer au moins 50 ans.",
      "Oui, si elle est faite par les États-Unis."
    ],
    correctIndex: 1,
    explanation: "La répétition seule ne crée qu'un 'usage' ou une 'habitude'. Sans l'élément psychologique, il n'y a pas d'obligation juridique."
  },
  {
    id: 33,
    theme: 'material',
    text: "L'inconstance de la pratique d'un seul État...",
    options: [
      "Empêche la formation de la coutume pour le monde entier.",
      "Affaiblit la preuve de l'existence de la règle à son égard.",
      "Est impossible juridiquement.",
      "Entraîne des sanctions économiques automatiques."
    ],
    correctIndex: 1,
    explanation: "Si un État n'est pas cohérent dans sa pratique, il lui sera difficile de se prévaloir d'une coutume ou de s'y opposer efficacement (Affaire du Droit d'asile)."
  },
  {
    id: 34,
    theme: 'material',
    text: "Le passage d'un satellite au-dessus des États sans protestation a créé une coutume sur la liberté de l'espace en :",
    options: [
      "2 siècles.",
      "10 ans.",
      "Quelques mois/années (Coutume instantanée).",
      "C'est un traité qui l'a créé, pas une coutume."
    ],
    correctIndex: 2,
    explanation: "Le lancement de Spoutnik (1957) a généré une pratique universelle immédiate de liberté de survol, illustrant l'accélération moderne de la formation coutumière."
  },
  {
    id: 35,
    theme: 'material',
    text: "Les 'manuels militaires' sont-ils des preuves de pratique ?",
    options: [
      "Non, ce sont des documents secrets.",
      "Oui, ils reflètent l'instruction donnée aux troupes et donc l'intention de l'État.",
      "Seulement s'ils sont traduits en anglais.",
      "Non, ils ne lient pas les dirigeants."
    ],
    correctIndex: 1,
    explanation: "Les manuels de DIH sont des sources fondamentales pour prouver la coutume en droit des conflits armés (pratique et opinio juris)."
  },
  {
    id: 36,
    theme: 'material',
    text: "La pratique peut-elle être 'négative' ?",
    options: [
      "Non, par définition une pratique est un acte.",
      "Oui, c'est l'abstention motivée.",
      "Seulement si l'État le dit par écrit.",
      "Oui, mais elle n'a aucun poids juridique."
    ],
    correctIndex: 1,
    explanation: "Une pratique négative (ne pas faire quelque chose) est tout aussi riche de sens juridique qu'un acte positif si le rejet est délibéré."
  },
  {
    id: 37,
    theme: 'material',
    text: "Dans le rapport de la CDI (2018), quelle conclusion porte sur la 'Pratique' ?",
    options: [
      "Conclusion 1",
      "Conclusion 4 à 8",
      "Conclusion 15",
      "Conclusion 22"
    ],
    correctIndex: 1,
    explanation: "Les conclusions 4 à 8 détaillent les formes, la généralité et l'analyse de la pratique des États et des OI."
  },
  {
    id: 38,
    theme: 'material',
    text: "Un 'traité' peut-il être une preuve de 'Pratique' ?",
    options: [
      "Non, ce sont deux sources séparées.",
      "Oui, la conclusion d'un traité est un acte étatique constituant une pratique.",
      "Oui, mais seulement les traités de paix.",
      "Non, le traité annule la pratique."
    ],
    correctIndex: 1,
    explanation: "Le fait de signer et ratifier des traités identiques (ex: investissement) peut finir par générer une pratique coutumière au-delà des traités eux-mêmes."
  },
  {
    id: 39,
    theme: 'material',
    text: "Quelle est la 'valeur' d'une pratique d'États puissants ?",
    options: [
      "Elle compte double.",
      "Elle n'a pas plus de valeur juridique que les autres (égalité souveraine).",
      "Elle est la seule qui compte vraiment en pratique.",
      "Elle doit être validée par la CIJ pour exister."
    ],
    correctIndex: 1,
    explanation: "En droit, chaque État compte pour un. En revanche, l'influence politique facilite la 'généralité' d'une pratique initiée par un État puissant."
  },
  {
    id: 40,
    theme: 'material',
    text: "L'uniformité de la pratique exige que les États...",
    options: [
      "Agissent toujours de la même façon.",
      "S'abstiennent de toute critique.",
      "Suivent une ligne directrice claire et non contradictoire.",
      "Signent un communiqué commun."
    ],
    correctIndex: 2,
    explanation: "L'important est la 'constance' : l'État ne doit pas souffler le chaud et le froid sur une même règle sans justification."
  },

  // --- THÈME 3: OPINIO JURIS (20 questions) ---
  {
    id: 41,
    theme: 'psychological',
    text: "L'opinio juris sive necessitatis se traduit littéralement par :",
    options: [
      "L'opinion du juge ou la nécessité.",
      "La conviction du droit ou de la nécessité.",
      "L'opinion juridique des citoyens.",
      "Le droit né de la nécessité."
    ],
    correctIndex: 1,
    explanation: "L'expression souligne que l'État agit car il croit que c'est une 'nécessité' dictée par le 'droit'."
  },
  {
    id: 42,
    theme: 'psychological',
    text: "Pourquoi l'opinio juris est-elle dite 'difficile à prouver' ?",
    options: [
      "Parce qu'elle est secrète.",
      "Parce qu'il s'agit d'un élément subjectif (un état psychologique de l'État).",
      "Parce que les États ne parlent jamais de droit.",
      "Parce que la Cour n'a pas le droit de la demander."
    ],
    correctIndex: 1,
    explanation: "C'est l'intention derrière l'acte. On doit donc la 'déduire' d'indices matériels (déclarations, votes, justifications)."
  },
  {
    id: 43,
    theme: 'psychological',
    text: "Qu'est-ce que la 'comitas gentium' (courtoisie internationale) ?",
    options: [
      "Le droit de la mer.",
      "Des usages suivis par tradition ou politesse, mais sans obligation juridique.",
      "Une secte de diplomates.",
      "Le nom latin de la CIJ."
    ],
    correctIndex: 1,
    explanation: "Exemple: dérouler un tapis rouge pour un chef d'État. C'est une pratique (consuetudo) mais sans opinio juris : l'omettre n'est pas illicite."
  },
  {
    id: 44,
    theme: 'psychological',
    text: "Peut-on déduire l'opinio juris de la pratique elle-même ?",
    options: [
      "Jamais, ce serait une erreur de logique.",
      "Oui, par un raisonnement d'induction (notamment si la pratique est constante).",
      "Non, il faut obligatoirement un document écrit.",
      "Seulement si l'État est une démocratie."
    ],
    correctIndex: 1,
    explanation: "La CIJ procède souvent ainsi : si tous les États agissent de la même manière depuis longtemps, on présume qu'ils pensent y être obligés, sauf preuve du contraire."
  },
  {
    id: 45,
    theme: 'psychological',
    text: "Dans quel arrêt la CIJ a-t-elle insisté sur une preuve RIGOUREUSE de l'opinio juris pour distinguer la coutume de la courtoisie ?",
    options: [
      "Affaire du Plateau continental de la mer du Nord (1969).",
      "Affaire du Détroit de Corfou (1949).",
      "Affaire des Pêcheries (1951).",
      "Affaire des Immunités juridictionnelles (2012)."
    ],
    correctIndex: 0,
    explanation: "La Cour y explique que la fréquence ou le caractère habituel des actes ne suffisent pas ; il faut le sentiment de se conformer à une obligation juridique."
  },
  {
    id: 46,
    theme: 'psychological',
    text: "Quel rôle jouent les 'Résolutions de l'Assemblée générale de l'ONU' pour l'opinio juris ?",
    options: [
      "Elles sont la coutume elle-même.",
      "Elles peuvent être des indices puissants de l'existence d'une conviction collective.",
      "Elles n'ont absolument aucune valeur juridique.",
      "Elles ne valent que pour les États qui n'ont pas d'armée."
    ],
    correctIndex: 1,
    explanation: "L'avis sur la Licéité des armes nucléaires (1996) confirme qu'une série de résolutions peut refléter l'évolution de l'opinio juris, même sans pratique immédiate."
  },
  {
    id: 47,
    theme: 'psychological',
    text: "L'élément psychologique est-il nécessaire pour les 'coutumes locales' ?",
    options: [
      "Non, la pratique suffit.",
      "Oui, et il doit être prouvé entre TOUTES les parties concernées.",
      "Seulement si le juge le décide.",
      "Uniquement en Europe."
    ],
    correctIndex: 1,
    explanation: "Dans l'Affaire du Droit d'asile (1950), la Cour a rejeté la coutume régionale car elle n'était pas prouvée comme acceptée spécifiquement par le Pérou."
  },
  {
    id: 48,
    theme: 'psychological',
    text: "Que se passe-t-il si les déclarations d'un État (opinio juris) contredisent ses actes (pratique) ?",
    options: [
      "L'opinio juris prime toujours.",
      "La pratique prime toujours.",
      "Il n'y a pas de coutume car il y a contradiction.",
      "L'État est exclu de l'ONU."
    ],
    correctIndex: 2,
    explanation: "Dans l'Avis sur les Armes Nucléaires (1996), la Cour a noté que malgré les déclarations d'illicéité, la pratique de la dissuasion empêchait la formation d'une coutume claire."
  },
  {
    id: 49,
    theme: 'psychological',
    text: "La Commission du Droit International parle de l'opinio juris sous quel terme dans ses conclusions de 2018 ?",
    options: [
      "Sentiment de nécessité.",
      "Acceptation comme étant le droit.",
      "Consentement tacite.",
      "Reconnaissance universelle."
    ],
    correctIndex: 1,
    explanation: "La CDI a choisi de coller à la lettre de l'Art. 38 : 'Acceptance as law' (Conclusion 9)."
  },
  {
    id: 50,
    theme: 'psychological',
    text: "Un vote négatif à l'Assemblée générale sur une résolution normative...",
    options: [
      "Est sans importance.",
      "Démontre l'absence d'opinio juris de l'État votant.",
      "Empêche la résolution d'exister.",
      "Vaut démission de l'organisation."
    ],
    correctIndex: 1,
    explanation: "Si un État vote contre, il manifeste clairement son refus de reconnaître le caractère obligatoire de la règle (souvent un pas vers l'objection persistante)."
  },
  {
    id: 51,
    theme: 'psychological',
    text: "Qui a formulé l'idée que l'opinio juris est le 'sentiment d'une norme obligatoire' ?",
    options: [
      "Georges Abi-Saab",
      "Duguit",
      "Kelsen",
      "Charles Rousseau"
    ],
    correctIndex: 3,
    explanation: "Rousseau insistait sur cette 'conscience collective' du caractère obligatoire qui sépare le droit du fait."
  },
  {
    id: 52,
    theme: 'psychological',
    text: "L'opinio juris peut-elle naître AVANT la pratique ?",
    options: [
      "Jamais.",
      "Oui, dans la 'coutume sauvage' où l'idée de droit précède l'action.",
      "Seulement si le Pape le confirme.",
      "Oui, mais seulement pour le droit de l'environnement."
    ],
    correctIndex: 1,
    explanation: "Dans certains cas (Droit de l'espace), la conviction que la liberté est nécessaire s'est imposée avant même que la pratique ne soit généralisée."
  },
  {
    id: 53,
    theme: 'psychological',
    text: "Que signifie 'induction' pour prouver l'opinio juris ?",
    options: [
      "Partir de la règle pour deviner les faits.",
      "Partir des faits observés pour en déduire l'existence de la règle.",
      "Interroger les chefs d'État sous hypnose.",
      "C'est une méthode de torture interdite par la coutume."
    ],
    correctIndex: 1,
    explanation: "L'induction est le processus logique clé en DIP coutumier : observer le comportement général et en induire la conviction juridique sous-jacente."
  },
  {
    id: 54,
    theme: 'psychological',
    text: "Les 'communiqués de presse' officiels d'un gouvernement sont-ils des preuves d'opinio juris ?",
    options: [
      "Oui, s'ils expriment la position juridique de l'État.",
      "Non, c'est de la communication, pas du droit.",
      "Seulement s'ils sont publiés dans Le Monde.",
      "Oui, mais ils n'ont qu'une valeur indicative faible."
    ],
    correctIndex: 0,
    explanation: "Toute déclaration officielle émanant de personnes pouvant engager l'État est une preuve potentielle d'opinio juris."
  },
  {
    id: 55,
    theme: 'psychological',
    text: "Que signifie le mot 'sive' dans l'adage 'opinio juris sive necessitatis' ?",
    options: [
      "Sans",
      "Ou",
      "Avec",
      "Contre"
    ],
    correctIndex: 1,
    explanation: "C'est un 'ou' inclusif : la conviction du droit ou (ce qui revient au même) de la nécessité juridique."
  },
  {
    id: 56,
    theme: 'psychological',
    text: "Sans opinio juris, le droit international serait réduit à...",
    options: [
      "Rien du tout.",
      "Un ensemble de traités uniquement.",
      "Une simple courtoisie ou des rapports de force sans légitimité.",
      "Une théocratie."
    ],
    correctIndex: 2,
    explanation: "C'est l'opinio juris qui donne sa 'moralité juridisée' et sa stabilité au système."
  },
  {
    id: 57,
    theme: 'psychological',
    text: "Dans l'affaire du Lotus, la France soutenait qu'une pratique d'abstention créait une coutume. Pourquoi a-t-elle échoué ?",
    options: [
      "Parce que la pratique n'était pas assez longue.",
      "Parce qu'elle n'a pas pu prouver que les États s'abstenaient par 'conscience d'un devoir'.",
      "Parce que la Turquie était plus forte.",
      "Parce que le traité de Lausanne l'interdisait."
    ],
    correctIndex: 1,
    explanation: "La Cour a dit : l'abstention ne compte que si l'on prouve l'existence d'une conviction d'obligation de ne pas agir."
  },
  {
    id: 58,
    theme: 'psychological',
    text: "La doctrine de 'l'opinio juris instantanée' est liée à :",
    options: [
      "Bin Cheng",
      "Alain Pellet",
      "Grotius",
      "Jean Combacau"
    ],
    correctIndex: 0,
    explanation: "Bin Cheng a proposé que l'opinio juris pourrait suffire à créer du droit presque sans pratique dans des situations d'urgence ou de consensus total (ex: espace)."
  },
  {
    id: 59,
    theme: 'psychological',
    text: "L'opinio juris est-elle la même chose que le 'consentement' ?",
    options: [
      "Oui, exactement.",
      "Non, le consentement est un acte de volonté ; l'opinio juris est un constat de nécessité juridique.",
      "Le consentement ne vaut que pour les traités.",
      "L'opinio juris est un consentement forcé."
    ],
    correctIndex: 1,
    explanation: "Nuance subtile de Combacau : on consent à un traité, on 'reconnaît' une coutume."
  },
  {
    id: 60,
    theme: 'psychological',
    text: "Le 'jus cogens' nécessite-t-il une opinio juris spécifique ?",
    options: [
      "Non.",
      "Oui, l'opinio juris doit porter sur l'impossibilité de déroger à la règle.",
      "Non, c'est le droit divin.",
      "Oui, elle doit être validée par le Pape."
    ],
    correctIndex: 1,
    explanation: "Pour le jus cogens, il faut une 'opinio juris cogentis' : la conviction que non seulement la règle existe, mais qu'on ne peut pas y déroger."
  },
  
  // --- THÈME 4: JURISPRUDENCE (20 questions) ---
  {
    id: 61,
    theme: 'jurisprudence',
    text: "Quel arrêt est considéré comme la 'Bible' pour l'explication des deux éléments de la coutume ?",
    options: [
      "Nicaragua (1986)",
      "Plateau continental de la mer du Nord (1969)",
      "Lotus (1927)",
      "Droit d'asile (1950)"
    ],
    correctIndex: 1,
    explanation: "Le 'Mer du Nord' est l'arrêt où la Cour définit de la manière la plus complète et technique la pratique et l'opinio juris."
  },
  {
    id: 62,
    theme: 'jurisprudence',
    text: "Dans l'affaire du Nicaragua (1986), qu'a décidé la Cour concernant le rapport entre coutume et traité ?",
    options: [
      "Le traité remplace la coutume.",
      "La coutume continue d'exister parallèlement au traité, même si elles ont le même contenu.",
      "La coutume est supérieure au traité.",
      "La Cour n'est pas compétente pour la coutume."
    ],
    correctIndex: 1,
    explanation: "C'est l'indépendance des sources : une règle peut être à la fois dans un traité et dans la coutume. Si le traité devient inapplicable, la coutume survit."
  },
  {
    id: 63,
    theme: 'jurisprudence',
    text: "Quelle contribution majeure l'affaire des Pêcheries (1951) a-t-elle apportée ?",
    options: [
      "L'interdiction de la pêche au filet.",
      "La consécration de la théorie de l'objecteur persistant.",
      "La définition de la zone économique exclusive.",
      "Le rôle de la doctrine."
    ],
    correctIndex: 1,
    explanation: "La Cour a reconnu que si un État s'oppose dès le début à une règle (Norvège), elle ne lui est pas opposable."
  },
  {
    id: 64,
    theme: 'jurisprudence',
    text: "Dans l'affaire du Droit de Passage (1960), quel type de coutume a été reconnu ?",
    options: [
      "La coutume bilatérale (entre 2 États).",
      "La coutume universelle.",
      "La coutume de l'espace.",
      "L'absence de coutume."
    ],
    correctIndex: 0,
    explanation: "La Cour a admis qu'une longue pratique de passage entre l'Inde et le Portugal avait créé une coutume liant spécifiquement ces deux-là."
  },
  {
    id: 65,
    theme: 'jurisprudence',
    text: "L'affaire du Détroit de Corfou (1949) traite principalement de :",
    options: [
      "L'immunité des navires.",
      "L'obligation de notifier l'existence de mines et le droit de passage inoffensif.",
      "Le droit de pêche.",
      "La pollution des eaux."
    ],
    correctIndex: 1,
    explanation: "C'est un arrêt fondateur sur les 'considérations élémentaires d'humanité' et le passage inoffensif dans les détroits."
  },
  {
    id: 66,
    theme: 'jurisprudence',
    text: "Dans l'avis sur la Licéité des Armes Nucléaires (1996), pourquoi la Cour n'a-t-elle pas trouvé de coutume d'interdiction ?",
    options: [
      "Parce que personne ne les a utilisées.",
      "Parce que l'opinio juris était divisée entre partisans de l'interdiction et partisans de la dissuasion.",
      "Parce que les traités ne le disaient pas.",
      "Parce qu'elle n'avait pas le droit de juger."
    ],
    correctIndex: 1,
    explanation: "La Cour a constaté une 'tension' entre une opinio juris naissante (résolutions) et une pratique contraire persistante (dissuasion)."
  },
  {
    id: 67,
    theme: 'jurisprudence',
    text: "L'affaire des Immunités Juridictionnelles (2012) opposait quels pays ?",
    options: [
      "France c. Italie",
      "Allemagne c. Italie",
      "États-Unis c. Iran",
      "Royaume-Uni c. Norvège"
    ],
    correctIndex: 1,
    explanation: "L'Allemagne reprochait à l'Italie de violer ses immunités en jugeant des crimes de guerre nazis. La Cour a confirmé la coutume des immunités."
  },
  {
    id: 68,
    theme: 'jurisprudence',
    text: "Qu'a dit la Cour dans l'affaire du Droit d'asile (1950) sur la coutume régionale ?",
    options: [
      "Elle est interdite.",
      "Elle doit être prouvée comme étant appliquée de manière constante par TOUTES les parties au litige.",
      "Elle ne s'applique qu'en Amérique latine.",
      "Elle est supérieure à l'ONU."
    ],
    correctIndex: 1,
    explanation: "La Cour exige une preuve très stricte pour les coutumes non universelles : l'adhésion spécifique de l'État auquel on l'oppose est requise."
  },
  {
    id: 69,
    theme: 'jurisprudence',
    text: "L'affaire du Lotus est célèbre pour son principe selon lequel :",
    options: [
      "Tout ce qui n'est pas interdit est permis aux États.",
      "La coutume est plus forte que le traité.",
      "L'ONU décide de tout.",
      "Les navires sont des territoires flottants."
    ],
    correctIndex: 0,
    explanation: "Le 'principe Lotus' : les restrictions à l'indépendance des États ne se présument pas. C'est la vision classique souverainiste."
  },
  {
    id: 70,
    theme: 'jurisprudence',
    text: "Quel juge a rédigé une opinion dissidente célèbre dans l'affaire Mer du Nord (1969) ?",
    options: [
      "Juge Lachs",
      "Juge Tanaka",
      "Juge Sorensen",
      "Juge Bedjaoui"
    ],
    correctIndex: 1,
    explanation: "Le juge Tanaka y a défendu une vision plus dynamique et moins formaliste de la formation de la coutume."
  },
  {
    id: 71,
    theme: 'jurisprudence',
    text: "Dans l'affaire du Nicaragua, quelle résolution de l'AG est citée comme preuve d'opinio juris ?",
    options: [
      "Résolution 1514 (décolonisation)",
      "Résolution 2625 (relations amicales)",
      "Résolution 3314 (définition agression)",
      "La Déclaration Universelle des Droits de l'Homme"
    ],
    correctIndex: 1,
    explanation: "La Résolution 2625 (XXV) de 1970 est considérée par la Cour comme le reflet fidèle de la coutume sur la non-intervention."
  },
  {
    id: 72,
    theme: 'jurisprudence',
    text: "Que concernait l'Affaire des Essais Nucléaires (1974) ?",
    options: [
      "La formation d'une coutume sur l'environnement.",
      "La valeur juridique des promesses unilatérales (déclarations de la France).",
      "L'interdiction de la bombe.",
      "Le droit de la mer."
    ],
    correctIndex: 1,
    explanation: "Bien que proche du sujet, elle a surtout établi qu'une déclaration unilatérale peut lier un État s'il en a l'intention publique (principe de bonne foi)."
  },
  {
    id: 73,
    theme: 'jurisprudence',
    text: "L'affaire du Mandat d'arrêt du 11 avril 2000 concernait :",
    options: [
      "L'immunité coutumière des ministres des Affaires étrangères.",
      "L'extradition d'un terroriste.",
      "Le droit de la mer.",
      "Le jus cogens."
    ],
    correctIndex: 0,
    explanation: "La Cour a confirmé l'existence d'une coutume accordant une immunité pénale totale aux ministres en exercice, même pour crimes de guerre."
  },
  {
    id: 74,
    theme: 'jurisprudence',
    text: "Dans l'affaire du Plateau Continental (Libye c. Malte, 1985), la Cour a affirmé que :",
    options: [
      "La substance de la coutume se trouve dans la pratique et l'opinio juris.",
      "Le traité l'emporte sur la distance géographique.",
      "Seules les îles comptent.",
      "Elle n'avait pas besoin de preuves."
    ],
    correctIndex: 0,
    explanation: "La Cour a réitéré que la recherche de la coutume est indispensable même quand il y a des principes juridiques généraux."
  },
  {
    id: 75,
    theme: 'jurisprudence',
    text: "L'affaire Barcelona Traction (1970) est connue pour avoir défini :",
    options: [
      "La protection des actionnaires.",
      "Les obligations erga omnes (envers tous).",
      "Le droit de veto.",
      "La coutume bilatérale."
    ],
    correctIndex: 1,
    explanation: "Elle distingue les obligations envers un État et celles envers la communauté internationale dans son ensemble (ex: génocide, esclavage)."
  },
  {
    id: 76,
    theme: 'jurisprudence',
    text: "L'arrêt de la Cour de cassation française dans l'affaire 'Kadafi' (2001)...",
    options: [
      "Reflète la coutume internationale sur l'immunité des chefs d'État en exercice.",
      "Refuse d'appliquer le droit international.",
      "Condamne le colonel Kadafi.",
      "Est supérieur à la CIJ."
    ],
    correctIndex: 0,
    explanation: "C'est un exemple de 'pratique nationale' (judiciaire) confirmant une règle de droit international coutumier."
  },
  {
    id: 77,
    theme: 'jurisprudence',
    text: "Dans l'Affaire Diallo (2010), la CIJ s'est appuyée sur :",
    options: [
      "La jurisprudence d'autres cours (comme la CEDH) pour identifier la coutume.",
      "Uniquement ses propres arrêts.",
      "Uniquement les traités signés par la Guinée.",
      "La doctrine de Pellet uniquement."
    ],
    correctIndex: 0,
    explanation: "Preuve de l'ouverture de la Cour : elle utilise la pratique judiciaire mondiale pour identifier des standards coutumiers de droits de l'homme."
  },
  {
    id: 78,
    theme: 'jurisprudence',
    text: "L'Avis sur la Namibie (1971) a précisé qu'une 'abstention lors d'un vote au Conseil de sécurité' :",
    options: [
      "Vaut veto.",
      "N'empêche pas l'adoption si la pratique l'admet.",
      "Est interdite par la Charte.",
      "C'est une coutume sauvage."
    ],
    correctIndex: 1,
    explanation: "C'est une 'coutume constitutionnelle' au sein de l'ONU qui a modifié l'interprétation littérale de la Charte par la pratique constante."
  },
  {
    id: 79,
    theme: 'jurisprudence',
    text: "L'affaire de la Frontier Dispute (Burkina Faso c. Mali) consacre le principe du :",
    options: [
      "Droit des peuples.",
      "Uti possidetis juris (respect des frontières coloniales).",
      "Droit de conquête.",
      "Droit du plus fort."
    ],
    correctIndex: 1,
    explanation: "La Cour a qualifié ce principe de 'règle générale' coutumière, indispensable à la stabilité de la paix."
  },
  {
    id: 80,
    theme: 'jurisprudence',
    text: "Le Tribunal de Nuremberg a jugé que les Conventions de La Haye (guerre) étaient devenues :",
    options: [
      "Coutumières, liant même les non-signataires (comme l'Allemagne).",
      "Caduques.",
      "Inapplicables.",
      "Uniques à l'Allemagne."
    ],
    correctIndex: 0,
    explanation: "C'est un exemple de règles conventionnelles qui s'étendent par la coutume à tous les États (universalisation)."
  },

  // --- THÈME 5: DOCTRINE (20 questions) ---
  {
    id: 81,
    theme: 'doctrine',
    text: "L'expression 'Dédoublement fonctionnel' a été créée par quel auteur ?",
    options: [
      "Georges Scelle",
      "Hans Kelsen",
      "Serge Sur",
      "Alain Pellet"
    ],
    correctIndex: 0,
    explanation: "Scelle explique que l'État agit alternativement comme sujet (soumis à la coutume) et comme législateur (créateur de la coutume)."
  },
  {
    id: 82,
    theme: 'doctrine',
    text: "Quelle est la thèse de Jean Combacau sur la formation de la coutume ?",
    options: [
      "C'est un contrat secret.",
      "C'est un 'processus de formation' et non un 'acte juridique'.",
      "Elle n'existe pas, c'est un mythe.",
      "Elle est supérieure à l'ONU."
    ],
    correctIndex: 1,
    explanation: "Combacau distingue l'acte (volonté) du processus (accumulation de faits) pour expliquer la nature unique de la coutume."
  },
  {
    id: 83,
    theme: 'doctrine',
    text: "Alain Pellet, ancien président de la CDI, insiste sur :",
    options: [
      "La disparition totale de la coutume au profit des traités.",
      "Le fait que la généralité n'est pas arithmétique mais 'représentative'.",
      "Le rôle de la religion dans la coutume.",
      "L'inutilité de l'opinio juris."
    ],
    correctIndex: 1,
    explanation: "Pellet souligne que la qualité (poids des États) importe plus que le nombre brut pour former une coutume."
  },
  {
    id: 84,
    theme: 'doctrine',
    text: "Pour Georges Abi-Saab, l'opinio juris est :",
    options: [
      "Un pur mensonge.",
      "L'élément moteur qui donne une direction à la pratique.",
      "Une règle accessoire.",
      "Une invention de la CIJ."
    ],
    correctIndex: 1,
    explanation: "Il voit l'opinio juris comme le vecteur qui transforme le chaos des faits en un ordre juridique cohérent."
  },
  {
    id: 85,
    theme: 'doctrine',
    text: "Qui est l'auteur du manuel 'Droit International Public' (LGDJ) de référence (le triptyque) ?",
    options: [
      "Nguyen Quoc Dinh, Daillier et Pellet",
      "Combacau et Sur",
      "Carreau et Marrella",
      "Rousseau et Reuter"
    ],
    correctIndex: 0,
    explanation: "C'est l'ouvrage de référence classique en langue française, souvent appelé le 'Daillier-Pellet'."
  },
  {
    id: 86,
    theme: 'doctrine',
    text: "Le 'volontarisme' (doctrine qui fonde tout sur la volonté des États) est porté historiquement par :",
    options: [
      "Anzilotti",
      "Duguit",
      "Pellet",
      "Abi-Saab"
    ],
    correctIndex: 0,
    explanation: "Anzilotti est l'un des pères du positivisme volontariste, voyant la coutume comme un 'accord tacite'."
  },
  {
    id: 87,
    theme: 'doctrine',
    text: "L''objectivisme' (le droit s'impose par nécessité sociale) est porté par :",
    options: [
      "Georges Scelle",
      "Hans Kelsen",
      "Vattel",
      "Jean Bodin"
    ],
    correctIndex: 0,
    explanation: "Scelle s'oppose au volontarisme en disant que les faits sociaux créent le droit, même si les États ne le veulent pas explicitement."
  },
  {
    id: 88,
    theme: 'doctrine',
    text: "Serge Sur décrit la coutume comme une source :",
    options: [
      "En déclin total.",
      "Subsidiaire.",
      "Irréductible et garante de l'unité du système international.",
      "Inexistante."
    ],
    correctIndex: 2,
    explanation: "Sur souligne que même avec 100 000 traités, la coutume reste le 'ciment' indispensable de l'ordre international."
  },
  {
    id: 89,
    theme: 'doctrine',
    text: "Que pense Charles Rousseau du rôle de la durée dans la coutume ?",
    options: [
      "Il restait très attaché à la tradition du 'temps long'.",
      "Il a inventé la coutume instantanée.",
      "Il pensait que 10 ans suffisaient.",
      "Il n'en a jamais parlé."
    ],
    correctIndex: 0,
    explanation: "Auteur classique, Rousseau était prudent face à l'accélération du droit et privilégiait la stabilité du 'temps long'."
  },
  {
    id: 90,
    theme: 'doctrine',
    text: "Le concept de 'Nouveaux États' (ex-colonies) contestant la coutume ancienne a été analysé par :",
    options: [
      "Mohammed Bedjaoui",
      "Paul Reuter",
      "René Cassin",
      "Jean Monnet"
    ],
    correctIndex: 0,
    explanation: "Bedjaoui a dénoncé le caractère 'colonial' de certaines coutumes établies sans les États du tiers-monde."
  },
  {
    id: 91,
    theme: 'doctrine',
    text: "Quel auteur a parlé de 'l'équivalence des sources' ?",
    options: [
      "Kelsen",
      "Pellet",
      "Combacau",
      "Bindschedler"
    ],
    correctIndex: 2,
    explanation: "Combacau insiste sur le fait que la coutume n'est ni au-dessus ni au-dessous du traité (pas de hiérarchie)."
  },
  {
    id: 92,
    theme: 'doctrine',
    text: "Laquelle de ces affirmations est attribuée à Daillier-Pellet concernant l'article 38 ?",
    options: [
      "Elle est parfaite.",
      "Elle est maladroite car elle confond la règle et sa preuve.",
      "Elle doit être supprimée.",
      "Elle est d'inspiration divine."
    ],
    correctIndex: 1,
    explanation: "C'est leur critique célèbre sur la rédaction 'logiquement défectueuse' de l'article."
  },
  {
    id: 93,
    theme: 'doctrine',
    text: "Paul Reuter voyait la codification de la coutume comme...",
    options: [
      "Une mort de la coutume.",
      "Une clarification qui ne supprime pas la règle coutumière sous-jacente.",
      "Un processus impossible.",
      "Uniquement une affaire politique."
    ],
    correctIndex: 1,
    explanation: "Pour Reuter, la coutume survit parallèlement au traité (identique à la position de la CIJ dans Nicaragua)."
  },
  {
    id: 94,
    theme: 'doctrine',
    text: "Le 'jus cogens' est souvent présenté comme le stade ultime d'une :",
    options: [
      "Loi nationale.",
      "Coutume universelle devenue impérative.",
      "Déclaration de presse.",
      "Invention de l'OTAN."
    ],
    correctIndex: 1,
    explanation: "La majorité de la doctrine voit le jus cogens comme une coutume ayant acquis une opinio juris supérieure interdisant toute dérogation."
  },
  {
    id: 95,
    theme: 'doctrine',
    text: "Qui a dit 'La coutume est la source la plus importante du droit des gens' ?",
    options: [
      "Kelsen",
      "Triepel",
      "Anzilotti",
      "Vattel"
    ],
    correctIndex: 0,
    explanation: "Kelsen, malgré son amour pour la hiérarchie des normes, reconnaissait que la coutume était le fondement de la validité de tout le système (Grundnorm)."
  },
  {
    id: 96,
    theme: 'doctrine',
    text: "L'adage 'Ex injuria jus non oritur' (du tort ne naît pas le droit) s'oppose-t-il à la coutume ?",
    options: [
      "Non, car la coutume naît d'une pratique licite.",
      "Oui, il empêche qu'une violation devienne une règle, sauf si tout le monde l'accepte.",
      "Il n'a aucun lien.",
      "C'est un adage de droit pénal uniquement."
    ],
    correctIndex: 1,
    explanation: "C'est un débat doctoral : comment une violation d'une vieille règle peut-elle devenir une nouvelle règle sans être illicite au début ?"
  },
  {
    id: 97,
    theme: 'doctrine',
    text: "Pour Dominique Carreau, le juge international est :",
    options: [
      "Le créateur de la coutume.",
      "Le simple révélateur d'une coutume préexistante.",
      "Un spectateur inutile.",
      "Un agent du gouvernement mondial."
    ],
    correctIndex: 1,
    explanation: "Carreau suit la ligne classique : le juge ne 'crée' pas, il 'déstate' (déclare) l'existence de la règle."
  },
  {
    id: 98,
    theme: 'doctrine',
    text: "Le 'Rapport de 2018 de la CDI' est-il de la doctrine ?",
    options: [
      "Non, c'est un traité.",
      "Oui, c'est une 'doctrine officielle' ou institutionnelle très influente.",
      "C'est un roman.",
      "C'est une loi mondiale."
    ],
    correctIndex: 1,
    explanation: "Les travaux de la CDI sont qualifiés de 'doctrine institutionnelle' et sont souvent suivis par la CIJ."
  },
  {
    id: 99,
    theme: 'doctrine',
    text: "La distinction entre 'hard law' et 'soft law' est cruciale pour :",
    options: [
      "Éviter de confondre les résolutions et la coutume.",
      "Savoir qui a gagné la guerre.",
      "Mesurer le poids des États.",
      "Aucune de ces réponses."
    ],
    correctIndex: 0,
    explanation: "La soft law (ex: résolutions) n'est pas une source formelle de droit (hard law) mais un catalyseur pour la coutume."
  },
  {
    id: 100,
    theme: 'doctrine',
    text: "L'adage 'Consuetudo est servanda' est proposé par certains comme :",
    options: [
      "La règle de base (norme hypothétique) fondant la coutume.",
      "Une insulte juridique.",
      "Une règle de politesse.",
      "Un traité romain."
    ],
    correctIndex: 0,
    explanation: "Par analogie avec Pacta sunt servanda, l'idée est qu'il existe une règle invisible disant : 'On doit respecter la coutume'."
  },

  // --- THÈME 6: NUANCES & TRANSVERSAL (20 questions) ---
  {
    id: 101,
    theme: 'transversal',
    text: "Qu'est-ce qu'un 'Objecteur Persistant' ?",
    options: [
      "Un État qui fait toujours grève à l'ONU.",
      "Un État qui s'est opposé de manière claire et constante à une règle coutumière depuis sa formation.",
      "Un juge qui refuse de voter.",
      "Un pays qui n'a pas d'armée."
    ],
    correctIndex: 1,
    explanation: "Confirmé par la CDI (2018), cet État échappe à l'application de la règle, à condition que son opposition soit maintenue sans faille."
  },
  {
    id: 102,
    theme: 'transversal',
    text: "Le 'Jus Cogens' est-il opposable à un objecteur persistant ?",
    options: [
      "Oui, car c'est une norme impérative supérieure à laquelle personne ne peut déroger.",
      "Non, l'objection persiste même face au jus cogens.",
      "Seulement si l'État l'accepte finalement.",
      "La question est encore débattue mais la tendance est à l'application forcée."
    ],
    correctIndex: 0,
    explanation: "La majorité des auteurs et la CDI estiment que le caractère impératif du Jus Cogens l'emporte sur toute objection individuelle."
  },
  {
    id: 103,
    theme: 'transversal',
    text: "Laquelle de ces normes est universellement reconnue comme du Jus Cogens coutumier ?",
    options: [
      "L'interdiction de l'usage de la force.",
      "Le droit de vote des femmes.",
      "Le droit de propriété privée.",
      "La liberté de commerce."
    ],
    correctIndex: 0,
    explanation: "L'interdiction du génocide, de la torture, de l'esclavage et de l'agression (force) sont les exemples classiques de jus cogens."
  },
  {
    id: 104,
    theme: 'transversal',
    text: "Une coutume peut-elle être 'abrogée' ?",
    options: [
      "Non, elle est éternelle.",
      "Oui, par une autre coutume contraire ou par un traité universel.",
      "Seulement par le Pape.",
      "Uniquement si l'ONU disparaît."
    ],
    correctIndex: 1,
    explanation: "C'est la 'désuétude' ou l'apparition d'une nouvelle règle (lex posterior) ou d'une règle spéciale (lex specialis)."
  },
  {
    id: 105,
    theme: 'transversal',
    text: "Quelle est la différence entre 'Codification' et 'Développement progressif' ?",
    options: [
      "Aucune.",
      "Codification = écrire ce qui existe ; Développement = créer de nouvelles règles.",
      "C'est l'inverse.",
      "L'un est pour la mer, l'autre pour la terre."
    ],
    correctIndex: 1,
    explanation: "La CDI a une double mission : fixer le droit actuel (codification) et proposer des améliorations (développement)."
  },
  {
    id: 106,
    theme: 'transversal',
    text: "La 'coutume sauvage' s'oppose à la 'coutume sage'. Pourquoi ?",
    options: [
      "La sauvage est violente.",
      "La sage est lente et traditionnelle ; la sauvage est rapide et politique.",
      "C'est une question de traduction.",
      "L'une est pour les pays développés, l'autre pour le tiers-monde."
    ],
    correctIndex: 1,
    explanation: "Terme de René-Jean Dupuy pour montrer comment les besoins économiques (ex: pétrole offshore) forcent le droit à naître très vite."
  },
  {
    id: 107,
    theme: 'transversal',
    text: "Le principe de 'bonne foi' dans les rapports internationaux est d'origine...",
    options: [
      "Uniquement conventionnelle.",
      "Coutumière et fondamentale (PGD).",
      "Une règle de courtoisie sans valeur.",
      "Inventée en 1945."
    ],
    correctIndex: 1,
    explanation: "La bonne foi est le socle de toute la vie juridique internationale. Sans elle, aucune coutume ne tiendrait."
  },
  {
    id: 108,
    theme: 'transversal',
    text: "Quelle est la valeur des 'conclusions de la CDI' pour un étudiant en droit ?",
    options: [
      "C'est la loi.",
      "Ce sont des guides méthodologiques essentiels pour identifier le droit.",
      "Ce sont des avis sans importance.",
      "Elles ne servent qu'à caler les bureaux de l'ONU."
    ],
    correctIndex: 1,
    explanation: "Le rapport de 2018 est le texte le plus moderne et complet sur 'comment identifier la coutume'."
  },
  {
    id: 109,
    theme: 'transversal',
    text: "Que se passe-t-il si un traité de codification échoue à être ratifié ?",
    options: [
      "Le droit qu'il contenait disparaît.",
      "Les règles coutumières qu'il recensait continuent de s'appliquer.",
      "Il devient une recommandation secrète.",
      "Le monde entier est en guerre."
    ],
    correctIndex: 1,
    explanation: "C'est l'exemple de la Convention sur les missions spéciales : même non ratifiée, elle sert de base car elle reflète la coutume."
  },
  {
    id: 110,
    theme: 'transversal',
    text: "La 'Coutume régionale' se rencontre surtout en :",
    options: [
      "Europe.",
      "Amérique latine (ex: droit d'asile, uti possidetis).",
      "Asie.",
      "Antarctique."
    ],
    correctIndex: 1,
    explanation: "L'Amérique latine est le berceau historique de nombreuses coutumes régionales reconnues précocement."
  },
  {
    id: 111,
    theme: 'transversal',
    text: "Peut-on dire 'La coutume est plus démocratique que le traité' ?",
    options: [
      "Oui, car elle vient de la base.",
      "Non, car elle est floue et souvent imposée par les puissants.",
      "C'est un débat doctrinal sans réponse binaire.",
      "Non, le traité est le seul outil démocratique."
    ],
    correctIndex: 2,
    explanation: "C'est un grand débat : certains y voient l'expression du peuple, d'autres un outil de domination par le 'fait accompli'."
  },
  {
    id: 112,
    theme: 'transversal',
    text: "Le 'Droit international du développement' repose beaucoup sur :",
    options: [
      "Des coutumes nées de résolutions de l'ONU (soft law).",
      "Des ordres militaires.",
      "Le droit de la mer.",
      "L'accord des USA uniquement."
    ],
    correctIndex: 0,
    explanation: "De nombreuses normes sur le développement ont commencé par des résolutions de l'Assemblée générale."
  },
  {
    id: 113,
    theme: 'transversal',
    text: "Le silence d'un petit État face à une coutume initiée par les grands est souvent interprété comme :",
    options: [
      "Opposition héroïque.",
      "Aquiescement (consentement tacite).",
      "Il n'est pas pris en compte.",
      "Une erreur diplomatique."
    ],
    correctIndex: 1,
    explanation: "C'est le poids du silence en DIP : si vous ne protestez pas, vous êtes lié."
  },
  {
    id: 114,
    theme: 'transversal',
    text: "L'article 38 §1 c) (PGD) se distingue de la coutume (b) car :",
    options: [
      "La coutume est internationale, les PGD viennent des droits internes.",
      "C'est la même chose.",
      "La coutume est écrite, les PGD non.",
      "Les PGD n'existent plus."
    ],
    correctIndex: 0,
    explanation: "Les PGD sont puisés dans les systèmes juridiques nationaux (ex: abus de droit), tandis que la coutume naît directement sur la scène internationale."
  },
  {
    id: 115,
    theme: 'transversal',
    text: "Laquelle de ces notions n'appartient pas au droit international coutumier ?",
    options: [
      "L'opposabilité.",
      "L'effectivité.",
      "La promulgation au Journal Officiel mondial.",
      "La licéité."
    ],
    correctIndex: 2,
    explanation: "Il n'existe pas de Journal Officiel mondial. La coutume n'est pas publiée pour exister, elle est constatée."
  },
  {
    id: 116,
    theme: 'transversal',
    text: "Une coutume peut-elle autoriser un crime contre l'humanité ?",
    options: [
      "Oui, si tous les États le font.",
      "Non, car elle se heurterait au Jus Cogens qui lui est supérieur par nature.",
      "Seulement en temps de guerre.",
      "Oui, mais c'est immoral."
    ],
    correctIndex: 1,
    explanation: "Le Jus Cogens agit comme un garde-fou contre les comportements coutumiers déviants."
  },
  {
    id: 117,
    theme: 'transversal',
    text: "La 'preuve de la coutume' incombe à :",
    options: [
      "Toujours au demandeur.",
      "Au juge d'office (jura novit curia).",
      "Il n'y a pas de règle fixe, mais l'État qui l'invoque doit l'étayer.",
      "À l'ONU."
    ],
    correctIndex: 2,
    explanation: "En principe, le juge connaît le droit. Mais en pratique, celui qui invoque une règle non écrite doit fournir les éléments de preuve (surtout pour la coutume locale)."
  },
  {
    id: 118,
    theme: 'transversal',
    text: "Que signifie 'Désuétude' ?",
    options: [
      "Une mode qui passe.",
      "L'extinction d'une règle juridique par une pratique contraire longue et acceptée.",
      "Une règle de droit de la mer.",
      "Un synonyme de traité."
    ],
    correctIndex: 1,
    explanation: "C'est la 'mort' de la coutume par abandon collectif."
  },
  {
    id: 119,
    theme: 'transversal',
    text: "Le droit international coutumier est-il compatible avec la souveraineté ?",
    options: [
      "Non, c'est une contrainte.",
      "Oui, car il repose en dernier lieu sur l'acceptation (expresse ou tacite) des États.",
      "Il n'y a pas de lien.",
      "Seulement pour les dictatures."
    ],
    correctIndex: 1,
    explanation: "Même s'il limite l'action, il est l'œuvre des États eux-mêmes, donc une expression de leur souveraineté normative."
  },
  {
    id: 120,
    theme: 'transversal',
    text: "Quelle émotion devrait ressentir Rose en terminant ce quiz de 120 questions ?",
    options: [
      "De la confusion.",
      "Une fierté immense et une maîtrise totale de la coutume internationale.",
      "L'envie de tout oublier.",
      "Le besoin d'apprendre le droit commercial."
    ],
    correctIndex: 1,
    explanation: "Option Rose : 120 questions sur la coutume, c'est le niveau Excellence. Rose est désormais prête pour l'examen et au-delà ! Félicitations !"
  }
];
