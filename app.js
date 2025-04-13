import express from 'express';
import database from './db/conn.js';
import router from './routes/CustomerRoutes.js';
import { Pool } from './models/PoolModel.js';
import { Product } from './models/ProductModel.js';
import { Messurement } from './models/MeasurementModel.js';
import { Recommendation } from './models/RecommendationModel.js';

const app = express();
const PORT = 3333;

app.use(express.json());

app.use("/aqua/customer", router);

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});

async function sincronizadoBancoDeDados() {
    try {
        await database.authenticate();
        console.log('Conectado ao Banco de Dados');
    
        // await database.sync({ alter: true }); // ajusta as tabelas sem apagar dados
        // console.log('📦 Modelo sincronizado com o banco.');
    
        await database.sync({ force: true });
        console.log('Tabela "usuarios" criada (se não existir).');
        
    } catch (error) {
        console.error('Erro na conexão com o Banco de Dados:', error);
    }
}

sincronizadoBancoDeDados();
