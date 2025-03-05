// Textos para los efectos de máquina de escribir - Texts for typewriter effects
const texts = {
  first: [
    'The secret to a <span style="color: white;">perfect ramen</span> is in the details. 🍜 Learn, cook and enjoy every sip.',
    "You don't need to be a chef to make <span style='color: white;'>amazing ramen</span>. 🥢 Just follow the recipe.",
  ],
  second: [
    "Now that you know the secret, it's time to create your <span style='color: white;'>own ramen</span>. 🍜 Which one will you try first?",
    "The secret to a perfect ramen is in the <span style='color: white;'>passion</span> with which you cook it. Keep experimenting!",
  ],
};

// Inicializa los efectos de máquina de escribir - Initializes typewriter effects
function initializeTypewriterEffects() {
  typewriterEffect("#text-section2", texts.first);
  typewriterEffect("#text-section4", texts.second);
}

// Función genérica para el efecto de máquina de escribir - Generic function for typewriter effect
function typewriterEffect(selector, textArray) {
  var typewriter = new Typewriter(selector, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(500)
    .typeString(textArray[0])
    .pauseFor(300)
    .deleteAll(10)
    .typeString(textArray[1])
    .pauseFor(300)
    .deleteAll(10)
    .pauseFor(1000)
    .start();
}

// Llama a la función para inicializar los efectos de máquina de escribir - Calls the function to initialize typewriter effects
initializeTypewriterEffects();
