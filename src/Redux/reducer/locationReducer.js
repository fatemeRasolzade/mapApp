const initialState ={
    locations :[],
    location: null
}

export const locationReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_LOCATIONS':
            return({
                ...state,
                locations: action.payload
            })
        case 'GET_LOCATION':
            return({
                ...state,
                location: action.payload
            })
        default:
            return state
    }
} 