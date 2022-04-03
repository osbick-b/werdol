
export function PlayersReducer(players = [], action) {
    switch (action.type) {
                    case "player/add": {
                        // console.log(action.type);
                        players = [...players, action.payload.data];
                        break;
                    }
    }
    return players;
}


// =============================================================================
// Actions
// =============================================================================
// --- insert actions here. snippet ACTN

export function addPlayers(data) {
    return {
        type: "player/add",
        payload: {data},
    };
}