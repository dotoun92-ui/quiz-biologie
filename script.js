const questions = [
  {
    category: 'Physiologie',
    question: 'Quelle est la fonction principale des mitochondries ?',
    options: [
      'Synthèse des protéines',
      'Production d’énergie sous forme d’ATP',
      'Transport des nutriments',
      'Stockage du matériel génétique'
    ],
    correctIndex: 1,
    explanation: 'Les mitochondries sont les centrales énergétiques de la cellule. Elles produisent l’ATP à partir de la respiration cellulaire.'
  },
  {
    category: 'Biochimie',
    question: 'Quel élément est le principal constituant de la matière organique ?',
    options: ['Carbone', 'Fer', 'Sodium', 'Calcium'],
    correctIndex: 0,
    explanation: 'Le carbone est la base de la chimie organique et des biomolécules comme les glucides, lipides, protéines et acides nucléiques.'
  },
  {
    category: 'Microbiologie',
    question: 'Quel micro-organisme est principalement responsable de la fermentation alcoolique ?',
    options: ['E. coli', 'Levure', 'Virus influenza', 'Streptocoque'],
    correctIndex: 1,
    explanation: 'Les levures, notamment Saccharomyces cerevisiae, transforment les sucres en alcool et en dioxyde de carbone lors de la fermentation.'
  },
  {
    category: 'Immunologie',
    question: 'Quel type de cellules produit les anticorps ?',
    options: ['Neutrophiles', 'Lymphocytes B', 'Plaquettes', 'Érythrocytes'],
    correctIndex: 1,
    explanation: 'Les lymphocytes B sont activés et se différencient en plasmocytes qui synthétisent les anticorps.'
  },
  {
    category: 'Physiologie',
    question: 'Quelle est la fonction du système respiratoire ?',
    options: [
      'Assurer la digestion des protéines',
      'Permettre les échanges gazeux entre l’organisme et l’environnement',
      'Réguler la tension artérielle',
      'Produire de l’insuline'
    ],
    correctIndex: 1,
    explanation: 'Le système respiratoire assure l’apport d’oxygène et l’élimination du dioxyde de carbone.'
  },
  {
    category: 'Biologie cellulaire',
    question: 'Où se trouve le matériel génétique de la cellule eucaryote ?',
    options: ['Dans les mitochondries', 'Dans le noyau', 'Dans la membrane plasmique', 'Dans les ribosomes'],
    correctIndex: 1,
    explanation: 'Le noyau contient la majorité du génome eucaryote, sous forme de chromatine.'
  },
  {
    category: 'Biochimie',
    question: 'Quel macromolécule catalyse les réactions biologiques ?',
    options: ['Lipide', 'Enzyme', 'Glucose', 'Acide gras'],
    correctIndex: 1,
    explanation: 'Les enzymes sont des protéines qui accélèrent les réactions chimiques dans le corps sans être consommées.'
  },
  {
    category: 'Anatomie',
    question: 'Quel organe est responsable de la filtration du sang ?',
    options: ['Foie', 'Rein', 'Pancréas', 'Rate'],
    correctIndex: 1,
    explanation: 'Les reins filtrent le sang et produisent l’urine en éliminant les déchets métaboliques.'
  },
  {
    category: 'Microbiologie',
    question: 'Quel type de microbe est un virus ?',
    options: [
      'Un organisme unicellulaire autotrophe',
      'Une particule infectieuse nécessitant une cellule hôte',
      'Une bactérie sans paroi',
      'Une levure eucaryote'
    ],
    correctIndex: 1,
    explanation: 'Les virus sont des agents infectieux acellulaires qui doivent infecter une cellule hôte pour se reproduire.'
  },
  {
    category: 'Physiologie',
    question: 'Quelle est la fonction principale des globules rouges ?',
    options: ['Protection contre les infections', 'Transport du dioxyde de carbone', 'Transport de l’oxygène', 'Coagulation du sang'],
    correctIndex: 2,
    explanation: 'Les globules rouges contiennent de l’hémoglobine, qui transporte l’oxygène vers les tissus.'
  },
  {
    category: 'Biochimie',
    question: 'L’insuline est une hormone produite par :',
    options: ['Le foie', 'Le pancréas', 'Le thymus', 'La thyroïde'],
    correctIndex: 1,
    explanation: 'Les cellules bêta du pancréas sécrètent l’insuline, hormone essentielle à la régulation du glucose.'
  },
  {
    category: 'Immunologie',
    question: 'Quelle cellule du système immunitaire est spécialisée dans la destruction des cellules infectées ?',
    options: ['Lymphocyte T cytotoxique', 'Érythrocyte', 'Fibroblaste', 'Plaquette'],
    correctIndex: 0,
    explanation: 'Les lymphocytes T cytotoxiques détruisent les cellules infectées ou anormales.'
  },
  {
    category: 'Physiologie',
    question: 'Quelle structure permet la transmission des influx nerveux entre neurones ?',
    options: ['Myofibrille', 'Synapse', 'Cytoplasme', 'Mitochondrie'],
    correctIndex: 1,
    explanation: 'La synapse est l’espace ou la jonction où un neurone transmet un signal à un autre neurone ou à une cellule cible.'
  },
  {
    category: 'Microbiologie',
    question: 'Quelle est la principale différence entre bactéries et virus ?',
    options: [
      'Les bactéries sont toujours pathogènes',
      'Les bactéries ont une cellule, les virus n’en ont pas',
      'Les virus sont des cellules procaryotes',
      'Les bactéries ne se répliquent jamais'
    ],
    correctIndex: 1,
    explanation: 'Les bactéries sont des organismes cellulaires procaryotes, contrairement aux virus, qui sont acellulaires.'
  },
  {
    category: 'Biochimie',
    question: 'Le glucose est un exemple de :',
    options: ['Lipide', 'Acide nucléique', 'Glucide', 'Protéine'],
    correctIndex: 2,
    explanation: 'Le glucose est un glucide simple, source d’énergie importante pour les cellules.'
  },
  {
    category: 'Pratique',
    question: 'Quel geste est recommandé avant de manipuler des échantillons biologiques ?',
    options: ['Se laver les mains', 'Manger rapidement', 'Ne pas porter de gants', 'Travailler sans masque'],
    correctIndex: 0,
    explanation: 'Le lavage des mains et les mesures d’hygiène réduisent le risque de contamination.'
  },
  {
    category: 'Physiologie',
    question: 'Le cœur a pour rôle principal de :',
    options: ['Filtrer le sang', 'Pomper le sang dans l’organisme', 'Produire des hormones', 'Stocker le glucose'],
    correctIndex: 1,
    explanation: 'Le cœur propulse le sang dans le système circulatoire pour garantir l’apport en oxygène et nutriments.'
  },
  {
    category: 'Biologie cellulaire',
    question: 'Quel organite est responsable de la synthèse des protéines ?',
    options: ['Ribosome', 'Lysosome', 'Appareil de Golgi', 'Vacuole'],
    correctIndex: 0,
    explanation: 'Les ribosomes assemblent les acides aminés pour fabriquer des protéines.'
  },
  {
    category: 'Immunologie',
    question: 'Qu’est-ce qu’un antigène ?',
    options: [
      'Une molécule qui déclenche une réponse immunitaire',
      'Un type de sang',
      'Une hormone digestive',
      'Une cellule rouge du sang'
    ],
    correctIndex: 0,
    explanation: 'Un antigène est une substance reconnue comme étrangère par le système immunitaire, ce qui déclenche une réponse.'
  },
  {
    category: 'Physiologie',
    question: 'Quelle est la fonction des poumons ?',
    options: [
      'Réguler la glycémie',
      'Échanger les gaz respiratoires',
      'Produire des anticorps',
      'Digérer les aliments'
    ],
    correctIndex: 1,
    explanation: 'Les poumons permettent l’échange d’oxygène et de dioxyde de carbone entre le sang et l’air ambiant.'
  },
  {
    category: 'Biochimie',
    question: 'Que sont les acides aminés ?',
    options: ['Des unités de base des protéines', 'Des sucres simples', 'Des lipides stockés', 'Des acides gras insaturés'],
    correctIndex: 0,
    explanation: 'Les acides aminés sont les monomères qui s’assemblent pour former des protéines.'
  },
  {
    category: 'Microbiologie',
    question: 'Quelle est la forme bactérienne la plus fréquente ?',
    options: ['Cocci', 'Bacilles', 'Spirilles', 'Toutes ces formes existent'],
    correctIndex: 3,
    explanation: 'Les bactéries peuvent avoir différentes formes : cocci, bacilles, spirilles, etc.'
  },
  {
    category: 'Pratique',
    question: 'Dans un laboratoire, quel matériel est essentiel pour éviter la contamination ?',
    options: ['Les lunettes de soleil', 'Les gants et le matériel stérile', 'Le téléphone portable', 'Le sac à dos'],
    correctIndex: 1,
    explanation: 'Les gants et le matériel stérile réduisent les risques de contamination et protègent les échantillons.'
  },
  {
    category: 'Physiologie',
    question: 'Le système nerveux central est composé de :',
    options: ['Le cœur et les artères', 'Le cerveau et la moelle épinière', 'Les poumons et le foie', 'Les muscles et les os'],
    correctIndex: 1,
    explanation: 'Le système nerveux central comprend le cerveau et la moelle épinière, qui coordonnent les fonctions nerveuses.'
  },
  {
    category: 'Immunologie',
    question: 'Quel mécanisme protège l’organisme contre les agents pathogènes après vaccination ?',
    options: ['Mémoire immunitaire', 'Diminution du rythme cardiaque', 'Désorganisation des enzymes', 'Fermeture des poumons'],
    correctIndex: 0,
    explanation: 'La vaccination stimule la mémoire immunitaire et permet une réponse plus rapide lors d’une exposition ultérieure.'
  },
  {
    category: 'Biologie cellulaire',
    question: 'Que contient la membrane plasmique ?',
    options: ['Des phospholipides et des protéines', 'Des acides aminés seuls', 'Des chromosomes', 'Seulement de l’eau'],
    correctIndex: 0,
    explanation: 'La membrane plasmique est principalement composée d’une bicouche de phospholipides avec des protéines intégrées.'
  },
  {
    category: 'Biochimie',
    question: 'Le dioxyde de carbone est produit principalement lors de :',
    options: ['La digestion', 'La respiration cellulaire', 'La photosynthèse', 'La synthèse des enzymes'],
    correctIndex: 1,
    explanation: 'Pendant la respiration cellulaire, les cellules libèrent du dioxyde de carbone comme déchet métabolique.'
  },
  {
    category: 'Physiologie',
    question: 'Quel organe produit la bile ?',
    options: ['Le pancréas', 'Le foie', 'L’estomac', 'Les intestins'],
    correctIndex: 1,
    explanation: 'Le foie synthétise la bile, qui aide à la digestion des graisses.'
  },
  {
    category: 'Microbiologie',
    question: 'Les bactéries sont classées comme :',
    options: ['Eucaryotes', 'Procaryotes', 'Virales', 'Fongiques'],
    correctIndex: 1,
    explanation: 'Les bactéries sont des organismes procaryotes, sans noyau délimité par une membrane.'
  },
  {
    category: 'Pratique',
    question: 'Quel signe clinique suggère une infection ?',
    options: ['Fièvre', 'Bonne humeur', 'Mélange de couleurs', 'Respiration calme'],
    correctIndex: 0,
    explanation: 'La fièvre est souvent un signe d’infection ou d’inflammation.'
  },
  {
    category: 'Anatomie',
    question: 'Le poumon droit compte généralement combien de lobes ?',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation: 'Le poumon droit est divisé en trois lobes, tandis que le gauche en a deux pour faire de la place au cœur.'
  },
  {
    category: 'Biologie cellulaire',
    question: 'Quel est le rôle de l’appareil de Golgi ?',
    options: ['Produire de l’énergie', 'Modifier et trier les protéines', 'Réguler la température', 'Stocker l’ADN'],
    correctIndex: 1,
    explanation: 'L’appareil de Golgi modifie, trie et transporte les protéines et lipides vers leur destination.'
  },
  {
    category: 'Physiologie',
    question: 'Quel est le rôle des reins dans l’équilibre hydrique ?',
    options: ['Ils produisent la bile', 'Ils régulent la quantité d’eau et les électrolytes', 'Ils synthétisent le sucre', 'Ils forment les globules rouges'],
    correctIndex: 1,
    explanation: 'Les reins régulent la concentration des liquides corporels et l’électrolyte via l’urine.'
  },
  {
    category: 'Immunologie',
    question: 'Quel type de cellules est impliqué dans la réponse immunitaire rapide non spécifique ?',
    options: ['Lymphocytes B', 'Macrophages', 'Plaquettes', 'Globules rouges'],
    correctIndex: 1,
    explanation: 'Les macrophages jouent un rôle important dans l’immunité innée en phagocytant les agents pathogènes.'
  },
  {
    category: 'Biochimie',
    question: 'La photosynthèse permet de transformer :',
    options: ['De l’énergie lumineuse en énergie chimique', 'L’urine en sang', 'Le sucre en protéine', 'L’ADN en RNA'],
    correctIndex: 0,
    explanation: 'La photosynthèse convertit l’énergie lumineuse en énergie chimique sous forme de glucose.'
  },
  {
    category: 'Microbiologie',
    question: 'Quel organisme est un eucaryote unicellulaire ?',
    options: ['Bactérie', 'Levure', 'Virus', 'Mycoplasme'],
    correctIndex: 1,
    explanation: 'Les levures sont des champignons unicellulaires et sont des organismes eucaryotes.'
  },
  {
    category: 'Pratique',
    question: 'Quand une prise de température est-elle utile ?',
    options: ['Seulement pour l’exercice sportif', 'Pour surveiller une infection ou une fièvre', 'Seulement dans les hôpitaux', 'Quand on manque d’eau'],
    correctIndex: 1,
    explanation: 'La température corporelle permet d’évaluer la présence de fièvre ou d’un état infectieux.'
  },
  {
    category: 'Physiologie',
    question: 'Le système endocrinien est responsable de :',
    options: ['La digestion des graisses', 'La sécrétion des hormones', 'Le transport du sang', 'La contraction musculaire seule'],
    correctIndex: 1,
    explanation: 'Le système endocrinien sécrète des hormones qui régulent de nombreuses fonctions de l’organisme.'
  },
  {
    category: 'Biologie cellulaire',
    question: 'Quel organite permet la digestion cellulaire ?',
    options: ['Lysosome', 'Noyau', 'Ribosome', 'Membrane plasmique'],
    correctIndex: 0,
    explanation: 'Les lysosomes contiennent des enzymes qui dégradent les déchets et les structures cellulaires usées.'
  },
  {
    category: 'Immunologie',
    question: 'Les lymphocytes T sont produits dans :',
    options: ['Le foie', 'La moelle osseuse', 'Le pancréas', 'Le muscle'],
    correctIndex: 1,
    explanation: 'Les lymphocytes naissent majoritairement dans la moelle osseuse, puis se différencient dans le thymus pour les T.'
  },
  {
    category: 'Biochimie',
    question: 'Les lipides servent surtout à :',
    options: ['Structurer l’ADN', 'Stocker de l’énergie et constituer les membranes', 'Transporter l’oxygène', 'Décomposer les protéines'],
    correctIndex: 1,
    explanation: 'Les lipides stockent une grande quantité d’énergie et participent à la composition des membranes cellulaires.'
  },
  {
    category: 'Physiologie',
    question: 'La digestion commence principalement dans :',
    options: ['L’estomac', 'La bouche', 'Le côlon', 'La vessie'],
    correctIndex: 1,
    explanation: 'La digestion commence dans la bouche, avec la mastication et la salive qui amorcent la dégradation des aliments.'
  },
  {
    category: 'Microbiologie',
    question: 'Quel micro-organisme est le plus petit ?',
    options: ['Bactérie', 'Levure', 'Virus', 'Protozoaire'],
    correctIndex: 2,
    explanation: 'Les virus sont généralement beaucoup plus petits que les bactéries et les cellules eucaryotes.'
  },
  {
    category: 'Pratique',
    question: 'Que faut-il faire avant de lancer une analyse biologique ?',
    options: ['Laisser les échantillons dans un placard', 'Vérifier l’identification et la qualité du prélèvement', 'Les mélanger entre eux', 'Les jeter à la poubelle'],
    correctIndex: 1,
    explanation: 'Une bonne identification et une bonne qualité du prélèvement sont essentielles pour obtenir des résultats fiables.'
  },
  {
    category: 'Immunologie',
    question: 'La réaction inflammatoire est caractérisée par :',
    options: ['Rougeur, chaleur, douleur, gonflement', 'Diminution du rythme respiratoire', 'Absence de température', 'Baisse du volume sanguin'],
    correctIndex: 0,
    explanation: 'L’inflammation se manifeste souvent par rougeur, chaleur, douleur et gonflement, signes de défenses actives.'
  },
  {
    category: 'Physiologie',
    question: 'Quelle partie du corps est responsable de la régulation de la température corporelle ?',
    options: ['Le cerveau', 'Le rein', 'Le foie', 'Le muscle'],
    correctIndex: 0,
    explanation: 'L’hypothalamus, situé dans le cerveau, joue un rôle central dans la thermorégulation.'
  },
  {
    category: 'Biochimie',
    question: 'Le rôle principal de l’ATP est de :',
    options: ['Servir de matériel génétique', 'Fournir directement de l’énergie utilisable par les cellules', 'Transporter l’oxygène', 'Filtrer le sang'],
    correctIndex: 1,
    explanation: 'L’ATP est la principale monnaie énergétique de la cellule, utilisée pour de nombreuses réactions biochimiques.'
  },
  {
    category: 'Microbiologie',
    question: 'Les mycobactéries appartiennent à quel groupe ?',
    options: ['Bactéries', 'Virus', 'Protozoaires', 'Champignons'],
    correctIndex: 0,
    explanation: 'Les mycobactéries sont des bactéries, notamment responsables de maladies comme la tuberculose.'
  },
  {
    category: 'Pratique',
    question: 'Quel comportement limite la transmission d’un agent infectieux ?',
    options: ['Ignorer les gestes d’hygiène', 'Se couvrir la bouche lors de la toux', 'Partager les objets personnels', 'Ne pas utiliser de gants'],
    correctIndex: 1,
    explanation: 'Se couvrir la bouche lors de la toux et se laver les mains sont des gestes simples et efficaces de prévention.'
  },
  {
    category: 'Physiologie',
    question: 'Le sang est transporté dans le corps via :',
    options: ['Le système lymphatique uniquement', 'Le système circulatoire', 'Le système digestif', 'Le système nerveux'],
    correctIndex: 1,
    explanation: 'Le système circulatoire transporte le sang, les nutriments, l’oxygène et les déchets dans l’organisme.'
  }
];

