const fln = "wordLength.js";
///////////////////////////////////

export function WordLengthReducer(wordLength = {length: 5}, action) {
    switch (action.type) {
        case "wordLength/config": {
            // console.log(action.type);
            wordLength = { ...wordLength, length: action.payload.value };
            break;
        }
    }
    console.log(`${fln} >> wordLength`, wordLength);
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