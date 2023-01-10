let bookModel = require('./model');

//Controllers/Request handlers
const listBookController =(req,res)=> {
    // const books = bookModel.all();
    const {id} = req.params

    if(id){
        bookModel.find({_id: id}).then(books=> {
            res.json({data: books});
            }).catch(err=> console.log(err));
       
    }
    else {
        bookModel.find().then(books=> {
            res.json({data: books});
            }).catch(err=> console.log(err));
    }
   
}

const createBookController =(req,res)=> {
    const {title,author,description} = req.body

    const book = new bookModel({title,author,description});
    book.save().then(result => {
        res.json({message: "create successful", data:book})

    }).catch(error => console.log(error));

}

const updateBookController =(req,res)=> {
    const {id,title,author,description} = req.body

     bookModel.find({_id: id}).then(books => {
        if(books.length > 0){
            books[0].author = author;
            books[0].title = title;
            books[0].description = description
        

            books[0].save();
            res.json({message: "update successful", data: books[0]})
        }

        res.json({message: "Document cannot be found"})

     }).catch(err=> console.log(err))
    // const updatedbook = bookModel.update({title,author,description})

    // res.json({message: "update successful", data: updatedbook})
}

const deleteBookController =(req,res)=> {
    const {id} = req.body
    bookModel.findByIdAndRemove(id).then(deletedbook => {
        if(deletedbook) {
            res.json({message: "book deleted", data: deletedbook})
            return;
        }
        res.json ({message: "book not found"})
    })
}



module.exports = {
    listBookController,
    createBookController,
    updateBookController,
    deleteBookController
}