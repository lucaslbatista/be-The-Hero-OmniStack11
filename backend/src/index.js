const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * nmm install nodemon -D (só em desenvolvimento)
 * alterar script no package.json 
 * 
 * Tipo de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota apos "?"(filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos (localhost:3333/users/:id)
 * Request Body: corpo da requisição
 */


app.listen(3333);