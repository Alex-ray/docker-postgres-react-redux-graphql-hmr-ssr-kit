import types from './types';
import { CALL_API } from 'redux-api-middleware';
 


export function fetchNotes() {
    return {
        [CALL_API]: {
            endpoint: '/api/notes/',
            method: 'GET',
            types: types.FETCH_NOTES.all
        }
    };
}

export function deleteNote(id) {
    return {
        [CALL_API]: {
            endpoint: `/api/notes/${id}`,
            method: 'DELETE',
            types: [
                {
                    type: types.DELETE_NOTE.REQUEST,
                    payload: () => ({id})
                },
                types.DELETE_NOTE.SUCCESS,
                types.DELETE_NOTE.FAILURE
            ]
        }
    };
}

export function createNote(data) {
    return {
        [CALL_API]: {
            endpoint: '/api/notes/',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            types: types.CREATE_NOTE.all
        }
    };
}