const state = {
  currentIndex: 0,
  score: 0,
  answered: Array(questions.length).fill(null),
  selectedAnswer: null,
  quizStarted: false
};

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const scoreBox = document.getElementById('score-box');
const categoryBadge = document.getElementById('category-badge');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');

function showScreen(screen) {
  startScreen.classList.remove('active');
  quizScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  screen.classList.add('active');
}

function startQuiz() {
  state.currentIndex = 0;
  state.score = 0;
  state.answered = Array(questions.length).fill(null);
  state.quizStarted = true;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = questions[state.currentIndex];
  const currentAnswer = state.answered[state.currentIndex];

  progressText.textContent = `Question ${state.currentIndex + 1}/${questions.length}`;
  progressFill.style.width = `${((state.currentIndex + 1) / questions.length) * 100}%`;
  scoreBox.textContent = `Score : ${state.score}`;
  categoryBadge.textContent = currentQuestion.category;
  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;

    if (currentAnswer !== null) {
      if (index === currentQuestion.correctIndex) {
        button.classList.add('correct');
      }
      if (index === currentAnswer && currentAnswer !== currentQuestion.correctIndex) {
        button.classList.add('wrong');
      }
      if (index === currentAnswer) {
        button.classList.add('selected');
      }
      button.disabled = true;
    } else {
      button.addEventListener('click', () => selectAnswer(index));
    }

    answersContainer.appendChild(button);
  });

  if (currentAnswer !== null) {
    const isCorrect = currentAnswer === currentQuestion.correctIndex;
    feedback.classList.remove('hidden');
    feedbackText.textContent = isCorrect
      ? `✅ Correct ! ${currentQuestion.explanation}`
      : `❌ Incorrect. ${currentQuestion.explanation}`;
  } else {
    feedback.classList.add('hidden');
    feedbackText.textContent = '';
  }

  prevBtn.disabled = state.currentIndex === 0;
  nextBtn.textContent = state.currentIndex === questions.length - 1 ? 'Terminer' : 'Suivant';
}

