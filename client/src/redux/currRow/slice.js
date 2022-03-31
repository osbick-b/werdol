export function CurrRowReducer(currRow = [], action) {
    switch (action.type) {
                    case "LetterInAttemp/add": {
                        currRow = [...currRow, action.payload.keyPressed];
                        break;
                    }
                    case "LetterInAttemp/deleted": {
                        // console.log("redux -- LetterInAttemp/delete");
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

export function addLetterInAttemp(keyPressed) {
    return {
        type: "LetterInAttemp/add",
        payload: { keyPressed },
    };
}

export function deleteLetterInAttemp(data) {
    return {
        type: "LetterInAttemp/deleted",
        payload: { data },
    };
}
