const memory = require("./../../assets/BeeTreeHoursSign.jpg");
const pywebsite = require("./../../assets/BeeTreeLakeSign.jpg");
const reactSW = require("./../../assets/BeeTreeDeck.jpg");

export default () => `
<section id="galleryBorder">
  <h1>Bee Tree Hours</h1>
  <p>This is Bee Tree Park hours and rules.</p>
    <a><img class="image" src="${memory}"></a>
<br />
    <h1>Bee Tree Lake</h1>
  <p>This is some information on Bee Tree Lake.</p>
    <a><img class="image" src="${pywebsite}"></a>
<br />
    <h1>Bee Tree Deck</h1>
  <p>This is a deck on the other side of Bee Tree Park from the lake overlooking the Mississippi River.</p>
    <a><img class="image" src="${reactSW}"></a>
<br /></section>
`;

// export default st => `<section id="gallery">
// ${st.pictures.map(pic => `<img src="${pic.url}" alt="${pic.title}">`).join("")}
// </section>`;
