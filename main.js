import './style.scss'
console.log("connected!");
document.querySelector('#app').innerHTML = `
  <h1>This is the index page!</h1>
  <p>Please select the links below!</p>
  <a href="qualityAssurance/quality-assurance.html">quality assurance</a>
  <a href="security/security.html">security</a>
  <a href="badExample/bad-example.html">bad example</a>
`
