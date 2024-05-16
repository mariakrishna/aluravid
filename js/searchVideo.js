import { connectApi } from "./connectApi.js";
import cardConstructor from "./showVideos.js";

async function searchVideos(event) {
  event.preventDefault();

  const searchData = document.querySelector("[data-search]").value;
  const search = await connectApi.searchVideos(searchData);
  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
  const list = document.querySelector("[data-lista]");
  search.forEach(element => list.appendChild(cardConstructor(element.titulo, element.descricao, element.url, element.imagem)));
  if(search.lenght == 0) {
    list.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com esse termo</h2>`
  }
}

const searchBtn = document.querySelector("[data-search-btn]");

searchBtn.addEventListener('click', event => searchVideos(event));