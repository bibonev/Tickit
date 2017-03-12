export function correctCredentials(user){
    return {
        type: "CORRECT_CREDENTIALS",
        user: user
    };
}

export function clearCredentials(){
    return {
        type: "CLEAR_CREDENTIALS"
    };
}

export function loginUsingCredentials(username, password){
    return (dispatch, getState) => {
        let url = `http://localhost:${port}/api/v1/users/?usenrame=`;
        if(username && username != "" 
            && password && password != "") {
                url += `${username}&password=${password}`;

                $.get(url, data => {
                    dispatch(correctCredentials(data));
                });
            } else {
                dispatch(clearCredentials);
            }
    };
}