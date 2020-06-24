export default st => `
<main>
  <p id= "info">${st.paragraph.map(info => `${info.text}`)}</P>
</main>
  `;
