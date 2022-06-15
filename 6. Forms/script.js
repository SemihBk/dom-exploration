/* Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same. */

// const firstName = document.querySelector("#firstname");
// const displayFirstName = document.querySelector("#display-firstname");

// const logKey = (e) => {
//   displayFirstName.textContent += `${e.key}`;
// };

// firstName.addEventListener("keyup", logKey);

/////////////////

/* Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact. */

// const ageInput = document.querySelector("#age");
// let theTruth = document.querySelector("#a-hard-truth");

// ageInput.addEventListener("keyup", () => {
//   if (ageInput.value >= 18) {
//     theTruth.style.visibility = "visible";
//   } else {
//     theTruth.style.visibility = "hidden";
//   }
// });

/* Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match. */

// let inputPwd = document.querySelector("#pwd");
// let inputPwdConfirm = document.querySelector("#pwd-confirm");

// inputPwd.addEventListener("keyup", () => {
//   if (inputPwd.value.length < 6) {
//     inputPwd.style.border = "2px solid red";
//     inputPwd.style.color = "red";
//   } else {
//     inputPwd.style.border = "1px solid black";
//     inputPwd.style.color = "black";
//   }
// });

// inputPwdConfirm.addEventListener("keyup", () => {
//   if (inputPwd.value == inputPwdConfirm.value) {
//     inputPwd.style.border = "2px solid green";
//     inputPwd.style.color = "green";
//     inputPwdConfirm.style.border = "2px solid green";
//     inputPwdConfirm.style.color = "green";
//   } else {
//     inputPwd.style.border = "2px solid red";
//     inputPwd.style.color = "red";
//     inputPwdConfirm.style.border = "2px solid red";
//     inputPwdConfirm.style.color = "red";
//   }
// });

//////////////////

/* Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
 */

/* let toggle = document.querySelector("#toggle-darkmode");
let body = document.querySelector("body");

toggle.addEventListener("change", () => {
  if (toggle.value == "dark") {
    body.style.color = "white";
    body.style.backgroundColor = "black";
  }
  if (toggle.value == "light") {
    body.style.color = "black";
    body.style.backgroundColor = "white";
  }
});
 */
