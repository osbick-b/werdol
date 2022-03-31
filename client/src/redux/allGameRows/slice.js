

// =============================================================================
// ALL ATTEMPTS
// =============================================================================
export function AllGameRowsReducer(
    allGameRows = [],
    action
) {
    switch (action.type) {
                    case "allGameRows/fill": {
                        const oneRow = Array(action.payload.wordLength).fill(null);
                        allGameRows = Array(action.payload.wordLength + 1).fill(oneRow);
                        break;
                    }
                    case "allGameRows/add": {
                        // console.log(action.type);
                        break;
                    }
                    case "submittedRow/added": {
                        allGameRows = [...allGameRows, ]; //!
                        break;
                    }
    }
    return allGameRows;
}

// =============================================================================
// Actions
// =============================================================================
// --- insert actions here. snippet ACTN

export function fillAllGameRows(wordLength) {
    return {
        type: "allGameRows/fill",
        payload: { wordLength },
    };
}

export function addToAllGameRows(data) {
    return {
        type: "allGameRows/add",
        payload: { data },
    };
}

export function addSubmittedRow(oneAttemp, i) {
    return {
        type: "submittedRow/added",
        payload: { data: oneAttemp, index:i }, //!
    };
}
