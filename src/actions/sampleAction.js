export const RETRIEVE_USERLIST = 'RETRIEVE_USERLIST';

export function retrieveUserlist(userList) {
return{type: RETRIEVE_USERLIST, userList};
}

export function fetchUserList(url) {
console.log('fetch userList' + url);

return (dispatch) => {
    return fetch(url, {mode: 'cors'})
    .then(
        response => response.json(),
        error => console.log('an error occurred',error)
    )
    .then((json) => {
         console.dir(json);
         dispatch(retrieveUserlist(json));
    });
};
}