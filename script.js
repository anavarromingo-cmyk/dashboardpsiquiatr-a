// Datos de tarjetas de estudio
const flashcards = [
  {
    front: '¿Qué diferencia a la entrevista psiquiátrica de la entrevista médica general?',
    back: 'La entrevista psiquiátrica explora la historia global de la vida del paciente, su estilo de vida, concepto de sí mismo y relaciones, mientras que la entrevista médica se centra en la enfermedad actual y datos de la anamnesis【451553842406529†L852-L904】.'
  },
  {
    front: '¿Qué son datos introspectivos e inspectivos?',
    back: 'Los datos introspectivos son los sentimientos y experiencias que el paciente verbaliza; los datos inspectivos son comunicaciones no verbales (gestos, tono de voz, conducta) observadas por el entrevistador【451553842406529†L1065-L1099】.'
  },
  {
    front: '¿Cómo debe abordar el entrevistador las emociones evidentes del paciente?',
    back: 'Si la emoción es evidente, el entrevistador debe preguntar qué ha desencadenado ese sentimiento en lugar de discutir o negar la emoción. Algunas emociones se esconden y requieren tacto para explorarlas【451553842406529†L1127-L1152】.'
  },
  {
    front: 'Diferencia entre psicopatología y psicodinámica',
    back: 'La psicopatología describe los síntomas y perturbaciones de la conducta; la psicodinámica intenta explicar el desarrollo psíquico total del paciente, sus síntomas y puntos fuertes, integrando sus reacciones a lo largo de la vida【451553842406529†L1163-L1185】.'
  },
  {
    front: '¿Cómo se entiende la ansiedad en pacientes con trastornos de ansiedad?',
    back: 'Las formas “puras” de los trastornos de ansiedad son poco frecuentes; suelen coexistir varios trastornos y la ansiedad debe evaluarse como síntoma con significado, no sólo clasificarse según el DSM【451553842406529†L214-L226】.'
  },
  {
    front: 'Consejo para entrevistar a un paciente antisocial',
    back: 'Los autores aconsejan evitar desempeñar el papel de fiscal del distrito; es preferible lograr el respeto y la confianza del paciente en lugar de buscar información oculta【451553842406529†L237-L243】.'
  },
  {
    front: 'Consejo para entrevistar a un paciente narcisista',
    back: 'Con pacientes narcisistas el clínico puede sentir que no existe; los autores describen estrategias para tolerar ese sentimiento manteniendo su propio sentido de identidad【451553842406529†L244-L248】.'
  },
  {
    front: 'Importancia de las ideas delirantes en pacientes psicóticos',
    back: 'Las ideas delirantes son ventanas a los conflictos, preocupaciones y deseos arraigados en la psique del paciente; como los sueños según Freud, permiten comprender la mente inconsciente【451553842406529†L191-L203】.'
  },
  {
    front: '¿Qué es la contratransferencia y cómo puede utilizarse?',
    back: 'La contratransferencia son las respuestas emocionales del clínico al paciente; si el profesional es consciente de ellas, puede emplearlas como fuente de información, lo cual es especialmente útil con pacientes límite【451553842406529†L2808-L2816】.'
  },
  {
    front: '¿Por qué la entrevista no debe centrarse sólo en el diagnóstico?',
    back: 'Una entrevista orientada exclusivamente a establecer un diagnóstico puede cohibir al paciente; el éxito se mide por el grado de comprensión compartida que se desarrolla entre paciente y clínico【451553842406529†L944-L966】.'
  }
  ,
  // Nueva tarjeta sobre el enfoque pluralista
  {
    front: '¿Qué disciplinas psicológicas contribuyen al enfoque pluralista de los autores?',
    back: 'El enfoque pluralista del libro integra aportes de la psicología del yo, la teoría de las relaciones objetales, el conductismo, la psicología del self y las psicologías relacional e intersubjetiva, entre otras corrientes【451553842406529†L747-L754】.'
  },
  // Nueva tarjeta sobre la aportación de la neurociencia
  {
    front: '¿Cuál es la aportación de la neurociencia al estudio de trastornos como el TEPT?',
    back: 'La neurociencia identifica zonas alteradas del cerebro mediante técnicas de neuroimagen (por ejemplo, en el trastorno de estrés postraumático), pero estas observaciones no sustituyen la comprensión psicológica; deben integrarse sin desvalorizar el significado psicológico【451553842406529†L1188-L1196】.'
  }
];

