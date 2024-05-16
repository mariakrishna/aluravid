async function videosList() {
  const connection = await fetch('http://localhost:3000/videos');
  const connectionConverted = await connection.json()
  
  return connectionConverted;
}

async function createVideo(titulo, descricao, url, imagem) {
  const connection = await fetch('http://localhost:3000/videos', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  });
  if(!connectApi.ok) {
    throw new Error("Não foi possível enviar o vídeo")
  }
  const connectionConverted = await connection.json();
  return connectionConverted;
}

async function searchVideos(searchTerm) {
  const connection = await fetch(`http://localhost:3000/videos?q=${searchTerm}`)
  const connectionConverted = await connection.json();

  return connectionConverted
}

export const connectApi = {
  videosList,
  createVideo,
  searchVideos
}