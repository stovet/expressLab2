import express from 'express';
const pizzaRoutes = express.Router();

pizzaRoutes.get('/', function(req, res){
    res.render('home')
});

pizzaRoutes.get('/pizza-routes', function(req, res){
    let name: string = req.query.name as string;
    let price: number = parseFloat(req.query.price as string);
    
    res.render('specialty', {name, price})
});

export default pizzaRoutes;
