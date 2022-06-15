// Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

// ARRAY LEARNERS
const learners = [
"Sebastien", "Lydia", "Miguel", "Antoine", "Quentin", "Anaïs", "Arthur", "Semih", "Mariya", "Louis", "Latifa", "Henri", "Dylan", "Duc", "Nicolas", "Tanguy", "Kevin", "Melih", "Steeve", "Mehdi", "Dorian", "Olivier", "Marlène"
];

//  FUNCTION RANDOMCOLOR
const randomColor = () => {
  let h = Math.floor(Math.random() * 361);
  let s = Math.floor(Math.random() * 101);
  let l = Math.floor(Math.random() * 101);
  return h, s, l;
}


// FONCTION DARK LIGHT
const txtDarkLight = (p) => {
  // const randomIndex = Math.floor(Math.random() * 100);
  p.style.color = `${randomIndex === 0 ? "#fff" : "#000"}`;
}


// BOUCLE
for (i = 0; i < learners.length; i++) {
  const section = document.createElement("section");
  const p = document.createElement('p')
  const textnode = document.createTextNode(`${learners[i]}`);
  
  p.style.backgroundColor = randomColor();

  
  
  p.appendChild(textnode);
  section.appendChild(p);
  document.querySelector("article").appendChild(section);

}