// Datos para el juego Pasapalabra (15 letras)
const pasapalabraData = [
  {
    letter: 'A',
    clue: 'Con la A: sensación común en pacientes y clínicos; debe evaluarse como síntoma y suele coexistir con otros trastornos.',
    answer: 'ansiedad'
  },
  {
    letter: 'B',
    clue: 'Con la B: término en inglés que describe a pacientes con personalidad límite (capítulo 10).',
    answer: 'borderline'
  },
  {
    letter: 'C',
    clue: 'Con la C: respuesta emocional del clínico que puede usarse como fuente de información sobre el paciente.',
    answer: 'contratransferencia'
  },
  {
    letter: 'D',
    clue: 'Con la D: proceso que no debe ser el único objetivo de la entrevista; centrarse exclusivamente en él puede cohibir al paciente.',
    answer: 'diagnóstico'
  },
  {
    letter: 'E',
    clue: 'Con la E: encuentro profesional cuyo objetivo es comprender y ayudar al paciente; en psiquiatría se centra en la vida del paciente.',
    answer: 'entrevista'
  },
  {
    letter: 'F',
    clue: 'Con la F: apellido del psicoanalista que proporcionó el fundamento de la psicodinámica moderna.',
    answer: 'freud'
  },
  {
    letter: 'G',
    clue: 'Con la G: adjetivo que indica que el tratamiento psiquiátrico se basa en la historia ___ de la vida del paciente.',
    answer: 'global'
  },
  {
    letter: 'H',
    clue: 'Con la H: tipo de paciente descrito en el capítulo 4, caracterizado por dramatismo y búsqueda de atención.',
    answer: 'histriónico'
  },
  {
    letter: 'I',
    clue: 'Con la I: datos que el paciente proporciona sobre sus sentimientos y experiencias, complementarios a los datos de inspección.',
    answer: 'introspectivos'
  },
  {
    letter: 'M',
    clue: 'Con la M: tipo de paciente del capítulo 6; su tendencia a la autoflagelación se relaciona con la reacción terapéutica negativa.',
    answer: 'masoquista'
  },
  {
    letter: 'N',
    clue: 'Con la N: tipo de paciente que puede provocar en el clínico la sensación de no existir como persona independiente.',
    answer: 'narcisista'
  },
  {
    letter: 'O',
    clue: 'Con la O: tipo de paciente cuya disertación verbal puede servir para evitar el contacto emocional durante la entrevista.',
    answer: 'obsesivo-compulsivo'
  }
  ,
  {
    letter: 'P',
    clue: 'Con la P: campo que describe los síntomas y perturbaciones de la conducta; se complementa con la psicodinámica para comprender al paciente.',
    answer: 'psicopatología'
  },
  {
    letter: 'R',
    clue: 'Con la R: actitud que el clínico intenta lograr con pacientes antisociales; su obtención es preferible a adoptar el papel de fiscal.',
    answer: 'respeto'
  },
  {
    letter: 'T',
    clue: 'Con la T: fenómeno por el que el paciente proyecta en el entrevistador patrones de relación pasados; su contraparte se denomina contratransferencia.',
    answer: 'transferencia'
  }
];

