// Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from change a title of a document.

/* let titleAdd = document.querySelector('.important');

titleAdd.setAttribute('title', 'hello');
 */

// Select all the img tags and loop through them. If they have no important class, turn their display property to none

/* for (let img of document.querySelectorAll('img')) {
  if(img.classList.contains('important')) {
    img.style.display = 'initial'; 
  } else {
    img.style.display = 'none';
  }
} */


// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well

/* for (let paragraphs of document.querySelectorAll('p')) {
  console.log(paragraphs);
} */


// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(randomColor());

for (let paragraphs of document.querySelectorAll('p')) {
  if (paragraphs.classList.contains('important')) {
    paragraphs.style.color = "black";
  }
  else {
    paragraphs.style.color = randomColor()
  }
}