

// =============================================================================
// ALL ATTEMPTS
// =============================================================================
export function AllAttemptsReducer(
    allAttempts = [],
    action
) {
    switch (action.type) {
                    case "allAttempts/fill": {
                        const oneRow = Array(action.payload.gameLength).fill(null);
                        allAttempts = Array(action.payload.gameLength + 1).fill(oneRow);
                        break;
                    }
                    case "allAttempts/add": {
                        // console.log(action.type);
                        break;
                    }
                    case "submittedAttemp/added": {
                        allAttempts = [...allAttempts, ]; //!
                        break;
                    }
    }
    return allAttempts;
}

// =============================================================================
// Actions
// =============================================================================
// --- insert actions here. snippet ACTN

export function fillAllAttempts(gameLength) {
    return {
        type: "allAttempts/fill",
        payload: { gameLength },
    };
}

export function addToAllAttempts(data) {
    return {
        type: "allAttempts/add",
        payload: { data },
    };
}

export function addSubmittedAttemp(oneAttemp, i) {
    return {
        type: "submittedAttemp/added",
        payload: { data: oneAttemp, index:i }, //!
    };
}