// Preguntas para el modo Quiz
const quizData = [
  {
    question: '¿Qué aspecto se destaca en la entrevista psiquiátrica respecto a la entrevista médica general?',
    options: [
      'Centrarse únicamente en los síntomas físicos',
      'Explorar la vida global del paciente y su concepto de sí mismo',
      'Solicitar sólo antecedentes familiares',
      'Ignorar las comunicaciones no verbales'
    ],
    answer: 1 // índice de la opción correcta
  },
  {
    question: 'Según el libro, ¿cómo se deben entender los trastornos de ansiedad?',
    options: [
      'Las formas puras son comunes y se tratan por separado',
      'Es improbable la comorbilidad entre trastornos de ansiedad',
      'Los trastornos de ansiedad suelen coexistir y la ansiedad debe evaluarse como síntoma con significado',
      'Se debe prescribir medicación sin explorar el significado de la ansiedad'
    ],
    answer: 2
  },
  {
    question: 'Al entrevistar a un paciente antisocial, el entrevistador principiante debe…',
    options: [
      'Adoptar el papel de fiscal del distrito para obtener información',
      'Tratar de lograr el respeto y la confianza del paciente',
      'Confrontar al paciente de manera hostil',
      'Ignorar cualquier comportamiento delictivo'
    ],
    answer: 1
  },
  {
    question: '¿Qué estrategia se propone para pacientes narcisistas?',
    options: [
      'Reflejar su auto‑admiración',
      'Tolerar el sentimiento de no existir y mantener los límites profesionales',
      'Ignorar al paciente cuando hable de sí mismo',
      'Buscar información personal de inmediato'
    ],
    answer: 1
  },
  {
    question: '¿Qué combinación de datos proporciona la entrevista psiquiátrica?',
    options: [
      'Sólo datos introspectivos',
      'Sólo datos de inspección',
      'Datos introspectivos y de inspección que incluyen comunicaciones verbales y no verbales',
      'Datos de laboratorio y pruebas de imagen'
    ],
    answer: 2
  },
  {
    question: 'La transferencia se refiere a…',
    options: [
      'El traslado del historial médico del paciente',
      'El desplazamiento inconsciente de patrones de relación pasados hacia el entrevistador',
      'La posibilidad de que el terapeuta transfiera la llamada a otro',
      'Una prueba psicológica estandarizada'
    ],
    answer: 1
  },
  {
    question: 'En pacientes deprimidos, la reacción terapéutica negativa ocurre cuando…',
    options: [
      'El paciente utiliza la introspección para seguir autoflagelándose',
      'El paciente muestra una rápida mejoría',
      'El paciente rechaza cualquier interpretación',
      'El paciente evita hablar de sí mismo'
    ],
    answer: 0
  },
  {
    question: 'Si una emoción es evidente durante la entrevista, el entrevistador debe…',
    options: [
      'Preguntar qué ha desencadenado esa emoción en lugar de discutirla',
      'Decirle al paciente que no debería sentirse así',
      'Ignorar la emoción y continuar con la entrevista',
      'Cuestionar la validez de la emoción'
    ],
    answer: 0
  }
  ,
  // Pregunta sobre la diferencia entre psicopatología y psicodinámica
  {
    question: '¿Cuál es la diferencia entre psicopatología y psicodinámica?',
    options: [
      'La psicopatología describe los síntomas y perturbaciones; la psicodinámica busca explicar el desarrollo psíquico y las fuerzas que generan esos síntomas',
      'La psicodinámica describe la estructura cerebral; la psicopatología se centra en la vida emocional',
      'Son sinónimos y se utilizan indistintamente',
      'La psicopatología se basa en la genética; la psicodinámica, en la química'
    ],
    answer: 0
  },
  // Pregunta sobre pacientes obsesivo-compulsivos
  {
    question: '¿Qué tipo de paciente utiliza monólogos verbales extensos para evitar el contacto emocional?',
    options: [
      'El paciente antisocial',
      'El paciente obsesivo-compulsivo',
      'El paciente narcisista',
      'El paciente masoquista'
    ],
    answer: 1
  },
  // Pregunta sobre ideas delirantes
  {
    question: 'Según el libro, ¿qué representan las ideas delirantes en los pacientes psicóticos?',
    options: [
      'Manifestaciones sin relación con su historia',
      'Fenómenos fisiológicos aleatorios',
      'Ventanas a los conflictos, preocupaciones y deseos inconscientes del paciente',
      'Signos de degeneración cerebral irreversible'
    ],
    answer: 2
  },
  // Pregunta sobre el enfoque pluralista
  {
    question: '¿Qué corrientes psicológicas se integran en el enfoque pluralista de los autores?',
    options: [
      'Psicología del yo',
      'Teoría de las relaciones objetales',
      'Psicología del self',
      'Todas las anteriores'
    ],
    answer: 3
  }
];

