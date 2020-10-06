const initialState = {
    trending : null,
    questions : null
}

const Funcs = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TRENDING_CHALLENGE' : 
            console.log('Setting trending challenge : ', action.payload)
            return{
                ...state,
                trending : action.payload
            }
        case 'SET_QUESTIONS' : 
            console.log('Setting questions : ', action.payload)
            return{
                ...state,
                questions : action.payload
            }
    }
    return state
}

export default Funcs