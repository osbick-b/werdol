
// =============================================================================
// correctWord
// =============================================================================

export function CorrectWordReducer(correctWord = [], action) {
    switch (action.type) {
                    case "correctWord/set": {
                        console.log(`action.payload.data`, action.payload.data);
                        correctWord = [...action.payload.data.toUpperCase()];
                        break;
                    }
    }
    return correctWord;
}


// =============================================================================
// Actions
// =============================================================================
// --- insert actions here. snippet ACTN

export function setCorrectWord(data) {
    return {
        type: "correctWord/set",
        payload: {data},
    };
}

