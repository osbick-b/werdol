export function CurrRowReducer(currRow = [], action) {
    switch (action.type) {
                    case "LetterInRow/add": {
                        currRow = [...currRow, action.payload.keyPressed];
                        break;
                    }
                    case "LetterInRow/deleted": {
                        const att = [...currRow];
                        att.pop();
                        currRow = [...att];
                        break;
                    }
                    case "row/reset": {
                        currRow = [];
                        break;
                    }

    }

    return currRow;
}

// =============================================================================
// Actions
// =============================================================================

export function addLetterInRow(keyPressed) {
    return {
        type: "LetterInRow/add",
        payload: { keyPressed },
    };
}

export function deleteLetterInRow(data) {
    return {
        type: "LetterInRow/deleted",
        payload: { data },
    };
}

export function resetRow(data) {
    return {
        type: "row/reset",
        payload: {data},
    };
}