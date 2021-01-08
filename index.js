var mongoose = require('mongoose');
 
var Author = require('./author');
var Book = require('./book');
var bookok = 'Libro guardado correctamente';
mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;
     
    console.log('Conexión exitosa');
     
    var javiAuthor = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Javier',
            lastName: 'Mateos'
        },
        biography: 'Javier estudia en el los Salesianos de San Pedro',
        twitter: 'https://twitter.com/javiermateos/',
        facebook: 'https://www.facebook.com/javiermateos/'
    });
 
    javiAuthor.save(function(err) {
        if (err) throw err;
         
        console.log('Autor guardado correctamente');
         
        var firstBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: 'Como aprobar 2ºDAM',
            author: javiAuthor._id,
            ratings:[{
                summary: 'Consulta el repositorio de Luismi'
            }]
        });
         
        firstBook.save(function(err) {
            if (err) throw err;
         
            console.log(bookok);
        });
         
        var secondBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: 'Como aprobar 1ºDAM',
            author: javiAuthor._id
        });
         
        secondBook.save(function(err) {
            if (err) throw err;
         
            console.log(bookok);
        });
    });
});