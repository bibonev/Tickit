const INITIAL_CREDENTIALS = {
    username: "",
    password: "",
    logged: {
        user: {},
        loggedIn: false
    }
};

export const credentials = (state=SUGGESTIONS_INITIAL, action) => {
    switch (action.type) {
        case 'CORRECT_CREDENTIALS':
            return Object.assign({}, state, {
                logged: {
                    user: action.user,
                    loggedIn: false
                }
            });
        case 'CLEAR_CREDENTIALS':
            return Object.assign({}, state, {
                username: "",
                password: "",
                logged: {
                    user: {},
                    loggedIn: false
                }
            });
        default:
            return state;
    }
};
