
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
📦 src
 ┣ 📂 components          # Componentes reutilizáveis
 ┃ ┣ 📄 Header.js
 ┃ ┣ 📄 Footer.js
 ┃ ┣ 📄 LivroCard.js
 ┃ ┣ 📄 LivroForm.js
 ┃ ┗ 📄 LivroList.js
 ┣ 📂 pages               # Páginas da aplicação
 ┃ ┣ 📄 Home.js
 ┃ ┣ 📄 BookList.js
 ┃ ┣ 📄 AddBook.js
 ┃ ┗ 📄 EditBook.js
 ┣ 📂 services            # Serviços de API
 ┃ ┗ 📄 api.js
 ┣ 📂 assets              # Imagens, ícones e estilos
 ┃ ┣ 📂 images
 ┃ ┗ 📂 styles
 ┣ 📂 utils               # Utilitários e helpers
 ┣ 📄 App.js              # Componente principal
 ┗ 📄 index.js            # Ponto de entrada do React
```

### Backend (`challenge_book_server`)

```
📦 challenge_book_server
 ┣ 📂 routes            # Rotas da API
 ┃ ┗ 📄 livrosRoutes.js
 ┣ 📂 controllers       # Lógica de negócios
 ┃ ┗ 📄 livrosController.js
 ┣ 📂 models            # Modelos de dados
 ┃ ┗ 📄 livro.js
 ┣ 📂 config            # Configurações
 ┃ ┗ 📄 db.js
 ┣ 📂 middleware        # Middlewares
 ┃ ┗ 📄 errorHandler.js
 ┣ 📄 app.js            # Aplicação principal
 ┗ 📄 livros.json       # Dados de exemplo
```

---

## 🗄️ Banco de Dados

**Banco de dados:** MySQL

### Criação do banco e usuário

```sql
CREATE DATABASE IF NOT EXISTS book_store;
CREATE USER 'book_user'@'localhost' IDENTIFIED BY 'sua_senha_segura';
GRANT ALL PRIVILEGES ON book_store.* TO 'book_user'@'localhost';
FLUSH PRIVILEGES;
```

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

### Variáveis de ambiente

```env
DB_HOST=localhost
DB_USER=book_user
DB_PASSWORD=sua_senha_segura
DB_NAME=book_store
DB_PORT=3306
PORT=3001
REACT_APP_API_URL=http://localhost:3001/api
```

---

## 🚀 Como Rodar a Aplicação

### 1️⃣ Backend

```bash
git clone https://github.com/genaton/challenge_book_server.git
cd challenge_book_server
npm install
cp .env.example .env
# Configure o .env com as variáveis do banco
npm run dev    # modo desenvolvimento
# ou
npm start      # modo produção
```

API disponível em: [http://localhost:3001](http://localhost:3001)

### 2️⃣ Frontend

```bash
git clone https://github.com/genaton/challenge_book_store.git
cd challenge_book_store
npm install
cp .env.example .env
# Ajuste REACT_APP_API_URL=http://localhost:3001/api
npm start
```

Frontend disponível em: [http://localhost:3000](http://localhost:3000)

### 3️⃣ Testes

* Frontend: `npm test`
* Backend: `npm test`

---

## 🔗 Endpoints da API

| Método | Endpoint       | Descrição                 |
| ------ | -------------- | ------------------------- |
| GET    | /api/books     | Lista todos os livros     |
| GET    | /api/books/:id | Obtém um livro específico |
| POST   | /api/books     | Cria um novo livro        |
| PUT    | /api/books/:id | Atualiza um livro         |
| DELETE | /api/books/:id | Remove um livro           |

---

## 📦 Dependências Principais

**Frontend**

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "bootstrap": "^5.3.0",
  "axios": "^1.4.0",
  "react-router-dom": "^6.14.0"
}
```

**Backend**

```json
{
  "express": "^4.18.2",
  "mysql2": "^3.6.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "helmet": "^7.0.0"
}
```

---

## 👨‍👩‍👧‍👦 Equipe

* Genaton Alex Goncalves — [genaton@bb.com.br](mailto:genaton@bb.com.br)
* Carla Aparecida Dutra Naves de Souza Teixeira — [cadnst@gmail.com](mailto:cadnst@gmail.com)
* Elton Fabiano Uramoto — [eltonuramoto@bb.com.br](mailto:eltonuramoto@bb.com.br)
* Renan Paschoalotti — [renan.paschoalotti@bb.com.br](mailto:renan.paschoalotti@bb.com.br)
* Moises Salgado de Morais — [moisessalgado@bb.com.br](mailto:moisessalgado@bb.com.br)

---

## 🤝 Contribuição

1. Faça o fork do projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

MIT — veja o arquivo LICENSE para mais detalhes.





