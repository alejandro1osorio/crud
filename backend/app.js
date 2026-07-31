import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import clienteRoutes from './routes/clienteRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import cabezaFacturaRoutes from './routes/cabezaFacturaRoutes.js';
import detalleFacturaRoutes from './routes/detalleFacturaRoutes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API CRUD Clientes funcionando correctamente'
    });
});

// Rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/cabeza-factura', cabezaFacturaRoutes);
app.use('/api/detalle-factura', detalleFacturaRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});