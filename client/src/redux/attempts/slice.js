// =============================================================================
// on (some) slice.js
// =============================================================================


// 1 -- create and export mini-reducer --> RETURN state at the end

// -- at declaration, assign initial value of state --> here is []
// -- do the eval of (action.type) -- switch/if statement
// -- handle for each case how it will modify state
// -- don't forget to RETURN the state at the very end --> DONT MUTATE STATE DIRECTLY

export default function AttemptsReducer(attempts = [], action) {
    switch (action.type) {
                    case "attempt/stored": {
                        attempts = [...attempts, ...action.payload.data];
                        break;
                    }
    }
    return attempts;
}

// 2 -- create and export the actions regarding this mini-reducer
//          actions --> will be imported by component and used by it to access/alter state

// =============================================================================
// Actions
// =============================================================================

export function storeUserAttempt(data) {
    return {
        type: "attempt/stored",
        payload: { data },
    };
}
