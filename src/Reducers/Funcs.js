const initialState = {
    trending : null
}

const Funcs = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TRENDING_CHALLENGE' : 
            console.log('Setting trending challenge : ', action.payload)
            return{
                ...state,
                trending : action.payload
            }
    }
    return state
}

export default Funcs