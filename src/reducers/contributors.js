import { SET_CONTRIBUTORS } from '../actions';

const contributors = (state = [], action) => {
    switch (action.type) {

        case SET_CONTRIBUTORS:
            return action.contributors

        default:
            return state
    }
}

export default contributors;