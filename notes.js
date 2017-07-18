console.log("Starting notes.js");

// console.log(module);
// module.exports.addNote =  () => {  //ES6 arrow functions
//     console.log('addNote');
//     return 'New Note';
// }

// module.exports.add = (a,b) => {
//     return a+b;
// }

const fs = require('fs');

var fetchNotes = () => {
try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString); // this will prevent the notes from being overwritten
    // so more can be added/appended
    }
    catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

var addNote = (title, body) => {
    // console.log('Adding note', title, body);
    // var notes = [];
    var notes = fetchNotes();
    var note = {
        title: title,
        body // same as body: body
    };
    // moved this try/catch block to above since it'll
    // be used in every functin
    // try {
    //     var notesString = fs.readFileSync('notes-data.json');
    //     notes = JSON.parse(notesString); // this will prevent the notes from being overwritten
    //     // so more can be added/appended
    // }
    // catch (e) {

    // }
    // var duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // }); // same as below ES6 syntax
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        // fs.writeFileSync('notes-data.json', JSON.stringify(notes))
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
    return fetchNotes();
};

var readNote = (title) => {
    console.log("Reading title of note:", title);
    //fetch
    var notes = fetchNotes();
    //filter
    var filteredNotes = notes.filter((note) => note.title === title);
        return filteredNotes[0];
    };

var removeNote = (title) => {
    console.log("Removing note:", title);
    // fetch notes
    var notes = fetchNotes();
    //filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title); // can only write it like this is there's only 1 statement in curly braces
    // save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length; // returns true or false to the function calling it in app.js
}

var logNote = (note) => {
    //Break on this line and use repl to output note
    // debugger;
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

}

module.exports = {
    addNote: addNote,   //could also do just addNote like the ones below (ES6 syntax)
    getAll,
    readNote,
    removeNote,
    logNote
};