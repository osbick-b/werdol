const initialState = {
    length: 5,
    availableWords: [],
};

export function WordLengthReducer(wordLength = initialState, action) {
    switch (action.type) {
                    case "wordLength/config": {
                        wordLength = { ...wordLength, length: action.payload.value };
                        break;
                    }
                    case "availableWords/define": {
                        wordLength = {...wordLength, availableWords: action.payload.data};
                        break;
                    }
    }
    return wordLength;
}

// =============================================================================
// Actions
// =============================================================================

// --- insert actions here. snippet ACTN
export function configWordLength(value) {
    return {
        type: "wordLength/config",
        payload: { value },
    };
}

export function defineAvailableWords(data) {
    return {
        type: "availableWords/define",
        payload: { data },
    };
}