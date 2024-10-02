// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importar módulos necessários
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Outros imports podem ser adicionados aqui

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado!'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Definir rotas
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Configurar porta e iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
