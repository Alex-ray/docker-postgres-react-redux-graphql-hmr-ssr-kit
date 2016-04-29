import React from 'react';
import { Table, Button } from 'elemental';

export default function NotesList(props) {
    return (
        <Table className="notes-list">
            <thead>
                <tr>
                    <th>Text</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.notes.map(note => {
                        return (
                            <tr key={note.id}>
                                <td>{note.text || '-- no text --'}</td>
                                <td>
                                    <Button className="delete" type="danger" onClick={() => props.delete(note.id)}>delete</Button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>  
    );
}