function selectAnswer(selectedIndex) {
  const currentQuestion = questions[state.currentIndex];
  const currentAnswer = state.answered[state.currentIndex];

  if (currentAnswer !== null) {
    return;
  }

  state.answered[state.currentIndex] = selectedIndex;

  if (selectedIndex === currentQuestion.correctIndex) {
    state.score += 10;
  }

  renderQuestion();
}

function nextQuestion() {
  const currentAnswer = state.answered[state.currentIndex];

  if (state.currentIndex < questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
    return;
  }

  if (currentAnswer !== null || state.currentIndex === questions.length - 1) {
    showResults();
  }
}

function previousQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
}

function showResults() {
  const total = questions.length;
  const percentage = Math.round((state.score / (total * 10)) * 100);

  finalScore.textContent = `${state.score}/${total * 10}`;

  if (percentage >= 80) {
    resultMessage.textContent = 'Excellent ! Très bonne maîtrise de la biologie.';
  } else if (percentage >= 60) {
    resultMessage.textContent = 'Bien joué ! Vous avez de bonnes connaissances.';
  } else if (percentage >= 40) {
    resultMessage.textContent = 'Pas mal ! Continuez à vous entraîner.';
  } else {
    resultMessage.textContent = 'Il faut s’entraîner encore un peu, mais vous pouvez y arriver !';
  }

  showScreen(resultScreen);
}

function restartQuiz() {
  startQuiz();
}

function goHome() {
  state.quizStarted = false;
  showScreen(startScreen);
}

startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', previousQuestion);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
homeBtn.addEventListener('click', goHome);

showScreen(startScreen);
