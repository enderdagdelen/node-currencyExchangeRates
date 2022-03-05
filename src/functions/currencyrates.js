const request = require('request');

const apiKey="x";


//Source currrency available on just basic and higher plans
//Currency Conversions are just available with basic and higher plans
const currencyRates = (currency="", callback)=>{

    request({url:"http://api.currencylayer.com/live?access_key="+apiKey+"&currencies="+currency, json:true},(error,response)=>{
        if (error) {
            callback(error,undefined);
            
        } else if(response.body.success===false && response.body.error.code===101) {

            callback(undefined, {Error:"Missing Access Key"});

        }else if(response.body.success===false && response.body.error.code===202){
            
            callback(undefined, {Error:"You Have Provided One or More Invalid Currencies"});

        }else{

            callback(undefined, {stockquotes:response.body.quotes});
        }

    });
};


//Yukarıda yazdığpımız callbacklerde önemli olan buradaki gibi çağıröa şeklidir.
/* currencyRates('TRY', (error,data)=>{
    console.log('error: ',error);
    console.log('data: ',data);
}); */


module.exports=currencyRates;
