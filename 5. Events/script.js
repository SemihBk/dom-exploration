// Sélection des éléments

const main = document.querySelector("main");
const sectionThird = main.children[2];
const ul = sectionThird.children[1];

// Sélection des classes

const displayedSection = document.querySelector(".displayedsquare-wrapper");
const green = document.querySelector(".green");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");

/***********/
// Date log
/***********/
const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

/*****************/
// Click timer log
/*****************/
const clickOnSquare = (e) => {
  let targetlist = e.target.classList[1];
  let timer = getElapsedTime();

  const li = document.createElement("li");
  const textNode = document.createTextNode(
    `[${timer}] Created a new ${targetlist} square`
  );

  li.appendChild(textNode);
  ul.appendChild(li);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

/*******************/
// Fonctions display
/*******************/
function displayedSquare(color) {
  // Créer une nouvelle div
  const div = document.createElement("div");

  // Ajouter la classe displayedsquare
  div.classList.add("displayedsquare");

  // Ajouter la couleur du bg
  div.style.backgroundColor = color;
  div.classList.add(`${color}`);

  // Ajouter la div à la section voulue
  displayedSection.appendChild(div);
}

/********************/
// Add event listener
/********************/

green.addEventListener("click", () => {
  displayedSquare("lime");
});

violet.addEventListener("click", () => {
  displayedSquare("magenta");
});

orange.addEventListener("click", () => {
  displayedSquare("orange");
});

// ALERT
// On sélectionne le document en entier, si la première classe de la cible cliquée est "dispplayedsquare", alors alert le backgroundcolor de la cible cliquée
displayedSection.addEventListener("click", (e) => {
  if (e.target.style.backgroundColor === "lime") {
    alert("Green");
  } else if (e.target.style.backgroundColor === "magenta") {
    alert("Violet");
  } else if (e.target.style.backgroundColor === "orange") {
    alert("Orange");
  }
});

// RANDOM BACKGROUND COLOR
// KEY PRESS
/************************/

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

document.body.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    document.body.style.backgroundColor = randomColor();

    // log random color li
    let timer = getElapsedTime();

    const li = document.createElement("li");
    const textNode = document.createTextNode(
      `[${timer}] New Background Color!`
    );

    li.appendChild(textNode);
    ul.appendChild(li);
  }

  // Si L est pressé, supprime le log
  else if (e.code == "KeyL") {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }

  // Si S est pressé, supprime les div créées
  else if (e.code == "KeyS") {
    while (displayedSection.firstChild) {
      displayedSection.removeChild(displayedSection.firstChild);
    }
  }
});

console.log(ul.firstChild);
