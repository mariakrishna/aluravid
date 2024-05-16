import { connectApi } from "./connectApi.js";
const form = document.querySelector('[data-form]');

async function createVideo(event) {
  event.preventDefault();

  const imagem = document.querySelector('[data-img]').value;
  const url = document.querySelector('[data-url]').value;
  const titulo = document.querySelector('[data-titulo]').value;
  const descricao = Math.floor(Math.random() * 10).toString();
  try { 
  await connectApi.createVideo(titulo, descricao, url, imagem);

  window.location.href = '../pages/envio-concluido.html'
  } catch (e) {
    alert(e)
  }
}

form.addEventListener('submit', event => createVideo(event));