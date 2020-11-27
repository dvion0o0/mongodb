const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/new", {useUnifiedTopology:true, useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name:"String",
    rating:"Number",
    review:"String"
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
name:"Apple",
rating:5,
review:"I love this fruit"
});

const kiwi = new Fruit ({
    name: "Kiwi",
    rating: 4,
    review:"Very much nutrient fruit"
});

const banana = new Fruit ({
    name:"Banana",
    rating:3,
    review:"Gives high ammount of pottasium"
});


// Fruit.insertMany([fruit,kiwi,banana], (err) => {
//     if(err) throw err;
//    console.log("saved");
// });

Fruit.find((err,res) =>{
    if(err){
        console.log(err);
    }else{
        res.forEach((fruit) =>{
            console.log(fruit.name);
        });
    }
    mongoose.connection.close();
});