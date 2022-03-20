const mongoose = require ('mongoose')

mongoose
    .connect('mongodb://localhost/mean-estudiantes', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then((db) => console.log("Db is connected"))
    .catch((err) => console.error(err));



