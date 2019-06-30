var mongoose = require('mongoose');
var schema  = require('./schema');
var Book = mongoose.model('Book2',schema,'books2');
var book = new Book({
    title:'Los secretos del inmortal nicolas flamel',
    author:'Michael Scott',
    body:'nose ',
    comments:{
        body:'La muerte no me espanta y las enfermedades ni siquiera pueden afectarme',
        date:2019-02-26
    },
    hidden:true,
    meta:{
        vote: 2,
        favs:1
    }
});

var book22 = new Book({
    title:'Buenos dias princesa',
    author:'Blue Jeans',
    body:'nose ',
    comments:{
        body:'Son chicos incomprendidos a los que nadie entendia',
        date:2018-02-12
    },
    hidden:true,
    meta:{
        vote: 5,
        favs:1
    }
});

book.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved");
});//guardar

book22.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved");
});//guardar


Book.find({},function(error,docs){
    if(error){
        console.log(error);
        process.execArgv(1);
    }
    console.log("------- Consulta General -------");
    console.log(docs);
});//Consulta general

Book.find({title: "Los secretos del inmortal nicolas flamel"},
    function(error,docs){
    if(error){
        console.log(error);
        process.execArgv(1);
    }
    console.log("------- Consulta con restriccion -------");
    console.log(docs);
});//Consulta general

Book.update({_id:'5d19272ecacf6f362830ce73'},{$set:{body:'Libro sobre drama'}},
    function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
    console.log(" -- Actualizado --");
    console.log(docs);
    process.exit(0);

});// Update

Book.findByIdAndRemove({_id:'5d19272ecacf6f362830ce71'},
    function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log(" -- Eliminado --");
        console.log(docs);
        process.exit(0);
});


mongoose.connect('mongodb://localhost:27017/tarea6');