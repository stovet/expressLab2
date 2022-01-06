import express from 'express';
const routes = express.Router();

routes.get('/', function(req, res){

    res.render('home')
});

export default routes;