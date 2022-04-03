
export function StatsReducer(stats = {1:3}, action) {
    switch (action.type) {
                    case "WinToStats/add": {
                        const numAttempts = action.payload.data;
                        console.log(`numAttempts`, numAttempts);
                        const numOfWins = {...stats[numAttempts]};
                        console.log(`numOfWins`, numOfWins);
                        
                        stats = { ...stats, [numAttempts]: numOfWins[numAttempts]++ };
                        console.log(`stats`, stats);
                        break;
                    }
    }
    return stats;
}

// =============================================================================
// Actions
// =============================================================================
// --- insert actions here. snippet ACTN

export function addWinToStats(data) {
    return {
        type: "WinToStats/add",
        payload: { data },
    };
}