// Cambio de pestañas
const tabButtons = {
  flashcards: document.getElementById('tab-flashcards'),
  pasapalabra: document.getElementById('tab-pasapalabra'),
  quiz: document.getElementById('tab-quiz')
};
const sections = {
  flashcards: document.getElementById('flashcards-section'),
  pasapalabra: document.getElementById('pasapalabra-section'),
  quiz: document.getElementById('quiz-section')
};

function showTab(tab) {
  // activar botón
  Object.keys(tabButtons).forEach(key => {
    if (key === tab) {
      tabButtons[key].classList.add('active');
    } else {
      tabButtons[key].classList.remove('active');
    }
  });
  // mostrar sección
  Object.keys(sections).forEach(key => {
    sections[key].classList.toggle('hidden', key !== tab);
  });
}

// Eventos de pestañas
Object.keys(tabButtons).forEach(key => {
  tabButtons[key].addEventListener('click', () => showTab(key));
});

// Renderizado de tarjetas
function renderFlashcards() {
  const container = document.getElementById('flashcards-container');
  flashcards.forEach(({front, back}, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    const inner = document.createElement('div');
    inner.className = 'card-inner';
    const frontFace = document.createElement('div');
    frontFace.className = 'card-face card-front';
    frontFace.textContent = front;
    const backFace = document.createElement('div');
    backFace.className = 'card-face card-back';
    backFace.textContent = back;
    inner.appendChild(frontFace);
    inner.appendChild(backFace);
    card.appendChild(inner);
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
    container.appendChild(card);
  });
}

// Lógica de Pasapalabra
let pasapalabraIndex = 0;
let pasapalabraResults = {};

function renderRosco() {
  const rosco = document.getElementById('rosco');
  rosco.innerHTML = '';
  pasapalabraData.forEach((item, index) => {
    const span = document.createElement('div');
    span.className = 'letter';
    span.textContent = item.letter;
    span.id = 'letter-' + index;
    rosco.appendChild(span);
  });
}

function updateRoscoStatus() {
  pasapalabraData.forEach((item, index) => {
    const letterEl = document.getElementById('letter-' + index);
    const status = pasapalabraResults[index];
    letterEl.classList.remove('active', 'correct', 'wrong');
    if (status === undefined) {
      // no contestado
    } else if (status === true) {
      letterEl.classList.add('correct');
    } else if (status === false) {
      letterEl.classList.add('wrong');
    }
    if (index === pasapalabraIndex) {
      letterEl.classList.add('active');
    }
  });
}

function loadPasapalabraQuestion() {
  // saltar letras respondidas hasta que encontremos una sin responder o se complete
  let count = 0;
  while (pasapalabraResults[pasapalabraIndex] !== undefined && count < pasapalabraData.length) {
    pasapalabraIndex = (pasapalabraIndex + 1) % pasapalabraData.length;
    count++;
  }
  // verificar si todas están respondidas
  if (count >= pasapalabraData.length && Object.keys(pasapalabraResults).length === pasapalabraData.length) {
    document.getElementById('pasapalabra-question').textContent = 'Juego finalizado. Has respondido ' + Object.values(pasapalabraResults).filter(v => v).length + ' de ' + pasapalabraData.length + ' correctamente.';
    document.getElementById('pasapalabra-answer').style.display = 'none';
    document.getElementById('pasapalabra-submit').style.display = 'none';
    document.getElementById('pasapalabra-pass').style.display = 'none';
    updateRoscoStatus();
    return;
  }
  // mostrar pregunta
  const current = pasapalabraData[pasapalabraIndex];
  document.getElementById('pasapalabra-question').textContent = current.clue;
  document.getElementById('pasapalabra-answer').value = '';
  updateRoscoStatus();
}

