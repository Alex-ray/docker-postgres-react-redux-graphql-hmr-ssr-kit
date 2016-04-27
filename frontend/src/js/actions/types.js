const types = {
    FETCH_NOTES: 'async',
    DELETE_NOTE: 'async',
    CREATE_NOTE: 'async'
}

/*
transforms each value:

{
    FOO: null,
    BAR: 'async'
}

becomes

{
    FOO: 'FOO',
    BAR: {
        REQUEST: 'BAR_REQUEST',
        SUCCESS: 'BAR_SUCCESS',
        FAILURE: 'BAR_FAILURE',
        all: ['BAR_REQUEST' 'BAR_SUCCESS', 'BAR_FAILURE']
    }
}

*/


Object.keys(types).forEach(key => {
    if (types[key] === 'async') {
        types[key] = {
            all: []
        };
        ['REQUEST', 'SUCCESS', 'FAILURE'].forEach(type => {
            const full_type = `${key}_${type}`;
            types[key][type] = full_type;
            types[key].all.push(full_type);
        });
    } else if (types[key] === null) {
        types[key] = key;
    } else {
        throw new Error('type value must be "async" or null');
    }
});

export default types;