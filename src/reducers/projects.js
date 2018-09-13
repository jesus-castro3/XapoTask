import {
    SET_PROJECT_LIST,
    SET_CONTRIBUTORS
} from '../actions'

const projects = (state = [], action) => {
    switch (action.type) {
        case SET_PROJECT_LIST:
            return action.projects            
            
        default:
         return state
    }

}


export default projects