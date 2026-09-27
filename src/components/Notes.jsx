import Head from './Header';
import Foot from './Footer';
import { useState } from 'react';

function Notes() {
    const [notes, setNotes] = useState([]);

    function addNote() {
        const newNote = document.getElementById('noteinput').value;
        document.getElementById('noteinput').value = '';
        setNotes([...notes, newNote]);
    }

    function deleteNote(index) {
        const updatedNotes = notes.filter((_, i) => (i !== index));
        setNotes(updatedNotes);
    }

    function up(index) {
        if (index > 0) {
            const updatedNotes = [...notes];
            [updatedNotes[index - 1], updatedNotes[index]] = [updatedNotes[index], updatedNotes[index - 1]];
            setNotes(updatedNotes);
        }
    }

    function down(index) {
        if (index < notes.length - 1) {
            const updatedNotes = [...notes];
            [updatedNotes[index + 1], updatedNotes[index]] = [updatedNotes[index], updatedNotes[index + 1]];
            setNotes(updatedNotes);
        }
    }

    return (
        <>
            <Head />
            <input type="text" id="noteinput" placeholder="Enter your note" className="textbox" />
            <button className="addbutton" onClick={addNote}>
                Add Note
            </button>

            <ul className="notelist">
                {notes.map((note, index) => (
                    <li key={index}>
                        {note}
                        <button className="removebutton" onClick={() => deleteNote(index)}>Remove</button>
                        <button className="addbutton" onClick={() => up(index)}>up</button>
                        <button className="addbutton" onClick={() => down(index)}>down</button>
                    </li>
                ))}
            </ul>

            <Foot />
        </>
    )
}

export default Notes;