// var obj = {
//     name: "Vinse"
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj); // tells you what type the variable is
// console.log(stringObj);

// var personString = '{"name": "Vinse", "age": 36}';
// var person = JSON.parse(personString); // takes JSON and converts it back to an object, etc)
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

// originalNoteString
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json'); // only takes file name
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
