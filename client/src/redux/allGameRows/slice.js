

// =============================================================================
// ALL GAME ROWS
// =============================================================================
export function AllGameRowsReducer(
    allGameRows = [],
    action
) {
    switch (action.type) {
                    case "allGameRows/fill": {
                        const oneRow = Array(action.payload.wordLength).fill(null); //!null
                        allGameRows = Array(action.payload.wordLength + 1).fill(oneRow);
                        break;
                    }
                    case "currRowToAllRows/submit": {
                        const allRowsSoFar = [...allGameRows];
                        allRowsSoFar.splice(action.payload.i, 1, action.payload.data);
                        allGameRows = [...allRowsSoFar]; 
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


export function submitCurrRowToAllRows(data, i) {
    return {
        type: "currRowToAllRows/submit",
        payload: { data, i },
    };
}

// === currRow modifiers =========================================