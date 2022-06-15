// Select the last child of the <ol> tag and put it at the beginning of the list

const oList = document.querySelector('ol')
const firstLi = document.querySelector('li:first-child');
const lastLi = document.querySelector('li:last-child');

oList.insertBefore(lastLi, firstLi);

// Move the <h2> of the third section in the second one and vice-versa

const main = document.querySelector('main');
const sectionThird = main.children[1];
const titleThird = sectionThird.children[0];
const pTwo = sectionThird.children[1];

const sectionTwo = main.children[2];
const div = sectionTwo.children[0];
const titleTwo = div.children[0];
const pThird = div.children[1];



sectionThird.appendChild(titleTwo);
sectionTwo.appendChild(titleThird);
div.appendChild(titleThird);

sectionThird.insertBefore(titleTwo, pTwo)
div.insertBefore(titleThird, pThird)


// Delete the last section from the DOM, we don't need it anyways

sectionTwo.remove();