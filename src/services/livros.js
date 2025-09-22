import axios from "axios";

const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"});

async function getLivros(){
    const response = await livrosAPI.get('/');

    return response.data;
}
async function deleteLivro(id) {
  const response = await livrosAPI.delete(`/${id}`);
  return response.status === 200;
}

async function updateLivro(id, novoTitulo) {
  const response = await livrosAPI.patch(`/${id}`, { titulo: novoTitulo });
  return response.status === 200;
}




export {
    getLivros,
    deleteLivro,
    updateLivro
}