export function OneAttempReducer(oneAttemp = [], action) {
    switch (action.type) {
                    case "LetterInAttemp/add": {
                        oneAttemp = [...oneAttemp, action.payload.keyPressed];
                        break;
                    }
                    case "LetterInAttemp/deleted": {
                        // console.log("redux -- LetterInAttemp/delete");
                        const att = [...oneAttemp];
                        // console.log(`SLI> att`, att);
                        att.pop();
                        // console.log(`SLI> att AFTER`, att);
                        oneAttemp = [...att];
                        // oneAttemp = [...oneAttemp].pop();
                        // console.log(`oneAttemp AFTER`, oneAttemp);
                        break;
                    }

    }

    return oneAttemp;
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
