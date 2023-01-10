const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { listBookController, createBookController, updateBookController, deleteBookController,  } = require('./controller')
const server = express();
//middlewares
server.use(bodyParser.json())

//routes
server.get('/books/:id?',listBookController)
server.post('/book', createBookController)
server.put('/book',updateBookController)
server.delete('/book',deleteBookController)


mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Winifred:winifred@cluster1.nvs8vvu.mongodb.net/?retryWrites=true&w=majority",
    // { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(res => {
        server.listen(6000, () => console.log('Server is ready'))
    }).catch(err => console.log(err))

//Running the server
