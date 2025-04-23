import express from 'express';
import bodyParser from 'body-parser';
import database from './db/conn.js';
import customerRoutes from './routes/CustomerRoutes.js';
import poolRoutes from './routes/PoolRoutes.js';
import measurementRoutes from './routes/MeasurementRoutes.js';
import productRoutes from './routes/ProductRoutes.js';
import recommendationRoutes from './routes/RecommendationRoutes.js';

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(bodyParser.json());

app.use("/aqua/customer", customerRoutes);
app.use("/aqua/pool", poolRoutes);
app.use("/aqua/measurement", measurementRoutes);
app.use("/api", measurementRoutes);
app.use("/aqua/product", productRoutes);
app.use("/aqua/recommendation", recommendationRoutes);


// conexão com ESP32
// app.post("/api/valor", (req, res) => {
//     const  { ph, raw } = req.body;

//     if (ph && raw) {
//         console.log(`📥 pH recebido: ${ph.toFixed(2)} | Raw: ${raw}`);
//         res.status(200).send('OK');
//     } else {
//         console.log("❌ Dados inválidos recebidos:", req.body);
//         res.status(400).send('Dados inválidos');
//     };
// });

console.log("TESTE")
app.post('/api/ph', (req, res) => {
    const { ph, raw } = req.body;

    if (ph && raw) {
      console.log(`📥 pH recebido: ${ph.toFixed(2)} | Raw: ${raw}`);
      res.status(200).send('OK');
    } else {
      console.log("❌ Dados inválidos recebidos:", req.body);
      res.status(400).send('Dados inválidos');
    }
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});

async function sincronizadoBancoDeDados() {
    try {
        await database.authenticate();
        console.log('Conectado ao Banco de Dados');
    
        // await database.sync({ alter: true }); // ajusta as tabelas sem apagar dados
        console.log('📦 Modelo sincronizado com o banco.');
    
        // await database.sync({ force: true });
        // console.log('Tabela "usuarios" criada (se não existir).');
        
    } catch (error) {
        console.error('Erro na conexão com o Banco de Dados:', error);
    }
}

sincronizadoBancoDeDados();
