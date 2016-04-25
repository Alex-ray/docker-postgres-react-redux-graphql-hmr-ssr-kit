import types from '../actions/types';

const initial_state = []

export default function (state=initial_state, action) {
    switch (action.type) {
        case types.FETCH_NOTES.SUCCESS:
            return action.payload;
        case types.CREATE_NOTE.SUCCESS:
            return [...state, action.payload];
        case types.DELETE_NOTE.REQUEST:
            return state.filter(note => note.id !== action.payload.id);
        default:
            return state;
    }
}