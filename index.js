import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
// import axios from "axios";
// import {makeAPI} from './components/views/Bio'
const router = new Navigo(window.location.origin);
router
  .on({
    ":page": params => render(state[params.page]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;
  addNavEventListeners();
  router.updatePageLinks();
}
render(state.Home);

function addNavEventListeners() {
  document.querySelectorAll("nav a").forEach(navLink => {
    navLink.addEventListener("click", event => {
      event.preventDefault();
      //render(state[event.target.textContent]);
      let page = event.target.textContent;
      let pieceOfState = state[page];
      render(pieceOfState);
    });
  });
}

//add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
// array of park pictures for gallery
const parkPictures = [
  {
    url: "",
    title: ""
  },
  {
    url: "",
    title: ""
  }
];
// populating gallery with pictures
const gallerySection = document.querySelector("#gallery");
parkPictures.forEach(pic => {
  let img = document.createElement("img");
  img.src = pic.url;
  img.alt = pic.title;
  gallerySection.appendChild(img);
});
// handling of form submission
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  Array.from(event.target.elements).forEach(el => {
    console.log("Input Type: ", el.type);
    console.log("Name: ", el.name);
    console.log("Value: ", el.value);
  });
});
