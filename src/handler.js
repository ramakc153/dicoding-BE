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
        console.log(notes)
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

const getAllNotesHandler =(request,h) =>{
    const response = h.response({
        status : 'success',
        data : {
        notes,
        }
    })
    response.code(200)
    return response
}

const getNotesByIdHandler = (request,h)=>{
    const {id} = request.params;
    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined){
        console.log('confirm')
        const response = h.response({
            status : 'success',
            data : {
                note,
            }
        })
        response.code(200)
        return response
    }
    const response = h.response({
        status : 'failed',
        message : 'No notes with specific Id'
    })
    response.code(404)
    return response

}

const updateNotesByIdHandler = (request,h)=>{
    const {id} = request.params
    const {title,tags, body} = request.payload
    const updatedAt = new Date().toISOString()
    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1){
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        }
        const response = h.response({
            status : "success",
            message : "Notes update success"
        })
        response.code(200)
        return response
    }
    const response = h.response({
        status : "failed",
        message : "notes update failed"
    })
    response.code(404)
    return response
}

const deleteNotesByIdHandler = (request,h)=>{
    const {id} = request.params
    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1){
        notes.splice(index,1)
        const response = h.response({
            status : "success",
            message : 'notes deleted'
        })
        response.code(200)
        return response
    }
    const response = h.response({
        status : "failed",
        message : 'cannot find notes'
    })
    response.code(404)
    return response


}

module.exports = {addNoteHandler, getAllNotesHandler, getNotesByIdHandler,updateNotesByIdHandler,deleteNotesByIdHandler};


