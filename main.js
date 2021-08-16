import './style.scss'

//Tried to run mocha, but keep getting "Rollup failed to resolve import "asset" from "main.js".
//This is most likely unintended because it can break your application at runtime." error messages.
// import {equal} from 'asset';

// const array = ["qualityAssurance/quality-assurance.html","security/security.html","badExample/bad-example.html"];

// describe('myArray', () => {
//   it('should not contain the fourth URL', () => {
//     equal(myArray.indexOf(4), "");
//   });
// });

//See if the Javascript has linked to the index file.
console.log("connected!");

//Displays the hyperlinks of other pages.
document.querySelector('#app').innerHTML = `
  <h1>This is the index page!</h1>
  <p>Please select the links below!</p>
  <a href="qualityAssurance/quality-assurance.html">quality assurance</a>
  <a href="security/security.html">security</a>
  <a href="badExample/bad-example.html">bad example</a>
`
