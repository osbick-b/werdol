export function OneAttempReducer(oneAttemp = ['b','o','o','b','s'], action) {
    switch (action.type) {
                    case "LetterInAttemp/add": {
                        console.log("redux -- LetterInAttemp/add");
                        oneAttemp = [...oneAttemp, action.payload.keyPressed];
                        break;
                    }
                    case "LetterInAttemp/deleted": {
                        console.log("redux -- LetterInAttemp/delete");
                        oneAttemp = [...oneAttemp.pop()];
                        break;
                    }

        // default:
        //     break;
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

export function deleteLetterInAttemp() {
    return {
        type: "LetterInAttemp/deleted",
        payload: {  },
    };
}

// export function getAttempValue() {
//     return {
//         type: "AttempValue/get",
//         payload: {},
//     };
// }
