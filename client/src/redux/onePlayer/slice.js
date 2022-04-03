
export function OnePlayerReducer(onePlayer = {}, action) {
    switch (action.type) {
                    case "onePlayer/set": {
                        console.log(action.type);
                        // onePlayer = {...action.payload.data};
                        break;
                    }
                    case "secretWord/add": {
                        onePlayer = {...onePlayer, secretWord: [...action.payload.data]};
                        break;
                    }
    }
    return onePlayer;
}


// =============================================================================
// Actions
// =============================================================================
// --- insert actions here. snippet ACTN

export function setOnePlayer(data) {
    return {
        type: "onePlayer/set",
        payload: {data},
    };
}

export function addSecretWord(data) {
    return {
        type: "secretWord/add",
        payload: {data},
    };
}