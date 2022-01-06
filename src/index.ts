import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes/app-routes';
import pizzaRoutes from './routes/pizza-routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pizzaRoutes);
//app.use('/pizza-routes', pizzaRoutes);



app.listen(port, () => console.log(`Listening on port ${port}`));