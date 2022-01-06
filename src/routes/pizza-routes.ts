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

pizzaRoutes.post('/build', function(req, res){
    let size: string = req.body.size as string;
    let toppings: number = parseInt(req.body.toppings as string);
    let gluten: boolean = Boolean(req.body.gluten as string);
    let comment: string = req.body.comment as string;
    let price: number = 0;
    let freeDelivery: string = "";
    if(!toppings){
        toppings = 0;
    }
    if(size === "small"){
        price += 7 + toppings * 0.50;
        if(gluten){
            price += 2
        }
        //res.render('build-price', {price})
        //res.render('build-price', {size, toppings, gluten, comment, price, freeDelivery});
    } else if(size === "medium"){
        price = 10 + toppings * 1;
        if(gluten){
            price += 2;
        }
        //res.render('build-price', {size, toppings, gluten, comment, price, freeDelivery});
    } else if(size === "large"){
        price = 12 + toppings * 1.25;
        if(gluten){
            price += 2;
        }
       // res.render('build-price', {size, toppings, gluten, comment, price, freeDelivery});
    }
    if(price >= 15.00){
        freeDelivery = "Because your order meets the $15.00 minimum, you get FREE DELIVERY!"
    }
    res.render('build-price', {size, toppings, gluten, comment, price, freeDelivery});
});
export default pizzaRoutes;
