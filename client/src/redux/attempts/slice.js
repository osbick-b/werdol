
export default function AttemptsReducer(attempts = [{1:"audio"}], action) {
    switch (action.type) {
                    case "attempt/stored": {
                        attempts = [...attempts, action.payload.data];
                        console.log("attempts", attempts);
                        break;
                    }
    }
    return attempts;
}

// =============================================================================
// Actions
// =============================================================================

export function storeUserAttempt(data) {
    return {
        type: "attempt/stored",
        payload: { data },
    };
}
