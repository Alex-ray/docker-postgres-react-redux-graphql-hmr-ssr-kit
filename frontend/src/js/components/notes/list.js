import React from 'react';

export default function NotesList(props) {
    return (
        <ul className="notes-list">
            {
                props.notes.map(note => {
                    return (
                        <li key={note.id}>
                            <span>{note.text || '-- no text --'}</span>
                            <button onClick={() => props.delete(note.id)}>delete</button>
                        </li>
                    );
                })
            }
        </ul>  
    );
}