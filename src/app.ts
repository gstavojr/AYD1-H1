import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Crear el servidor de express
const app = express();

// Puerto
app.set('port', process.env.PORT || 3000);

// Middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', (req, res) =>
  res.send({
    curso: 'Analisis y Diseño 1',
    nombre: 'Elmer Gustavo Sanchez Garcia',
    carnet: 201801351,
    aux: 'Manuel de Mata',
  })
);

app.get('/hola', (req, res) =>
  res.send({
    curso: 'Analisis y Diseño 1',
    nombre: 'Elmer Gustavo Sanchez Garcia',
    carnet: 201801351,
    aux: 'Manuel de Mata',
  })
);

export default app;
