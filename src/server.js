const express = require('express');
const currencyRates = require('./functions/currencyrates.js');
const hbs = require('hbs');
const path = require('path');


const app = express();
port = process.env.PORT || 4000;

//Bu kod static dosyaların yerini belirmekten ziyade, ayrıca app.js dosyasının da yerini express'e bildirir. Bu kod olmaksızın, index.hbs ile app.js bağlantı kuramaz.
const staticFiles = path.join(__dirname,'../public');
app.use(express.static(staticFiles));

app.set('view engine','hbs');

const hbsFiles = path.join(__dirname,'../templates/views')
app.set('views', hbsFiles);

const hbsPartialsFiles = path.join(__dirname,'../templates/partials');
hbs.registerPartials(hbsPartialsFiles);
 
app.get('',(req,res)=>{
    
    res.render('index', {
        header:"Information Tag",
        builder:'Ender DAĞDELEN',
        content:"html, CSS, bootStrap, JavaScript, Node.js",
        npmdependencies:"express:^4.17.1, hbs:^4.1.1, path:^0.12.7, request^2.88.2",
        npmdevdependencies:"nodemon ^2.0.7", 
        not:"The App Is Example Purposed, Might Exceed API Call Limit And Cause Error During A Month But Will Start Working Again Next Month And According To The API Plan $ Is The Constant Numerator"
        
    })
})
 
app.get('/currency',(req,res)=>{
    
   currencyRates(req.query.currency, (error,data) => {
        if (error) {
            res.send({error:error});
        }else{
            res.send({data:data.stockquotes})
        }
    });
    
});




app.listen(port,()=>{console.log("The Server Is ONLINE At: "+port)});


