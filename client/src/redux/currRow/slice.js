export function CurrRowReducer(currRow = [], action) {
    switch (action.type) {
                    case "LetterInRow/add": {
                        currRow = [...currRow, action.payload.keyPressed];
                        break;
                    }
                    case "LetterInRow/deleted": {
                        // console.log("redux -- LetterInRow/delete");
                        const att = [...currRow];
                        // console.log(`SLI> att`, att);
                        att.pop();
                        // console.log(`SLI> att AFTER`, att);
                        currRow = [...att];
                        // currRow = [...currRow].pop();
                        // console.log(`currRow AFTER`, currRow);
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
