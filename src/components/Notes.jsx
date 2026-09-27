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

    return (
        <>
            <Head />
            <input type="text" id="noteinput" placeholder="Enter your note" className="textbox" />
            <button className="addbutton" onClick={addNote}>
                Add Note
            </button>

            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>

            <Foot />
        </>
    )
}

export default Notes;