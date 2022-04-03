

export function ColorClassesReducer(colorClasses = [], action) {
    switch (action.type) {
                    case "colorClasses/add": {
                        colorClasses = [...colorClasses, action.payload.data];
                        break;
                    }
    }
    return colorClasses;
}


// =============================================================================
// Actions
// =============================================================================

export function addColorClasses(data) {
    return {
        type: "colorClasses/add",
        payload: {data},
    };
}