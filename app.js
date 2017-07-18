const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
            describe: 'Title of note',
            demand: true, // makes this mandatory for user, needs to have a title
            alias: 't' //so you don't have to do --title, can use -t (single flag)
};
const bodyOptions = {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
};

const notes = require('./notes.js');
const argv = yargs
    .command('add', 'Add a new note', { // command, description, object // for the 'add' command, setting title/body property:values
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Removing a note', {
        title: titleOptions
    })
    .help() //gives you help option in terminal for a command
    .argv; // calling .argv on command()

// var command = process.argv[2];
var command = argv._[0]; // same as above code with command
// console.log("Process:", process.argv); //arguments array or arguments vector
console.log("Command: ", command);
console.log("Yargs", argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Your note has been added!');
        notes.logNote(note);
    }
    else { //this is if undefined comes back - undefined will fail the if (note) condition
        console.log('Sorry, this is a duplicate note!');
    }
}
    else if (command === 'list') {
        notes.getAll();
        var allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach((note) => notes.logNote(note));
    }
    else if (command === 'read') {
        var note = notes.readNote(argv.title);
        if (note) {
            console.log('Note found!');
            notes.logNote(note);
        }
        else {
            console.log('Note not found!');
        }

    }
    else if (command === 'remove') {
        // notes.removeNote(argv.title);
        var noteRemoved = notes.removeNote(argv.title);
        var message = noteRemoved ? 'Note was removed' : 'Note not found'; //ternary operator -- condition ? truthy return : falsey return
        console.log(message);
    }
    else {
        console.log('Command not recognized');
    }
// var user = os.userInfo();

// var result = notes.addNote();
// console.log(result);

// console.log("Result:", notes.add(1,3));

// console.log(_.isString(true));
// console.log(_.isString("Andrew"));

// var filteredArray = _.uniq(["Mike"]);
// console.log(filteredArray);
// console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log("Unable to write to file!");
//     }
// });

