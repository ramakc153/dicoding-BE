const {nanoid} = require('nanoid');
const notes = require('./notes')
const addNoteHandler = (request,h) =>{
    const {title, tags, body} = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt
    };

    notes.push(newNote)

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess){
        const response =  h.response({
            status : 'success',
            message : 'Notes successfully added',
            data : {
                noteId : id
            }
        })
        response.code(201)
        console.log('add notes success')
        return response
    }

    const response = h.response({
        status : 'failed',
        message : "add notes failed"
    })
    response.code(500);
    console.log('add notes failed')
    return response

};

module.exports = {addNoteHandler};