function submitPasapalabraAnswer() {
  const input = document.getElementById('pasapalabra-answer');
  const answer = input.value.trim().toLowerCase();
  const correct = pasapalabraData[pasapalabraIndex].answer.toLowerCase();
  if (!answer) return; // no contesta
  if (answer === correct) {
    pasapalabraResults[pasapalabraIndex] = true;
    document.getElementById('pasapalabra-feedback').textContent = '¡Correcto!';
  } else {
    pasapalabraResults[pasapalabraIndex] = false;
    document.getElementById('pasapalabra-feedback').textContent = 'Incorrecto. La respuesta correcta era "' + correct + '".';
  }
  pasapalabraIndex = (pasapalabraIndex + 1) % pasapalabraData.length;
  loadPasapalabraQuestion();
}

function passPasapalabra() {
  pasapalabraIndex = (pasapalabraIndex + 1) % pasapalabraData.length;
  loadPasapalabraQuestion();
}

function resetPasapalabra() {
  pasapalabraIndex = 0;
  pasapalabraResults = {};
  document.getElementById('pasapalabra-feedback').textContent = '';
  document.getElementById('pasapalabra-answer').style.display = '';
  document.getElementById('pasapalabra-submit').style.display = '';
  document.getElementById('pasapalabra-pass').style.display = '';
  loadPasapalabraQuestion();
}

// Configurar eventos de Pasapalabra
function setupPasapalabra() {
  renderRosco();
  loadPasapalabraQuestion();
  document.getElementById('pasapalabra-submit').addEventListener('click', submitPasapalabraAnswer);
  document.getElementById('pasapalabra-pass').addEventListener('click', passPasapalabra);
  document.getElementById('pasapalabra-reset').addEventListener('click', resetPasapalabra);
}

// Lógica del Quiz
let quizIndex = 0;
let quizScore = 0;
function loadQuizQuestion() {
  const resultDiv = document.getElementById('quiz-result');
  resultDiv.textContent = '';
  document.getElementById('quiz-next').classList.add('hidden');
  const q = quizData[quizIndex];
  document.getElementById('quiz-question').textContent = q.question;
  const optionsList = document.getElementById('quiz-options');
  optionsList.innerHTML = '';
  q.options.forEach((text, idx) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', () => selectQuizOption(idx));
    li.appendChild(button);
    optionsList.appendChild(li);
  });
}

function selectQuizOption(selectedIndex) {
  const q = quizData[quizIndex];
  const optionsList = document.getElementById('quiz-options');
  const items = optionsList.querySelectorAll('li');
  items.forEach((li, idx) => {
    li.classList.remove('correct', 'wrong');
    if (idx === q.answer) {
      li.classList.add('correct');
    }
    if (idx === selectedIndex && idx !== q.answer) {
      li.classList.add('wrong');
    }
    // deshabilitar botones
    li.firstChild.disabled = true;
  });
  if (selectedIndex === q.answer) {
    quizScore++;
    document.getElementById('quiz-result').textContent = '¡Correcto!';
  } else {
    document.getElementById('quiz-result').textContent = 'Incorrecto.';
  }
  document.getElementById('quiz-next').classList.remove('hidden');
}

function nextQuizQuestion() {
  quizIndex++;
  if (quizIndex >= quizData.length) {
    // mostrar resultado final
    const quizGame = document.getElementById('quiz-game');
    quizGame.innerHTML = '<p>Has completado el quiz. Tu puntuación es ' + quizScore + ' de ' + quizData.length + '.</p>';
    return;
  }
  loadQuizQuestion();
}

function setupQuiz() {
  document.getElementById('quiz-next').addEventListener('click', nextQuizQuestion);
  loadQuizQuestion();
}

// Inicializar todo cuando el documento esté listo
window.addEventListener('DOMContentLoaded', () => {
  renderFlashcards();
  setupPasapalabra();
  setupQuiz();
});
