
# 📚 Challenge Book Store

Sistema completo para gerenciamento de livros, com uma interface moderna e intuitiva no frontend e uma API robusta no backend. Desenvolvido com foco em componentização, escalabilidade e boas práticas de desenvolvimento.

---

## 🎯 Funcionalidades

### Frontend

* ✅ Interface responsiva e moderna
* ✅ Listagem de livros com busca e filtros
* ✅ Cadastro, edição e exclusão de livros
* ✅ Design com Bootstrap
* ✅ Componentes reutilizáveis e bem estruturados

### Backend

* ✅ API RESTful completa
* ✅ CRUD de livros
* ✅ Validação de dados
* ✅ Tratamento de erros
* ✅ Conexão com MySQL

### Banco de Dados

* ✅ Modelo relacional otimizado
* ✅ Tabelas para gerenciamento de livros
* ✅ Consultas eficientes

---

## 🖥️ Estrutura do Projeto

### Frontend (`challenge_book_store`)

```
challenge_book_store
┣ 📂 src
┃ ┣ 📂 components
┃ ┃ ┣ 📂 AdicionarLivros
┃ ┃ ┣ 📂 BotaoDeletar
┃ ┃ ┣ 📂 BotaoUpdate
┃ ┃ ┣ 📂 Card
┃ ┃ ┣ 📂 Footer
┃ ┃ ┣ 📂 Header
┃ ┃ ┣ 📂 ModalConfirmacao
┃ ┃ ┣ 📂 ModalEditarTitulo
┃ ┃ ┣ 📂 Pesquisa
┃ ┃ ┣ 📂 ResultadoLivros
┃ ┃ ┗ 📂 Titulo
┃ ┣ 📂 routes
┃ ┃ ┣ 📄 Home.js
┃ ┃ ┗ 📄 MinhaEstante.js
┃ ┣ 📂 services
┃ ┃ ┗ 📄 livros.js
┃ ┣ 📄 App.js
┃ ┣ 📄 index.js
┃ ┗ 📄 App.css
┣ 📄 package.json
          
```

### Backend (`challenge_book_server`)

```
📦 challenge_book_server
┣ 📂 controllers
┃ ┗ 📄 livro.js
┣ 📂 db
┃ ┗ 📄 index.js
┣ 📂 models
┃ ┗ 📄 Livro.js
┣ 📂 routes
┃ ┗ 📄 livro.js
┣ 📂 services
┃ ┗ 📄 livroService.js
┣ 📄 app.js
┣ 📄 package.json
```

---

## 🗄️ Banco de Dados

**Banco de dados:** MySQL

### Tabela `livros`

```sql
create schema bookmark;
USE bookmark;
CREATE TABLE `livros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


```

## 🚀 Como Rodar a Aplicação

### 1️⃣ Backend

```bash
git clone https://github.com/genaton/challenge_book_server.git
cd challenge_book_server
git checkout main
npm install
node app.js
```

API disponível em: (http://localhost:8000)

### 2️⃣ Frontend

```bash
git clone https://github.com/genaton/challenge_book_store.git
cd challenge_book_store
git checkout main
npm install
npm start
```

Frontend disponível em: (http://localhost:3000)

---

🔗 Endpoints da API
Método    Endpoint      Descrição
GET      /livros        Lista todos os livros
GET      /livros/:id    Retorna um livro específico
POST     /livros        Cadastra um novo livro
PATCH    /livros/:id    Atualiza um livro existente
DELETE   /livros/:id    Remove um livro
---

## 📦 Dependências Principais

**Frontend**

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-scripts": "5.0.1",
  "bootstrap": "^5.3.8",
  "axios": "^1.12.2",
  "react-router-dom": "^7.9.1"
}
```

**Backend**

```json
{
  "express": "^5.1.0",
  "mysql2": "^3.14.5",
  "cors": "^2.8.5",
  
}
```

---

## 👨‍👩‍👧‍👦 Equipe

* Genaton Alex Goncalves — [genaton@bb.com.br](mailto:genaton@bb.com.br)
* Carla Aparecida Dutra Naves de Souza Teixeira — [cadnst@gmail.com](mailto:cadnst@gmail.com)
* Elton Fabiano Uramoto — [eltonuramoto@bb.com.br](mailto:eltonuramoto@bb.com.br)
* Renan Paschoalotti — [renan.paschoalotti@bb.com.br](mailto:renan.paschoalotti@bb.com.br)
* Moises Salgado de Morais — [moisessalgado@bb.com.br](mailto:moisessalgado@bb.com.br)






