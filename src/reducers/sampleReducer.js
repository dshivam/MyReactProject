import {RETRIEVE_USERLIST} from '../actions/sampleAction';

export function users(state = [],action) {
console.dir('users' + action.type);
console.dir(action);

switch(action.type) {

    case(RETRIEVE_USERLIST):
    console.log('in reducer');
    console.dir(action);

    return Object.assign({}, state, {userList: action.userList});

    default:
            return state;
}
}