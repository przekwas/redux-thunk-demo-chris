import { ADD_CHIRP } from './types';

// export const addChirp = () => async dispatch => {
//     let chirp = 'test?'
// 	setTimeout(() => {
//         dispatch({
//             type: ADD_CHIRP,
//             payload: chirp
//         });
//     }, 3000);
// };

export function addChirp(chirp) {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({
                type: ADD_CHIRP,
                payload: chirp
            });
        }, 3000);
    }
}
