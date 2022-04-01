

// =============================================================================
// ALL ATTEMPTS
// =============================================================================
export function AllGameRowsReducer(
    allGameRows = [],
    action
) {
    switch (action.type) {
                    case "allGameRows/fill": {
                        // const oneRow = Array(action.payload.wordLength).fill(null); //!null
                        const oneRow = Array(action.payload.wordLength).fill(null); //!null
                        const oneRow2 = Array(action.payload.wordLength).fill(4); //!null
                        allGameRows = Array(3)
                            .fill(oneRow2)
                            .concat(
                                Array(2).fill(
                                    oneRow
                                )
                            );
                        // allGameRows = Array(action.payload.wordLength + 1).fill(oneRow);
                        console.log(`allGameRows`, allGameRows);
                        break;
                    }
                    case "currRowToAllRows/submit": {
                        allGameRows = [...allGameRows]; //!
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
        payload: { data, i }, //!
    };
}

// === currRow modifiers =========================================