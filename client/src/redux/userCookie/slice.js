// =============================================================================
// USER COOKIE
// =============================================================================

export function UserCookieReducer(userCookie = {}, action) {
    switch (action.type) {
                    case "userCookie/set": {
                        // console.log(action.type);
                        // userCookie = = {};
                        break;
                    }
                    // case "secretWord/add": { 
                    //     userCookie = {...userCookie, secretWord: [...action.payload.data]};
                    //     break;
                    // }
    }
    return userCookie;
}


// =============================================================================
// Actions
// =============================================================================
// --- insert actions here. snippet ACTN

export function setUserCookie(data) {
    return {
        type: "userCookie/set",
        payload: {data},
    };
}

// export function addSecretWord(data) { //? -- moved to onePlayerReduc
//     return {
//         type: "secretWord/add",
//         payload: {data},
//     };
// }