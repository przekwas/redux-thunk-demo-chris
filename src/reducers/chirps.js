import { ADD_CHIRP } from '../actions/types';

const initialState = {
    list: [1, 2, 3, 4, 5],
    derp: 'herp'
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_CHIRP:
            return { ...state, list: [...state.list, action.payload] }
        default:
            return state;
    }
}

