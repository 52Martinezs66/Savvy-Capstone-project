const memory = require("./../../assets/BeeTreeHoursSign.jpg");
const pywebsite = require("./../../assets/BeeTreeHoursSign.jpg");
const reactSW = require("./../../assets/BeeTreeDeck.jpg");

export default st => `
<hr />
<div class="container row justify-content-center">
  <h2 class="pageHeader col-header animated fadeInLeft">${st.title}</h2>
  <h1 class="row justify-content-center animated fadeIn">Bee Tree Hours</h1>
  <p class="animated fadeIn">This is Bee Tree Park hours and rules.</p>
  <div class="imgContainer">.
    <a href="http://bunchdevelopment.github.io/udacity_memory_game/" target="_blank"><img src="${memory}" class="blur portfolioIMG" id="memoryImg"></a>
  </div>
</div>
<br />
<div class="container row justify-content-center">
    <h1 class="row justify-content-center animated fadeIn">Py Entertainment</h1>
  <p class="animated fadeIn">This is a basic Python 2.7 script that takes dictionaries and then renders a website that then displays those dictionaries in a card like format that includes a modal that plays the movies trailer. Clicking the image takes you to the Github repo.</p>
  <div class="imgContainer">
    <a href="https://github.com/BunchDevelopment/movie_website" target="_blank"><img src="${pywebsite}" class="blur portfolioIMG" id="pyImg"></a>
  </div>
<br />
<div class="container row justify-content-center">
    <h1 class="row justify-content-center animated fadeIn">React Star Wars</h1>
  <p class="animated fadeIn">A small little website that is built with React, that pulls in data from an API of Star Wars characters, and then displays that data! It also uses an animation library. The Details are hidden and revealed using State! </p>
  <div class="imgContainer">
    <a href="https://github.com/BunchDevelopment/Starwars_React_API" target="_blank"><img src="${reactSW}" class="blur portfolioIMG" id="memoryImg"></a>
    <br />
  </div>
</div>
<br />
`;

// export default st => `<section id="gallery">
// ${st.pictures.map(pic => `<img src="${pic.url}" alt="${pic.title}">`).join("")}
// </section>`;
