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

pizzaRoutes.get('/review', function(req, res){
    res.render('review');
});
pizzaRoutes.post('/review', function(req, res){
    let name: string = req.body.name as string;
    let comment: string = req.body.comment as string;
    let rating: number = parseInt(req.body.rating as string);
    res.render('results', {name, comment, rating});
});
pizzaRoutes.get('/build', function(req, res){
    res.render('build');
});
export default pizzaRoutes;
